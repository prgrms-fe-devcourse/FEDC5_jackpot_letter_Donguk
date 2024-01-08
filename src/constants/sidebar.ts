export const PATHNAME: PathnameType = {
  '/mypage/profile-update': '프로필 수정',
  '/mypage/follow': '팔로워 팔로잉',
  '/mypage/post-list': '작성한 주머니',
  '/mypage/like-list': '좋아요한 댓글',
  '/mypage/comment-list': '작성한 댓글',
  '/mypage/received-post-list': '나에게 온 주머니',
  '/mypage/password-update': '비밀번호 변경'
};

interface PathnameType {
  [key: string]: string;
}
