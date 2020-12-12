using JobApplicationAPI.Data.Enums;
using System.ComponentModel.DataAnnotations;

namespace JobApplicationAPI.Data.Models
{
    public class Job
    {
        public int Id { get; set; }
        public string CompanyName { get; set; }

        [Required]
        public int UserId { get; set; }
        public User User { get; set; }

        public string JobDescription { get; set; }
        public string Contact { get; set; }
        public JobCategory Category { get; set; }
        public int Salary { get; set; }
    }
}
