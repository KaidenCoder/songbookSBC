import React, { useContext } from 'react';
import { GlobalContext } from '../../context';
import { ENGLISH_SONGS } from '../../config/english';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { ENGLISH } from '../../constant';

const English = () => {
  const { handleSetEnglishSong, handleLanguageType } =
    useContext(GlobalContext);
  return (
    <div>
      <DropdownButton id="dropdown-basic-button" title={'ENGLISH'}>
        {ENGLISH_SONGS.songs.map((data, idx) => (
          <Dropdown.Item
            key={idx}
            onClick={() => {
              handleSetEnglishSong(data);
              handleLanguageType(ENGLISH);
            }}
          >
            {idx + 1}) {data.name}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </div>
  );
};

export default English;
