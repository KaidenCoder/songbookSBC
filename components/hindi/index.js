import React, { useContext } from 'react';
import { GlobalContext } from '../../context';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { HINDI } from '../../constant';
import { HINDI_SONGS } from '../../config/hindi';

const Hindi = () => {
  const { handleSetHindiSong, handleLanguageType } = useContext(GlobalContext);
  return (
    <div className="mx-2">
      <DropdownButton id="dropdown-basic-button" title={'HINDI'}>
        {HINDI_SONGS.songs.map((data, idx) => (
          <Dropdown.Item
            key={idx}
            onClick={() => {
              handleSetHindiSong(data);
              handleLanguageType(HINDI);
            }}
          >
            {idx + 1}) {data.name}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </div>
  );
};

export default Hindi;
