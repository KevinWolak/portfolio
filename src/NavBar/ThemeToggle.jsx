import React, { useEffect, useState, useRef } from "react";

export default function ThemeToggle() {
  const [darkThemeEnabled, setDarkThemeEnabled] = useState(
    localStorage.getItem("darkThemeEnabled") === "true"
  );
  const toggleButtonRef = useRef(null);

  function toggleTheme() {
    const newDarkThemeEnabled = !darkThemeEnabled;
    document.body.classList.toggle("dark-mode", newDarkThemeEnabled);
    document
      .querySelectorAll('link[rel="stylesheet"]')
      .forEach((item) => (item.disabled = !newDarkThemeEnabled));
    localStorage.setItem("darkThemeEnabled", newDarkThemeEnabled);
    setDarkThemeEnabled(newDarkThemeEnabled);
  }

  useEffect(() => {
    if (darkThemeEnabled) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("darkThemeEnabled", darkThemeEnabled);
  }, [darkThemeEnabled]);

  return (
    <button
      className="theme-button"
      id="dark-mode-toggle"
      onClick={toggleTheme}
      ref={toggleButtonRef}
    >
      <div>
        <svg
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          {true ? (
            <path
              className="sun "
              d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 1.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm12-7a.8.8 0 0 1-.8.8h-2.4a.8.8 0 0 1 0-1.6h2.4a.8.8 0 0 1 .8.8zM4 12a.8.8 0 0 1-.8.8H.8a.8.8 0 0 1 0-1.6h2.5a.8.8 0 0 1 .8.8zm16.5-8.5a.8.8 0 0 1 0 1l-1.8 1.8a.8.8 0 0 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM6.3 17.7a.8.8 0 0 1 0 1l-1.7 1.8a.8.8 0 1 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM12 0a.8.8 0 0 1 .8.8v2.5a.8.8 0 0 1-1.6 0V.8A.8.8 0 0 1 12 0zm0 20a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-1.6 0v-2.4a.8.8 0 0 1 .8-.8zM3.5 3.5a.8.8 0 0 1 1 0l1.8 1.8a.8.8 0 1 1-1 1L3.5 4.6a.8.8 0 0 1 0-1zm14.2 14.2a.8.8 0 0 1 1 0l1.8 1.7a.8.8 0 0 1-1 1l-1.8-1.7a.8.8 0 0 1 0-1z"
            />
          ) : (
            <path
              className="moon"
              d="M16.5 6A10.5 10.5 0 0 1 4.7 16.4 8.5 8.5 0 1 0 16.4 4.7l.1 1.3zm-1.7-2a9 9 0 0 1 .2 2 9 9 0 0 1-11 8.8 9.4 9.4 0 0 1-.8-.3c-.4 0-.8.3-.7.7a10 10 0 0 0 .3.8 10 10 0 0 0 9.2 6 10 10 0 0 0 4-19.2 9.7 9.7 0 0 0-.9-.3c-.3-.1-.7.3-.6.7a9 9 0 0 1 .3.8z"
            />
          )}
        </svg>
      </div>
    </button>
  );
}
