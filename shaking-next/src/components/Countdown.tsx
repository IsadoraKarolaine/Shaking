import styles from '../styles/components/Countdown.module.css';
import { useState, useEffect } from 'react';


let countdownTimeout: NodeJS.Timeout;

import { ChallengesContexts } from '../contexts/challengesContexts'

import { useContext } from 'react';
export function Countdown() {

    const {StartNewChallenge} = useContext(ChallengesContexts);
    
   
    
    
    const [time, setTime] = useState(0.05 * 60);
    const [active, setActive] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;


    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    const [hasFinished, setHasFinished] = useState(false);
    function startcountdownInOneSecond() {
        setActive(true);
    }
    function resetCountdown() {
        clearTimeout(countdownTimeout);
        setActive(false);
        setTime(0.05 * 60);
    }
    useEffect(() => {
        if (active && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if (active && time === 0) {
            setHasFinished(true);
            setActive(false);
            StartNewChallenge();
        }
    },
        [active, time])

    return (
        <div>
            <div className={styles.countdownContainer}>

                <div>

                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>

                <div>

                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>


                </div>
            </div>
            {hasFinished ? (

                <button disabled
                    className={styles.startCountdownButton}

                >
                    Ciclo encerrado
            
            </button>
            ) : (
                <>
             {active ? (
                <button type="button"
                    className={`${styles.startCountdownButton} ${styles.startCountdownButtonActive}`}
                    onClick={resetCountdown}
                >
                    Abandonar o ciclo
                </button>

            ) : (

                    <button type="button"
                        className={styles.startCountdownButton}
                        onClick={startcountdownInOneSecond}
                    >
                        Iniciar um ciclo

                    </button>
                )}
           </>
             
        )} 
        </div>
    );
}