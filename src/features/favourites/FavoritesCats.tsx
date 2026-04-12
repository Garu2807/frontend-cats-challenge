import { useQuery } from '@tanstack/react-query';
import { useAppSelector } from '../../store';
import { getCatById } from '../cats/api';
import CatItem from '../cats/CatItem';
import styles from '../cats/Cat.module.css';
import { selectFavouriteIds } from './favoritesSlice';

function FavoritesCats() {
  const favoriteIds = useAppSelector(selectFavouriteIds);

  const {
    data: favoriteCats = [],
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ['favorite-cats', favoriteIds],
    queryFn: () => Promise.all(favoriteIds.map((id) => getCatById(id))),
    enabled: favoriteIds.length > 0,
    placeholderData: (previousData) => previousData,
  });

  const visibleCats = favoriteCats.filter((cat) => favoriteIds.includes(cat.id));

  if (favoriteIds.length === 0) {
    return <p className={styles.loading}>В избранном пока пусто.</p>;
  }

  if (isPending && visibleCats.length === 0) {
    return <p className={styles.loading}>Загрузка...</p>;
  }

  if (isError) {
    return <p className={styles.loading}>Ошибка: {error.message}</p>;
  }

  return (
    <div className={styles.listWrapper}>
      <div className={styles.container}>
        {visibleCats.map((cat) => (
          <CatItem cat={cat} key={cat.id} />
        ))}
      </div>
    </div>
  );
}

export default FavoritesCats;
