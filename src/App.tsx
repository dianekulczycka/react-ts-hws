import React, {FC} from 'react';
import './App.css';
import {useToggle} from "./Hooks/useToggle";
import {usePrevious} from "./Hooks/usePrevious";

const App: FC = () => {
    const [isBtnToggled, toggle] = useToggle(false);
    return (
        <>
            <button onClick={toggle}>
                {isBtnToggled ? "true" : "false"}
            </button>
        </>
    );
}

export default App;
