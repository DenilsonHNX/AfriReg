using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CadastroNumeroTelefonico.Models
{
    [Table("CartoesSims")]
    public class CartaoSim
    {
        [Key]
        public int CartaoSimId { get; set; }
        public string NumeroSIM { get; set; }
        public string NumeroTelefone { get; set; }
        public string Estado { get; set; }
        public int ClienteId { get; set; }
        [ForeignKey(nameof(ClienteId))]
        public Cliente cliente { get; set; }
    }
}
