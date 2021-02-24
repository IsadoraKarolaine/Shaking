import { createContext, useState, ReactNode } from 'react';

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

    function levelUP() {
        setLevel(level + 1);
    }
    function StartNewChallenge() {
        const RandomChallengesIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[RandomChallengesIndex];

        SetActiveChallenge(challenge)

    }
    function ResetChallenge() {
        SetActiveChallenge(null);
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
        }}>
            {children}
        </ChallengesContexts.Provider>

    );
}

