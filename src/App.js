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
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);
  const [date, setDate] = useState("");

  const incomes = getIncomesTotal(finances);
  const expenses = getExpensesTotal(finances);
  const total = getFullBalance(finances);

  useEffect(() => {
    getFinances().then((response) => setFinances(response));
  }, []);

  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleValueChange = (e) => setValue(Number(e.target.value));
  const handleDateChange = (e) => setDate(e.target.value);

  return (
    <main>
      <div className="cards-container">
        <Card title="Ganhos" value={incomes} />
        <Card title="Gastos" value={expenses} />
        <Card title="Balanço" value={total} isBalance />
      </div>
      <h2>Lista de Ganhos e Gastos</h2>
      <div className="container">
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
        <div className="form-container">
          <h2>+ Adicionar nova transação</h2>
          <form>
            <input
              value={description}
              onChange={handleDescriptionChange}
              type="text"
              placeholder="descrição"
            />
            <input
              value={value}
              onChange={handleValueChange}
              type="number"
              placeholder="valor"
            />
            <input
              value={date}
              onChange={handleDateChange}
              type="text"
              placeholder="DD/MM/YYYY"
            />
            <button type="submit">Adicionar</button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default App;
