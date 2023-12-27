import React, { useState, useCallback } from 'react';

type useModalResult = [
  visible: boolean,
  handleModalClick: (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
  ) => void
];

function useModal(): useModalResult {
  const [visible, setVisible] = useState(false);

  const handleModalClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
      const target = e.target as HTMLDivElement | HTMLButtonElement;

      if (target.closest('#modal')) return;

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

  return [visible, handleModalClick];
}

export default useModal;
