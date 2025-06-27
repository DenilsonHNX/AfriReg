using CadastroNumeroTelefonico.Models;
using CadrastroNumeroTelefonico.DTO;
using CadrastroNumeroTelefonico.Interfaces.Repositories;
using CadrastroNumeroTelefonico.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CadastroNumeroTelefonico.Services
{
    public class CartaoSimServices : ICartaoSimServices
    {
        private ICartaoSimRepository CartaoSimRepository;

        public CartaoSimServices(ICartaoSimRepository cartaoSimRepository)
        {
            CartaoSimRepository=cartaoSimRepository;
        }

        public IEnumerable<CartaoSimDTO> GetCartaoSims()
        {
           return CartaoSimRepository.GetCartaoSims();
        }

        public IEnumerable<CartaoSimDTO> GetCartaoSimsById(int id)
        {
            return CartaoSimRepository.GetCartaoSimsById(id);
        }

        public bool Save(CartaoSimDTO cartaoSimDTO)
        {
            var CartaoSim = new CartaoSim
            {
                CartaoSimId=cartaoSimDTO.CartaoSimId,
                NumeroSIM=cartaoSimDTO.NumeroSIM,
                NumeroTelefone=cartaoSimDTO.NumeroTelefone,
                ClienteId = cartaoSimDTO.ClienteId,
                Estado= cartaoSimDTO.Estado,

            };

            return CartaoSimRepository.Save(CartaoSim); 
        }
    }
}
