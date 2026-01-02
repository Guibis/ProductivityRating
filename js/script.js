const hoursInput = document.getElementById("hours");
const tasksInput = document.getElementById("tasks");
const calculateBtn = document.getElementById("calculateBtn");

const dialog = document.getElementById("resultDialog");
const scoreText = document.getElementById("scoreText");
const scoreDescription = document.getElementById("scoreDescription");
const recalculateBtn = document.getElementById("recalculateBtn");

function calculateScore(hours, tasks) {
  let score = (tasks / hours) * 50;
  score = Math.max(0, Math.min(100, score));
  return Math.round(score);
}

function getDescription(score) {
  if (score < 30) return "Poor productivity 😞";
  if (score <= 50) return "Average productivity 😐";
  if (score < 80) return "Good productivity 🙂";
  return "Excellent productivity 🚀";
}


calculateBtn.addEventListener("click", () => {
  const hours = Number(hoursInput.value);
  const tasks = Number(tasksInput.value);

  if (!hours || tasks < 0) {
    scoreText.innerHTML = "Invalid values";
    scoreDescription.innerHTML = "Please enter valid values.";
    dialog.showModal();
    return;
  }

  const score = calculateScore(hours, tasks);
  const description = getDescription(score);

  scoreText.innerHTML = `Your Score: ${score}/100`;
  scoreDescription.innerHTML = description;

  dialog.showModal();
});

recalculateBtn.addEventListener("click", () => {
  dialog.close();
  hoursInput.value = "";
  tasksInput.value = "";
});
