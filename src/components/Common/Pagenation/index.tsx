import { useState } from 'react';
import ArrowLeft from '@/assets/ArrowLeft.svg';
import ArrowRight from '@/assets/ArrowRight.svg';
import { Container, Image } from './index.style';

interface Props {
  totalPage: number;
  setPage: (page: number) => void;
}
function Pagenation(props: Props) {
  const { totalPage, setPage } = props;
  const [pageNumber, setPageNumber] = useState<number>(1);

  const handleClickLeftButton = () => {
    setPageNumber(pageNumber - 1);
    setPage(pageNumber - 2);
  };

  const handleClickRightButton = () => {
    setPageNumber(pageNumber + 1);
    setPage(pageNumber);
  };
  return (
    <Container>
      <Image
        visible={pageNumber !== 1}
        src={ArrowLeft}
        alt="prev-page-button"
        onClick={handleClickLeftButton}
        role="button"
      />
      <div>
        <span>{pageNumber}</span> / <span>{totalPage}</span>
      </div>
      <Image
        visible={pageNumber !== totalPage}
        src={ArrowRight}
        alt="next-page-button"
        onClick={handleClickRightButton}
        role="button"
      />
    </Container>
  );
}

export default Pagenation;
