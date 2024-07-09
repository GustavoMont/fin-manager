const delay = (seconds = 1_000) => new Promise((r) => setTimeout(r, seconds));

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

export const getFinances = async () => {
  await delay();
  return finances;
};
