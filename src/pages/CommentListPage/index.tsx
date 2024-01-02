import Comments from '@/components/Mypage/Comments';

function CommentListPage() {
  const DUMMY = [
    {
      _id: '1',
      comment: 'string',
      author: 'User',
      post: 'string', // 포스트 id
      createdAt: 'string',
      updatedAt: 'string',
      title: '제목 부분',
      postAuthor: '포스트 저자'
    },
    {
      _id: '2',
      comment: 'string',
      author: 'User',
      post: 'string', // 포스트 id
      createdAt: 'string',
      updatedAt: 'string',
      title: '제목 부분',
      postAuthor: '포스트 저자'
    },
    {
      _id: '3',
      comment: 'string',
      author: 'User',
      post: 'string', // 포스트 id
      createdAt: 'string',
      updatedAt: 'string',
      title: '제목 부분',
      postAuthor: '포스트 저자'
    },
    {
      _id: '4',
      comment: 'string',
      author: 'User',
      post: 'string', // 포스트 id
      createdAt: 'string',
      updatedAt: 'string',
      title: '제목 부분',
      postAuthor: '포스트 저자'
    },
    {
      _id: '5',
      comment: 'string',
      author: 'User',
      post: 'string', // 포스트 id
      createdAt: 'string',
      updatedAt: 'string',
      title: '제목 부분',
      postAuthor: '포스트 저자'
    },
    {
      _id: '6',
      comment: 'string',
      author: 'User',
      post: 'string', // 포스트 id
      createdAt: 'string',
      updatedAt: 'string',
      title: '제목 부분',
      postAuthor: '포스트 저자'
    },
    {
      _id: '7',
      comment: 'string',
      author: 'User',
      post: 'string', // 포스트 id
      createdAt: 'string',
      updatedAt: 'string',
      title: '제목 부분',
      postAuthor: '포스트 저자'
    },
    {
      _id: '8',
      comment: 'string',
      author: 'User',
      post: 'string', // 포스트 id
      createdAt: 'string',
      updatedAt: 'string',
      title: '제목 부분',
      postAuthor: '포스트 저자'
    },
    {
      _id: '9',
      comment: 'string',
      author: 'User',
      post: 'string', // 포스트 id
      createdAt: 'string',
      updatedAt: 'string',
      title: '제목 부분',
      postAuthor: '포스트 저자'
    },
    {
      _id: '10',
      comment: 'string',
      author: 'User',
      post: 'string', // 포스트 id
      createdAt: 'string',
      updatedAt: 'string',
      title: '제목 부분',
      postAuthor: '포스트 저자'
    },
    {
      _id: '11',
      comment: 'string',
      author: 'User',
      post: 'string', // 포스트 id
      createdAt: 'string',
      updatedAt: 'string',
      title: '제목 부분',
      postAuthor: '포스트 저자'
    },
    {
      _id: '12',
      comment: 'string',
      author: 'User',
      post: 'string', // 포스트 id
      createdAt: 'string',
      updatedAt: 'string',
      title: '제목 부분',
      postAuthor: '포스트 저자'
    }
  ];
  return (
    <>
      <Comments comments={DUMMY} />
    </>
  );
}

export default CommentListPage;
