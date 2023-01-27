const choosePokemon = document.querySelector('.formPokemon')
const pokemonName = document.querySelector('.pokemonName')
const pokemonNumber = document.querySelector('.pokemonNumber')
const pokemonImg = document.querySelector('.pokemonImg')
const buttons = document.querySelector('.buttons')

buttons.addEventListener('click', changePokemon)

function changePokemon(event) {
  const selectedButton = event.target.innerHTML

  if(selectedButton.includes('Anterior') && pokemonNumber.innerHTML > 1 ){
    let changePokemon = --pokemonNumber.innerHTML
    getPokemon(changePokemon)
  } else if (selectedButton.includes('Próximo')) {
    let changePokemon = ++pokemonNumber.innerHTML
    getPokemon(changePokemon)
  }

}

const selectPokemon = choosePokemon.addEventListener('submit',event =>{
  event.preventDefault()
  const pokemon = event.target.input.value.toLowerCase()

  getPokemon(pokemon)

  choosePokemon.reset()

})

async function getPokemon (pokemon) {
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
  if (number < 906) {
    pokemonName.innerHTML = name.toUpperCase()
    pokemonNumber.innerHTML = number
    if(gif !== null){
      pokemonImg.setAttribute('src', gif)
    }else{
      pokemonImg.setAttribute('src', img)
    }
  } else {
    alert('Pokémon inválido ❌')
  }
}

