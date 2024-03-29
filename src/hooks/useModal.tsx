import React, { useCallback, useState } from 'react';

type useModalResult = [
  visible: boolean,
  handleModalClick: (e: React.MouseEvent<HTMLElement>) => void,
  top: number,
  left: number
];

function useModal(): useModalResult {
  const [visible, setVisible] = useState(false);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  const handleModalClick = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const target = e.target as HTMLElement;

      if (target.closest('#modal')) return;

      const rect = target.getClientRects()[0];
      setTop(rect.bottom);
      setLeft(rect.right);

      const bodyEl = document.body as HTMLDivElement;

      if (visible) {
        bodyEl.style.overflow = 'auto';
      } else {
        bodyEl.style.overflow = 'hidden';
      }
      setVisible((prev) => !prev);
    },
    [visible]
  );

  return [visible, handleModalClick, top, left];
}

export default useModal;
