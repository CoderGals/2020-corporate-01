using JobApplicationAPI.Data.DbContext;
using JobApplicationAPI.Data.Enums;
using JobApplicationAPI.Data.Models;
using JobApplicationAPI.Repositories.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace JobApplicationAPI.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly AppDbContext _context;

        public UserRepository(AppDbContext context)
        {
            _context = context;
        }

        public User GetById(int id)
        {
            return _context.Users.
                FirstOrDefault(x => 
                x.Id.Equals(id));
        }

        public List<User> GetEmployees()
        {
            return _context.Users
                .Where(x => x.Role.Equals(Role.Employee))
                .ToList();
        }
    }
}
