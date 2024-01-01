import { Comment } from '@/types/ResponseType';
import ProfileImg from '../ProfileImg';
import * as Style from './index.style';

interface CommentsProps {
  comments: Comments[];
}

interface Comments extends Comment {
  title: string;
  postAuthor: string;
}

function Comments({ comments }: CommentsProps) {
  return (
    <Style.Container>
      {comments.map(({ title, postAuthor, comment }) => (
        <Style.CommentsContainer>
          <Style.PostInfoContainer>
            <ProfileImg
              image="https://cdn.pixabay.com/photo/2023/12/16/00/06/mountain-8451604_640.jpg"
              width={2.5}
              height={2.5}
              alt="post user profile image"
            />
            <Style.PostTexInfoWrap>
              <p className="author">{postAuthor}</p>
              <p className="content">{title}</p>
              <div className="comment-info-wrap">
                <span className="author">댓글작성자</span>
                <span className="content">{comment}</span>
              </div>
            </Style.PostTexInfoWrap>
          </Style.PostInfoContainer>
        </Style.CommentsContainer>
      ))}
    </Style.Container>
  );
}

export default Comments;
