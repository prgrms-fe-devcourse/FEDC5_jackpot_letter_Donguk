import reset from '@/styles/reset';
import { theme } from '@/theme';
import { Global, ThemeProvider } from '@emotion/react';
import Footer from './Footer';
import Header from './Header';
import Letter from './Letter';
import Warning from './Warning';
import { GroudImage, PostContainer } from './index.style';

function Post() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={reset} />
        <PostContainer>
          <Header />
          <GroudImage src="/src/assets/ShortLogo.svg" />
          <Letter />
          <Warning />
          <Footer />
        </PostContainer>
      </ThemeProvider>
    </>
  );
}

export default Post;
