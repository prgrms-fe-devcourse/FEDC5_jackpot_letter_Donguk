import reset from '@/styles/reset';
import { theme } from '@/theme';
import { Global, ThemeProvider } from '@emotion/react';
import Comment from './Comment';
import Footer from './Footer';
import Header from './Header';
import PrePost from './PrePost';
import { CommentContainer } from './index.style';

function PostComment() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={reset} />
        <CommentContainer>
          <Header />
          <PrePost />
          <Comment />
          <Footer />
        </CommentContainer>
      </ThemeProvider>
    </>
  );
}

export default PostComment;
