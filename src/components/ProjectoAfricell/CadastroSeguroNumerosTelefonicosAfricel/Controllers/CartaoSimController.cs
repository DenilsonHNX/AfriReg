using CadrastroNumeroTelefonico.Dto;
using CadrastroNumeroTelefonico.DTO;
using CadrastroNumeroTelefonico.Interfaces.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CadastroSeguroNumerosTelefonicosAfricel.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartaoSimController : ControllerBase
    {

        private readonly ICartaoSimServices cartaoServices;

        public CartaoSimController(ICartaoSimServices cartaoServices)
        {
            this.cartaoServices=cartaoServices;
        }

        [HttpGet("getAllCartaoSim")]

        public IEnumerable<CartaoSimDTO> GetCartaoSims()
        {

            return cartaoServices.GetCartaoSims();

        }

        [HttpGet("getAllCartoesById")]

        public IEnumerable<CartaoSimDTO> GetI(int id)
        {
            return cartaoServices.GetCartaoSimsById(id);
        }

        [HttpPost("SaveCartoesSim")]

        public bool Save(CartaoSimDTO  cartaoSimDTO )
        {
            {
                return cartaoServices.Save(cartaoSimDTO);
            }
        }


    }
}
