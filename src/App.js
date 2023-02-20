import React from "react";
import { data } from "./data";
function App() {
  const newDate = data.map((name) => name.name);
  const bornBefore1990 = data.filter((birthYear) => {
    return Number(birthYear.birthday.slice(-4)) < 1990;
  });
  console.log(bornBefore1990);

  return (
    <div>
      <h1>hey!!</h1>
      {newDate.map((name, index) => {
        return <p key={index}>hello {name}</p>;
      })}
      {bornBefore1990.map((birthday, i) => {
        return (
          <p key={i}>
            here are the people borne before 1990: {birthday.name}
            {birthday.birthday} ,
            {birthday.favoriteFoods.fish.map((fish) => (
              <p>{fish}</p>
            ))}
            ,
            {birthday.favoriteFoods.meats.map((meat) => (
              <p>{meat}</p>
            ))}
          </p>
        );
      })}
    </div>
  );
}

export default App;

// 3. Save the modified data to the state.
// 4. Create a Name component that you will pass via props the
// names and print them on the screen.
// 5. Create a Card component that you will pass via props the
// objects before 1990 and print them on the screen.
// - which includes their name, birthday, favorite meats,
// and favorite fish foods.
