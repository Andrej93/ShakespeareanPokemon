using Newtonsoft.Json;
using System.ComponentModel;

namespace ShakespeareanPokemon.Entities
{ 
    public class FlavorTextEntry
    {
        [JsonProperty("flavor_text")]
        public string flavorText { get; set; }
        public Language language { get; set; }
        public Version version { get; set; }
    }
}