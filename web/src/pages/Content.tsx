import { Link } from "react-router-dom"
import BannerComplete from "../components/docs/img/BannerComplete.svg"

 function Content() {
  
  return (

    <div className="container grid grid-cols-2 fixed h-auto text-[#282828]">
      <div className="sm:w-auto md:w-auto lg:w-auto ml-[145px] mt-[138px] "> {/* */}
        <p className="text-7xl mb-10 font-bold ">Qual pokemon</p>
        <p className="text-7xl font-bold">você <span className="bg-[#FFDA55] h-1">escolheria?</span></p>
        <p className="text-base mt-[36px] leading-loose">Voce pode saber o tipo de Pokemon, seus pontos<br></br>fortes, fracos e habilidades.</p>
        <Link to="/pokemons">
          <button className=" mt-[36px] btn bg-[#48D0B0] w-[231px] h-[61px] rounded-[11px] text-white">Veja os Pokemons </button>
        </Link>
      </div>
      <div className="col-span-1 sm:w-auto md:w-auto lg:w-auto mx-auto my-auto mt-[100px]">{/* */}
        <img className="mx-1 p-1 " src={BannerComplete} alt="Logo Pokemon" />
      </div>
    </div>
    
  )
} 

export default Content