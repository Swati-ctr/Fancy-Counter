import { useEffect, useState } from "react";
import ButtonContainer from "./ButtonContainer";
import Count from "./Count";
import Resetbutton from "./Resetbutton";
import Title from "./Title";

export default function Card() {
  const [count, setCount] = useState(0);
  const locked = count == 10 ? true : false;

  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      if (event.code == "space") {
        setCount(count + 1);
      }
    });
  }, [count]);

  return (
    <div className={'card ${locked ? "card--limit":""}'}>
      <Title locked={locked} />
      <Count count={count} />
      <Resetbutton setCount={setCount} />
      <ButtonContainer setCount={setCount} locked={locked} />
    </div>
  );
}
