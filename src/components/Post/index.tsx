import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Toaster } from 'react-hot-toast';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ShortLogo from '@components/Common/Logo/ShortLogo';
import Modal from '@components/Common/Modal';
import { useAtomValue } from 'jotai';
// import useChannelListQuery from '@/hooks/api/useChannelListQuery';
// import { useGetPostDetailQuery } from '@/hooks/api/useGetPostDetailQuery';
import { usePostCreateMutation } from '@/hooks/api/usePostCreateMutation';
import { channelNameAtom, tokenAtom } from '@/store/auth';
import { darkAtom } from '@/store/theme';
import Button from '../Common/Button';
import Footer from './Footer';
import Header from './Header';
import Letter from './Letter';
import Warning from './Warning';
import * as Style from './index.style';

const toastStyle = {
  fontWeight: 600,
  padding: '0.75rem 1rem',
  marginTop: '0.5rem'
};

export interface useFormProps {
  letterTitle: string;
  letterComment: string;
}

export interface channelInfo {
  allowRangeData: {
    allowViewAll: boolean;
    allowWriteAll: boolean;
    background: string;
    color: string;
  };
}

function Post() {
  const userName = useAtomValue(channelNameAtom);
  const JWTtoken = useAtomValue(tokenAtom);
  const darkMode = useAtomValue(darkAtom);

  const { channelId } = useParams();
  const { mutationPostCreate } = usePostCreateMutation();
  const navigate = useNavigate();
  const { state } = useLocation();
  const [modalState, setModalState] = useState(true);
  const allowRangeData = JSON.parse(state.channelDescription);

  const {
    register,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    handleSubmit
  } = useForm<useFormProps>({
    mode: 'onSubmit',
    defaultValues: {
      letterTitle: userName ? userName : '',
      letterComment: ''
    }
  });
  /** 채널 리스트 */
  // const { data: channelListData } = useChannelListQuery();
  // console.log(channelListData);

  /** 포스트 작성 시 서버로 전송 */
  const onSubmit = (submitData: useFormProps) => {
    if (channelId)
      mutationPostCreate({
        title: submitData.letterTitle,
        content: submitData.letterComment,
        image: null,
        channelId,
        color: state.color
      });
  };

  useEffect(() => {
    /** react-hook-form validation */
    if (isSubmitting) {
      errors.letterComment
        ? toast.error(errors.letterComment.message as string)
        : null;
      errors.letterTitle
        ? toast.error(errors.letterTitle.message as string)
        : null;
    }

    if (isSubmitSuccessful) {
      // toast.success('편지 작성에 성공하였습니다!');
      navigate(`/channel/${state.channelName}`);
    }
  }, [isSubmitting, isSubmitSuccessful]);

  return (
    <>
      {!allowRangeData.allowWriteAll && !JWTtoken && (
        <Modal
          handleModalClose={() => {}}
          width={22}
          height={10}
          visible={modalState}
          type="center"
          children={
            <div>
              <div style={{ textAlign: 'center', whiteSpace: 'pre-wrap' }}>
                {`박 주인의 설정으로 인해 로그인 한 회원만 편지를 작성할 수 있습니다. 로그인 하시겠습니까?`}
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  marginTop: '2.5rem'
                }}>
                <Button
                  content="예"
                  size="md"
                  onClick={() => {
                    navigate('/signin');
                    setModalState(false);
                  }}
                />
                <Button
                  content="아니오"
                  size="md"
                  onClick={() => {
                    navigate('/');
                    setModalState(false);
                  }}
                />
              </div>
            </div>
          }></Modal>
      )}
      <Style.PostContainer>
        <Header channelName={state.channelName} />
        <div style={{ position: 'absolute', top: '0', right: '2rem' }}>
          <ShortLogo darkMode={darkMode} />
        </div>
        <Letter
          darkMode={darkMode}
          userName={userName}
          register={register}
        />
        <Warning allowRangeData={allowRangeData} />
        <Style.Form onSubmit={handleSubmit(onSubmit)}>
          <Footer />
        </Style.Form>
      </Style.PostContainer>
      <Toaster
        toastOptions={{
          style: toastStyle,
          duration: 1000
        }}
      />
    </>
  );
}

export default Post;
