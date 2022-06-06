import { Link } from "react-router-dom";


import logoImageUrl from "../components/docs/img/logopokemon.svg"

function Navbar() {
  
  return (

    <> 
        <nav className="bg-white border-gray-200 px-2 py-8 rounded dark:bg-gray-800 drop-shadow-xl sm:w-auto md:w-auto lg:w-auto  ">
            <div className="container flex flex-wrap justify-between mx-auto">
                <div className="lg:col-span-2 md:col-span-6"> 
                    <img className="mx-auto p-1 sm:w-32 md:w-32 lg:w-48 grid-col-2" src={logoImageUrl} alt="Logo Pokemon" />
                </div>
                <div className="mx-auto flex sm:w-auto md:w-auto lg:w-auto">
                    <ul className="flex flex-col mt-4 md:flex-row md:text-sm md:font-medium underline-offset-4  gap-[100px]">
                        <li>
                            <Link to="/">
                                <a href="#" className="py-2 pr-4 pl-3 text-3xl md:p-0 border-b-2 border-transparent hover:font-bold hover:border-black dark:hover:text-blue-500" aria-current="page">Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/pokemons">
                                <a href="#" className="py-2 pr-4 pl-3 text-3xl md:p-0 hover:underline hover:md:font-bold">Pokemons</a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                                <a href="/contact" className="py-2 pr-4 pl-3 r-0 text-3xl md:p-0 hover:underline hover:md:font-bold">Contato</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> 
        
    </>
    )
 }

export default Navbar;