import React from "react";
import Proptypes from "prop-types";

function Card({ children, reverse }) {
  //   return <div className={`card ${reverse && "reverse"}`}>{children}</div>;
  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? "rgba(0,0,0,0.4" : "white",
        color: reverse ? "#fff" : "black",
      }}
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  children: Proptypes.node.isRequired,
  reverse: Proptypes.bool,
};
export default Card;