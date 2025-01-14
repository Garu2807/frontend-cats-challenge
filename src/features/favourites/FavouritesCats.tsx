import React from 'react';
import CatItem from '../cats/CatItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import FavouritesItem from './FavouritesItem';

export default function FavoriteMovies() {
  const { favourites } = useSelector((store: RootState) => store.favourites);

  return (
    <div className="movie_list">
      <div className="top">Избранное</div>
      <div className="movies">
        {favourites.length > 0 ? (
          favourites.map((cat) => <FavouritesItem cat={cat} key={cat.id} />)
        ) : (
          <p>No favourite movies yet!</p>
        )}
      </div>
    </div>
  );
}
