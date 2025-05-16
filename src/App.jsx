import { useState } from "react";
import "./App.css";
import LogoComponents from "./components/LogoComponents";

function App() {
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");
  const logoLink = "https://www.bridgelabz.com/assets/images/BridgeLabz%20New%20Logo.svg ";
  const siteUrl = "https://www.bridgelabz.com";

  const handleChange = (e) => {
    const value = e.target.value;
    setUserName(value);

    const isValid = /^[A-Z]/.test(value) && value.length >= 3;
    setError(
      isValid
        ? ""
        : "Name must start with a capital letter and be at least 3 characters long."
    );
  };

  return (

      <div className="container">

      
      <h1 className="message">
        {userName && !error? `Hello ${userName} from bridgelabz` : "Hello from bridgelabz"}
      </h1>
      <div>
        <LogoComponents logoLink={logoLink} siteUrl={siteUrl}> </LogoComponents>
      </div>
      <input
        type="text"
        value={userName}
        onChange={handleChange}
        placeholder="Name"
      />

      {error ? <p className="error">{error}</p> : null}
      </div>

  );
}

export default App;
