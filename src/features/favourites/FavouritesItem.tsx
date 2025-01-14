import { useAppDispatch } from '../../store';
import { removeFromFavorites } from './FavouritesSlice';
import { Cat } from '../cats/types/Cat';
import { IMG, Item } from '../cats/Cat.styles';
export type CatProps = {
  cat: Cat;
};

function FavouritesItem({ cat }: CatProps) {
  const dispatch = useAppDispatch();

  const handleRemoveToFavourites = (cat: Cat): void => {
    dispatch(removeFromFavorites(cat));
  };

  return (
    <Item>
      <IMG src={cat.url} alt="котик" />;
      <button
        className="removeToFavourites"
        onClick={() => handleRemoveToFavourites(cat)}
      >
        Удалить из избранного
      </button>
    </Item>
  );
}

export default FavouritesItem;
