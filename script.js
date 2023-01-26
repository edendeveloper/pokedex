const choosePokemon = document.querySelector('.formPokemon')
const pokemonName = document.querySelector('.pokemonName')
const pokemonNumber = document.querySelector('.pokemonNumber')
const pokemonImg = document.querySelector('.pokemonImg')

const getPokemonUser = choosePokemon.addEventListener('submit',event =>{
  event.preventDefault()
  const pokemon = event.target.input.value
  let currentPokemon = pokemon.toLowerCase()

  getPokemon(currentPokemon)

  choosePokemon.reset()

})

async function getPokemon (pokemon) {
  console.log('iniciando funcao')
  try {
  await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  .then(response => response.json())
  .then(pokemon => {
      const name = pokemon.name
      const number = pokemon.id
      const img = pokemon.sprites.front_default
      const gif = pokemon.sprites.versions['generation-v']['black-white']['animated']['front_default']

      showPokemon(name, number, img, gif)

  })
  } catch (error) {
    alert('Pokémon inválido ❌')
  }
}

function showPokemon(name, number, img, gif) {
  pokemonName.innerHTML = name.toUpperCase()
  pokemonNumber.innerHTML = number
  if(gif !== null){
    pokemonImg.setAttribute('src', gif)
  }else{
    pokemonImg.setAttribute('src', img)
  }
}

