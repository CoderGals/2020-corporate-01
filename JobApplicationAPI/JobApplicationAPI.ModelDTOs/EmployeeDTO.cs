using JobApplicationAPI.Data.Enums;

namespace JobApplicationAPI.ModelDTOs
{
    public class EmployeeDTO
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public string Contact { get; set; }
        public string Email { get; set; }
        public string ExperienceLevel { get; set; }
        public string JobCategory { get; set; }

    }
}
