import "./App.css";
import React from "react";

function App() {
  const source = [
    { id: 0, name: "Arjun", age: "31", profession: "Developer" },
    { id: 1, name: "Arun", age: "30", profession: "Consultant" },
    { id: 2, name: "AShok", age: "27", profession: "Developer" },
    { id: 3, name: "Rita", age: "25", profession: "Upcoming-Developer" },
  ];

  const [info, setInfo] = React.useState(source);

  const handleClick = (event) => {
    setInfo([]);
  };

  const removeSingle = (id) => {
    const newInfo = info.filter((element) => {
      return element.id !== id;
    });

    setInfo(newInfo);
  };

  return (
    <div className="App">
      {info.map((item) => {
        return (
          <h1 key={item.id}>
            Name: {item.name} & Age: {item.age} & Profession: {item.profession}
            <button onClick={ () => removeSingle(item.id)}>remove</button>
          </h1>
        );
      })}
      <button onClick={handleClick}>Remove All</button>
    </div>
  );
}

export default App;
