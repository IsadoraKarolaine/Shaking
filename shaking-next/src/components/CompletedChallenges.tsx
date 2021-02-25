import { useContext } from "react";
import { ChallengesContexts } from "../contexts/challengesContexts";
import styles from "../styles/components/CompletedChallenges.module.css";

export function CompletedChallenges() {

    const { ChallengesCompleted } = useContext(ChallengesContexts);
    return (
        <div className={styles.completedChallengesContainer}>
            <span>Desafios completos</span>
            <span>{ChallengesCompleted}</span>
        </div>


    );
}