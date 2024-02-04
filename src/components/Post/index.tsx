import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Toaster } from 'react-hot-toast';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Modal from '@components/Common/Modal';
import { useAtomValue } from 'jotai';
import { usePostCreateMutation } from '@/hooks/api/usePostCreateMutation';
import { channelNameAtom, tokenAtom } from '@/store/auth';
import { darkAtom } from '@/store/theme';
import Button from '../Common/Button';
import Textarea from '../Common/Textarea';
import Footer from './Footer';
import Header from './Header';
import Warning from './Warning';
import * as Style from './index.style';

const toastStyle = {
  fontWeight: 600,
  padding: '0.75rem 1rem',
  marginTop: '0.5rem'
};

export interface useFormProps {
  letterTitle: string;
  letterContent: string;
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
  const { state } = useLocation();
  const [modalState, setModalState] = useState(true);
  const navigate = useNavigate();
  const allowRangeData = JSON.parse(state.channelDescription);

  const { mutationPostCreate } = usePostCreateMutation();

  const {
    register,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    handleSubmit
  } = useForm<useFormProps>({
    mode: 'onSubmit',
    defaultValues: {
      letterTitle: userName ? userName : '',
      letterContent: ''
    }
  });

  /** 포스트 작성 시 서버로 전송 */
  const onPostSubmit = (submitData: useFormProps) => {
    if (channelId)
      mutationPostCreate({
        title: submitData.letterTitle,
        content: submitData.letterContent,
        image: null,
        channelId,
        color: state.color
      });
  };

  useEffect(() => {
    /** react-hook-form validation */
    if (isSubmitting) {
      errors.letterContent
        ? toast.error(errors.letterContent.message as string)
        : null;
      errors.letterTitle
        ? toast.error(errors.letterTitle.message as string)
        : null;
    }

    if (isSubmitSuccessful) {
      navigate(`/channel/${state.channelName}`);
    }
  }, [isSubmitting, isSubmitSuccessful]);

  return (
    <>
      {!allowRangeData.allowWriteAll ||
        (!JWTtoken && (
          <Modal
            handleModalClose={() => {}}
            width={22}
            height={10}
            visible={modalState}
            type="center"
            children={
              <div>
                <div style={{ textAlign: 'center', whiteSpace: 'pre-wrap' }}>
                  {`해당 채널은 "회원" 또는 "익명으로 체험하기"를 선택한 회원만 편지를 작성할 수 있습니다.\n\n로그인 페이지로 이동하시겠습니까?`}
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    marginTop: '0.5rem'
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
        ))}
      <Style.PostContainer>
        <Header channelName={state.channelName} />
        <Textarea>
          <Textarea.TextareaTitle
            value={
              userName
                ? userName === '익명'
                  ? undefined
                  : userName
                : undefined
            }
            placeholder={
              userName
                ? userName === '익명'
                  ? '작성자명을 입력해주세요(최대 15자)'
                  : userName
                : '작성자명을 입력해주세요(최대 15자)'
            }
            maxLength={15}
            register={register}
          />
          <Textarea.TextareaUnderLine />
          <Textarea.TextareaContent
            placeholder={'내용을 입력하세요'}
            register={register}
          />
        </Textarea>
        <Warning allowRangeData={allowRangeData} />
        <Style.Form onSubmit={handleSubmit(onPostSubmit)}>
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
