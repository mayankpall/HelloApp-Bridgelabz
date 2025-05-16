
import './App.css'
import LogoComponents from './components/LogoComponents';

function App() {
  const name = "Bridglabz";
  const logoLink = 'https://www.bridgelabz.com/assets/images/BridgeLabz%20New%20Logo.svg ';
  const siteUrl = 'https://www.bridgelabz.com';
  return (
    <>
     <LogoComponents logoLink={logoLink} siteUrl={siteUrl} > </LogoComponents>
     <div>Hello from {name}!  </div>
    </>
  )
}

export default App
