interface AlarmType {
  en: 'Comment' | 'Message' | 'Follow' | 'Like';
  ko: string;
  onClick: (link: string) => void;
}

export const Type: { [key: number]: AlarmType } = {
  0: {
    en: 'Comment',
    ko: '댓글이 도착했어요',
    onClick: (link) => `/post/${link}`
  },
  1: {
    en: 'Message',
    ko: '메시지가 도착했어요',
    onClick: (link) => `/message/${link}`
  },
  2: {
    en: 'Follow',
    ko: '나를 팔로우하기 시작했어요',
    onClick: (link) => `/message/${link}`
  },
  3: {
    en: 'Like',
    ko: '내 포스트를 좋아해요',
    onClick: (link) => `/post/${link}`
  }
};
