using JobApplicationAPI.Data.Models;
using JobApplicationAPI.ModelDTOs;

namespace JobApplicationAPI.Common.Convertors
{
    public static class ModelToDTO
    {
        public static EmployeeDTO ConvertToEmployeeDTO(this User user)
        {
            return new EmployeeDTO
            {
                Id = user.Id,
                FullName = user.FirstName.Trim() + " " + user.LastName.Trim(),
                Contact = user.Contact,
                Email = user.Email,
                ExperienceLevel = user.ExperienceLevel,
                JobCategory = user.JobCategory
            };
        }

        public static EmployerDTO ConvertToEmployerDTO(this User user)
        {
            return new EmployerDTO
            {
                Id = user.Id,
                FirstName = user.FirstName,
                Email = user.Email,
                LastName = user.LastName,
                BirthDate = user.BirthDate.ToString(),
                CompanyName = user.CompanyName

            };
        }

        public static ViewUserDTO ConvertToViewUserDTO(this User user)
        {
            return new ViewUserDTO
            {
                Id = user.Id,
                FullName = user.FirstName.Trim() + " " + user.LastName.Trim(),
                Email = user.Email,
                BirthDate = user.BirthDate.ToString()
            };
        }

        public static JobDTO ConvertToJobDTO(this Job job)
        {
            return new JobDTO
            {
                Id = job.Id,
                CompanyName = job.CompanyName,
                JobDescription = job.JobDescription,
                Contact = job.Contact,
                Category = job.Category,
                Salary = job.Salary,
                Employer = job.User.ConvertToViewUserDTO(),
            };
        }
    }
}
