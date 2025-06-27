using CadastroNumeroTelefonico.Models;
using Microsoft.EntityFrameworkCore;
using System.Data;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace CadastroNumeroTelefonico.DAL
{
    public class CadastroNumeroTelefonicoDbContext : DbContext
    {
        public CadastroNumeroTelefonicoDbContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<CartaoSim> cartaoSims { get; set; }
    }
}
