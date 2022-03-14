import React, {
  useReducer,
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";

import Component from "./components/Component.jsx";
const Test = () => {
  const firstNameInput = useRef(null);
  const lastNameInput = useRef(null);
  const ageInput = useRef(null);
  const [person, setPerson] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPerson([
      ...person,
      {
        index: Date.now(),
        firstName: firstNameInput.current.value,
        lastName: lastNameInput.current.value,
        age: ageInput.current.value,
      },
    ]);
    firstNameInput.current.value = null;
    lastNameInput.current.value = null;
    ageInput.current.value = null;
  };
  return (
    <>
      <h1>Профиль</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="string"
          type="text"
          ref={firstNameInput}
          placeholder="firstname"
          name="fistName"
        />{" "}
        <br />
        <input
          className="string"
          type="text"
          ref={lastNameInput}
          placeholder="lastname"
          name="lastName"
        />{" "}
        <br />
        <input
          className="number"
          type="text"
          ref={ageInput}
          placeholder="age"
          name="age"
        />{" "}
        <br />
        <button>Отправить</button>
        {person.map((person, index) => (
          <Component index={index + 1} person={person} />
        ))}
      </form>
    </>
  );
};

export default Test;
