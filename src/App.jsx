import React, { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import "./index.css";

const s = {
  bg: `flex flex-col items-center h-screen w-screen px-12 py-4  bg-gradient-to-r from-indigo-500 from-0% via-sky-500 via-35% to-emerald-500 to-100 %`,
  nav: `flex justify-center pb-12`,
  navtitle: `font-sans text-2xl font-bold text-white hover:underline decoration-2 decoration-indigo-600 underline-offset-2 drop-shadow-xl`,
  box: `flex flex-col items-center space-y-6 max-w-sm p-6 bg-indigo-50 border border-gray-200 border-2 rounded-lg shadow-xl `,
  boxtitle: `mb-2 text-2xl font-bold tracking-tight text-indigo-600 px-2`,
  boxinput: `bg-gray-50 border-2 border-gray-300 text-gray-900 text-l font-mono rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5`,
  qr: `w-full object-cover`,
  qrbox: `flex justify-center`,
  button: `bg-gradient-to-r from-emerald-500 via-sky-500 to-indigo-500  hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-4 py-3 rounded-md`,
};

function App() {
  const [text, setText] = useState("");
  const qrRef = useRef();

  const downloadQRCode = (e) => {
    e.preventDefault();
    let canvas = qrRef.current.querySelector("canvas");
    let image = canvas.toDataURL("image/png");
    let anchor = document.createElement("a");
    anchor.href = image;
    anchor.download = `${text}.png`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    setUrl("");
  };
  return (
    <>
      <div className={s.bg}>
        <nav className={s.nav}>
          <header className={s.navtitle}>QR-Code Generator!</header>
        </nav>
        <form onSubmit={downloadQRCode}>
          <div className={s.box} ref={qrRef}>
            <h5 className={s.boxtitle}>Enter your hyperlink/text:</h5>
            <QRCodeCanvas
              id="qrCode"
              value={text}
              bgColor="#eef2ff"
              fgColor="#4f46e5"
              level={"H"}
              size={290}
            />
            <input
              className={s.boxinput}
              onChange={(e) => setText(e.target.value)}
              type="text"
              name=""
              id=""
            />
            <button type="" className={s.button}>
              Save QR-Code
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
