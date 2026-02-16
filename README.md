# Quiz App

A simple multiple-choice quiz app built with React and Vite, powered by the Open Trivia Database (OpenTDB).  
You can try it live here: [quiz-z-app.netlify.app](https://quiz-z-app.netlify.app/).

## Features

- **Multiple choice questions** pulled from the OpenTDB API
- **Difficulty selection**: Easy, Medium, Hard
- **Category selection** (e.g. Science: Computers, Sports, History, General Knowledge)
- **Progress indicator** showing current question out of total
- **Instant feedback** on answers (correct/wrong highlight)
- **Final score screen** with option to restart the quiz
- **Clean, minimal UI** with a centered card layout

## Tech Stack

- **React** (with hooks: `useState`, `useEffect`)
- **Vite** (for fast dev server and build)
- **Open Trivia Database API** (`https://opentdb.com/api_config.php`)
- **Plain CSS** for styling (no UI framework)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm (comes with Node)

### Installation

Clone the repository and install dependencies:

git clone https://github.com/<SAM2330>/<Quiz-app>.git
npm install

### Development
Run the development server:
npm run build
Preview the production build locally:
npm run preview
 ## Deployment (Netlify)
This app is deployed on Netlify:
https://quiz-z-app.netlify.app/
Netlify settings for this repo:
Build command: npm run build
Publish directory: dist
Push to your main branch and Netlify will rebuild automatically.
##Project Structure
src/
  Components/
    Quiz.jsx        # Fetches questions, handles quiz flow
    Questions.jsx   # Renders a single question and answers
    Results.jsx     # Shows final score and restart button
  App.jsx           # App shell, difficulty & category controls
  main.jsx          # React entry point
  index.css         # Global styles and layout

App.jsx holds main state: score, result screen, difficulty, category.
Quiz.jsx fetches questions from OpenTDB based on difficulty + category.
Questions.jsx shuffles answers, checks correctness, updates score, and moves on.
Results.jsx shows your score and lets you restart.

### Ideas for later
Show a review of all questions/answers at the end
Track best score in localStorage
Add more categories and question counts
Add tests (React Testing Library + Vitest)

**Made by [Samuel Mulat](https://github.com/SAM2330)**


  
