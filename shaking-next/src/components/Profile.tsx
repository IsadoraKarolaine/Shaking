import { useContext } from 'react';
import { ChallengesContexts } from '../contexts/challengesContexts';
import styles from '../styles/components/Profile.module.css'
export function Profile() {

    const { level } = useContext(ChallengesContexts);
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/IsadoraKarolaine.png" alt="Isadora" />
            <div>
                <strong>Isadora Karolaine</strong>
                <p>
                    <img src="icons/level.svg" alt="level" />
                 level {level}</p>
            </div>
        </div>
    );
}