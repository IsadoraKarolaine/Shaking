

import { useContext } from 'react';
import { ChallengesContexts } from '../contexts/challengesContexts';
import styles from '../styles/components/ChallengeBox.module.css'




export function ChallengeBox() {
    const { ActiveChallenge, ResetChallenge } = useContext(ChallengesContexts)

    return (
        <div className={styles.challengeBoxContainer}>
            {ActiveChallenge ? (
                <div className={styles.challengeActive}>
                    <header> ganhe {ActiveChallenge.amount} xp </header>
                    <main>
                        <img src={`icons/${ActiveChallenge.type}.svg`} />
                        <strong>Novo desafio</strong>
                        <p>{ActiveChallenge.description}</p>
                    </main>
                    <footer>
                        <button
                            type="button"
                            className={styles.challengeFailButton}
                            onClick={ResetChallenge}
                        >falhei
                        </button>
                        <button
                            type="button"
                            className={styles.challengeWinButton}
                        >completei
                        </button>
                    </footer>
                </div>


            ) : (<div className={styles.challengeNotActive}>
                <strong>Finalize um ciclo para receber um desafio </strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level Up" />
                Avance de level completando desafios
            </p>
            </div>
                )}
        </div>
    )
}