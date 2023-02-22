import { useEffect, useState } from "react";

function Card() {
  const [avatar, setAvatar] = useState([]);
  const [filterName, setFilterName] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        let res = await fetch(
          "https://randomuser.me/api/?results=10&inc=name,picture"
        );
        if (!res.ok) throw Error("ERROR!");
        let data = await res.json();
        setAvatar(data.results);
      } catch (error) {}
    };
    getData();
  }, []);

  console.log(avatar);

  const filterFun = (e) => {
    setFilterName(e.target.value);
  };

  return (
    <div className="card">
      {avatar.map((user, index) => {
        return (
          <div className="card-container">
            <h3 key={index}>{`${user.name.first} ${user.name.last}`}</h3>
            <img key={index} src={user.picture.large} />
          </div>
        );
      })}
      <div>
        <input
          type="text"
          placeholder="search user"
          onChange={filterFun}
        ></input>
      </div>
    </div>
  );
}

export default Card;
