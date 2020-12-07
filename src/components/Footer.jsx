import React from "react";
const Footer = () => {
  var style = {
    backgroundColor: "#4296f5",
    borderTop: "1px solid #E7E7E7",

    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    color: "#ffff00",
    width: "100%",
  };

  var phantom = {
    display: "block",
    padding: "20px",
    height: "60px",
    width: "100%",
  };
  return (
    <footer>
      <div style={phantom} />
      <div style={style}>Ali husnain@2020</div>
    </footer>
  );
};

export default Footer;
