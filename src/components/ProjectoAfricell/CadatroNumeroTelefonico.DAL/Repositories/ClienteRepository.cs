using CadastroNumeroTelefonico.Models;
using CadrastroNumeroTelefonico.Dto;
using CadrastroNumeroTelefonico.Interfaces.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CadastroNumeroTelefonico.DAL.Repositories
{
    public class ClienteRepository :IClienteRepository
    {

        private CadastroNumeroTelefonicoDbContext CadastroNumeroTelefonicoDbContext;

        public ClienteRepository(CadastroNumeroTelefonicoDbContext cadastroNumeroTelefonicoDbContext)
        {
            CadastroNumeroTelefonicoDbContext=cadastroNumeroTelefonicoDbContext;
        }

        public IQueryable<ClienteDTO> GetallClientes()
        {
            return CadastroNumeroTelefonicoDbContext.Clientes.Select(c => new ClienteDTO
            {

                ClienteId = c.ClienteId,
                NomeCompleto = c.NomeCompleto,
                DataNascimento = c.DataNascimento,
                NumeroBI = c.NumeroBI,
                dataValidadeBI = c.dataValidadeBI,
                FotoFacial = c.FotoFacial,
                FotoBI1 = c.FotoBIFrente,
                FotoBI2 =c.FotoBIVerso,
                NumeroTelefone= c.NumeroTelefone,
                Estado= c.Estado,

            }


            );
        }

        public IQueryable<ClienteDTO>GetClientesByNumeroBI(int numeroBI)
        {
            return CadastroNumeroTelefonicoDbContext.Clientes.
                Where(c=>c.ClienteId==numeroBI)
                .Select(c=>new ClienteDTO
                {
                    ClienteId = c.ClienteId,
                    NomeCompleto = c.NomeCompleto,
                    DataNascimento = c.DataNascimento,
                    NumeroBI = c.NumeroBI,
                    dataValidadeBI = c.dataValidadeBI,
                    FotoFacial = c.FotoFacial,
                    FotoBI1 = c.FotoBIFrente,
                    FotoBI2 =c.FotoBIVerso,
                    NumeroTelefone= c.NumeroTelefone,
                    Estado= c.Estado,

                });

        }


        public bool Save(Cliente cliente) {

            bool res = false;
            try
            {

                CadastroNumeroTelefonicoDbContext.Clientes.Add(cliente);
                res = CadastroNumeroTelefonicoDbContext.SaveChanges() !=0;

            }
            catch (Exception ex) { 
            
                Console.WriteLine(ex.Message);
            }
            return res;
        
        }

    }
}
