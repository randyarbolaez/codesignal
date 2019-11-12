// You are processing the results of an online poll and your task is to exclude answers that might have been submitted by bots from the final results. The poll consists of three questions, the answer to each one is either true or false. You think that a response is suspicious (i.e. it might be from a bot) if all of the submissions are the same.

function isSuspiciousRespondent(ans1, ans2, ans3) {
  return ans1 == ans2 && ans1 == ans3 && ans2 == ans3;
}
