import React, { useState, useCallback } from 'react';

type useModalResult = [
  visible: boolean,
  handleModalClick: (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
  ) => void,
  top: number,
  left: number
];

function useModal(): useModalResult {
  const [visible, setVisible] = useState(false);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  const handleModalClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
      const target = e.target as HTMLDivElement | HTMLButtonElement;

      if (target.closest('#modal')) return;

      const rect = target.getClientRects()[0];
      setTop(rect.bottom);
      setLeft(rect.right);

      const rootEl = document.getElementById('root') as HTMLDivElement;

      if (visible) {
        rootEl.style.overflow = 'auto';
      } else {
        rootEl.style.overflow = 'hidden';
      }
      setVisible((prev) => !prev);
    },
    [visible]
  );

  return [visible, handleModalClick, top, left];
}

export default useModal;
