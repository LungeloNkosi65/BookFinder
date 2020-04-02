import { Item } from './iItem';

export interface Book{
    kind:string,
    totalItems:number;
    items:Item;
}