using Newtonsoft.Json;
using System.ComponentModel;

namespace ShakespeareanPokemon.Entities
{
    public class PokemonSpecies
    {
        [JsonProperty("flavor_text_entries")]
        public List<FlavorTextEntry> flavorTextEntries { get; set; }
    }
}