import React, { useEffect } from 'react'

export default function Signout() {
  useEffect(() => {
    document.querySelector('#root > div > header > div > div.flex-grow-1')
      .innerHTML = "Sign out...";
  }, [])

  return (
    <section className="container-xl">
      <div className="row d-flex justify-content-center">

      </div>
    </section>
  );
}
