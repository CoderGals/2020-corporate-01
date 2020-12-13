using JobApplicationAPI.Common.Exceptions;
using JobApplicationAPI.ModelDTOs;
using JobApplicationAPI.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;

namespace JobApplicationAPI.Controllers
{
    [ApiController]
    [Route("api/[action]")]
    public class UsersController : ControllerBase
    {
        private readonly IUserService _userService;

        public UsersController(IUserService userService)
        {
            _userService = userService;
        }


        // api/employees
        [HttpGet]
        public IActionResult Employees()
        {
            try
            {
                var employees = _userService.GetEmployees();
                return Ok(employees);

            }catch (FlowException ex)
            {
                return NotFound(ex.Message);
            }

        }

        // api/employees/id
        [HttpGet]
        [Route("{id}")]
        public IActionResult Employees(int id)
        {
            try
            {
                var employee = _userService.GetEmployeeById(id);
                return Ok(employee);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }

        }

        // api/employers/id
        [Route("{id}")]
        public IActionResult Employers(int id)
        {
            try
            {
                EmployerDTO employer = _userService.GetEmployerById(id);
                return Ok(employer);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }

    }
}