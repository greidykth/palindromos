import { useEffect, useState } from "react";

const Palindromos = ({ setModal, setResultadoConsulta, setPalabra, palabra }) => {

  const [error, setError] = useState(false);
  const [palabraConsultar, setPalabraConsultar] = useState([]);
  

  useEffect(() => {
    if (palabraConsultar.length) {
      setResultadoConsulta(consultarPalindromo());
    }
  }, [palabraConsultar]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (palabra === "") {
      setError(true);
      return;
    }

    const palabraSinEspacios = palabra
      .replace(/ /gi, "")
      .toUpperCase()
      .normalize("NFD")
      .replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi, "$1$2")
      .normalize();

    setPalabraConsultar([...palabraSinEspacios]);
    setError(false);
    setModal(true);
  };

  function consultarPalindromo() {
    const indexInicio = Math.floor(palabraConsultar.length / 2);
    let indexFin = palabraConsultar.length - 1;
    let resultado = false;

    if (palabraConsultar.length % 2 === 0) { // Palindromo par

      for (let i = 0; i < indexInicio; i++) {
        if (palabraConsultar[i] == palabraConsultar[indexFin]) {
          resultado = true;
          indexFin--;
        } else {
          resultado = false;
          break;
        }
      }
      return resultado;
    } else { // Palindromo impar

      for (let i = 0; i < indexInicio + 1; i++) {
        if (palabraConsultar[i] == palabraConsultar[indexFin]) {
          resultado = true;
          indexFin--;
        } else {
          resultado = false;
          break;
        }
      }
      return resultado;
    }
  }

  return (
    <>
      <div className="md:flex w-full h-screen justify-center items-center">
        <div className="shadow-2xl bg-blue-400 bg-opacity-60 py-14 px-8 rounded-lg">
          <h2 className="text-white font-bold text-9xl text-center tracking-wider">
            Palindromos
          </h2>
          <p className="text-white text-xl text-center mt-2">
            Ingrese una palabra para consultar si es un palindromo
          </p>
          {error && (
            <h2 className="text-red-700 mt-2 font-bold text-center uppercase text-xl">
              Debe ingresar una palabra
            </h2>
          )}
          <div className="text-2xl mt-6 flex justify-center items-center">
            <form onSubmit={handleSubmit}>
              <input
                id="palabra"
                type="text"
                className="rounded p-2 text-2xl w-80 shadow-xl mr-3"
                placeholder="Escriba una palabra"
                value={palabra}
                onChange={(e) => setPalabra(e.target.value)}
              />
              <input
                type="submit"
                value="CONSULTAR"
                className="rounded p-2 font-bold shadow-xl bg-purple-700 hover:bg-purple-900 transition-colors text-center cursor-pointer w-48 text-white mt-4"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Palindromos;
