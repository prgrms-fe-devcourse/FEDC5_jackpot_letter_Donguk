import * as Style from './index.style';

function PostSkeleton() {
  return (
    <div className="skeloton-container">
      {[1, 2, 3, 4, 5, 6].map((index) => (
        <Style.PostItem key={index}>
          <Style.Item className="post-title"></Style.Item>
          <Style.Item className="post-content"></Style.Item>
          <Style.PostInfo>
            <Style.Item width={30}></Style.Item>
            <Style.Item width={68}></Style.Item>
          </Style.PostInfo>
        </Style.PostItem>
      ))}
    </div>
  );
}

export default PostSkeleton;
