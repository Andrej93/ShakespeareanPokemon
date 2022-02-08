using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ShakespeareanPokemon.Entities;
using ShakespeareanPokemon.WebApi.Controllers;
using System.Collections.Generic;
using Xunit;

namespace ShakespeareanPokemon.Test
{
    public class UnitTest1
    {
        private readonly ShakespeareanPokemonController _controller;
        private readonly IConfiguration _configuration;
        public UnitTest1()
        {
            var myConfiguration = new Dictionary<string, string>
            {
                {"PokeApi:Url", "https://pokeapi.co/api/v2/pokemon-species/"},
                {"ShakespeareTranslationApi:Url", "https://api.funtranslations.com/translate/shakespeare.json?text="}
            };

            var configuration = new ConfigurationBuilder()
                .AddInMemoryCollection(myConfiguration)
                .Build();
            _configuration = configuration;
            _controller = new ShakespeareanPokemonController(_configuration);
        }



        [Fact]
        public void GetPokemon()
        {
            var testValue = "charmander";
            // Act
            var reply = _controller.Pokemon(testValue);

            // Assert
            var items = Assert.IsType<Pokemon>(reply.Result);
            Assert.Equal("charmander", items.name);
        }


        [Fact]
        public void GetPokemonEmptyInput()
        {
            var testValue = "";
            // Act
            var reply = _controller.Pokemon(testValue);

            // Assert
            var items = Assert.IsType<Pokemon>(reply.Result);
            Assert.Equal(null, items.name);
        }


    }

}