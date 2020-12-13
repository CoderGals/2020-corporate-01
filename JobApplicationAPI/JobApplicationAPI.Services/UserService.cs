using JobApplicationAPI.Common.Convertors;
using JobApplicationAPI.Common.Exceptions;
using JobApplicationAPI.ModelDTOs;
using JobApplicationAPI.Repositories.Interfaces;
using JobApplicationAPI.Services.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace JobApplicationAPI.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public EmployeeDTO GetEmployeeById(int id)
        {
            var employeeEntity = _userRepository.GetById(id);

            if(employeeEntity is null)
            {
                throw new FlowException("User doesn't exist");
            }

            return employeeEntity.ConvertToEmployeeDTO();
        }



        public List<EmployeeDTO> GetEmployees()
        {
            var employees = _userRepository.GetEmployees();

            if(employees is null)
            {
                throw new FlowException("Employees list is empty");
            }

            return employees.Select(x => 
            x.ConvertToEmployeeDTO())
                .ToList();
        }

        public EmployerDTO GetEmployerById(int id)
        {
            var employerEntity = _userRepository.GetById(id);

            if(employerEntity is null)
            {
                throw new FlowException("User doesn't exist");
            }

            return employerEntity.ConvertToEmployerDTO();
        }

    }
}
