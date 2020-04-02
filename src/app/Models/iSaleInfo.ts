import { PriceList } from './iPriceList';

export interface SaleInfo{
    country:string;
    saleability:string;
    isEbook:boolean;
    listPrice:PriceList;
    retailPrice:PriceList;
    buyLink:string;
    offers:object;
   
}