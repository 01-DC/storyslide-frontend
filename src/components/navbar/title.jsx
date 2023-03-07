import React, { useState } from 'react';

function Title({ id }) {
    const [inputValue, setInputValue] = useState('My Project ' + id);
    const [vis, setVis] = useState(false)

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            setInputValue(event.target.value);
            setVis(false)
        }
    };

    return (
        <div style={{ fontWeight: "normal" }}>
            {vis ? <input
                id="text-input"
                type="text"
                placeholder={inputValue}
                onKeyPress={handleKeyPress}
                className="rounded py-1 px-2 mb-0 w-full"
            /> : <u onClick={() => setVis(true)} className="  mt-0">{inputValue}</u>}
        </div>
    );
}

export default Title;
