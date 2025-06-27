using CadastroNumeroTelefonico.Models;
using CadrastroNumeroTelefonico.Dto;

namespace CadrastroNumeroTelefonico.Interfaces.Repositories
{
    public interface IClienteRepository
    {
        public bool Save(Cliente cliente);
        public IQueryable<ClienteDTO> GetClientesByNumeroBI(int numeroBI);
        public IQueryable<ClienteDTO> GetallClientes();

    }
}
