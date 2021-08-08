using Entities.Entities;
using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

#nullable disable

namespace Data
{
    public partial class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string UserName { get; set; }
        public Role Role { get; set; }
        [JsonIgnore]
        public string PasswordHash { get; set; }
    }
}
