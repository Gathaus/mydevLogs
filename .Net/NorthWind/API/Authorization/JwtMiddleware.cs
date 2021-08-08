using API.Helpers;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;
using Service.Abstract;
using Shared.Utilities.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Authorization
{
    public class JwtMiddleware
    {
        private readonly RequestDelegate _next;

        private readonly AppSettings _appSettings;
        public JwtMiddleware(IOptions<AppSettings> appSettings, RequestDelegate next)
        {
            _appSettings = appSettings.Value;
            _next = next;
        }

        public async Task Invoke(HttpContext context, IUserService userService, IJwtService jwtService)
        {
            var token = context.Request.Headers["Authorization"].FirstOrDefault()?.Split(" ").Last();
            var userId = jwtService.ValidateToken(token);

            if (userId != null)
            {
                //attack to context
                context.Items["User"] = userService.GetById(userId.Value);
            }

            await _next(context);
        }


    }
}
