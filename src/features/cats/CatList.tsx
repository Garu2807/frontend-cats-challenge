import { useAppSelector } from '../../store';
import CatItem from './CatItem';
import { Container } from './Cat.styles';

function CatList() {
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
