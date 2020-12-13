using JobApplicationAPI.Common.Convertors;
using JobApplicationAPI.Common.Exceptions;
using JobApplicationAPI.Data.Models;
using JobApplicationAPI.ModelDTOs;
using JobApplicationAPI.Repositories.Interfaces;
using JobApplicationAPI.Services.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace JobApplicationAPI.Services
{
    public class JobService : IJobService
    {
        private readonly IJobRepository _jobRepository;
        private readonly IUserRepository _userRepository;

        public JobService(IJobRepository jobRepository,
            IUserRepository userRepository)
        {
            _jobRepository = jobRepository;
            _userRepository = userRepository;
        }

        public void CreateJob(int userId, JobDTO jobDTO)
        {
            var user = _userRepository.GetById(userId);

            if(user is null)
            {
                throw new FlowException("User id not valid");
            }

                var job = new Job()
                {
                    Category = jobDTO.Category,
                    Contact = jobDTO.Contact,
                    CompanyName = jobDTO.CompanyName,
                    JobDescription = jobDTO.JobDescription,
                    UserId = userId,
                    Salary = jobDTO.Salary
                };

                _jobRepository.AddJob(job);
        }

        public List<JobDTO> GetAll()
        {
            List<Job> jobs = _jobRepository.GetAll();

            if(jobs is null)
            {
                throw new FlowException("Jobs list can't be found");
            }

            return jobs.Select(x => x.ConvertToJobDTO())
                .ToList();
        }

        public JobDTO GetJobById(int id)
        {
            Job job = _jobRepository.GetJobById(id);

            if(job is null)
            {
                throw new FlowException("Job doesn't exist");
            }

            return job.ConvertToJobDTO();
        }
    }
}
