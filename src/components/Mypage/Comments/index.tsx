import { Link } from 'react-router-dom';
import { PATHNAME } from '@/constants/sidebar';
import { UserComment } from '@/types/ResponseType';
import ProfileImg from '../../Common/ProfileImg';
import Empty from '../Empty';
import * as Style from './index.style';

interface CommentsProps {
  comments: UserComment[];
}

function Comments({ comments }: CommentsProps) {
  const selectedSideMenu = PATHNAME[location.pathname];

  return (
    <>
      {comments.length === 0 ? (
        <Empty text={`${selectedSideMenu}이`} />
      ) : (
        <div className="container">
          {comments.map(
            ({
              commentAuthor,
              postAuthor,
              postContent,
              postId,
              comment,
              _id,
              image
            }) => (
              <Style.CommentsContainer key={_id}>
                <Link to={`/comment/${postId}`}>
                  <Style.PostInfoContainer>
                    <ProfileImg
                      image={image || ''}
                      width={2.5}
                      height={2.5}
                      alt="post user profile image"
                    />
                    <Style.PostTexInfoWrap>
                      <p className="author">{postAuthor}</p>
                      <p className="content">{postContent}</p>
                      <div className="comment-info-wrap">
                        <span className="author">{commentAuthor}</span>
                        <span className="content">{comment}</span>
                      </div>
                    </Style.PostTexInfoWrap>
                  </Style.PostInfoContainer>
                </Link>
              </Style.CommentsContainer>
            )
          )}
        </div>
      )}
    </>
  );
}

export default Comments;
