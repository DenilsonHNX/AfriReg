using CadastroNumeroTelefonico.Models;
using CadrastroNumeroTelefonico.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CadrastroNumeroTelefonico.Interfaces.Repositories
{
    public interface ICartaoSimRepository
    {
        public bool Save(CartaoSim cartaoSim);
        public IQueryable<CartaoSimDTO> GetCartaoSimsById(int id);
        public IQueryable<CartaoSimDTO> GetCartaoSims();
    }
}
