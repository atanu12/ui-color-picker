import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Header from "../Header";

const Green = () => {
  const GreenColor = [
    "#c8e6c9",
    "#a5d6a7",
    "#81c784",
    "#66bb6a",
    "#4caf50",
    "#43a047",
    "#388e3c",
    "#2e7d32",
    "#1b5e20",
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
      <Header/>
      <div className="title">
        <h1>Green Color</h1>
      </div>
      <div className="container">
        {GreenColor.map((color) => (
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

export default Green;
