using CadastroNumeroTelefonico.Models;
using CadrastroNumeroTelefonico.DTO;
using CadrastroNumeroTelefonico.Interfaces.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CadastroNumeroTelefonico.DAL.Repositories
{
    public class CartaoSimRepository:ICartaoSimRepository
    {
        private CadastroNumeroTelefonicoDbContext CadastroNumeroTelefonicoDbContext;

        public CartaoSimRepository(CadastroNumeroTelefonicoDbContext cadastroNumeroTelefonicoDbContext)
        {
            CadastroNumeroTelefonicoDbContext=cadastroNumeroTelefonicoDbContext;
        }


        public IQueryable<CartaoSimDTO> GetCartaoSims()
        {
            return CadastroNumeroTelefonicoDbContext.cartaoSims.Select(s => new CartaoSimDTO
            {

                CartaoSimId = s.CartaoSimId,
                NumeroSIM = s.NumeroSIM,
                NumeroTelefone = s.NumeroTelefone,
                Estado = s.Estado,
                ClienteId = s.ClienteId,

            });
        }

        public IQueryable<CartaoSimDTO> GetCartaoSimsById( int id)
        {
            return CadastroNumeroTelefonicoDbContext.cartaoSims
                .Where(s=>s.CartaoSimId==id)
                .Select(s => new CartaoSimDTO
            {

                CartaoSimId = s.CartaoSimId,
                NumeroSIM = s.NumeroSIM,
                NumeroTelefone = s.NumeroTelefone,
                Estado = s.Estado,
                ClienteId = s.ClienteId,

            });
        }

        public bool Save(CartaoSim cartaoSim)
        {
            bool res = false;

            try
            {
                CadastroNumeroTelefonicoDbContext.cartaoSims.Add(cartaoSim);
                res = CadastroNumeroTelefonicoDbContext.SaveChanges() != 0;

            } catch (Exception ex) 
            {
                Console.WriteLine(ex.Message);
            }

            return res;


        }

    }
}
