using CadrastroNumeroTelefonico.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CadrastroNumeroTelefonico.Interfaces.Services
{
    public interface ICartaoSimServices
    {

        public IEnumerable<CartaoSimDTO> GetCartaoSims();
        public IEnumerable<CartaoSimDTO> GetCartaoSimsById(int id);
        public bool Save(CartaoSimDTO cartaoSimDTO);
    }
}
