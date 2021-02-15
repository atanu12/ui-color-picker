import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
const Amber = () => {
    const AmberColor =[
        "#ffecb3","#ffe082",
        "#ffd54f", "#ffca28", "#ffc107", "#ffb300", "#ffa000", "#ff8f00", "#ff6f00"
    ]

    const [background, setBackground] = useState("#071415");
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrent(null);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [current]);
    return (
        <div >
        <div className="title">
          <h1>Amber Color</h1>
        </div>
        <div className="container">
          {AmberColor.map((color) => (
            <CopyToClipboard text={`${color}`} >
              <div key={color.id} className="card">
                <div
                  style={{
                    background: color,
                  }}
                  className="box"
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

export default Amber
