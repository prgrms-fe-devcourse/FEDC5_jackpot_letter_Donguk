import PostList from '@/components/Mypage/PostList';
import styled from '@emotion/styled';

function LikeListPage() {
  const DUMMY = [
    {
      likes: [],
      comments: [],
      _id: '1',
      title: '제목 부분 입니다.',
      channel: { name: '채널주' },
      author: '작성자',
      createdAt: 'string',
      updatedAt: 'string',
      content: '포스트 내용'
    },
    {
      likes: [],
      comments: [],
      _id: '1',
      title: '제목 부분 입니다.',
      channel: { name: '채널주' },
      author: '작성자',
      createdAt: 'string',
      updatedAt: 'string',
      content: '포스트 내용'
    },
    {
      likes: [],
      comments: [],
      _id: '1',
      title: '제목 부분 입니다.',
      channel: { name: '채널주' },
      author: '작성자',
      createdAt: 'string',
      updatedAt: 'string',
      content: '포스트 내용'
    },
    {
      likes: [],
      comments: [],
      _id: '1',
      title: '제목 부분 입니다.',
      channel: { name: '채널주' },
      author: '작성자',
      createdAt: 'string',
      updatedAt: 'string',
      content: '포스트 내용'
    },
    {
      likes: [],
      comments: [],
      _id: '1',
      title: '제목 부분 입니다.',
      channel: { name: '채널주' },
      author: '작성자',
      createdAt: 'string',
      updatedAt: 'string',
      content: '포스트 내용'
    },
    {
      likes: [],
      comments: [],
      _id: '1',
      title: '제목 부분 입니다.',
      channel: { name: '채널주' },
      author: '작성자',
      createdAt: 'string',
      updatedAt: 'string',
      content: '포스트 내용'
    },
    {
      likes: [],
      comments: [],
      _id: '1',
      title: '제목 부분 입니다.',
      channel: { name: '채널주' },
      author: '작성자',
      createdAt: 'string',
      updatedAt: 'string',
      content: '포스트 내용'
    },
    {
      likes: [],
      comments: [],
      _id: '1',
      title: '제목 부분 입니다.',
      channel: { name: '채널주' },
      author: '작성자',
      createdAt: 'string',
      updatedAt: 'string',
      content: '포스트 내용'
    },
    {
      likes: [],
      comments: [],
      _id: '1',
      title: '제목 부분 입니다.',
      channel: { name: '채널주' },
      author: '작성자',
      createdAt: 'string',
      updatedAt: 'string',
      content: '포스트 내용'
    },
    {
      likes: [],
      comments: [],
      _id: '1',
      title: '제목 부분 입니다.',
      channel: { name: '채널주' },
      author: '작성자',
      createdAt: 'string',
      updatedAt: 'string',
      content: '포스트 내용'
    },
    {
      likes: [],
      comments: [],
      _id: '1',
      title: '제목 부분 입니다.',
      channel: { name: '채널주' },
      author: '작성자',
      createdAt: 'string',
      updatedAt: 'string',
      content: '포스트 내용'
    },
    {
      likes: [],
      comments: [],
      _id: '1',
      title: '제목 부분 입니다.',
      channel: { name: '채널주' },
      author: '작성자',
      createdAt: 'string',
      updatedAt: 'string',
      content: '포스트 내용'
    },
    {
      likes: [],
      comments: [],
      _id: '1',
      title: '제목 부분 입니다.',
      channel: { name: '채널주' },
      author: '작성자',
      createdAt: 'string',
      updatedAt: 'string',
      content: '포스트 내용'
    },
    {
      likes: [],
      comments: [],
      _id: '1',
      title: '제목 부분 입니다.',
      channel: { name: '채널주' },
      author: '작성자',
      createdAt: 'string',
      updatedAt: 'string',
      content: '포스트 내용'
    }
  ];
  return (
    <>
      <PostList
        type="like"
        posts={DUMMY}
      />
    </>
  );
}

export default LikeListPage;

export const Container = styled.div`
  width: 100%;
`;
