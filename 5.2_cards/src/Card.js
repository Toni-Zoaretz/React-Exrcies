import React from "react";
import Img from "./Img";
import InnerInfo from "./InnerInfo";
import "./card.css";
function Card() {
  return (
    <div className="big-box">
      <div className="card-border">
        <Img url="https://images.unsplash.com/photo-1676272650338-faaea8e5e5fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" />
        <InnerInfo title="title fruis1" descr="bla bla " />
      </div>
      <div className="card-border">
        <Img url="https://images.unsplash.com/photo-1676276954682-0a99e53b1f64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=2000&q=60" />
        <InnerInfo title="title fruis2" descr="bla bla bla" />
      </div>
      <div className="card-border">
        <Img url="https://plus.unsplash.com/premium_photo-1675949335329-d42910909742?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
        <InnerInfo title="title fruis3" descr="bla bla bla bla" />
      </div>
    </div>
  );
}

export default Card;
