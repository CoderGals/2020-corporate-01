using JobApplicationAPI.ModelDTOs;
using System.Collections.Generic;

namespace JobApplicationAPI.Services.Interfaces
{
    public interface IUserService
    {
        List<EmployeeDTO> GetEmployees();
        EmployeeDTO GetEmployeeById(int id);
        EmployerDTO GetEmployerById(int id);
    }
}
