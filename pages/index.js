import Head from 'next/head';
import English from '../components/english';
import Footer from '../components/footer';
import EnglishSong from '../components/english/song';

import styles from '../styles/Home.module.css';
import Hindi from '../components/hindi';
import HindiSong from '../components/hindi/song';
import Bengali from '../components/bengali';
import BengaliSong from '../components/bengali/song';
import ShowSongLyrics from '../features/ShowSongLyrics';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className="dropdown-container">
        <English />
        <Hindi />
        <Bengali />
      </div>
      <ShowSongLyrics />
      {/* <Footer /> */}
    </div>
  );
}
