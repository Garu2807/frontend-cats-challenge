import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import CatItem from './CatItem';
import { Container } from './Cat.styles';
import {
  fetchCats,
  selectCats,
  selectCurrentPage,
  selectFetching,
} from './CatsSlice';

function CatList() {
  const dispatch = useAppDispatch();
  const cats = useAppSelector(selectCats);
  const currentPage = useAppSelector(selectCurrentPage);
  const fetching = useAppSelector(selectFetching);

  useEffect(() => {
    if (cats.length === 0) {
      dispatch(fetchCats(currentPage));
    }
  }, [dispatch, cats.length, currentPage]);

  useEffect(() => {
    const scrollHandler = (e: any) => {
      if (
        e.target.documentElement.scrollHeight -
          (e.target.documentElement.scrollTop + window.innerHeight) <
          100 &&
        !fetching
      ) {
        dispatch(fetchCats(currentPage));
      }
    };

    document.addEventListener('scroll', scrollHandler);
    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, [dispatch, currentPage, fetching]);

  return (
    <Container>
      {cats.map((cat) => (
        <CatItem cat={cat} key={cat.id} />
      ))}
      {fetching && (
        <div style={{ textAlign: 'center', padding: '20px', width: '100%' }}>
          ... загружаем еще котиков ...
        </div>
      )}
    </Container>
  );
}

export default CatList;
