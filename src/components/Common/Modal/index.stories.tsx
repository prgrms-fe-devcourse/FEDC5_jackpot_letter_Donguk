import type { Meta, StoryObj } from '@storybook/react';
import useModal from '@/hooks/useModal';
import Modal from './index';

const meta: Meta<typeof Modal> = {
  title: 'Component/Modal',
  component: Modal
};

type Story = StoryObj<typeof meta>;

interface ModalProps {
  width: number;
  height: number;
  bgColor?: string;
  radius?: number;
  padding?: number;
  type: 'center' | 'relative';
  top?: number;
  left?: number;
  marginTop?: number;
}

const DefaultModal = (args: ModalProps) => {
  const [visible, handleModalClick, top, left] = useModal();

  return (
    <>
      <button
        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
          handleModalClick(e)
        }
        style={{ float: 'right' }}>
        모달오픈
      </button>
      <Modal
        visible={visible}
        top={top}
        left={left}
        handleModalClose={(e: React.MouseEvent<HTMLDivElement>) =>
          handleModalClick(e)
        }
        {...args}>
        <h1>dd</h1>
      </Modal>
    </>
  );
};

export const Default: Story = {
  args: {
    type: 'center',
    width: 10,
    height: 15
  },
  render: (args: ModalProps) => <DefaultModal {...args} />
};

export default meta;
