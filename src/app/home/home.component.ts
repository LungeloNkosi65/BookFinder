import { Component, OnInit } from '@angular/core';
import {BookSearchService} from '../book-search.service';
import {Book} from '../Models/iBook';
import { Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books:Book[];
  searchParams:string;
  selectedBook: Book;
  bookId:string;
  constructor(private bookService:BookSearchService,private router:Router) { }

  ngOnInit(): void {
    this.getBooks();
  }
  
  ngAfterContentChecked():void{
    if(this.bookService.serachB){
      this.getBooks();
      this.bookService.serachB=false;
    }
  }
getBooks(){
  return this.bookService.searchBook(this.searchParams).subscribe((data:any)=>{
    this.books=data.items;
  });
  // return this.bookService.getBooks().subscribe((data:any)=>{
  //    this.books=data.items;
  //    console.log('retrived Data.....',this.books);
  // });
}
onSelect(id:string):void{
// this.router.navigateByUrl('details'+"/"+id);
  this.bookId=id
}

clickSelect(selected:Book)
{
  this.selectedBook=selected;
}

checkSearch():void{
  this.bookService.serachB=true;

}

}
