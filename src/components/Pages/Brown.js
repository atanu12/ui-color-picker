import React, {useState, useEffect}  from 'react'
import { CopyToClipboard } from "react-copy-to-clipboard";
import Header from '../Header';
import {toast,ToastContainer} from 'react-toastify';
const Brown = () => {
    const BrownColor =[
        "#d7ccc8","#bcaaa4",
        "#a1887f", "#8d6e63", "#795548", "#6d4c41", "#5d4037", "#4e342e", "#3e2723"
    ]

    const [background, setBackground] = useState("#071415");
  const [current, setCurrent] = useState(null);
  const notify = ()=> toast.success("Color Copied")

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrent(null);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [current]);
    return (
        <div >
          <Header/>
        <div className="title">
          <h1>Brown Color</h1>
        </div>
        <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
        <div className="container">
          {BrownColor.map((color) => (
            <CopyToClipboard text={`${color}`} >
              <div key={color.id} className="card">
                <div
                  style={{
                    background: color,
                  }}
                  className="box"
                  onClick={notify}
                >
                  
                </div>
                <p
                    style={{
                      color: "#fff",
                      textTransform: "uppercase",
                    }}
                    onClick={() => setCurrent(color)}
                    className="para"
                  >
                    {color}
                  </p>
              </div>
            </CopyToClipboard>
          ))}
        </div>
      </div>
    )
}

export default Brown
