import "./App.css";
import propertiesArray from "./utils/properties.json";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Body from "./components/Body";
import { useState } from "react";
import { State } from "./utils/state";
import { City } from "./utils/city";
import { Type } from "./utils/type";

function App() {
  const minDistance = 10000;
  const [city, setCity] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState(null);
  const [cost, setCost] = useState([40000, 100000]);
  const [properties, setProperties] = useState(propertiesArray);

  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };
  const handleChangeType = (event) => {
    setType(event.target.value);
  };
  const handleChangeDate = (newValue) => {
    if (newValue && newValue._d >= new Date() || newValue && newValue._d.getDate() === new Date().getDate()) {
      setDate(newValue);
    } else {
      setDate(null);
    }
  };
  const handleApplyFilters = () => {
    console.log("properties",properties)
    let temp = propertiesArray.filter((item) => {
      return city.length != 0
        ? item.location.city.localeCompare(city) === 0
        : true;
    });
    let temp2 = temp.filter((item) => {
      return type.length != 0 ? item.type.localeCompare(type) === 0 : true;
    });
    let temp3 = temp2.filter((item) => {
      return date !== null
        ? date._d.getDate === item.availability.date
          ? true
          : date >=
            new Date(
              item.availability.year,
              item.availability.month - 1,
              item.availability.date
            )
        : true;
    });
    let temp4 = temp3.filter((item) => {
      return item.price >= cost[0] && item.price <= cost[1]
    })


    console.log("temp",temp);
    console.log("temp2", temp2);
    console.log("temp3", temp3);
    console.log("temp4",temp4);
    setProperties(temp4);
  };

  const handleChangeCost = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setCost([Math.min(newValue[0], cost[1] - minDistance), cost[1]]);
    } else {
      setCost([cost[0], Math.max(newValue[1], cost[0] + minDistance)]);
    }
  };
  const handleRemoveFilters = () => {
    console.log("filters removed");
    setCity("");
    setType("");
    setDate(null);
    setCost([20000, 40000]);
    setProperties(propertiesArray);
  };

  const filterCompProps = {
    city,
    type,
    date,
    cost,
    handleApplyFilters,
    handleChangeCity,
    handleChangeCost,
    handleChangeDate,
    handleChangeType,
    handleRemoveFilters,
  };
  // console.log(filterCompProps);

  return (
    <div className="App">
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginLeft: "5rem",
          marginRight: "5rem",
        }}
      >
        <Header />
        <Filter {...filterCompProps} />
        <Body properties={properties} />
      </div>
    </div>
  );
}

export default App;
