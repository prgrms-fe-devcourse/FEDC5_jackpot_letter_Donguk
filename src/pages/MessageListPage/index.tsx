import Header from '@components/MessageList/Header';
import SearchBar from '@components/MessageList/SearchBar';
import UserList from '@components/MessageList/UserList';

function MessageListPage() {
  return (
    <>
      <Header />
      <SearchBar />
      <UserList />
    </>
  );
}

export default MessageListPage;
