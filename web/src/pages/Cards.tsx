import './tipos.css'

function Cards() {

const url = (id: number) =>  `https://pokeapi.co/api/v2/pokemon/${id}`
const pokemonPromises = []

for (let i = 1; i <=150; i++) {
  pokemonPromises.push(fetch(url(i)).then(response => response.json()))
}

Promise.all(pokemonPromises)
.then(pokemons => {

  const lisPokemons = pokemons.reduce((accumulator, pokemon) =>{
    const types = pokemon.types.map((typeInfo: any) => typeInfo.type.name)

    accumulator += 
    `
      <div class="block mx-5 my-5 p-6 rounded-lg border-2 -[${types[0]}] shadow-md w-[200px] h-auto ${types[0]}">
        <h3 class="text-xl font-bold tracking-tight text-white dark:text-white">${pokemon.name} #${pokemon.id}</h3>
        <img class="ml-[80px]" alt="${pokemon.name}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"/>
        <div class="rounded-[38px] text-center border tipo  mx-autotext-white">${types.join(' | ')}</div>
    </div>
    
    
    `
    return accumulator 
  }, '')

  const div = document.querySelector('[data-js="pokedex"]')

  div.innerHTML = lisPokemons
})

    return (
        <>
          <div data-js="pokedex" className="pokedex grid grid-cols-6 grid-rows-3"></div>
        </>
      )
    }

export default Cards