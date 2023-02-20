import React, { useState } from "react";
import UserInfo from "./UserInfo";

function Form() {
  const [enteredUserName, setEntEnterdUserName] = useState("");
  const [enteredAge, setEntEnterdAge] = useState("");
  const [enteredText, setEntEnterdText] = useState("");
  const [show, setShow] = useState(false);

  const handleSubit = (e) => {
    e.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enteredText.trim().length === 0
    ) {
      return;
    }
    console.log(enteredAge, enteredUserName, enteredText);
    setShow(true);
    // setEntEnterdAge("");
    // setEntEnterdText("");
    // setEntEnterdUserName("");
  };

  const userNameChangeHandler = (e) => {
    setEntEnterdUserName(e.target.value);
  };

  const userAgeHandler = (e) => {
    setEntEnterdAge(e.target.value);
  };

  const textHandler = (e) => {
    setEntEnterdText(e.target.value);
  };
  return (
    <div className="box">
      <form onSubmit={(e) => handleSubit(e)}>
        <label htmlFor="full name">full name</label>
        <input
          type="text"
          value={enteredUserName}
          onChange={userNameChangeHandler}
          id="full name"
        />
        <label htmlFor="age">age</label>
        <select id="age" onChange={userAgeHandler} value={enteredAge}>
          <option>15</option>
          <option>16</option>
          <option>17</option>
        </select>
        <label htmlFor="free text">free text</label>
        <input
          type="text"
          id="text"
          value={enteredText}
          onChange={textHandler}
        />
        <button type="submit">submit</button>
      </form>
      {show ? (
        <UserInfo
          enteredAge={enteredAge}
          enteredText={enteredText}
          enteredUserName={enteredUserName}
          show={show}
          setShow={setShow}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Form;
