import { useEffect, useState } from 'react';
import Search from '@/assets/Search.svg';
import { SearchBarContainer } from './index.style';

interface Props {
  placeholder: string;
  option?: 'all';
  handleChangeKeyword: (keyword: string) => void;
}

function SearchBar(props: Props) {
  const { placeholder, handleChangeKeyword } = props;
  const [keyword, setKeyword] = useState<string>('');

  useEffect(() => {
    handleChangeKeyword(keyword);
  }, [keyword]);

  const handleInputChange = (keyword: string) => {
    setKeyword(keyword);
  };

  return (
    <SearchBarContainer>
      <input
        type="text"
        value={keyword}
        onChange={(e) => handleInputChange(e.target.value)}
        placeholder={placeholder}
      />
      <img
        src={Search}
        alt="search-button"
      />
    </SearchBarContainer>
  );
}

export default SearchBar;
