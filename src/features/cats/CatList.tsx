import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import CatItem from './CatItem';
import { getCats } from './CatSlice';
import { Container } from './Cat.styles';

function CatList() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCats());
  }, []);
  const cats = useAppSelector((state) => state.cats.cats);
  return (
    <Container>
      {cats.map((cat) => (
        <CatItem cat={cat} key={cat.id} />
      ))}
    </Container>
  );
}

export default CatList;
