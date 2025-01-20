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
  console.log('CatList component rendered');
  const dispatch = useAppDispatch();
  const cats = useAppSelector(selectCats);
  const currentPage = useAppSelector(selectCurrentPage);
  const fetching = useAppSelector(selectFetching);

  useEffect(() => {
    const scrollHandler = (e: any) => {
      if (
        e.target.documentElement.scrollHeight -
          (e.target.documentElement.scrollTop + window.innerHeight) <
          100 &&
        !fetching
      ) {
        console.log('Fetching more cats on scroll');
        dispatch(getCats(currentPage));
      }
    };

    document.addEventListener('scroll', scrollHandler);
    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, [dispatch, currentPage, fetching]);

  console.log('Cats:', cats); // Вывод данных котиков в консоль

  return (
    <Container>
      {cats.map((cat) => {
        console.log('Mapping cat:', cat); // Логирование каждого элемента
        return <CatItem cat={cat} key={cat.id} />;
      })}
      {fetching && (
        <div style={{ textAlign: 'center', padding: '20px', width: '100%' }}>
          ... загружаем еще котиков ...
        </div>
      )}
    </Container>
  );
}

export default CatList;
