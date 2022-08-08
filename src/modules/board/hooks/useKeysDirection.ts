import { useEffect, useState } from 'react';

export const useKeysDirection = () => {
  const [direction, setDirection] = useState<{ x: -1 | 0 | 1; y: -1 | 0 | 1 }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.repeat) return;
      switch (e.key) {
        case 'w':
          setDirection((prev) => ({ ...prev, y: -1 }));
          break;
        case 's':
          setDirection((prev) => ({ ...prev, y: 1 }));
          break;
        case 'a':
          setDirection((prev) => ({ ...prev, x: -1 }));
          break;
        case 'd':
          setDirection((prev) => ({ ...prev, x: 1 }));
          break;
        default:
          break;
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'w':
          if (direction.y === -1) setDirection((prev) => ({ ...prev, y: 0 }));
          break;
        case 's':
          if (direction.y === 1) setDirection((prev) => ({ ...prev, y: 0 }));
          break;
        case 'a':
          if (direction.x === -1) setDirection((prev) => ({ ...prev, x: 0 }));
          break;
        case 'd':
          if (direction.x === 1) setDirection((prev) => ({ ...prev, x: 0 }));
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  });

  return direction;
};
