using JobApplicationAPI.Common.Exceptions;
using JobApplicationAPI.ModelDTOs;
using JobApplicationAPI.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JobApplicationAPI.Controllers
{
    [Route("api/[action]")]
    [ApiController]
    public class JobsController : ControllerBase
    {
        private readonly IJobService _jobService;

        public JobsController(IJobService jobService)
        {
            _jobService = jobService;
        }


        // api/jobs
        [HttpGet]
        public IActionResult Jobs()
        {
            try
            {
                var jobs = _jobService.GetAll();
                return Ok();
            }
            catch (FlowException ex)
            {

                return NotFound(ex.Message);
            }
        }


        // api/jobs/id
        [HttpGet]
        [Route("{id}")]
        public IActionResult Jobs(int id)   
        {
            try
            {
                JobDTO job = _jobService.GetJobById(id);
                return Ok(job);
            }
            catch (FlowException ex)
            {
                return NotFound(ex.Message);
            }
        }

        
        // api/job
        [HttpPost]
        public IActionResult Job(int userId, JobDTO jobDTO)
        {
            try
            {
                _jobService.CreateJob(userId, jobDTO);
                return Ok();
            }
            catch (FlowException ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }

        }
    }
}