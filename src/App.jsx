import { useState } from "react";

const s = {
  body: ``,
  nav: `flex justify-center`,
  navtitle: ``,
};
function App() {
  return (
    <>
      <div className={s.body}>
        <nav className={s.nav}>
          <header className={s.navtitle}>QR-Code Generator</header>
        </nav>
      </div>
    </>
  );
}

export default App;
