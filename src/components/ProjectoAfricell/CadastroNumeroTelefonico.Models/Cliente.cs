using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace CadastroNumeroTelefonico.Models
{
    [Table("Clientes")]
    public class Cliente
    {
        [Key]
        public int ClienteId { get; set; }
        public string NomeCompleto { get; set; }
        public DateOnly DataNascimento { get; set; }
        public string NumeroBI { get; set; }
        public string dataValidadeBI {get;set; }
        public string FotoFacial { get; set; }
        public string FotoBIFrente { get; set; }
        public string FotoBIVerso { get; set; }
        public string NumeroTelefone { get; set;}
        public string Estado {get; set; }

    }
}
