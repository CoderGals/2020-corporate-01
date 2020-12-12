using JobApplicationAPI.Data.DbContext;
using JobApplicationAPI.Data.Models;
using JobApplicationAPI.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace JobApplicationAPI.Repositories
{
    public class JobRepository : IJobRepository
    {
        private readonly AppDbContext _context;

        public JobRepository(AppDbContext context)
        {
            _context = context;
        }

        public List<Job> GetAll()
        {
            return _context.Jobs
                .Include(x => x.User)
                .ToList();
        }

        public Job GetJobById(int id)
        {
            return _context.Jobs
                .Include(x => x.User)
                .FirstOrDefault(x => x.Id.Equals(id));
        }
    }
}
