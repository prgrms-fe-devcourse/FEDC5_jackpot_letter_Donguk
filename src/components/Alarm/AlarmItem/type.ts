interface AlarmType {
  type: 'Comment' | 'Message' | 'Follow' | 'Like';
  annouce: string;
  url_path: string;
  url_id: number;
}

export const Type: { [key: number]: AlarmType } = {
  0: {
    type: 'Comment',
    annouce: '댓글이 도착했어요',
    url_path: 'post',
    url_id: 4
  },
  1: {
    type: 'Message',
    annouce: '메시지가 도착했어요',
    url_path: 'message',
    url_id: 1
  },
  2: {
    type: 'Follow',
    annouce: '나를 팔로우하기 시작했어요',
    url_path: 'user',
    url_id: 1
  },
  3: {
    type: 'Like',
    annouce: '내 포스트를 좋아해요',
    url_path: 'post',
    url_id: 4
  }
};
