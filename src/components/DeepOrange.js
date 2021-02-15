import React, {useState, useEffect}  from 'react'
import { CopyToClipboard } from "react-copy-to-clipboard";

const DeepOrange = () => {
    const DeepOrangeColor =[
        "#ffccbc","#ffab91",
        "#ff8a65", "#ff7043", "#ff5722", "#f4511e", "#e64a19", "#d84315", "#bf360c"
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
          <h1>DeepOrange Color</h1>
        </div>
        <div className="container">
          {DeepOrangeColor.map((color) => (
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

export default DeepOrange
