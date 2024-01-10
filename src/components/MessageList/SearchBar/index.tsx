import * as Style from './index.style';

function SearchBar() {
  return (
    <>
      <Style.SearchBarContainer>
        <Style.SearchIcon src="/src/assets/search.svg" />
        <Style.SearchBar />
      </Style.SearchBarContainer>
    </>
  );
}

export default SearchBar;
