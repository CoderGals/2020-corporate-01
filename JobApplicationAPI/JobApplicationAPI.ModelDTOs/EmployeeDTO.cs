using JobApplicationAPI.Data.Enums;

namespace JobApplicationAPI.ModelDTOs
{
    public class EmployeeDTO
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public string Contact { get; set; }
        public string Email { get; set; }
        public ExperienceLevel ExperienceLevel { get; set; }
        public JobCategory JobCategory { get; set; }

    }
}
