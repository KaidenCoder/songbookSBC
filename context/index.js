import React, { createContext, useState } from 'react';
import { ENGLISH } from '../constant';

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [englishSong, setEnglishSong] = useState();
  const [hindiSong, setHindiSong] = useState();
  const [bengaliSong, setBengaliSong] = useState();
  const [languageType, setLanguageType] = useState(ENGLISH);

  const handleSetEnglishSong = (data) => {
    setEnglishSong(data);
  };

  const handleSetHindiSong = (data) => {
    setHindiSong(data);
  };

  const handleSetBengaliSong = (data) => {
    setBengaliSong(data);
  };
  const handleLanguageType = (data) => {
    setLanguageType(data);
  };

  return (
    <GlobalContext.Provider
      value={{
        englishSong,
        hindiSong,
        bengaliSong,
        languageType,
        setEnglishSong,
        handleSetEnglishSong,
        handleSetHindiSong,
        handleSetBengaliSong,
        handleLanguageType,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
