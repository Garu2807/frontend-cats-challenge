import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import type { Cat } from './types/Cat';
import { useAppDispatch, useAppSelector } from '../../store';
import {
  selectIsFavourite,
  toggleFavourite,
} from '../favourites/favoritesSlice';
import styles from './Cat.module.css';

type CatPropsType = {
  cat: Cat;
};

function CatItem({ cat }: CatPropsType) {
  const dispatch = useAppDispatch();
  const isFavourite = useAppSelector(selectIsFavourite(cat.id));

  return (
    <div className={styles.item}>
      <img src={cat.url} alt="Cat" className={styles.image} />
      <button
        type="button"
        className={styles.button}
        onClick={() => dispatch(toggleFavourite(cat.id))}
        aria-label={
          isFavourite
            ? 'Убрать котика из избранного'
            : 'Добавить котика в избранное'
        }
      >
        <span className={styles.iconWrapper}>
          <FavoriteBorderIcon
            className={`${styles.favoriteBorderIcon} ${
              isFavourite ? styles.favoriteBorderIconHidden : ''
            }`}
            sx={{ fontSize: { xs: 72, sm: 120 } }}
          />
          <FavoriteIcon
            className={`${styles.favoriteIcon} ${
              isFavourite ? styles.favoriteIconActive : ''
            }`}
            sx={{ fontSize: { xs: 72, sm: 120 } }}
          />
        </span>
      </button>
    </div>
  );
}

export default CatItem;
