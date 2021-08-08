using Entities.DTOs.RequestResponses;
using AutoMapper;
using BCryptNet = BCrypt.Net.BCrypt;
using Data;
using Data.Concrete.EfCore.Contexts;
using Service.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Shared.Utilities.Helpers;
using Shared.Utilities.Error;

namespace Service.Concrete
{
    public class UserService : IUserService
    {
        //TODO MAKE THEM READONLY
        private NorthWindContext _context;

        private IJwtService _jwtService;

        private readonly IMapper _mapper;

        public UserService(IMapper mapper, IJwtService jwtService, NorthWindContext context)
        {
            _mapper = mapper;
            _jwtService = jwtService;
            _context = context;
        }

        public AuthenticateResponse Authenticate(AuthenticateRequest model)
        {
            var user = _context.Users.SingleOrDefault(x => x.UserName == model.Username);

            if (user == null || !BCryptNet.Verify(model.Password, user.PasswordHash))
                throw new AppException("Username or password is incorrect");

            /*
            var response = _mapper.Map<AuthenticateResponse>(user);
            response.JwtToken = _jwtService.GenerateToken(user);
            */

            var response = _mapper.Map<AuthenticateResponse>(user);
            response.JwtToken = _jwtService.GenerateToken(user);
            return response;
        }

        public void Delete(int id)
        {
            var user = _context.Users.Find(id);
            if (user == null) throw new KeyNotFoundException("User not found");

            _context.Users.Remove(user);
            _context.SaveChanges();
        }

        public IEnumerable<User> GetAll()
        {
            return _context.Users;
        }

        public User GetById(int id)
        {
            var user = _context.Users.Find(id);
            return user;
        }

        public void Register(RegisterRequest model)
        {
            if (_context.Users.Any(x => x.UserName == model.Username))
                throw new AppException("Username '" + model.Username + "' is already taken");

            var user = _mapper.Map<User>(model);

            user.PasswordHash = BCryptNet.HashPassword(model.Password);

            _context.Users.Add(user);
            _context.SaveChanges();
        }

        public void Update(int id, UpdateRequest model)
        {
            var user = _context.Users.Find(id);

            if (model.Username != user.UserName && _context.Users.Any(x => x.UserName == model.Username))
                throw new AppException("Username '" + model.Username + "' is already taken");

            if (!string.IsNullOrEmpty(model.Password))
                user.PasswordHash = BCryptNet.HashPassword(model.Password);

            user =_mapper.Map(model,user);
            _context.Users.Update(user);
            _context.SaveChanges();
        }
    }
}
