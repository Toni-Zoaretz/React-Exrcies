import { useGlobalContext } from "../context/context";

function Grandson() {
  const { gifts } = useGlobalContext();
  return (
    <div>
      {gifts.map((gift) => {
        return <p key={gift}>{gift}</p>;
      })}
    </div>
  );
}

export default Grandson;
