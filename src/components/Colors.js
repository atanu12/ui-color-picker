import React from "react";
import { Link } from "react-router-dom";

const Colors = () => {
  const Color = [
    {name:"red", colors:"#f44336"},
    {name:"pink", colors:"#e91e63"},
    {name:"purple", colors:"#9c27b0"},
    {name:"deepPurple", colors:"#673ab7"},
    // {name:"indigo", colors:"#3f51b5"},
    {name:"blue", colors:"#2196f3"},
    {name:"lightBlue", colors:"#03a9f4"},
    {name:"cyan", colors:"#00bcd4"},
    {name:"teal", colors:"#009688"},
    {name:"green", colors:"#4caf50"},
    {name:"lightGreen", colors:"#8bc34a"},
    {name:"Limit", colors:"#cddc39"},
    {name:"yellow", colors:"#ffeb3b"},
    {name:"amber", colors:"#ffc107"},
    {name:"orange", colors:"#ff9800"},
    {name:"deepOrange", colors:"#ff5722"},
    {name:"brown", colors:"#795548"},
    {name:"grey", colors:"#9e9e9e"},
    {name:"blueGrey", colors:"#607d8b"},
   
  ];
  return (
    <div className="main_colors">
      <div className="container">
        {Color.map((color) => (
            <div className="main__container">
                <div className="card">
                    <Link to={color.name} style={{ textDecoration: 'none' }} >
                        <div className="box" style={{background: color.colors}}>
                        </div>
                        <div className="color_name">
                            {color.name}
                        </div>
                    </Link>
                </div>
            </div>   
        ))}
      </div>
    </div>
  );
};

export default Colors;
