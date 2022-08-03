import { useState } from "react"
import Modal from "./components/Modal";
import Palindromos from "./components/Palindromos"

function App() {

  
  const [palabra, setPalabra] = useState("");
  const [modal, setModal] = useState(false);
  const [resultadoConsulta, setResultadoConsulta] = useState(false);
  
  

  return (
    <div className="">
      <Palindromos 
        setModal={setModal}
        setResultadoConsulta={setResultadoConsulta}
        palabra={palabra}
        setPalabra={setPalabra}
      />
      {modal &&
        <Modal
          setModal={setModal}
          resultadoConsulta={resultadoConsulta}
          palabra={palabra}
        />
      }
    </div>
  )
}

export default App
