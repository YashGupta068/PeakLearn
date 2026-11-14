<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# PeakLearn – MCQ Practice Platform

**PeakLearn** is a Computer Science MCQ practice platform built with React.js. It helps students strengthen their technical knowledge through interactive quizzes, topic-wise practice, detailed explanations, and personalized study tools.

The platform provides two learning modes, allowing students to either study questions with visible answers or test their knowledge through interactive quizzes.

## 🚀 Features

### 📚 Topic-Based Learning
- 822+ multiple-choice questions.
- 8 question datasets covering Computer Science subjects.
- Dedicated topics for OOP, Data Structures, DBMS, RDBMS, Operating Systems, and Software Engineering.
- Data Structures questions available in General, Java, and C++ variants.
- Topic search and navigation.

### 📝 Study Mode
- View questions with correct answers.
- Access detailed explanations for every question.
- Navigate between questions.
- Bookmark difficult questions for later revision.

### 🎯 Quiz Mode
- Attempt questions without initially revealing answers.
- Select answers and receive instant feedback.
- Track your question progress.
- Review correct answers and explanations.

### ⚡ Study Tools
- Bookmark management with persistent storage.
- Distraction-free Focus Mode.
- Built-in study timer.
- Light and dark theme support.
- Adjustable question font size.
- Persistent study preferences.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React.js 19 | Frontend development |
| JavaScript | Application logic |
| Tailwind CSS 4 | Styling and responsive UI |
| React Router 7 | Client-side navigation |
| Vite 8 | Development server and build tool |
| LocalStorage | Persistent bookmarks and preferences |
| SessionStorage | Session-based Focus Mode |

## 📂 Project Structure

```text
PeakLearn/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Alert.jsx
│   │   ├── Footer.jsx
│   │   ├── Layout.jsx
│   │   └── StudyToolbar.jsx
│   │
│   ├── data/
│   │   ├── dataStructures.js
│   │   ├── dataStructuresJava.js
│   │   ├── dataStructuresCpp.js
│   │   ├── oops.js
│   │   ├── dbms.js
│   │   ├── rdbms.js
│   │   ├── operatingSystems.js
│   │   ├── softwareEngineering.js
│   │   └── index.js
│   │
│   ├── hooks/
│   │   ├── useBookmarks.js
│   │   ├── useFocusMode.js
│   │   ├── useStudyTimer.js
│   │   └── useTheme.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Topics.jsx
│   │   ├── Practice.jsx
│   │   ├── DataStructuresLanguages.jsx
│   │   └── PrivacyPolicy.jsx
│   │
│   ├── utils/
│   │   └── helpers.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
```

## 💻 Getting Started

Follow these steps to run PeakLearn locally.

### Prerequisites

- Node.js (compatible with your installed Vite version)
- npm

### 1. Clone the repository

```bash
git clone https://github.com/YashGupta068/PeakLearn.git
```

### 2. Navigate to the project directory

```bash
cd PeakLearn
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open in browser

Visit the local URL displayed in your terminal, usually:

```text
http://localhost:5173
```

## 🏗️ Build for Production

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```


## 🎯 Project Goals

- Make Computer Science exam preparation more accessible.
- Provide an interactive environment for practicing technical MCQs.
- Help students understand concepts through detailed explanations.
- Encourage consistent learning through bookmarking and study tools.

## 👨‍💻 Author

**Yash Gupta**

- GitHub: [YashGupta068](https://github.com/YashGupta068)


---

⭐ If you find PeakLearn useful, consider giving the repository a star!
>>>>>>> f8ffae1fb8f77653092b17109d657e0ac3428a8f
