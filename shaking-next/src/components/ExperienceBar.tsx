import { useContext } from 'react';
import { ChallengesContexts } from '../contexts/challengesContexts';
import styles from '../styles/components/ExperienceBar.module.css';
export function ExperienceBar() {
    const { CurrentExperience, ExpirienceToNextLevel } = useContext(ChallengesContexts);

    const PercentToNextLevel = Math.round(CurrentExperience * 100) / ExpirienceToNextLevel;

    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>


            <div>

                <div style={{ width: `${PercentToNextLevel}%` }} />

                <span className={styles.currentExperience} style={{ left: `${PercentToNextLevel}%` }}>
                    {CurrentExperience} xp

                </span>
            </div>
            <span>{ExpirienceToNextLevel} xp</span>



        </header>
    );
}