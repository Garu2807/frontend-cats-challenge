import React from 'react';
import { Cat } from './types/Cat';
import { IMG, Item } from './Cat.styles';
type CatPropsType = {
  cat: Cat;
};
function CatItem({ cat }: CatPropsType) {
  return (
    <Item>
      <IMG src={cat.url} alt="котик" />;
    </Item>
  );
}

export default CatItem;
