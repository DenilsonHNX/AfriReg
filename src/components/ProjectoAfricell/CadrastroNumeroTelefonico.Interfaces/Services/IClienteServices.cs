using CadrastroNumeroTelefonico.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CadrastroNumeroTelefonico.Interfaces.Services
{
    public interface IClienteServices
    {
        public IEnumerable<ClienteDTO> GetallClientes();
        public IEnumerable<ClienteDTO> GetClientesByNumeroBI(int numeroBI);
        public bool Save(ClienteDTO clienteDTO);

    }
}
