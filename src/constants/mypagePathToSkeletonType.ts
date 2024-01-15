interface Props {
  [key: string]: string;
}

export const mypagePathToSkeletonType: Props = {
  '/mypage/follow': 'follow',
  '/mypage/post-list': 'post',
  '/mypage/like-list': 'post',
  '/mypage/comment-list': 'comment',
  '/mypage/received-post-list': 'post'
};
