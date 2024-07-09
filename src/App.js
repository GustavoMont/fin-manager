import "./App.css";
import {
  getExpensesTotal,
  getFinances,
  getFullBalance,
  getIncomesTotal,
} from "./utils";
import { useState, useEffect } from "react";

function App() {
  const [finances, setFinances] = useState([]);

  const incomes = getIncomesTotal(finances);
  const expenses = getExpensesTotal(finances);
  const total = getFullBalance(finances);

  useEffect(() => {
    getFinances().then((response) => setFinances(response));
  }, []);

  return (
    <main>
      <div className="cards-container">
        <div className="card">
          <h3>Ganhos</h3>
          <p>
            {incomes.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>
        <div className="card">
          <h3>Gastos</h3>
          <p>{expenses}</p>
        </div>
        <div className="card total">
          <h3>Balanço</h3>
          <p>{total}</p>
        </div>
      </div>
      <h2>Lista de Ganhos e Gastos</h2>
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {finances.map((finance) => (
            <tr key={finance.id}>
              <td>{finance.description}</td>
              <td>{finance.value}</td>
              <td>{finance.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default App;
