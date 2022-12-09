import { useState } from "react";
import "./App.css";

const ComponentRender = () => {
  const tabs = [
    {
      id: 1,
      title: "Сколько всего мест в доме?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quos nemo corporis velit culpa veritatis asperiores deserunt, commodi ipsum at? Esse quibusdam dignissimos recusandae enim. Eaque expedita eum provident totam!",
    },
    {
      id: 2,
      title: "Самая дорогая квартира?",
      description: "24$",
    },
    {
      id: 3,
      title: "Могу ли я отменить бронирование?",
      description: "Да",
    },
    {
      id: 4,
      title: "Можно ли купить квартиру?",
      description: "Да",
    },
  ];

  const [activeId, setActiveId] = useState();

  const newArr = tabs.map((tab) => (
    <div
      id={tab.id}
      className={`tab ${tab.id === activeId && "active"}`}
      key={tab.id}
    >
      <input id="tab-two" type="checkbox" name="tab" />
      <label
        htmlFor="tab-two"
        onClick={() => {
          if (activeId === tab.id) {
            setActiveId(null);
          } else setActiveId(tab.id);
        }}
      >
        {tab.title}
      </label>
      <div className="tab-content">
        <p>{tab.description}</p>
      </div>
    </div>
  ));

  return <>{newArr}</>;
};

function App() {
  return (
    <div id="app">
      <div className="app-container">
        <h1 className="app-title">FAQ</h1>
        <ComponentRender />
      </div>
    </div>
  );
}

export default App;
