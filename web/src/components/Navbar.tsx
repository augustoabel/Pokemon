import logoImageUrl from "./docs/img/logopokemon.svg"
import BannerComplete from "./docs/img/BannerComplete.svg"

function Navbar() {
  
  return (

    <> 
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-8 rounded dark:bg-gray-800 drop-shadow-xl">
            <div className="container flex flex-wrap justify-between mx-auto">
                <img className="mx-1 p-1 w-30" src={logoImageUrl} alt="Logo Pokemon" />
                    <ul className="flex flex-col md:flex-row md:space-x-8 underline-offset-4">
                        <li >
                            <a href="#" className="py-2 mx-[160px] text-3xl md:p-0 border-b-2 border-transparent hover:font-bold hover:border-black dark:hover:text-blue-500 active" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" className="py-2 text-3xl md:p-0 hover:underline hover:md:font-bold">Pokemons</a>
                        </li>
                        <li>
                            <a href="#" className="py-2 r-0 mx-[160px] text-3xl md:p-0 hover:underline hover:md:font-bold">Contato</a>
                        </li>
                        
                    </ul>
                </div>
            </nav>
            <div className="grid grid-cols-3 ">
                <div className="col-span-2 ml-[145px] mt-[198px] ">
                    <p className="text-7xl mb-10 font-bold">Qual pokemon</p>
                    <p className="text-7xl font-bold">você <span className="bg-yellow-200 h-1">escolheria?</span></p>
                    <p className="text-base mt-4 leading-loose">Voce pode saber o tipo de Pokemon, seus pontos<br></br>fortes, fracos e habilidades.</p>
                </div>
                <div className="mt-[150px] ml-[700px]fixed">
                    <img className="mx-1 p-1 " src={BannerComplete} alt="Logo Pokemon" />
                </div>
                <div className="flex mt-[0px] ml-[160px]">
                    <button className="btn bg-green-400 w-[231px] h-[61px] rounded-lg">Veja os Pokemons</button>
                </div>
            </div>
        </>
    )
 }

export default Navbar;