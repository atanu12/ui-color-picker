import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Limit = () => {
  const LimitColor = [
    "#f0f4c3",
    "#e6ee9c",
    "#dce775",
    "#d4e157",
    "#cddc39",
    "#c0ca33",
    "#afb42b",
    "#9e9d24",
    "#827717",
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
    <div>
      <div className="title">
        <h1>Limit Color</h1>
      </div>
      <div className="container">
        {LimitColor.map((color) => (
          <CopyToClipboard text={`${color}`}>
            <div key={color.id} className="card">
              <div
                style={{
                  background: color,
                }}
                className="box"
              ></div>
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
};

export default Limit;
