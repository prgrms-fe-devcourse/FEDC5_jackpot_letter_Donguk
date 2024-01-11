import ProfileImg from '@components/Common/ProfileImg';
import { useAtomValue } from 'jotai';
import { idAtom } from '@/store/auth';
import * as Style from './index.style';

function DM() {
  const userId = useAtomValue(idAtom);

  // 소통한 사용자와의 대화를 불러온 후 sender는 내가 보낸, receiver는 받은 사람을 기준으로 양쪽 각각 정렬
  const DUMMY_DATA = [
    {
      message: 'ㅎㅇㅎㅇ ㅋㅋ',
      sender: {
        image: '',
        _id: '659f9ab256ff5540274c3a43'
      },
      receiver: {
        image: '',
        _id: '???'
      }
    },
    {
      message: 'ddddddddddㄴㄴㅇㅁㄴㅇ',
      sender: {
        image: '',
        _id: ''
      },
      receiver: {
        image: '',
        _id: '???'
      }
    },
    {
      message: 'ㅂ지ㅕ옴너ㅣㅏ윰너ㅏㅊㅁㄴㅇ??',
      sender: {
        image: '',
        _id: '659f9ab256ff5540274c3a43'
      },
      receiver: {
        image: '',
        _id: '???'
      }
    },
    {
      message: '어마너유ㅏㅓㅈㅂ유ㅏ벚유ㅏㅁㄴ',
      sender: {
        image: '',
        _id: '659f9ab256ff5540274c3a43'
      },
      receiver: {
        image: '',
        _id: '???'
      }
    },
    {
      message:
        'ㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅂㅇㅂㅇㅂㅇㅂㅇㅂㅇㅂ ㅇㅂㅇㅂㅇㅂㅇㅂㅇㅂㅇㅂㅇㅂㅇㅂㅇㅂㅇㅂㅇㅂㅇㅂㅇ',
      sender: {
        image: '',
        _id: ''
      },
      receiver: {
        image: '',
        _id: '???'
      }
    },
    {
      message: 'ㅎㅇㅎㅇ ㅋㅋ',
      sender: {
        image: '',
        _id: '659f9ab256ff5540274c3a43'
      },
      receiver: {
        image: '',
        _id: '???'
      }
    },
    {
      message: 'ddddddddddㄴㄴㅇㅁㄴㅇ',
      sender: {
        image: '',
        _id: ''
      },
      receiver: {
        image: '',
        _id: '???'
      }
    },
    {
      message: 'ㅂ지ㅕ옴너ㅣㅏ윰너ㅏㅊㅁㄴㅇ??',
      sender: {
        image: '',
        _id: '659f9ab256ff5540274c3a43'
      },
      receiver: {
        image: '',
        _id: '???'
      }
    },
    {
      message: '어마너유ㅏㅓㅈㅂ유ㅏ벚유ㅏㅁㄴ',
      sender: {
        image: '',
        _id: '659f9ab256ff5540274c3a43'
      },
      receiver: {
        image: '',
        _id: '???'
      }
    },
    {
      message:
        'ㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅂㅇㅂㅇㅂㅇㅂㅇㅂㅇㅂ ㅇㅂㅇㅂㅇㅂㅇㅂㅇㅂㅇㅂㅇㅂㅇㅂㅇㅂㅇㅂㅇㅂㅇㅂㅇ',
      sender: {
        image: '',
        _id: ''
      },
      receiver: {
        image: '',
        _id: '???'
      }
    },
    {
      message: 'ㅎㅇㅎㅇ ㅋㅋ',
      sender: {
        image: '',
        _id: '659f9ab256ff5540274c3a43'
      },
      receiver: {
        image: '',
        _id: '???'
      }
    },
    {
      message: 'ddddddddddㄴㄴㅇㅁㄴㅇ',
      sender: {
        image: '',
        _id: ''
      },
      receiver: {
        image: '',
        _id: '???'
      }
    },
    {
      message: 'ㅂ지ㅕ옴너ㅣㅏ윰너ㅏㅊㅁㄴㅇ??',
      sender: {
        image: '',
        _id: '659f9ab256ff5540274c3a43'
      },
      receiver: {
        image: '',
        _id: '???'
      }
    },
    {
      message: '어마너유ㅏㅓㅈㅂ유ㅏ벚유ㅏㅁㄴ',
      sender: {
        image: '',
        _id: '659f9ab256ff5540274c3a43'
      },
      receiver: {
        image: '',
        _id: '???'
      }
    },
    {
      message:
        'ㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅂㅇㅂㅇㅂㅇㅂㅇㅂㅇㅂ ㅇㅂㅇㅂㅇㅂㅇㅂㅇㅂㅇㅂㅇㅂㅇㅂㅇㅂㅇㅂㅇㅂㅇㅂㅇ',
      sender: {
        image: '',
        _id: ''
      },
      receiver: {
        image: '',
        _id: '???'
      }
    }
  ];
  return (
    <>
      <Style.IntroduceContainer>
        <Style.UserProfile isSize={5}>
          <ProfileImg
            width={5}
            height={5}
            alt="messageList userProfile Image"
            image=""
          />
        </Style.UserProfile>
        <Style.IntroduceText>
          누구누구 님에게 인사를 건네보세요!
        </Style.IntroduceText>
      </Style.IntroduceContainer>
      {DUMMY_DATA.map(({ sender, receiver, message }, idx) => (
        <>
          {userId && sender._id !== userId ? (
            <Style.MessageContainer
              isOrder={true}
              key={idx}>
              <Style.UserProfile isSize={2}>
                <ProfileImg
                  width={2}
                  height={2}
                  alt="messageList userProfile Image"
                  image=""
                />
              </Style.UserProfile>
              <Style.Message>{message}</Style.Message>
            </Style.MessageContainer>
          ) : (
            <Style.MessageContainer
              isOrder={false}
              key={idx}>
              <Style.Message>{message}</Style.Message>
              <Style.UserProfile isSize={2}>
                <ProfileImg
                  width={2}
                  height={2}
                  alt="messageList userProfile Image"
                  image=""
                />
              </Style.UserProfile>
            </Style.MessageContainer>
          )}
        </>
      ))}
    </>
  );
}

export default DM;
