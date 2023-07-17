'use client'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';


const Admin: React.FC = () => {

    const router = useRouter();
    
    const [rajosDataAdmin, setRajosDataAdmin] = useState<any[]>([]);
    const [selectedRajoAdmin, setSelectedRajoAdmin] = useState('');

    async function getRajos() {
      try {
        const response = await axios.get('http://localhost:3000/rajo/allrajos');
        return response.data;
      } catch (error) {
        throw new Error('Error fetching data from backend');
      }
    }

    useEffect(() => {
      async function fetchData() {
        try {
          const rajosDataAdmin = await getRajos();
          setRajosDataAdmin(rajosDataAdmin);
        } catch (error) {
          console.error();
        }
      }
  
      fetchData();
    }, []);

    return(
        <div className="flex h-screen w-full items-center bg-zinc-300 bg-cover text-xl">

          <div className="BarraIZQ absolut rounded-xl bg-[#384E55] ml-2 h-128 w-64 shadow-lg backdrop-blur-md max-sm:px-8 text-center">
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

          <div className="DropDown flex flex-col items-center w-80 absolute inset-x-80 top-20">
            <select className="w-full text-black bg-white border rounded shadow-sm outline-none appearance-none ml-32" onChange={event => setSelectedRajoAdmin(event.target.value)}>
                {rajosDataAdmin.map((item, i) => (
                      <option className='backdrop-blur-md transition-colors duration-300 hover:bg-gray-300 backdrop-blur-md w-full'> 
                          {item.nombre_rajo}
                      </option>
                  ))}
            </select>
        </div>

          <div className="Botones flex flex-row absolute inset-x-0 top-0 ml-72 mt-5">
            <div className="ml-32">
              <button className="mr-5 rounded-3xl bg-[#384E55] px-10 py-2 text-white backdrop-blur-md transition-colors duration-300 hover:bg-[#47636b] backdrop-blur-md">Diario</button>
              <button className="mr-5 rounded-3xl bg-[#384E55] px-10 py-2 text-white backdrop-blur-md transition-colors duration-300 hover:bg-[#47636b] backdrop-blur-md">Semanal</button>
              <button className="mr-5 rounded-3xl bg-[#384E55] px-10 py-2 text-white backdrop-blur-md transition-colors duration-300 hover:bg-[#47636b] backdrop-blur-md">Semanal Cerrado</button>
              <button className="mr-5 rounded-3xl bg-[#384E55] px-10 py-2 text-white backdrop-blur-md transition-colors duration-300 hover:bg-[#47636b] backdrop-blur-md">Mensual</button>
              <button className="mr-5 rounded-3xl bg-[#384E55] px-10 py-2 text-white backdrop-blur-md transition-colors duration-300 hover:bg-[#47636b] backdrop-blur-md">Anual</button>
            </div>
          </div>
          
          <div className='Tabla'>
            <div className="flex flex-row ml-72 mt-5 absolute inset-x-0 top-24" >
                
              <div className='bg-[#0C7C8C] border-2 border-black px-16 py-2 ml-24'>
                Fecha
              </div>
                
              <div className='bg-[#0C7C8C] border-2 border-black px-16 py-2'>
                Fase
              </div>

              <div className='bg-[#0C7C8C] border-2 border-black px-16 py-2'>
                Valor Real
              </div>
              
              <div className='bg-[#0C7C8C] border-2 border-black px-12 py-2'>
                Valor ISO
              </div>
          
              <div className='bg-[#0C7C8C] border-2 border-black px-12 py-2'>
                Valor Movil
              </div>

            </div>
          </div> 

        </div>
    )
}

export default Admin