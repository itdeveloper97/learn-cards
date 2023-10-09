import "./style.css";
import { useState } from "react";

interface IProps {
  word: string;
  translate: string;
}

export const Card = ({ word, translate }: IProps) => {
  const [flip, setFlip] = useState<boolean>(false);

  const onFlip = () => setFlip((prevState) => !prevState);

  return (
    <div className={`container ${flip ? "flip" : ""}`} onClick={onFlip}>
      <div className={"front"}>{word}</div>
      <div className={"back"}>{translate}</div>
    </div>
  );
};
