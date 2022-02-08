using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using ShakespeareanPokemon.Entities;
using System.Net.Http.Headers;
using System.Text;

namespace ShakespeareanPokemon.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShakespeareanPokemonController : ControllerBase
    {
        private IConfiguration _configuration;

        public ShakespeareanPokemonController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet("Pokemon")]
        public async Task<Pokemon> Pokemon(string? name)
        {
            if (!string.IsNullOrEmpty(name))
            {
                var reply = new Pokemon()
                {
                    name = name
                };

                using (var client = new HttpClient())
                {
                    var pokemonUrl = _configuration.GetSection("PokeApi").GetSection("Url").Value + name;

                    HttpResponseMessage res = await client.GetAsync(pokemonUrl);

                    res.EnsureSuccessStatusCode();

                    var contents = await res.Content.ReadAsStringAsync();

                    var pokemon = JsonConvert.DeserializeObject<PokemonSpecies>(contents);

                    reply.description = pokemon.flavorTextEntries.FirstOrDefault().flavorText;
                }


                if (!string.IsNullOrEmpty(reply.description))
                {
                    using (var client = new HttpClient())
                    {
                        reply.description = reply.description.Replace("\n", " ");
                        var shakespeareTranslationApiUrl = _configuration.GetSection("ShakespeareTranslationApi").GetSection("Url").Value + reply.description;


                        HttpResponseMessage res = await client.GetAsync(shakespeareTranslationApiUrl);

                        if (res.StatusCode == System.Net.HttpStatusCode.OK)
                        {
                            var contents = await res.Content.ReadAsStringAsync();

                            var shakespeareTranslation = JsonConvert.DeserializeObject<ShakespeareTranslation>(contents.ToString());

                            if (!string.IsNullOrEmpty(shakespeareTranslation.contents.translated))
                            {
                                reply.description = shakespeareTranslation.contents.translated;
                                return reply;
                            }
                            else
                            {
                                return reply;
                            }
                        }
                        else
                        {
                            return reply;
                        }
                    }

                }
                else
                {
                    return reply;
                }


            }
            else
            {
                return new Pokemon();
            }
            

        }
    }
}
