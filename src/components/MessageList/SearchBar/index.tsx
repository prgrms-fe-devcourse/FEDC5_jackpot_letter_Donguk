import searchIcon from '@/assets/Search.svg';
import { AuthenticationUser } from '@/types/ResponseType';
import * as Style from './index.style';

interface searchBar {
  userListData: AuthenticationUser[];
  setUserFilterData: React.Dispatch<
    React.SetStateAction<AuthenticationUser[] | undefined>
  >;
}
function SearchBar({ userListData, setUserFilterData }: searchBar) {
  /** 검색바 입력 데이타 변경 함수 */
  const handleSearchBarOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') setUserFilterData(userListData);
    else {
      const filterData = userDataFiltering(userListData, e.target.value);

      filterData.length === 0
        ? setUserFilterData(userListData)
        : setUserFilterData(filterData);
    }
  };

  /** 데이터 필터링 함수 */
  const userDataFiltering = (
    userData: AuthenticationUser[],
    inputData: string
  ) => {
    return userData.filter(({ fullName }) => fullName.includes(inputData));
  };

  return (
    <>
      <Style.SearchBarContainer>
        <Style.SearchIcon src={searchIcon} />
        <Style.SearchBar
          onChange={handleSearchBarOnChange}
          autoFocus={true}
          placeholder=""
        />
      </Style.SearchBarContainer>
    </>
  );
}

export default SearchBar;
