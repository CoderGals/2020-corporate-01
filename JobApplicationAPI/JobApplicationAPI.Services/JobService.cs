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

        public JobService(IJobRepository jobRepository)
        {
            _jobRepository = jobRepository;
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
