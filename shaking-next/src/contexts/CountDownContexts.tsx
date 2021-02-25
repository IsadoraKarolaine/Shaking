import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContexts } from "./challengesContexts";


interface CountDownContextsData {
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    startcountdownInOneSecond: () => void;
    resetCountdown: () => void;
    active: boolean;

}
interface CountDownProviderProps {
    children: ReactNode;
}
let countdownTimeout: NodeJS.Timeout;
export const CountDownContexts = createContext({} as CountDownContextsData);





export function CountDownProvider({ children }: CountDownProviderProps) {
    const { StartNewChallenge } = useContext(ChallengesContexts);

    const [time, setTime] = useState(0.05 * 60);
    const [active, setActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startcountdownInOneSecond() {
        setActive(true);
    }
    function resetCountdown() {
        clearTimeout(countdownTimeout);
        setActive(false);
        setHasFinished(false);
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
    }, [active, time])



    return (

        <CountDownContexts.Provider value={{
            minutes,
            seconds,
            hasFinished,
            startcountdownInOneSecond,
            resetCountdown,
            active,
        }}>
            {children}
        </CountDownContexts.Provider>
    );

}

