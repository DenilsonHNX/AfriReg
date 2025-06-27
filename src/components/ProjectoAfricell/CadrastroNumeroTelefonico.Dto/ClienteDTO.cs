namespace CadrastroNumeroTelefonico.Dto
{
    public class ClienteDTO
    {
        public int ClienteId { get; set; }
        public string NomeCompleto { get; set; }
        public DateOnly DataNascimento { get; set; }
        public string NumeroBI { get; set; }
        public string dataValidadeBI { get; set; }
        public string FotoFacial { get; set; }
        public string FotoBI1 { get; set; }
        public string FotoBI2 { get; set; }
        public string NumeroTelefone { get; set; }
        public string Estado { get; set; }

    }


}
