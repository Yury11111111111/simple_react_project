import React from "react";

const Component = (props) => {
  return (
    <p> 
     id: {props.index}<br /> firstName: {props.person.firstName} <br />
        lastName: {props.person.lastName} <br />
        age: {props.person.age}
    </p>
  );
};

export default Component;
