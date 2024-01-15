import { Wrapper } from './index.style';

interface DescriptionProps {
  text: string;
  color?: 'main' | 'error' | 'green';
}
function Description({ text, color = 'main' }: DescriptionProps) {
  return <Wrapper color={color}>{text}</Wrapper>;
}

export default Description;
