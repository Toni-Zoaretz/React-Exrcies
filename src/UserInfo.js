import React from "react";

function UserInfo({ enteredAge, enteredText, enteredUserName, setShow }) {
  return (
    <form>
      <ul>
        <li>{enteredAge}</li>
        <li>{enteredText}</li>
        <li>{enteredUserName}</li>
      </ul>
      <button type="submit">ok</button>
      <button onClick={() => setShow(false)}>not ok</button>
    </form>
  );
}

export default UserInfo;
