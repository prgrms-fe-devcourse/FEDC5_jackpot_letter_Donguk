import * as Style from './index.style';

function CommentSkeleton() {
  return (
    <div className="container">
      {[1, 2].map((index) => (
        <Style.CommentsContainer key={index}>
          <Style.PostInfoContainer>
            <Style.ProfileImg></Style.ProfileImg>
            <Style.PostTexInfoWrap>
              <Style.Item width={30}></Style.Item>
              <Style.Item></Style.Item>
              <div className="comment-info-wrap">
                <Style.Item width={30}></Style.Item>
                <Style.Item></Style.Item>
              </div>
            </Style.PostTexInfoWrap>
          </Style.PostInfoContainer>
        </Style.CommentsContainer>
      ))}
    </div>
  );
}

export default CommentSkeleton;
