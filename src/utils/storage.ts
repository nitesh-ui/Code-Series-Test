import localforage from 'localforage';

const storage = localforage.createInstance({
  name: "scoreStorage"
});

export const saveScore = async (score: number) => {
  const scores = await getScores();
  scores.push(score);
  await storage.setItem('scores', scores);
};

export const getScores = async (): Promise<number[]> => {
  const scores = await storage.getItem<number[]>('scores');
  return scores || [];
};
