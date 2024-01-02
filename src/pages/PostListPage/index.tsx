import PostList from '@/components/Mypage/PostList';

function PostListPage() {
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
      _id: '2',
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
      _id: '3',
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
      _id: '4',
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
      _id: '5',
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
      _id: '6',
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
      _id: '7',
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
      _id: '8',
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
      _id: '9',
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
      _id: '10',
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
      _id: '11',
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
      _id: '12',
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
      _id: '13',
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
      _id: '14',
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
        type="post"
        posts={DUMMY}
      />
    </>
  );
}

export default PostListPage;
