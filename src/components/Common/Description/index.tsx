import { Wrapper } from './index.style';

interface DescriptionProps {
  text: string;
  color?: string;
}
function Description({ text, color }: DescriptionProps) {
  return <Wrapper color={color}>{text}</Wrapper>;
}

export default Description;
