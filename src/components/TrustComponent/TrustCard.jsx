import React from "react";

function TrustCard({icon , title, pro}) {
  // destructuring:
  // const i =props.icon
  // const t=props.title
  // const {icon , title}=props
  return (
    <div>
      <div className="col ">
        <div className="text-center">
          {icon}
          <h5>{title}</h5>
          <p>
            Lorem ipsum dolor sit amet
            <br /> consectetur adipisicing elit
          </p>
        </div>
      </div>
      {pro}
    </div>
  );
}

export default TrustCard;
