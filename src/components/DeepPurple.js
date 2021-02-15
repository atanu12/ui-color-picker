import React, {useState, useEffect}  from 'react'
import { CopyToClipboard } from "react-copy-to-clipboard";

const DeepPurple = () => {
    const DeepPurpleColor =[
        "#d1c4e9","#b39ddb",
        "#9575cd", "#7e57c2", "#673ab7", "#5e35b1", "#512da8", "#4527a0", "#311b92"
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
          <h1>DeepPurple Color</h1>
        </div>
        <div className="container">
          {DeepPurpleColor.map((color) => (
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

export default DeepPurple
