import { useEffect, useState } from "react";
import Button from "./Button";
import Card from "./Card";

const Home = () => {
  let [count, setCount] = useState(0);
  let [display, setDisplay] = useState(count);
  let [countArray, setCountArray] = useState([]);

  let addCount = () => {
    setCount((count += 1));
    setCountArray((prevCount)=> [...prevCount, count])
  };

  useEffect(() => {
    setDisplay(
        countArray.map((key, index) => <Card key={key} />)
    );
  }, [count]);
  return (
    <div className="home">
      <div className="row">
        <div className="col s1">
          <Button addCount={addCount} count={count} />
        </div>
      </div>

      <div className="row">
        <br />
        <div className="col s4">
          {count}
          {display}
        </div>
      </div>
    </div>
  );
};

export default Home;
