import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkModeEnabled = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkModeEnabled);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <button onClick={toggleDarkMode}>
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      <p>
        This is an example text. In dark mode, the background and text colors will change.
      </p>
    </div>
  );
};

export default DarkModeToggle;
