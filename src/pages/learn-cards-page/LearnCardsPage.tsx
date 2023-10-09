import { Card } from "../../shared/ui/card/Card.tsx";
import "./style.css";

export const LearnCardsPage = () => {
  return (
    <div id={"learn-cards-page"}>
      <div className={"card-wrapper"}>
        <Card word={"Together"} translate={"Вместе"} />
      </div>
    </div>
  );
};
