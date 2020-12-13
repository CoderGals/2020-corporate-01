using JobApplicationAPI.Data.Enums;
using Microsoft.AspNetCore.Identity;
using System;

namespace JobApplicationAPI.Data.Models
{
    public class User : IdentityUser<int>
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string FullName { get; set; }
        public string Contact { get; set; }
        public DateTime BirthDate { get; set; }
        public ExperienceLevel ExperienceLevel { get; set; }
        public JobCategory JobCategory { get; set; }
        public string CompanyName { get; set; }
        public Role Role { get; set; }
        //userenum type? role?
    }
}
