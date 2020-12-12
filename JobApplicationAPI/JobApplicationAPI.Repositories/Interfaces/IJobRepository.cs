using JobApplicationAPI.Data.Models;
using System.Collections.Generic;

namespace JobApplicationAPI.Repositories.Interfaces
{
    public interface IJobRepository
    {
        List<Job> GetAll();
        Job GetJobById(int id);
    }
}
