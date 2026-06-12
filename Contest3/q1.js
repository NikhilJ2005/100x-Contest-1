// Data Transformation Hard - Leaderboard with ranks
/* OUTPUT:-[
  { name: "Riya", score: 410, rank: 1 },
  { name: "Kabir", score: 410, rank: 1 },
  { name: "Aman", score: 320, rank: 3 },
  { name: "Sneha", score: 320, rank: 3 },
  { name: "Arjun", score: 250, rank: 5 }
] */
const players = [
  { name: "Aman", score: 320 },
  { name: "Riya", score: 410 },
  { name: "Kabir", score: 410 },
  { name: "Arjun", score: 250 },
  { name: "Sneha", score: 320 }
];

const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

const Leaderboard = sortedPlayers.map((player, index, arr) => {
  const rank = (index > 0 && player.score === arr[index - 1].score) 
    ? arr[index - 1].rank 
    : index + 1;
    
  return { ...player, rank }; 
});

console.log(JSON.stringify(Leaderboard, null, 2));



