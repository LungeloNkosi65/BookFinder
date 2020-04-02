import { VolumeInfo } from './ivolumeInfo';
import { BehaviorSubject } from 'rxjs';
import { SaleInfo } from './iSaleInfo';

export interface Item{
        kind:string;
        id:string;
        etag:string;
        selfLink:string;
        volumeInfo:VolumeInfo;
        saleInfo:SaleInfo;
        accessInfo:object;
        searchInfo:object;
}