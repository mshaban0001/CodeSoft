import React, { useState, useEffect } from 'react';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('');

  const appendToDisplay = (value) => {
    setDisplayValue(displayValue + value);
  };

  const calculateResult = () => {
    try {
      const result = eval(displayValue);
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  const resetCalculator = () => {
    setDisplayValue('');
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key } = event;
      if (
        !isNaN(key) ||
        key === '+' ||
        key === '-' ||
        key === '*' ||
        key === '/' ||
        key === '.'
      ) {
        appendToDisplay(key);
      } else if (key === 'Enter') {
        calculateResult();
      } else if (key === 'Backspace') {
        setDisplayValue(displayValue.slice(0, -9));
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [appendToDisplay, calculateResult, displayValue]);

  return (
    <>
      <div className='w-full h-[100vh] flex justify-center items-center'>
        <div className='bg-[#3e64ff] opacity-85 w-[30rem] h-[30rem] rounded-[2.5rem] p-8'>
          <div className='w-full h-20 '>
            <input
              className='w-full h-full rounded-2xl p-8 text-3xl border-2 outline-none'
              type='text'
              value={displayValue}
              readOnly
            />
          </div>
          <div className='calculator grid grid-cols-4 gap-8 pt-6 p-2'>
            <button
              className='bg-blue-800 py-3 text-white text-4xl rounded-lg '
              onClick={() => appendToDisplay('7')}>
              7
            </button>
            <button
              className='bg-blue-800 py-3 text-white text-4xl rounded-lg '
              onClick={() => appendToDisplay('8')}>
              8
            </button>
            <button
              className='bg-blue-800 py-3 text-white text-4xl rounded-lg '
              onClick={() => appendToDisplay('9')}>
              9
            </button>
            <button
              className='bg-blue-800 py-3 text-white text-4xl rounded-lg '
              onClick={() => appendToDisplay('+')}>
              +
            </button>
            <button
              className='bg-blue-800 py-3 text-white text-4xl rounded-lg '
              onClick={() => appendToDisplay('4')}>
              4
            </button>
            <button
              className='bg-blue-800 py-3 text-white text-4xl rounded-lg '
              onClick={() => appendToDisplay('5')}>
              5
            </button>
            <button
              className='bg-blue-800 py-3 text-white text-4xl rounded-lg '
              onClick={() => appendToDisplay('6')}>
              6
            </button>
            <button
              className='bg-blue-800 py-3 text-white text-4xl rounded-lg '
              onClick={() => appendToDisplay('-')}>
              -
            </button>
            <button
              className='bg-blue-800 py-3 text-white text-4xl rounded-lg '
              onClick={() => appendToDisplay('1')}>
              1
            </button>
            <button
              className='bg-blue-800 py-3 text-white text-4xl rounded-lg '
              onClick={() => appendToDisplay('2')}>
              2
            </button>
            <button
              className='bg-blue-800 py-3 text-white text-4xl rounded-lg '
              onClick={() => appendToDisplay('3')}>
              3
            </button>
            <button
              className='bg-blue-800 py-3 text-white text-4xl rounded-lg '
              onClick={calculateResult}>
              =
            </button>
            <button
              className='bg-blue-800 py-3 text-white text-2xl relative left-40 rounded-lg '
              onClick={resetCalculator}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
