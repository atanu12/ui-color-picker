import React, {useState, useEffect}  from 'react';
import { CopyToClipboard } from "react-copy-to-clipboard";

const Blue = () => {
    const BlueColor      =[
        "#bbdefb","#90caf9",
        "#64b5f6", "#42a5f5", "#2196f3", "#1e88e5", "#1976d2", "#1565c0", "#0d47a1"
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
          <h1>Blue Color</h1>
        </div>
        <div className="container">
          {BlueColor.map((color) => (
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

export default Blue
