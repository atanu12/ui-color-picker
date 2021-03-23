import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Header from "../Header";

const Purple = () => {
  const PurpleColor = [
    "#e1bee7",
    "#ce93d8",
    "#ba68c8",
    "#ab47bc",
    "#9c27b0",
    "#8e24aa",
    "#7b1fa2",
    "#6a1b9a",
    "#4a148c",
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
        <h1>Purple Color</h1>
      </div>
      <div className="container">
        {PurpleColor.map((color) => (
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

export default Purple;
