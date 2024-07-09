import "./App.css";

function App() {
  const finances = [
    {
      id: 1,
      description: "Tênis",
      value: -1200,
      date: "23/01/2024",
    },
    {
      id: 2,
      description: "Caiu o freela",
      value: 2200,
      date: "23/02/2024",
    },
    {
      id: 3,
      description: "Fulano mandou o pix",
      value: 200,
      date: "23/01/2024",
    },
  ];
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
