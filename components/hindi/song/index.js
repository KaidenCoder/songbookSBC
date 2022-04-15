import React, { useContext } from 'react';
import { GlobalContext } from '../../../context';
import TextSlider from '../../slider';

const HindiSong = () => {
  const { hindiSong } = useContext(GlobalContext);
  return (
    <div style={{ marginTop: '10em' }}>
      {hindiSong && <TextSlider data={hindiSong.lyrics} />}
    </div>
  );
};

export default HindiSong;
