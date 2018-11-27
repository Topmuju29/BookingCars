using System.Threading.Tasks;
using Book.api.Models;

namespace Book.api.Data
{
    public interface IAuthRepository
    {
         Task<User> Login(string Username, string Password);
         Task<User> Register(User user, string Password);
         Task<bool> UserExists(string Username);
    }
}