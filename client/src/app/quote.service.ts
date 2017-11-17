import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs";

@Injectable()
export class QuoteService {
  
  quotes = [];
  constructor(private _http: Http) {
    this.getQuotes();    
  }
  
  getQuotes(){
    return this._http.get('/quotes').subscribe(
      (data)=>{
        this.quotes = data.json().reverse();
        console.log("fetched");
      },
      (err) => {
        console.log(err);
      }
    )
  }
  something(){
    return this.quotes
  }
  addQuote(theQuote){
    this._http.post('/new', theQuote).subscribe(
      data =>{
        console.log("success!");
      }
    )
  }
}
