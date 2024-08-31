# Dark-Light Mode React App

This is a simple dark-light mode application built using React.js. The project demonstrates the use of context for managing themes and React Router for navigating between pages.

## Features:

- Theme Toggle: Switch between dark and light modes with a single button click.
- Routing: Navigate between Home and Blog pages using React Router.
- Responsive UI: A responsive and accessible user interface that adjusts to different screen sizes.

## Project Structure

- App.jsx: The main entry point of the application that handles routing and provides the theme context.
- Context/ThemeContext.jsx: A context provider that manages the application's dark and light themes.
- Pages/Home.jsx: A component that displays the content of the Home page.
- Pages/Blog.jsx: A component that displays the content of the Blog page.
- Components/Navbar.jsx: A navigation bar that allows users to switch themes and navigate between pages.
- style.css: The main stylesheet for the application, defining styles for both dark and light themes.

## How to Run

Clone the project

```bash
  git clone https://github.com/hazecodez/Dark-Light-Mode.git
```

Go to the project directory

```bash
  cd dark-light-mode
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

- Open your browser and navigate to http://localhost:5173 to play the game.

## Learning Objectives

- Implement theme switching using React context.
- Use React Router for handling navigation in a React application.
- Develop a responsive UI with custom styles for dark and light modes.

## Screenshots

![App Screenshot](/public/light.png)
![App Screenshot](/public/dark.png)

## Future Improvements

- Add more pages and features like a contact form or user authentication.
- Enhance the UI with animations for theme transitions.
- Include local storage to persist the selected theme across sessions.
