import React, { useState, useEffect } from "react";
import red from "@material-ui/core/colors/red";
import { CopyToClipboard } from "react-copy-to-clipboard";

const RedColor =()=> {
  const RedColor = [
    red[100],
    red[200],
    red[300],
    red[400],
    red[500],
    red[600],
    red[700],
    red[800],
    red[900],
  ];
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
        <h1>Red Color</h1>
      </div>
      <div className="container">
        {RedColor.map((color) => (
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
  );
}

export default RedColor;
