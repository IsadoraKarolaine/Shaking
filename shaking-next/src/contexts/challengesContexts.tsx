import { createContext, useState, ReactNode, useEffect } from 'react';

import challenges from '../../challenges.json'

interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;

}
interface ChallengesContextsData {
    level: number;
    CurrentExperience: number;
    ChallengesCompleted: number;
    levelUP: () => void;
    StartNewChallenge: () => void;
    ResetChallenge: () => void;
    ActiveChallenge: Challenge;
    ExpirienceToNextLevel: number;
    CompletedChallenged: () => void;
}


interface ChallengesProviderProps {
    children: ReactNode;
}
export const ChallengesContexts = createContext({} as ChallengesContextsData);
export function ChallengesProvider({ children }: ChallengesProviderProps) {
    const [level, setLevel] = useState(1);
    const [CurrentExperience, setCurrentExperience] = useState(0);
    const [ChallengesCompleted, setChallengesCompleted] = useState(0);

    const [ActiveChallenge, SetActiveChallenge] = useState(null);

    const ExpirienceToNextLevel = Math.pow((level + 1) * 4, 2)


    useEffect(() => {
        Notification.requestPermission();
    }, [])

    function levelUP() {
        setLevel(level + 1);
    }
    function StartNewChallenge() {
        const RandomChallengesIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[RandomChallengesIndex];

        SetActiveChallenge(challenge)

        new Audio('/notification.mp3').play();

        if (Notification.permission === 'granted') {
            new Notification('Novo desafio ', { body: `valendo ${challenge.amount} xp !` })
        }

    }
    function ResetChallenge() {
        SetActiveChallenge(null);
    }

    function CompletedChallenged() {
        if (!ActiveChallenge) {
            return;
        }
        const { amount } = ActiveChallenge;
        let FinalExperience = CurrentExperience + amount;
        if (FinalExperience >= ExpirienceToNextLevel) {
            FinalExperience = FinalExperience - ExpirienceToNextLevel;
            levelUP();
        }
        setCurrentExperience(FinalExperience);
        SetActiveChallenge(null);
        setChallengesCompleted(ChallengesCompleted + 1);
    }



    return (
        <ChallengesContexts.Provider value={{
            level,
            CurrentExperience,
            ChallengesCompleted,
            levelUP,
            StartNewChallenge,
            ActiveChallenge,
            ResetChallenge,
            ExpirienceToNextLevel,
            CompletedChallenged,
        }}>
            {children}
        </ChallengesContexts.Provider>

    );
}

