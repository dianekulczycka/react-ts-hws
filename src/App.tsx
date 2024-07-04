import React, {FC} from 'react';
import './App.css';
import {useToggle} from "./Hooks/useToggle";
import {usePrevious} from "./Hooks/usePrevious";

const App: FC = () => {
    const [isBtnToggled, setIsBtnToggled] = useToggle(false);
    return (
        <>
            <button onClick={setIsBtnToggled}>
                {isBtnToggled ? "true" : "false"}
            </button>
        </>
    );
}

export default App;
