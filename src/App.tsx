import ExternalLink from './ExternalLink';
import styles from './App.module.css';

function App() {
  return (
    <main className={styles.main}>
      <section>
        <img className={styles.headerImage} src="./bull-vectorized-noised.png" alt="bull" />
      </section>
      <section role="contacts">
        <ExternalLink href="https://twitter.com/__samrad">@__samrad</ExternalLink>
      </section>
      <section>
        <h1>Thought Kabinet</h1>
        <p>Welcome to the kabinet where I plan to dump my thoughts and write them down.</p>
        <p>
          I&apos;m a software engineer with focus on web development and I spend most of my time
          inside the devtool jumping between lexical scopes and massaging css styles.
        </p>
        <p>
          The house below is taken from&nbsp;
          <ExternalLink href="https://www.laurentchehere.com/flying-houses">
            Laurent Chehere&apos;s Photography
          </ExternalLink>
        </p>
      </section>
    </main>
  );
}

export default App;
