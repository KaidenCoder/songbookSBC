import React, { useContext } from 'react';
import { GlobalContext } from '../../context';
import { BENGALI_SONGS } from '../../config/bengali';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { BENGALI } from '../../constant';

const Bengali = () => {
  const { handleSetBengaliSong, handleLanguageType } =
    useContext(GlobalContext);
  return (
    <div>
      <DropdownButton id="dropdown-basic-button" title={'BENGALI'}>
        {BENGALI_SONGS.songs.map((data, idx) => (
          <Dropdown.Item
            key={idx}
            onClick={() => {
              handleSetBengaliSong(data);
              handleLanguageType(BENGALI);
            }}
          >
            {idx + 1}) {data.name}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </div>
  );
};

export default Bengali;
