import reset from '@/styles/reset';
import { theme } from '@/theme';
import { Global, ThemeProvider } from '@emotion/react';
import Comment from './Comment';
import Footer from './Footer';
import Header from './Header';
import PrePost from './PrePost';
import * as Style from './index.style';

function PostComment() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={reset} />
        <Style.CommentContainer>
          <Header />
          <Style.GroudImage src="/src/assets/ShortLogo.svg" />
          <PrePost />
          <Comment />
          <Footer />
        </Style.CommentContainer>
      </ThemeProvider>
    </>
  );
}

export default PostComment;
