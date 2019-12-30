// Two players - "black" and "white" are playing a game. The game consists of several rounds. If a player wins in a round, he is to move again during the next round. If a player loses a round, it's the other player who moves on the next round. Given whose turn it was on the previous round and whether he won, determine whose turn it is on the next round.

function whoseMove(lastPlayer, win) {
  if (win) return lastPlayer;
  if (lastPlayer === "white" && !win) return "black";
  if (lastPlayer === "black" && !win) return "white";
}
