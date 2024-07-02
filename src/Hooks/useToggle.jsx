import {useState} from "react";

// формат jsx через те що на етапі підв'язування до кнопки як івент хендлер воно не хоче працювати
// через помилку типізації, як її вирішити я пока не знаю) але я зроблю потім

const useToggle = (initVal) => {
    const [val, setVal] = useState(initVal);

    const toggle = () => {
        setVal(prevVal => !prevVal);
        console.log("toggle worked");
    };

    return [val, toggle];
};

export {useToggle};