import Header from "./components/Header"
import Teoria from "./components/Teoria"

function App() {
//aqui va la logica del componente
  return (
    <>
    {/*aqui comienza la zona del html*/}
    <Header/>
    <main className="container">
      <Teoria></Teoria>
    </main>
    </>
  )
}

export default App
