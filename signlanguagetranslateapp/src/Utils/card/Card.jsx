import React from "react";
import "./card.css"
export default function Card({children,style}){
  return <div className="box-container" style={style}>{children}</div>;
};
