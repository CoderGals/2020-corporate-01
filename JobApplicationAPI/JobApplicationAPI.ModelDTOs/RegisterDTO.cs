using JobApplicationAPI.Data.Enums;
using System;
using System.ComponentModel.DataAnnotations;

namespace JobApplicationAPI.ModelDTOs
{
    public class RegisterDTO
    {
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string Email { get; set; }
        public DateTime BirthDate { get; set; }
        [Required]
        public string Password { get; set; }
        public string CompanyName { get; set; }
        public JobCategory JobCategory { get; set; }
        public ExperienceLevel ExperienceLevel { get; set; }
        //job position
    }
}
