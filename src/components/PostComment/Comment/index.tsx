import { useEffect } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { User } from '@/types/ResponseType';
import Loading from '../Loading';
import * as Style from './index.style';

interface useFormProps {
  commentTitle: string;
  commentContent: string;
}

interface CommentProps {
  register: UseFormRegister<useFormProps>;
  userName: string;
  // data: false | User | undefined;
  // isPending: boolean;
}

function Comment({ register, userName }: CommentProps) {
  return (
    <>
      <Style.CommentContainer>
        {/* {isPending && <Loading loadingSize={32} />} */}

        <Style.CommentTitleInput
          placeholder={userName ? '' : '작성자명을 입력해주세요'}
          value={userName ? userName : undefined}
          {...(userName === ''
            ? {
                ...register('commentTitle', {
                  required: '작성자명은 반드시 입력하셔야합니다.'
                })
              }
            : false)}
        />

        <Style.CommentTitleUnderLine />
        <Style.CommentContent
          placeholder="댓글을 입력하세요"
          {...register('commentContent', {
            required: '댓글 내용은 반드시 입력하셔야합니다.'
          })}
        />
      </Style.CommentContainer>
    </>
  );
}

export default Comment;
