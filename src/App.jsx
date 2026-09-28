import "./App.css";

function App() {
  return (
    <div className="portfolio">
      <header>
        <h1>Sanika H P</h1>
        <p>AI & Data Science Student | Data Analyst | Developer</p>
      </header>

      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>

      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>
            Hi, I’m Sanika H P, an Artificial Intelligence and Data Science
            student at REVA University, Bengaluru. I am interested in Python,
            data analysis, web development, and building practical technology
            projects.
          </p>
        </section>

        <section id="projects">
          <h2>Projects</h2>

          <div className="project-card">
            <h3>House Price Prediction</h3>
            <p>
              A Python and machine learning project that predicts house prices
              using relevant housing features and data analysis techniques.
            </p>
            <a
              href="https://github.com/Sanika-hp/house-price-prediction"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
          </div>

          <div className="project-card">
            <h3>Surveillance Robot</h3>
            <p>
              An IoT-based surveillance robot project designed for monitoring
              and remote observation.
            </p>
            <a
              href="https://github.com/Sanika-hp/surveillance-robot"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
          </div>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <div className="skills">
            <span>Python</span>
            <span>Data Analysis</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Git</span>
            <span>GitHub</span>
          </div>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>
            Email:{" "}
            <a href="mailto:sanikahp4@gmail.com">sanikahp4@gmail.com</a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/sanika-h-p-a76387428/"
              target="_blank"
              rel="noreferrer"
            >
              View LinkedIn
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/Sanika-hp"
              target="_blank"
              rel="noreferrer"
            >
              View GitHub
            </a>
          </p>
        </section>
      </main>

      <footer>
        <p>© 2026 Sanika H P</p>
      </footer>
    </div>
  );
}

export default App;