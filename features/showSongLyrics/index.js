import React, { useContext } from 'react';
import BengaliSong from '../../components/bengali/song';
import EnglishSong from '../../components/english/song';
import HindiSong from '../../components/hindi/song';
import { BENGALI, ENGLISH, HINDI } from '../../constant';
import { GlobalContext } from '../../context';

const ShowSongLyrics = () => {
  const { languageType } = useContext(GlobalContext);
  switch (languageType) {
    case ENGLISH:
      return <EnglishSong />;
    case HINDI:
      return <HindiSong />;
    case BENGALI:
      return <BengaliSong />;
    default:
      return <EnglishSong />;
  }
};

export default ShowSongLyrics;
