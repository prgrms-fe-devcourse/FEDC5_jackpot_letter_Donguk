import { Dispatch, useEffect, useState } from 'react';
import { SetStateAction } from 'jotai';
import useSearch from '@/hooks/api/useSearch';
import Search from '@/assets/Search.svg';
import { SearchBarContainer } from './index.style';

interface Props<T> {
  placeholder: string;
  option: 'users' | 'all';
  total: T[];
  setContent: Dispatch<SetStateAction<T[]>>;
}
function SearchBar<T>(props: Props<T>) {
  const { placeholder, option, setContent, total } = props;
  const [keyword, setKeyword] = useState<string>('');
  function handleInputChange(keyword: string) {
    setKeyword(keyword);
  }
  // const { data: searchResult } = useSearch(keyword, option);
  useEffect(() => {
    const test = total?.filter(({ name }) => name.includes(keyword));
    setContent(test);
  }, [keyword]);

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
