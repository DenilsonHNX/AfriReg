using CadastroNumeroTelefonico.DAL.Repositories;
using CadastroNumeroTelefonico.Models;
using CadrastroNumeroTelefonico.Dto;
using CadrastroNumeroTelefonico.Interfaces.Repositories;
using CadrastroNumeroTelefonico.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CadastroNumeroTelefonico.Services
{
    public class ClienteServices: IClienteServices
    {

        private IClienteRepository clienteRepository;

        public ClienteServices(IClienteRepository clienteRepository)
        {
            this.clienteRepository=clienteRepository;
        }

        public IEnumerable<ClienteDTO> GetallClientes()
        {
            return clienteRepository.GetallClientes();
        }

        public IEnumerable<ClienteDTO> GetClientesByNumeroBI(int numeroBI)
        {
            return clienteRepository.GetClientesByNumeroBI(numeroBI);

        }


        public bool Save(ClienteDTO clienteDTO)
        {

            var cliente = new Cliente
            {
                ClienteId = clienteDTO.ClienteId,
                NomeCompleto = clienteDTO.NomeCompleto,
                DataNascimento = clienteDTO.DataNascimento,
                NumeroBI = clienteDTO.NumeroBI,
                dataValidadeBI = clienteDTO.dataValidadeBI,
                FotoFacial = clienteDTO.FotoFacial,
                FotoBIFrente = clienteDTO.FotoBI1,
                FotoBIVerso =clienteDTO.FotoBI2,
                NumeroTelefone= clienteDTO.NumeroTelefone,
                Estado = clienteDTO.Estado,
            };

            return clienteRepository.Save(cliente);

        }


    }


}