'use client'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import rajos from "../src/rajos.json";
import axios from 'axios';

const Usuario: React.FC = () => {

  const [selectedRajo, setSelectedRajo] = useState('');

  const [rajosData, setRajosData] = useState<any[]>([]);

  async function getRajos() {
    try {
      const response = await axios.get('http://localhost:3000/rajo/allrajos');
      return response.data;
    } catch (error) {
      throw new Error('Error fetching data from backend');
    }
  }

    const router = useRouter();
    
    useEffect(() => {
      async function fetchData() {
        try {
          const rajoData = await getRajos();
          setRajosData(rajoData);
        } catch (error) {
          console.error();
        }
      }
  
      fetchData();
    }, []);

    return(
        <div className="flex min-h-screen relative w-screen items-center bg-zinc-300 bg-cover text-xl">

        <div className="BarraIZQ absolut rounded-xl bg-[#384E55] ml-2 h-128 w-64 shadow-lg backdrop-blur-md max-sm:px-8 text-center">
            <img src="https://static.wixstatic.com/media/8db992_3c6f3144b95c4690a72c5ea5c6bd9176~mv2.png/v1/crop/x_24,y_0,w_251,h_172/fill/w_351,h_240,al_c,lg_1,q_85,enc_auto/8db992_3c6f3144b95c4690a72c5ea5c6bd9176~mv2.png" width="150" alt="" srcSet="" className="ml-10 brightness-200 saturate-0 grayscale contrast-200"/>
            <hr className="rounded-xl h-0.5 w-60 ml-2 bg--200 border-0 bg-[#DF4C17]"/>
            <div className="flex flex-col">
              <div className="flex flex-col mb-16">
                <button className="mt-7 bg-[#384E55] rounded-3xl px-10 py-2 text-white backdrop-blur-md transition-colors duration-300 hover:bg-[#47636b] backdrop-blur-md" onClick={() => router.push('usuario')}>Reportes</button>
                <div className='px-10 py-8'> 
                </div>
                <div className='px-10 py-10'></div>
              </div>
              <button className="mt-64 bg-[#384E55] rounded-3xl px-10 py-2 text-white backdrop-blur-md transition-colors duration-300 hover:bg-[#47636b] backdrop-blur-md" onClick={() => router.push('/')}>Cerrar Sesión</button>
            </div>
          </div>

          <div className="DropDown flex flex-col items-center w-80 absolute inset-x-80 top-20">
            <select className="w-full text-black bg-white border rounded shadow-sm outline-none appearance-none ml-32" onChange={event => setSelectedRajo(event.target.value)}>
                {rajosData.map((item, i) => (
                      <option className='backdrop-blur-md transition-colors duration-300 hover:bg-gray-300 backdrop-blur-md w-full'> 
                          {item.nombre_rajo}
                      </option>
                  ))}
            </select>
        </div>

          <div className="Botones flex flex-row absolute inset-x-0 top-0 ml-72 mt-5">
            <div className="ml-32">
              <button className="mr-5 rounded-3xl bg-[#384E55] px-10 py-2 text-white backdrop-blur-md transition-colors duration-300 hover:bg-[#47636b] ">Diario</button>
              <button className="mr-5 rounded-3xl bg-[#384E55] px-10 py-2 text-white backdrop-blur-md transition-colors duration-300 hover:bg-[#47636b] ">Semanal</button>
              <button className="mr-5 rounded-3xl bg-[#384E55] px-10 py-2 text-white backdrop-blur-md transition-colors duration-300 hover:bg-[#47636b] ">Semanal Cerrado</button>
              <button className="mr-5 rounded-3xl bg-[#384E55] px-10 py-2 text-white backdrop-blur-md transition-colors duration-300 hover:bg-[#47636b] ">Mensual</button>
              <button className="mr-5 rounded-3xl bg-[#384E55] px-10 py-2 text-white backdrop-blur-md transition-colors duration-300 hover:bg-[#47636b] ">Anual</button>
            </div>
          </div>
          
          <div className="TABLA flex flex-row absolute inset-x-72 top-24">
            <h1 className="font-bold"></h1>
            <table className="border-2 bg-white rounded mt-12">
              <thead>
                <tr>
                  <th className="bg-[#0C7C8C] border-2 border-black px-6">Fecha</th>
                  <th className="bg-[#0C7C8C] border-2 border-black px-10">Fase</th>
                  <th className="bg-[#0C7C8C] border-2 border-black px-10">Extraccion Mineral</th>
                  <th className="bg-[#0C7C8C] border-2 border-black px-10">Extraccion Lastre</th>
                  <th className="bg-[#0C7C8C] border-2 border-black px-10">Total Extraccion</th>
                  <th className="bg-[#0C7C8C] border-2 border-black px-6">Remanejo</th>
                  <th className="bg-[#0C7C8C] border-2 border-black px-6">Mov.Total</th>
                  <th className="bg-[#0C7C8C] border-2 border-black px-6">Chancado</th>
                </tr>
              </thead>
              <tbody id="table-body" className='text-black text-small'>
                DATOS
              </tbody>
            </table>
          </div>  

        </div>
    )
}

export default Usuario