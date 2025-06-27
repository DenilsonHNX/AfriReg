using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CadrastroNumeroTelefonico.DTO
{
    public class CartaoSimDTO
    {
        public int CartaoSimId { get; set; }
        public string NumeroSIM { get; set; }
        public string NumeroTelefone { get; set; }
        public string Estado { get; set; }
        public int ClienteId { get; set; }

    }
}
