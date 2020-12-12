using System;

namespace JobApplicationAPI.ModelDTOs
{
    public class EmployerDTO
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string BirthDate { get; set; }
        public string CompanyName { get; set; }
    }
}
