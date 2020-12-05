import React from "react";

const Error = (props) => {
  return (
    <div>
      <p>
        Error. {props.msg}. {props.status}
      </p>
    </div>
  );
};

export default Error;
