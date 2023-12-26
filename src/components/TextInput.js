import React, { useRef } from 'react';

function TextInput() {
  const inputRef = useRef(null);

  const handleClearClick = () => {
    inputRef.current.value = '';
  };

  const handleInputChange = () => {
    const text = inputRef.current.value;
    console.log(text);
  };

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        onChange={handleInputChange}
      />
      <button onClick={handleClearClick}>Очистить</button>
      <label>Текущий текст:</label>
    </div>
  );
}

export default TextInput;