import React, { useEffect, useState, useRef } from 'react';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const TypeEffect = () => {
  const [text, setText] = useState('');
  const wordIndexRef = useRef(0);

  const baseText = 'I m , ';
  const words = ['Software Develper', 'Creator', 'Designer', 'Engineer', 'Coder'];

  const getTypeInterval = () => {
    const randomMs = 100 * Math.random();
    return randomMs < 50 ? 10 : randomMs;
  };

  const typeText = async (startText, textToType) => {
    let currentText = startText;
    for (const char of textToType) {
      currentText += char;
      setText(currentText);
      await sleep(getTypeInterval());
    }
    return currentText;
  };

  const deleteText = async (startText, count) => {
    let currentText = startText;
    for (let i = 0; i < count; i++) {
      currentText = currentText.slice(0, -1);
      setText(currentText);
      await sleep(getTypeInterval());
    }
  };
  useEffect(() => {
    const runTyping = async () => {
      await sleep(1000); // Initial pause
      while (true) {
        const currentWord = words[wordIndexRef.current % words.length];
        let current = '';
        setText('');
        current = await typeText('', baseText);
        current = await typeText(current, currentWord);
        await sleep(2000);
        await deleteText(current, currentWord.length);
        await sleep(500);
        wordIndexRef.current++;
      }
    };
    runTyping();
  }, []);
  return (
    <div className="h-46 w-100 text-white text-2xl font-bold sm:text-4xl font-sans px-4 flex items-center whitespace-nowrap">
      <span>{text}</span>
      <span className="animate-blink ml-1">_</span>
    </div>
  );
};
const style = document.createElement('style');
style.innerHTML = `
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
.animate-blink {
  animation: blink 1s steps(2, start) infinite;
}
`;
document.head.appendChild(style);
export default TypeEffect;
