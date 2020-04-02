import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, from } from 'rxjs';
import {Book} from './Models/iBook';
@Injectable({
  providedIn: 'root'
})
export class BookSearchService {
books:any[];
private bookUrl='https://www.googleapis.com/books/v1/volumes?';
private serachParams='q='
private _default='2019';
private jsonUrl='assets/books.json';
serachB:boolean=false;
  constructor(private _http:HttpClient) { }

  searchBook(title:string):Observable<any[]>{
    return this._http.get<any[]>(`${this.bookUrl}${this.serachParams}${title}`)
  }

  getBooks():Observable<Book[]>{
    return this._http.get<Book[]>(this.jsonUrl);
  }
}
