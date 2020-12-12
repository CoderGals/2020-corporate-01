using JobApplicationAPI.Data.Models;
using System.Collections.Generic;

namespace JobApplicationAPI.Repositories.Interfaces
{
    public interface IUserRepository
    {
        List<User> GetEmployees();
        User GetById(int id);
    }
}
