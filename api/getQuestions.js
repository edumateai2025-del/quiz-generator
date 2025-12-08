import questions from '../data/questions.json';

export default function handler(req, res) {
  const shuffled = questions.sort(() => Math.random() - 0.5);
  res.status(200).json(shuffled);
}
