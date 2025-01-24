using Microsoft.EntityFrameworkCore;
namespace SimpleMinimalApi;

public class UserContext(DbContextOptions<UserContext> options) : DbContext(options)
{
  public DbSet<User> Users { get; set; }
}
