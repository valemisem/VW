import type { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  overflow: auto;

  margin: 0 auto;
  padding: 2rem;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.05);
  border-radius: 8px;

  h1 {
    font: var(--hero-big);
  }

  h2 {
    font: var(--hero-small);
    margin-top: 2.5rem;
    margin-bottom: 1rem;
  }

  h3 {
    font: var(--hero-small);
    margin-top: 2rem;
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 1rem;
  }

  ul,
  ol {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
    list-style-type: disc;
  }

  & > ol {
    list-style-type: decimal;
  }

  code {
    color: var(--dark-100);
    background-color: #e2e8f0;
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-family: monospace;
    font-size: 0.95rem;
  }

  a {
    color: #2b6cb0;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const Home: FC = () => {
  return (
    <Container>
      <h1>VW Digital Hub</h1>

      <p>
        This is a project created from scratch using <strong>Vite</strong>, to
        which I manually added the dependencies as needed. The purpose was to
        build a solid and well-structured foundation that could eventually be
        split into a monorepo.
      </p>

      <h2>📦 Dependencies Used</h2>
      <ol>
        <li>
          <strong>react-query</strong>
          <br />
          Used as the client state manager. Everything related to server
          communication is located in the <code>src/api</code> folder, organized
          into mutations and queries ready to be imported and used with React
          Query. There's also a folder called <code>primitives</code> that
          contains primitive methods for server calls and utility functions.
        </li>
        <li>
          <strong>styled-components</strong>
          <br />
          Used for styling organization. I chose this library because I’m
          experienced with it and it allowed for faster development.
        </li>
        <li>
          <strong>react-router v7</strong>
          <br />
          Used in its <strong>Data API mode</strong> for routing and navigation.
        </li>
        <li>
          <strong>react-icons</strong>
          <br />A library of ready-to-use, easily importable icons.
        </li>
        <li>
          <strong>use-debounce</strong>
          <br />A hook used to debounce the search input’s callback. I used it
          to save time instead of creating a custom hook from scratch.
        </li>
        <li>
          <strong>react-intersection-observer</strong>
          <br />A small library that helped implement infinite scroll for the
          paginated notes display.
        </li>
      </ol>

      <h2>🛠 Development Tools</h2>
      <ul>
        <li>
          <strong>Vitest</strong>: Testing framework.
        </li>
        <li>
          <strong>React Testing Library</strong>: For writing tests.
        </li>
        <li>
          <strong>ESLint</strong>: Linting tool.
        </li>
        <li>
          <strong>json-server</strong>: Used to mock the backend. Notes are
          persisted in a <code>db.json</code> file at the root of the project.
        </li>
      </ul>

      <h2>📁 Folder Structure</h2>

      <h3>
        <code>ds</code> (Design System)
      </h3>
      <p>
        This folder acts as a mini design system for the app. It contains styled
        components, as well as color and typography tokens under the{" "}
        <code>config</code> folder. The configuration includes a global CSS
        reset.
      </p>
      <p>
        Initially, I intended to move this folder into a separate package within
        a <strong>monorepo</strong> and publish it as an{" "}
        <strong>npm library</strong>. Although I didn't have time to do so, the
        folder has no dependencies on other parts of the app, making this change
        straightforward if needed.
      </p>

      <h3>
        <code>api</code>
      </h3>
      <p>
        Contains everything related to communication with the backend API. Like
        the design system, it’s also structured to be easily moved to its own
        monorepo package if necessary.
      </p>

      <h3>
        <code>components</code>
      </h3>
      <p>
        Includes the reusable components developed throughout the project. The
        key structural components are:
      </p>
      <ul>
        <li>
          <code>Layout</code>
        </li>
        <li>
          <code>Content</code>
        </li>
        <li>
          <code>Header</code>
        </li>
        <li>
          <code>SideBar</code>
        </li>
      </ul>
      <p>It also includes two global service components:</p>
      <ul>
        <li>
          <code>Modal</code>
        </li>
        <li>
          <code>Toast</code>
        </li>
      </ul>
      <p>These components follow a self-contained architecture, each with:</p>
      <ul>
        <li>The main component file</li>
        <li>A context for managing internal state</li>
        <li>
          A set of custom hooks that expose a clear interface to the rest of the
          app
        </li>
      </ul>
      <p>
        If I had more time, I would move these into their own library within the
        monorepo.
      </p>

      <h2>✅ Testing & CI</h2>
      <p>
        Due to time limitations, I was only able to write unit tests for the
        most basic components in the design system folder. The environment was
        configured using <strong>Vitest</strong> and{" "}
        <strong>React Testing Library</strong>.
      </p>
      <p>
        Although I aimed to showcase my own development skills, I did make
        limited use of <strong>AI</strong> (ChatGPT) to help generate some unit
        tests and to solve specific project configuration issues. All other code
        was written manually.
      </p>
      <p>
        For <strong>CI/CD</strong>, I set up basic workflows using{" "}
        <strong>GitHub Actions</strong>:
      </p>
      <ul>
        <li>
          <strong>Pull Requests</strong>: Run linting and tests
        </li>
        <li>
          <strong>Pushes</strong>: Run linting, tests, build the app, and deploy
          to <strong>Vercel</strong>
        </li>
      </ul>

      <p>
        🚀 <strong>Live app</strong>:{" "}
        <a href="https://vw-digital-hub.vercel.app/" target="_blank">
          https://vw-digital-hub.vercel.app/
        </a>
      </p>
    </Container>
  );
};
