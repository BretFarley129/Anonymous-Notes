import { Component,OnInit, Input } from '@angular/core';
import { QuoteService } from './quote.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  quote ={
    text:''
  }
  quotes = [];
  title = 'app';
  constructor(private _quoteService: QuoteService) {
    this._quoteService.getQuotes();
    this.quotes = _quoteService.something(); 
    console.log(this.quotes);
    console.log('Constructing');    
    }
  onSubmit(){
    this._quoteService.addQuote(this.quote);
    console.log(this.quotes)
    this.quotes = this._quoteService.something();
    this.quote ={
      text:''
    }
  }
}
