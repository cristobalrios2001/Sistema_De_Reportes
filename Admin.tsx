'use client'
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import es from 'date-fns/locale/es';



const Admin: React.FC = () => {

    //const token = localStorage.getItem('token');
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    
  
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
          color: 'black',
        }}
      >
        {value ? `La fecha seleccionada es ${value}` : 'Elegir una fecha'}
      </button>
    );
    

    return(
        <div className="flex h-screen w-full items-center bg-zinc-300 bg-cover text-xl">
          <div className="BarraIZQ absolute top-3 left-0 right-0 bg-[#384E55] mx-2 h-132 w-64 rounded-xl shadow-lg backdrop-blur-md max-sm:px-8 text-center">
            <img src="https://static.wixstatic.com/media/8db992_3c6f3144b95c4690a72c5ea5c6bd9176~mv2.png/v1/crop/x_24,y_0,w_251,h_172/fill/w_351,h_240,al_c,lg_1,q_85,enc_auto/8db992_3c6f3144b95c4690a72c5ea5c6bd9176~mv2.png" width="150" alt="" srcSet="" className="ml-10"/>
            <hr className="rounded-xl h-0.5 w-60 ml-2 bg--200 border-0 bg-[#DF4C17]"/>
            <div className="flex flex-col">
              <div className="flex flex-col mb-16">
                <button className="mt-7 bg-[#384E55] rounded-3xl px-10 py-2 text-white backdrop-blur-md transition-colors duration-300 hover:bg-[#47636b] backdrop-blur-md">Reportes</button>
                <button className="mt-7 bg-[#384E55] rounded-3xl px-10 py-2 text-white backdrop-blur-md transition-colors duration-300 hover:bg-[#47636b] backdrop-blur-md">Aceptar Visita</button>
                <button className="mt-7 bg-[#384E55] rounded-3xl px-10 py-2 text-white backdrop-blur-md transition-colors duration-300 hover:bg-[#47636b] backdrop-blur-md">Factor de Carga</button>
              </div>
              <button className="mt-64 bg-[#384E55] rounded-3xl px-10 py-2 text-white backdrop-blur-md transition-colors duration-300 hover:bg-[#47636b] backdrop-blur-md">Cerrar Sesión</button>
            </div>
          </div>
          
          
          
          <div className="flex flex-col items-center ml-64">
            <form action="#">

            <div className="relative mt-10 ml-64">
              <div style={{ marginBottom: '10px' }}>
                <label style={{ color: 'black' }}>
                  <input
                    type="radio"
                    value={1}
                    checked={selectedOption === 1}
                    onChange={() => handleOptionChange(1)}
                  />
                  Option 1: Elegir una fecha
                </label>
              </div>
              <div style={{ marginBottom: '10px' }}>
                <label style={{ color: 'black' }}>
                  <input
                    type="radio"
                    value={2}
                    checked={selectedOption === 2}
                    onChange={() => handleOptionChange(2)}
                  />
                  Option 2: Elegir un rango de fechas
                </label>
              </div>

              {selectedOption === 1 && (
                <div>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date as Date)}
                    dateFormat="dd/MM/yyyy"
                    customInput={<CustomInput />}
                  />
                </div>
              )}

              {selectedOption === 2 && (
                <div>
                  <div style={{ marginBottom: '10px' }}>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date as Date)}
                      dateFormat="dd/MM/yyyy"
                      customInput={<CustomInput />}
                    />
                  </div>
                  <div>
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


              <div className="relative mt-10 ml-64">
                <input autoComplete="off"
                    type="text"
                    //id='password'
                    //value={password}
                    //onChange={event => setPassword(event.target.value)}
                    className="peer placeholder-transparent bg-transparent h-10 w-full border-b-2 border-black text-black focus:outline-none focus:border-black"
                    placeholder="" />
                <label htmlFor="Factor de carga" className="absolute left-0 -top-3.5 text-black text-bold peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-black peer-focus:text-sm">Factor de carga</label>
              </div>
            </form>
          </div>

          <div className="mt-8 flex justify-flex text-lg text-black">              
              <button type="button" className="rounded-3xl bg-sky-700 bg-opacity-10 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-sky-800">Aceptar Factor</button>
          </div>
          
          
      
        </div>
    )
}

export default Admin