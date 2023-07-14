'use client'
import { useRouter } from "next/navigation";

const Profile: React.FC = () => {

    const token = localStorage.getItem('token');
    const router = useRouter();

    return(
      <div className="flex h-screen w-full items-center bg-zinc-300 bg-cover text-xl">
        
        <div className="BarraIZQ rounded-xl bg-[#384E55] ml-2 h-128 w-64 shadow-lg backdrop-blur-md max-sm:px-8 text-center">
            <img src="https://static.wixstatic.com/media/8db992_3c6f3144b95c4690a72c5ea5c6bd9176~mv2.png/v1/crop/x_24,y_0,w_251,h_172/fill/w_351,h_240,al_c,lg_1,q_85,enc_auto/8db992_3c6f3144b95c4690a72c5ea5c6bd9176~mv2.png" width="150" alt="" srcSet="" className="ml-10 brightness-200 saturate-0 grayscale contrast-200"/>
            <hr className="rounded-xl h-0.5 w-60 ml-2 bg--200 border-0 bg-[#DF4C17]"/>
            <div className="flex flex-col">
              <div className="flex flex-col mb-16">
                <button className="mt-7 bg-[#384E55] rounded-3xl px-10 py-2 text-white backdrop-blur-md transition-colors duration-300 hover:bg-[#47636b] backdrop-blur-md" onClick={() => router.push('profile')}>Plan</button>
                <button className="mt-7 bg-[#384E55] rounded-3xl px-10 py-2 text-white backdrop-blur-md transition-colors duration-300 hover:bg-[#47636b] backdrop-blur-md" onClick={() => router.push('aceptar_visita')}>Aceptar Visita</button>
                <button className="mt-7 bg-[#384E55] rounded-3xl px-10 py-2 text-white backdrop-blur-md transition-colors duration-300 hover:bg-[#47636b] backdrop-blur-md" onClick={() => router.push('factor_carga')}>Factor de Carga</button>
              </div>
              <button className="mt-64 bg-[#384E55] rounded-3xl px-10 py-2 text-white backdrop-blur-md transition-colors duration-300 hover:bg-[#47636b] backdrop-blur-md" onClick={() => router.push('login')}>Cerrar Sesión</button>
            </div>
        </div>
          
        <div>
          <div className="Botones flex flex-row ml-72 mt-5 absolute inset-x-0 top-0">
              <div className="ml-16">
                  <button className="mr-40 rounded-3xl bg-[#384E55] px-20 py-3 text-white text-opacity-1000 shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-sky-800 backdrop-blur-md">Solicitudes</button>
                  <button className="mr-7 rounded-3xl bg-[#384E55] px-10 py-3 text-white text-opacity-1000 shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-sky-800 backdrop-blur-md">Historial de Solicitudes</button>
              </div>
          </div>  
        </div>

        <div className="container ml-24 text-center">
              <div className="grid grid-cols-3 gap-16 mt-[-240px]">
                <div className="rounded-3xl bg-[#456570] w-100 px-5 py-3 text-white text-opacity-1000 shadow-xl backdrop-blur-md transition-colors">Visita</div>
                <div className="col-start-2 col-end-3 rounded-3xl bg-[#456570] w-100 px-16 py-3 text-white text-opacity-1000 shadow-xl backdrop-blur-md transition-colors">Aceptar</div>
                <div className="mt-[-8px] col-start-1 flex items-center rounded-3xl bg-[#456570] w-96 px-24 py-3 text-white text-opacity-1000 shadow-xl backdrop-blur-md transition-colors">nombre_1@minerals.cl</div>
                <div className="flex items-center">
                  <button className="mr-16 rounded-2xl bg-[#384E55] mt-[-8px] px-16 py-3  shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-sky-800 backdrop-blur-md ">
                    <img src='https://cdn.icon-icons.com/icons2/3436/PNG/512/box_tick_icon_218874.png' className="mr-8 object-fill h-8 w-88 " />
                  </button>
                  <button className="mr-16 rounded-2xl bg-[#384E55] mt-[-8px] px-16 py-3  shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-sky-800 backdrop-blur-md ">
                    <img src='https://cdn.icon-icons.com/icons2/2716/PNG/512/x_square_icon_172784.png' className="mr-8 object-fill h-8 w-88 " />
                  </button>
                </div>
              </div>
        </div>
          
      </div>
    )
}
export default Profile