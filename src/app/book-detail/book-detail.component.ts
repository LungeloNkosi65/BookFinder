import { Component, OnInit ,Input} from '@angular/core';
import {Book} from '../Models/iBook';
import {BookSearchService} from '../book-search.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
@Input() book:Book;
books:Book[];
bookId:string
searchParams:string;
  constructor(private bookSerch:BookSearchService,private rout:ActivatedRoute) { }

  ngOnInit(): void {
    this.getBookById();
  }

  getBookById(){
    this.bookId=this.rout.snapshot.paramMap.get('id');
    return this.bookSerch.searchBook(this.searchParams).subscribe((data:any)=>{
      this.books=data.items;
      console.log('results...',this.books);
    })
  }
  // getBookId(){
  //  r this.bookId=this.rout.snapshot.paramMap.get('id');
  //   return +
  // }
}
