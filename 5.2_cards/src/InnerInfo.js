import React from "react";
import Title from "./Title";
import Description from "./Description";
import Btns from "./Btns";

function InnerInfo(props) {
  return (
    <div>
      <Title title={props.title} />
      <Description descr={props.descr} />
      <Btns />
    </div>
  );
}

export default InnerInfo;
