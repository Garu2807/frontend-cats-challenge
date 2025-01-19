import '@testing-library/jest-dom';
import store from '../store';
import CatList from '../features/cats/CatList';
import { render, screen } from '@testing-library/react';
import CatItem from '../features/cats/CatItem';
import { Cat } from '../features/cats/types/Cat';
import { Provider } from 'react-redux';

const renderCatsList = () => {
  render(
    <Provider store={store}>
      <CatList />
    </Provider>
  );
};
const renderCatsItem = (cat: Cat) => {
  render(
    <Provider store={store}>
      <CatItem cat={cat} />
    </Provider>
  );
};

describe('Компонент CatsList', () => {
  test('Компонент CatsList рендерится', () => {
    renderCatsList();
    expect(screen.getByTestId('cats-list')).toBeInTheDocument();
  });
});

describe('Компонент CatItem', () => {
  let cat: Cat;
  beforeEach(() => {
    cat = {
      id: '1',
      url: 'котик',
    };
  });
  test('Компонент CatsList рендерится', () => {
    renderCatsItem(cat);
    expect(screen.getByTestId('cat-item')).toBeInTheDocument();
  });
});
