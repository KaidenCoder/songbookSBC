import React, { useContext } from 'react';
import { GlobalContext } from '../../../context';
import TextSlider from '../../slider';

const BengaliSong = () => {
  const { bengaliSong } = useContext(GlobalContext);

  return (
    <div style={{ marginTop: '10em' }}>
      {bengaliSong && <TextSlider data={bengaliSong.lyrics} />}
    </div>
  );
};

export default BengaliSong;
