'use client'
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import es from 'date-fns/locale/es';
import rajos from "../src/rajos.json";


const FactorCarga: React.FC = () => {

    //const token = localStorage.getItem('token');
    const router = useRouter();
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    
    const [isOpen, setIsOpen] = useState(false)
  
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [selectedOption, setSelectedOption] = useState(1);

    const handleOptionChange = (option: number) => {
      setSelectedOption(option);
    };

    const CustomInput = ({ value, onClick }: any) => (
      <button
        type="button"
        onClick={onClick}
        style={{
          border: 'none',
          background: 'transparent',
          outline: 'none',
          color: 'white',
        }}
      >
        {value ? `La fecha seleccionada es ${value}` : 'Seleccione fecha'}
      </button>
    );
    

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
          
          <div className='DropDown flex flex-col w-[240px] h-[340py] text-black absolute inset-x-0 top-0 ml-80 mt-20'>
            <button className='bg-white px-8 w-full flex flex-col items-center justify-between ml-16 rounded' onClick={() => setIsOpen((prev) => !prev)}>
              <div className='flex flex-row'>
                Rajos
                <img src="https://img.icons8.com/?size=512&id=61&format=png" width="25" className='ml-32'/>
              </div>
              {isOpen && (
              <div className='bg-white absolute top-8 item-start rounded w-full z-10'>
                  {rajos.map((item, i) => (
                      <button className='backdrop-blur-md transition-colors duration-300 hover:bg-gray-300 backdrop-blur-md w-full'>
                        <h3>
                          {item.nombre}
                        </h3>
                      </button>
                  ))}
              </div>
              )}
            </button>
          </div>
          
          <div className="flex flex-col items-center ml-32 bg-[#47636b] rounded-3xl py-16 px-24 border-4 border-[#DF4C17]">
            <form action="#">

            <div className="relative ml-24">
              <div className='rounded py-2' style={{ marginBottom: '10px' }}>
                <label style={{ color: 'white' }}>
                  <input
                    type="radio"
                    value={1}
                    checked={selectedOption === 1}
                    onChange={() => handleOptionChange(1)}
                  />
                  Elegir una fecha
                </label>
              </div>
              <div className='mt-6' style={{ marginBottom: '10px' }}>
                <label style={{ color: 'white' }}>
                  <input
                    type="radio"
                    value={2}
                    checked={selectedOption === 2}
                    onChange={() => handleOptionChange(2)}
                  />
                  Elegir un rango de fechas
                </label>
              </div>

              {selectedOption === 1 && (
                <div className='mt-6'>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date as Date)}
                    dateFormat="dd/MM/yyyy"
                    customInput={<CustomInput />}
                  />
                </div>
              )}

              {selectedOption === 2 && (
                <div className='mt-8'>
                  <div style={{ marginBottom: '10px' }}>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date as Date)}
                      dateFormat="dd/MM/yyyy"
                      customInput={<CustomInput />}
                    />
                  </div>
                  <div className='mt-6'>
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date as Date)}
                      dateFormat="dd/MM/yyyy"
                      minDate={startDate}
                      customInput={<CustomInput />}
                    />
                  </div>
                </div>
              )}
            </div>


              <div className="relative mt-10">
                <input autoComplete="off"
                    type="text"
                    //id='password'
                    //value={password}
                    //onChange={event => setPassword(event.target.value)}
                    className="peer ml-24 placeholder-transparent h-8 w-1/2 border-b-2 text-white bg-transparent focus:outline-none"
                    placeholder="" />
                <label htmlFor="Factor de carga" className="absolute left-0 -top-6 ml-24 text-white text-bold peer-placeholder-shown:text-base transition-all" >Factor de carga</label>
              </div>
            </form>
          </div>

          <div className="mt-8 flex justify-flex text-lg text-black ml-8">              
              <button type="button" className="rounded-3xl bg-[#384E55] px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-[#47636b]">Aceptar Factor</button>
          </div>
          
          
      
        </div>
    )
}

export default FactorCarga