import ProfileImg from '@components/Common/ProfileImg';
import { useAtomValue } from 'jotai';
import { useGetMessagesQuery } from '@/hooks/api/useGetMessagesQuery';
import { idAtom } from '@/store/auth';
import { User } from '@/types/ResponseType';
import * as Style from './index.style';

interface DMprops {
  JWTtoken: string;
  receiverData: User | undefined | '';
}
function DM({ JWTtoken, receiverData }: DMprops) {
  const userId = useAtomValue(idAtom);
  const { data: messageData } = useGetMessagesQuery(
    JWTtoken,
    receiverData?._id
  );

  console.log(messageData);
  // 소통한 사용자와의 대화를 불러온 후 sender는 내가 보낸, receiver는 받은 사람을 기준으로 양쪽 각각 정렬

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
      {messageData &&
        messageData.map(({ sender, message }, idx) => (
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
