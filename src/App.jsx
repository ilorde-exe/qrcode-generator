import React, { useState } from "react";
import QRCode from "react-qr-code";
import "./index.css";

const s = {
  bg: `flex flex-col items-center h-screen w-screen px-12 py-4  bg-gradient-to-r from-indigo-500 from-0% via-sky-500 via-35% to-emerald-500 to-100 %`,
  nav: `flex justify-center pb-12`,
  navtitle: `font-sans text-2xl font-bold text-white hover:underline decoration-2 decoration-indigo-600 underline-offset-2 drop-shadow-xl`,
  box: `flex flex-col space-y-6 max-w-sm p-6 bg-indigo-50 border border-gray-200 rounded-lg shadow-xl `,
  boxtitle: `mb-2 text-2xl font-bold tracking-tight text-indigo-600 px-2`,
  boxinput: `bg-gray-50 border-2 border-gray-300 text-gray-900 text-l font-mono rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5`,
  qr: `w-full`,
  button: ``,
};
function App() {
  const [text, setText] = useState("");
  return (
    <>
      <div className={s.bg}>
        <nav className={s.nav}>
          <header className={s.navtitle}>QR-Code Generator!</header>
        </nav>
        <article className={s.box}>
          <h5 className={s.boxtitle}>Enter your hyperlink/text:</h5>
          <QRCode
            className={s.qr}
            value={text}
            bgColor="#eef2ff"
            fgColor="#4f46e5"
          ></QRCode>
          <input
            className={s.boxinput}
            onChange={(e) => setText(e.target.value)}
            type="text"
            name=""
            id=""
          />
          <button></button>
        </article>
      </div>
    </>
  );
}

export default App;
