import React, { useEffect, useState } from 'react'

export default function IsConnectDiv({ isConnected, name }) {
  const [connectText, setConnectText] = useState("");

  useEffect(() => {
    setConnectText(isConnected ? 'connected' : '');
  }, [isConnected])

  if (isConnected) return <p className='fst-italic'>{connectText}</p>
  else return <p>{name}</p>
}
