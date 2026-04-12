import type { UIEvent } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getCats } from './api';
import styles from './Cat.module.css';
import CatItem from './CatItem';

function CatList() {
  const {
    isPending,
    isError,
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['cats'],
    initialPageParam: 1,
    queryFn: ({ pageParam }) => getCats(pageParam),
    getNextPageParam: (lastPage, _allPages, lastPageParam) => {
      if (lastPage.length === 0) {
        return undefined;
      }

      return lastPageParam + 1;
    },
  });

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    const isNearBottom = scrollHeight - scrollTop - clientHeight < 150;

    if (isNearBottom && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  if (isPending) {
    return <p className={styles.loading}>Загрузка...</p>;
  }

  if (isError) {
    return <p className={styles.loading}>Ошибка: {error.message}</p>;
  }

  return (
    <div className={styles.listWrapper} onScroll={handleScroll}>
      <div className={styles.container}>
        {data.pages.flatMap((page) =>
          page.map((cat) => <CatItem cat={cat} key={cat.id} />)
        )}
      </div>
      <div className={styles.loading}>
        {isFetchingNextPage ? 'Загрузка...' : ''}
      </div>
    </div>
  );
}

export default CatList;
