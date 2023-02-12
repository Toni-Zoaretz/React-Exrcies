function App() {
  const data = ["hello", "world"];
  // const result = data.join(" ");
  const number1 = 5;
  const number2 = 6;
  // const result2 = number1 + number2;

  const string = "I love React!";
  // const result3 = string.length;

  return (
    <div>
      <h2>{`${data[0]} ${data[1]} `}</h2>
      <h3>{`${number1} + ${number2} = ${number1 + number2}`}</h3>
      <h4>{`${string.length}`}</h4>
    </div>
  );
}

export default App;
