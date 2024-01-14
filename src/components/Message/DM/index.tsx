import { useEffect, useRef } from 'react';
import ProfileImg from '@components/Common/ProfileImg';
import { useAtomValue } from 'jotai';
import { useGetMessagesQuery } from '@/hooks/api/useGetMessagesQuery';
import { idAtom } from '@/store/auth';
import { Message, User } from '@/types/ResponseType';
import * as Style from './index.style';

interface DMprops {
  receiverData: User;
}

function DM({ receiverData }: DMprops) {
  const userId = useAtomValue(idAtom);
  const { data: messageData } = useGetMessagesQuery(receiverData?._id);
  const underScrollRef = useRef<HTMLDivElement | null>(null);

  /** 상대가 가장 마지막에 읽은 쪽지 읽음 처리 함수 */
  const readCheck = (idx: number, messageData: Message[]) => {
    if (idx === messageData.length - 1)
      return <Style.opponentCheck key={idx}>읽음</Style.opponentCheck>;

    if (messageData[idx].seen === true && messageData[idx + 1].seen === false)
      return <Style.opponentCheck key={idx}>읽음</Style.opponentCheck>;
  };

  useEffect(() => {
    /** 대화 상자 맨 아래로 자동 스크롤 */
    underScrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messageData]);
  return (
    <>
      <Style.IntroduceContainer>
        <Style.UserProfile isSize={5}>
          <ProfileImg
            width={5}
            height={5}
            alt="messageList userProfile Image"
            image={receiverData.image ? receiverData.image : ''}
          />
        </Style.UserProfile>
        <Style.IntroduceText>
          <Style.userName>{receiverData.fullName}</Style.userName>님에게 인사를
          건네보세요!
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
                    image={receiverData.image ? receiverData.image : ''}
                  />
                </Style.UserProfile>
                <Style.Message>{message}</Style.Message>
              </Style.MessageContainer>
            ) : (
              <Style.MessageContainer
                isOrder={false}
                key={idx}>
                {readCheck(idx, messageData)}
                <Style.Message>{message}</Style.Message>
                <Style.UserProfile isSize={2}>
                  <ProfileImg
                    width={2}
                    height={2}
                    alt="messageList userProfile Image"
                    image={
                      messageData[0].sender._id === userId
                        ? messageData[0].sender.image
                          ? messageData[0].sender.image
                          : ''
                        : messageData[0].receiver.image
                          ? messageData[0].receiver.image
                          : ''
                    }
                  />
                </Style.UserProfile>
              </Style.MessageContainer>
            )}
          </>
        ))}
      <div ref={underScrollRef}></div>
    </>
  );
}

export default DM;
