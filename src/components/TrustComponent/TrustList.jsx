import React from "react";
import TrustCard from "./TrustCard";
function Cards() {
  return (
    <div>
      <div className="container mt-5 ps-5 pe-5 " >
        <div className="row row-cols-1 row-cols-md-3 g-5 ps-5 ms-5 me-5 pe-5">
        <TrustCard  icon={<i className="bi bi-truck fs-1 mx-2"></i>} title="Free Shipping"/>
        <TrustCard icon={<i className="bi bi-chat-text fs-1"></i>} title="Online Support 24/7"/>
        <TrustCard icon={<i className="bi bi-coin fs-1"></i>}title="100% Money Back"/>
        </div>
      </div>
    </div>
  );
}

export default Cards;
