// filepath: /Users/gagikarutunan/Desktop/frontend-cats-challenge/src/features/cats/CatList.tsx
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import CatItem from './CatItem';
import { Container } from './Cat.styles';
import {
  getCats,
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
    if (cats.length === 0 && !fetching) {
      console.log('Initial fetch of cats');
      dispatch(getCats(currentPage));
    }

    const handleScroll = () => {
      const scrollPosition =
        document.documentElement.scrollHeight -
        (document.documentElement.scrollTop + window.innerHeight);

      if (scrollPosition < 100 && !fetching) {
        console.log('Fetching more cats on scroll');
        dispatch(getCats(currentPage));
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [dispatch, cats.length, currentPage, fetching]);

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
