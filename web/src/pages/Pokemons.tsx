import Cards from "./Cards";
import ContentPokemons from "./ContentPokemons";
import Dropdown from "./Dropdown";


function Pokeomns() {
    return (
        <>
        <div className="mx-auto grid grid-cols-6">
            <div className="sm:w-auto md:w-auto lg:w-auto text-center col-start-2 col-span-4">
                <p className="text-4xl text-[#171414] mt-[70px]">Mais de 250 Pokemons para você escolher o seu favorito</p>
                            
                <form>
                    <div className="flex">
                        <div className="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(377.6px, 572px, 0px); hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700" data-popper-placement="top">
                        </div>
                        <div className="relative w-full mt-8">
                            <input type="search" className="block p-2.5 w-full z-20 text-sm text-[#171414] bg-gray-50 rounded-[40px] border-l-2 border border-gray-300 drop-shadow-2xl dark:border-gray-600 dark:placeholder-gray-400 dark:text-whiteaa" placeholder="Pesquisar pokemon"></input>
                            <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-black rounded-[40px] border focus:ring-4 focus:outline-none focus:ring-gray-700 "><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                        </div>
                    </div>
                </form>
                <div className="text-left mt-9 gap-4 grid-rows-1">
                    <Dropdown />
                    <Cards />
                   
                </div>
        
            </div>
        </div>
        </>
    )
}

export default Pokeomns;