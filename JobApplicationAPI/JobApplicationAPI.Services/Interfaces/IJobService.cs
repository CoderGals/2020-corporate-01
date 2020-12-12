using JobApplicationAPI.ModelDTOs;
using System.Collections.Generic;

namespace JobApplicationAPI.Services.Interfaces
{
    public interface IJobService
    {
        List<JobDTO> GetAll();
        JobDTO GetJobById(int id);
    }
}
