
import React from 'react'

export default function LogoComponents({logoLink, siteUrl}) {
  
  const onClickDirect = () => {
    window.open(siteUrl, "_blank");
  };

  return (
    <>
    <img 
      src={logoLink}
     alt="BridgeLabz"
     onClick={onClickDirect} />
    </>

  )
}

