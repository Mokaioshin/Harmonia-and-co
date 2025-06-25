import React, { useState, useEffect } from 'react';

function Input ({name, placeholder, value}) {
    const [inputValue, setInputValue] = useState("")
    return (  
        <>
        <input
            type="text"
            name= {name}
            placeholder={placeholder}
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            />
        

            <h3>{inputValue}</h3>
            </>

    );
}

export default Input ;