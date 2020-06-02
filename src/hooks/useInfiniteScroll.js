import { useState, useEffect } from 'react';
import { debounce } from 'utils/debounce';

const ITEM_INCREMENT = 6;

export const useInfiniteScroll = (maxElements) => {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(ITEM_INCREMENT);

  const handleScroll = debounce(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    ) {
      return false;
    }

    setLoading(true);
  }, 500);

  useEffect(() => {
    if (!loading) return;

    if (count + ITEM_INCREMENT >= maxElements) {
      setCount(maxElements);
    } else {
      setCount(count + ITEM_INCREMENT);
    }

    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { count };
};
