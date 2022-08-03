import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpellCheck } from '@fortawesome/free-solid-svg-icons'
import { faClose } from '@fortawesome/free-solid-svg-icons'

const Modal = ({setModal, resultadoConsulta, palabra}) => {
  return (
    <>
      <div
        id="defaultModal"
        tabIndex="-1"
        className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex bg-gray-800 bg-opacity-60"
        aria-modal="true"
        role="dialog"
        
      >
        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

            <div className="p-6 space-y-6 text-center pt-10">
                {
                    resultadoConsulta ? 
                    (
                        <>
                        <FontAwesomeIcon icon={faSpellCheck} size="6x" className="text-green-500 animate-pulse"/>
                        <p className="text-green-500 text-center font-bold text-4xl animate-pulse">Si es palindromo</p>
                        </>
                    ) :
                    (   
                        <>
                        <FontAwesomeIcon icon={faClose} size="6x" className="text-red-500 animate-pulse"/>
                        <p className="text-red-500 text-center font-bold text-4xl animate-pulse">No es palindromo</p>
                        </>
                    )
                }
                
              <p className="text-xl text-gray-500 dark:text-gray-400">
                La palabra <span className="font-bold">{palabra.toUpperCase()}</span> {resultadoConsulta ? "si" : "no"} es un palindromo.
              </p>
             
            </div>

            <div className="flex items-center justify-end p-5 rounded-b border-t border-gray-200 dark:border-gray-600">
              <button
                data-modal-toggle="defaultModal"
                type="button"
                onClick={() => setModal(false)}
                className="rounded p-2 font-bold shadow-xl bg-purple-700 hover:bg-purple-900 transition-colors text-center cursor-pointer w-32 text-white"
              >
                CERRAR
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
