
import './App.css'

function App() {
  const name = "Bridglabz";
  const logoLink = "https://www.bridgelabz.com/assets/images/BridgeLabz%20New%20Logo.svg ";

  return (
    <>
    <img src={logoLink} alt="BridgeLabz" />
     <div>Hello from {name}!  </div>
    </>
  )
}

export default App
