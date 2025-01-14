// Cat.styles.js
import styled from 'styled-components';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { styled as muiStyled } from '@mui/system';
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 65px;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  width: 425px;
  height: 425px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  position: relative;
  overflow: hidden; /* Скрываем выходящие элементы */

  &:hover button {
    opacity: 1;
  }
`;

export const IMG = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ButtonStyled = styled.button`
  position: absolute;
  bottom: 20px; /* Увеличен отступ снизу */
  right: 20px; /* Увеличен отступ справа */
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 1; /* Для отображения поверх изображения */
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0; /* Скрыто по умолчанию */
  transition: opacity 0.3s ease;
  width: 100px;
  height: 100px;
  &:hover {
    opacity: 1;
  }
`;

/* Обертка для иконок */
export const IconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

/* Контурное сердечко */
export const StyledFavoriteBorderIcon = muiStyled(FavoriteBorderIcon)(
  ({ theme }) => ({
    fontSize: '80px',
    color: 'red',
    transition: 'opacity 0.3s ease, transform 0.3s ease',
    position: 'absolute',
    top: '0',
    left: '0',
    opacity: 1,
    width: '100%',
    height: '100%',
    [`${ButtonStyled}:hover &`]: {
      opacity: 0,
      transform: 'scale(1.2)',
    },
  })
);

export const StyledFavoriteIcon = muiStyled(FavoriteIcon)(({ theme }) => ({
  fontSize: '80px',
  color: 'red',
  transition: 'opacity 0.3s ease, transform 0.3s ease',
  position: 'absolute',
  top: '0',
  left: '0',
  opacity: 0,
  width: '100%',
  height: '100%',
  [`${ButtonStyled}:hover &`]: {
    opacity: 1,
    transform: 'scale(1.2)',
  },
}));
