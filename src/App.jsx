
import { useState } from 'react';
import './App.css'
import LogoComponents from './components/LogoComponents';

function App() {
  const [userName, setUserName] = useState();
  const logoLink = 'https://www.bridgelabz.com/assets/images/BridgeLabz%20New%20Logo.svg ';
  const siteUrl = 'https://www.bridgelabz.com';


  return (
    <>
     <div><LogoComponents logoLink={logoLink} siteUrl={siteUrl} > </LogoComponents></div>
     <input type="text" 
      value={userName}
      onChange={(e)=> setUserName(e.target.value)}
      placeholder='Message'
     />
    <h1>
      {userName? `Hello ${userName} from bridgelabz` : "Hello from bridgelabz"}
    </h1>

    </>
  )
}

export default App
