import { useState } from "react";
import Checkbox from "./components/Checkbox";
import "./App.css";

const checkboxes = [
  { value: "all", label: "Select All" },
  { value: "item1", label: "Item 1" },
  { value: "item2", label: "Item 2" },
  { value: "item3", label: "Item 3" },
  { value: "item4", label: "Item 4" },
  { value: "item5", label: "Item 5" },
];

const App = () => {
  const [currentValue, setCurrentValue] = useState([]);

  const onHandleClick = (e) => {
    const { name } = e.target;

    if (currentValue.includes(name)) {
      if (name === "all") {
        setCurrentValue([]);
      } else {
        const tmp = currentValue.filter((elt) => elt !== name && elt !== "all");
        setCurrentValue(tmp);
      }
    } else {
      if (currentValue.length === checkboxes.length - 2 || name === "all") {
        setCurrentValue(["all", "item1", "item2", "item3", "item4", "item5"]);
      } else {
        setCurrentValue([...currentValue, name]);
      }
    }
  };

  return (
    <div>
      {checkboxes.map((i) => (
        <Checkbox
          key={i.value}
          data={i}
          onClick={onHandleClick}
          current={currentValue}
        />
      ))}
    </div>
  );
};

export default App;
