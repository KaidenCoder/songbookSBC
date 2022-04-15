import React, { useContext } from 'react';
import { GlobalContext } from '../../../context';
import TextSlider from '../../slider';

const EnglishSong = () => {
  const { englishSong } = useContext(GlobalContext);

  return (
    <div style={{ marginTop: '10em' }}>
      {englishSong && <TextSlider data={englishSong.lyrics} />}
    </div>
  );
};

export default EnglishSong;
