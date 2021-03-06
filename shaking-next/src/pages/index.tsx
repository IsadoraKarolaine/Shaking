import Head from 'next/head'


import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";



import styles from "../styles/pages/Home.module.css";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountDownProvider } from '../contexts/CountDownContexts';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shaking</title>
      </Head>
      <ExperienceBar />
      <CountDownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />

          </div>
        </section>
      </CountDownProvider>
    </div>
  );
}
