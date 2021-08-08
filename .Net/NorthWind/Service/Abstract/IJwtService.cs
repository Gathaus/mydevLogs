using Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Abstract
{
    public interface IJwtService
    {
        public string GenerateToken(User user);
        public int? ValidateToken(string token);
    }
}
