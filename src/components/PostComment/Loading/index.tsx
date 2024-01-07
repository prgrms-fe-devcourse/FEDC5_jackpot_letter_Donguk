import * as Style from './index.style';

function Loading({ loadingSize }) {
  return (
    <Style.LoadingImg
      src="/src/assets/loading.svg"
      width={loadingSize}
    />
  );
}

export default Loading;
