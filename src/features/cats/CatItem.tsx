// CatItem.jsx
import React from 'react';
import { Cat } from './types/Cat';
import {
  ButtonStyled,
  IMG,
  Item,
  StyledFavoriteBorderIcon,
  StyledFavoriteIcon,
} from './Cat.styles';
import { useAppDispatch, useAppSelector } from '../../store';
import {
  addToFavorites,
  removeFromFavorites,
} from '../favourites/FavouritesSlice';

type CatPropsType = {
  cat: Cat;
};

function CatItem({ cat }: CatPropsType) {
  const dispatch = useAppDispatch();

  // Получаем список избранных котиков из Redux
  const favorites = useAppSelector((state) => state.favourites.favourites);

  // Проверяем, добавлен ли текущий котик в избранное
  const isFavorite = favorites.some((favCat) => favCat.id === cat.id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(cat.id));
    } else {
      dispatch(addToFavorites(cat));
    }
  };

  return (
    <Item>
      <IMG src={cat.url} alt="котик" />
      <ButtonStyled
        onClick={handleToggleFavorite}
        aria-label={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      >
        {isFavorite ? <StyledFavoriteIcon /> : <StyledFavoriteBorderIcon />}
      </ButtonStyled>
    </Item>
  );
}

export default React.memo(CatItem);
