import "./App.css";
import { getFinances } from "./utils";
import { useState, useEffect } from "react";

function App() {
  const [finances, setFinances] = useState([]);

  useEffect(() => {
    getFinances().then((response) => setFinances(response));
  }, []);

  return (
    <main>
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
