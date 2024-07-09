import "../styles/Card.css";

export function Card(props) {
  return (
    <div className={`card ${props.isBalance ? "total" : ""}`}>
      <h3>{props.title}</h3>
      <p>
        {props.value.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
    </div>
  );
}
