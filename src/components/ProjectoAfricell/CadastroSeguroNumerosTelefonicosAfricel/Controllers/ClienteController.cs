using CadastroNumeroTelefonico.Models;
using CadrastroNumeroTelefonico.Dto;
using CadrastroNumeroTelefonico.DTO;
using CadrastroNumeroTelefonico.Interfaces.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Data.Common;
using static System.Runtime.InteropServices.JavaScript.JSType;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CadastroSeguroNumerosTelefonicosAfricel.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteController : ControllerBase
    {
        private readonly IClienteServices clienteServices;

        public ClienteController(IClienteServices clienteServices)
        {
            this.clienteServices=clienteServices;
        }


        [HttpGet("getAllClientes")]

        public IEnumerable<ClienteDTO> GetClientes()
        {

            return clienteServices.GetallClientes();

        }


        [HttpGet("getAllClientesByNumeroBI")]

        public IEnumerable<ClienteDTO> GetClientesByNumeroBI(int numeroBI)
        {

            return clienteServices.GetClientesByNumeroBI(numeroBI);

        }


        [HttpPost("SaveCliente")]

        public bool Save(ClienteDTO clienteDTO)
        {
            {
                return clienteServices.Save(clienteDTO);
            }
        }
    }
}
