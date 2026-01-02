# 🖩 Productivity Rating

A simple and responsive productivity calculator that helps users measure their daily productivity based on **hours worked** and **tasks completed**. [Calculate here](https://guibis.github.io/ProductivityCalculator/)

The tool generates a **score from 0 to 100** and classifies productivity as **Poor, Average, Good, or Excellent**, displaying the result in a dialog box with an option to recalculate.

---

## 🚀 Features

- Input daily worked hours and completed tasks
- Automatic productivity score calculation (0–100)
- Productivity classification:
  - **0–30:** Poor
  - **30–50:** Average
  - **50–80:** Good
  - **80–100:** Excellent
- Modal dialog to display results
- Recalculate button to reset inputs

---

## 📊 How the Score Works

The score is calculated based on the ratio of tasks completed per hour:

- **8 tasks in 4 hours → 100**
- **4 tasks in 4 hours → 50**
- **2 tasks in 4 hours → 25**

The final score is always clamped between **0 and 100**.

---

## 🛠️ Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript**
