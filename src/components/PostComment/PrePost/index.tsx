import { useState } from 'react';
import { useAtomValue } from 'jotai';
import { useGetPostDetailQuery } from '@/hooks/api/useGetPostDetailQuery';
import { useLikeCreateMutation } from '@/hooks/api/useLikeCreateMutation';
import { useLikeDeleteMutation } from '@/hooks/api/useLikeDeleteMutation';
import { idAtom, tokenAtom } from '@/store/auth';
import Loading from '../Loading';
import * as Style from './index.style';

interface PrePostProps {
  postId: string;
}

function PrePost({ postId }: PrePostProps) {
  const JWTtoken = useAtomValue(tokenAtom);
  const userId = useAtomValue(idAtom);
  const { mutationLikeCreate } = useLikeCreateMutation(postId); // 특정 포스트 좋아요 추가
  const { mutationLikeDelete } = useLikeDeleteMutation(postId); // 특정 포스트 좋아요 제거

  const { data, isPending } = useGetPostDetailQuery(postId);
  console.log(data);

  /** 포스트 좋아요 추가 함수 */
  const handleLikeCreateClick = async () => {
    /** 특정 포스트 상세 보기*/
    const isUserId = data?.likes.find(({ user }) => user === userId);

    if (!isUserId) {
      mutationLikeCreate({
        JWTtoken,
        postId
      });
    } else {
      mutationLikeDelete({
        JWTtoken,
        id: isUserId._id
      });
    }
  };

  const titleAndCommentList = (comment: string) => {
    try {
      return JSON.parse(comment);
    } catch (error) {
      return false;
    }
  };

  return (
    <>
      <Style.PrePostAndCommentContainer>
        <Style.PrePostContainer>
          {isPending && <Loading loadingSize={32} />}
          {data && (
            <Style.PrePostInnerTitle>
              {JSON.parse(data.title).title}
            </Style.PrePostInnerTitle>
          )}
          <Style.PrePostUnnerline />
          {isPending && <Loading loadingSize={32} />}
          {data && (
            <Style.PrePostContent>
              {data ? JSON.parse(data.title).content : '준비중'}
            </Style.PrePostContent>
          )}
        </Style.PrePostContainer>
        <Style.LikeCommentContainer>
          <Style.LikeLogoContainer onClick={handleLikeCreateClick}>
            <Style.LikeLogo src="/src/assets/Like.svg" />
            <Style.ListCount>{data?.likes.length}</Style.ListCount>
          </Style.LikeLogoContainer>
          <Style.CommentCountText>
            총{' '}
            <Style.CommentCount>{data?.comments.length}개</Style.CommentCount>의
            댓글이 있습니다.
          </Style.CommentCountText>
        </Style.LikeCommentContainer>
        <Style.PreCommentContainer>
          {data?.comments.map(
            ({ comment }, idx) =>
              titleAndCommentList(comment) && (
                <Style.PrePostComment key={idx}>
                  <Style.PrePostUserName>
                    {`${titleAndCommentList(comment).title} `}
                  </Style.PrePostUserName>
                  {titleAndCommentList(comment).comment}
                </Style.PrePostComment>
              )
          )}
        </Style.PreCommentContainer>
      </Style.PrePostAndCommentContainer>
    </>
  );
}

export default PrePost;
