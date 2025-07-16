# VW Digital Hub

# Project Setup and Execution

This guide will walk you through setting up and running the project locally, as well as how to interact with the deployed application.

---

## Local Development Setup

To get the project running on your local machine, follow these steps:

1.  **Install Dependencies**
    Navigate to the project's root directory in your terminal and run:

    ```bash
    npm install
    ```

2.  **Launch the Server**
    Open a new terminal window, navigate to the project's root, and start the server:

    ```bash
    npm run start:server
    ```

    _The server persists data in `db.json`, a JSON file located in the project's root directory._

3.  **Launch the Client**
    Open _another_ new terminal window, navigate to the project's root, and start the client:
    ```bash
    npm run start:client
    ```
    _The client connects to the server using the `VITE_VW_API_URL` environment variable. By default, this is configured to point to `localhost:3004`, where your local server should be running._

---

## Running the tests

```bash
   npm run test
```

---

## Running the linter

```bash
   npm run lint
```

# Project explanations

This is a project created from scratch using **Vite**, to which I manually added the dependencies as needed. The purpose was to build a solid and well-structured foundation that could eventually be split into a monorepo.

## 📦 Dependencies Used

1. **react-query**
   Used as the client state manager. Everything related to server communication is located in the `src/api` folder, organized into mutations and queries ready to be imported and used with React Query. There's also a folder called `primitives` that contains primitive methods for server calls and utility functions.

2. **styled-components**
   Used for styling organization. I chose this library because I’m experienced with it and it allowed for faster development.

3. **react-router v7**
   Used in its **Data API mode** for routing and navigation.

4. **react-icons**
   A library of ready-to-use, easily importable icons.

5. **use-debounce**
   A hook used to debounce the search input’s callback. I used it to save time instead of creating a custom hook from scratch.

6. **react-intersection-observer**
   A small library that helped implement infinite scroll for the paginated notes display.

## 🛠 Development Tools

- **Vitest**: Testing framework.
- **React Testing Library**: For writing tests.
- **ESLint**: Linting tool.
- **json-server**: Used to mock the backend. Notes are persisted in a `db.json` file at the root of the project.

## 📁 Folder Structure

### `ds` (Design System)

This folder acts as a mini design system for the app. It contains styled components, as well as color and typography tokens under the `config` folder. The configuration includes a global CSS reset.

Initially, I intended to move this folder into a separate package within a **monorepo** and publish it as an **npm library**. Although I didn't have time to do so, the folder has no dependencies on other parts of the app, making this change straightforward if needed.

### `api`

Contains everything related to communication with the backend API. Like the design system, it’s also structured to be easily moved to its own monorepo package if necessary.

### `components`

Includes the reusable components developed throughout the project. The key structural components are:

- `Layout`
- `Content`
- `Header`
- `SideBar`

It also includes two global service components:

- `Modal`
- `Toast`

These components follow a self-contained architecture, each with:

- The main component file
- A context for managing internal state
- A set of custom hooks that expose a clear interface to the rest of the app

If I had more time, I would move these into their own library within the monorepo.

## ✅ Testing & CI

Due to time limitations, I was only able to write unit tests for the most basic components in the design system folder. The environment was configured using **Vitest** and **React Testing Library**.

For **CI/CD**, I set up basic workflows using **GitHub Actions**:

- **Pull Requests**: Run linting and tests
- **Pushes**: Run linting, tests, build the app, and deploy to **Vercel**