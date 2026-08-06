import Header from "./components/Header"
import Teoria from "./components/Teoria"
import Footer from "./components/Footer"
function App() {
//aqui va la logica del componente
  return (
    <>
    {/*aqui comienza la zona del html*/}
    <Header/>
    <main className="container">
      <Teoria></Teoria>
    </main>
    <Footer></Footer>
    </>
  )
}

export default App
