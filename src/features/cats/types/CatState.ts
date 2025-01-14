import { Cat } from './Cat';

export type CatState = {
  cats: Cat[];
  error: string | undefined;
};
