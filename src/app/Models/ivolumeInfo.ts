import { IndustryIdentifier } from './iIndustryIdentifiers';
import { ImageLink } from './iImageLinks';

export interface VolumeInfo{
    title:string;
    authors:string;
    publisher:string;
    publishedDate:Date;
    description:string;
    industryIdentifiers:IndustryIdentifier;
    readingModes:object;
    pageCount:number;
    printType:string;
    maturityRating:string;
    allowAnonLogging:boolean;
    contentVersion:string;
    panelizationSummary:object;
    imageLinks:ImageLink;
    language:string;
    previewLink:string;
    infoLink:string;
    canonicalVolumeLink:string;

    
}