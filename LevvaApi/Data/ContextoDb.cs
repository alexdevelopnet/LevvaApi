using LevvaApi.Models;
using Microsoft.EntityFrameworkCore;

namespace LevvaApi.Data
{
    public class ContextoDb:DbContext
    {
        public ContextoDb(DbContextOptions options) : base(options) { }
        
        public DbSet<Pessoa> Pessoas { get; set; }
    }
}
