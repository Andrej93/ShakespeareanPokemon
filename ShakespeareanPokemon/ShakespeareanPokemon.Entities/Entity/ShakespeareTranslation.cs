using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShakespeareanPokemon.Entities
{
    public class ShakespeareTranslation
    {
        public success success { get; set; }    
        public contents contents { get; set; }
    }

    public class contents
    {
        public string translated { get; set; }
        public string text { get; set; }
        public string translation { get; set; }
    }

    public class success
    {
        public int total { get; set; }
    }
}
