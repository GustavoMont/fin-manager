import "./App.css";
import { Card } from "./components/Card";
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
        <Card title="Ganhos" value={incomes} />
        <Card title="Gastos" value={expenses} />
        <Card title="Balanço" value={total} isBalance />
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
