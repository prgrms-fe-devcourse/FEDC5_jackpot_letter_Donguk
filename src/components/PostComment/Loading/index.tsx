import * as Style from './index.style';

interface loadingProps {
  loadingSize: number | string;
}
function Loading({ loadingSize }: loadingProps) {
  return (
    <Style.LoadingImg
      src="/src/assets/loading.svg"
      width={loadingSize}
    />
  );
}

export default Loading;
