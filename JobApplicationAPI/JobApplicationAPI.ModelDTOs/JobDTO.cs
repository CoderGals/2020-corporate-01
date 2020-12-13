using JobApplicationAPI.Data.Enums;

namespace JobApplicationAPI.ModelDTOs
{
    public class JobDTO
    {
        public int Id { get; set; }
        public string CompanyName { get; set; }
        public ViewUserDTO Employer { get; set; }
        public string JobDescription { get; set; }
        public string Contact { get; set; }
        public string Category { get; set; }
        public int Salary { get; set; }
    }
}
