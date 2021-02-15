import React, {useState, useEffect}  from 'react'
import { CopyToClipboard } from "react-copy-to-clipboard";

const BlueGrey = () => {
    const BlueGray =[
        "#cfd8dc","#b0bec5",
        "#90a4ae", "#78909c", "#607d8b", "#546e7a", "#455a64", "#37474f", "#263238"
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
          <h1>BlueGray Color</h1>
        </div>
        <div className="container">
          {BlueGray.map((color) => (
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

export default BlueGrey
