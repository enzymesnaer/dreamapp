import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exdirectives',
  templateUrl: './exdirectives.component.html',
  styleUrls: ['./exdirectives.component.css']
})
export class ExdirectivesComponent implements OnInit {

  condition:boolean = false;
  toggle(){
    this.condition = !this.condition;
  }


  title: string ="Top 10 Movies";  
  
    movies: Movie[] =[  
        {title:'Zootopia',director:'Byron Howard, Rich Moore',cast:'Idris Elba, Ginnifer Goodwin, Jason Bateman',releaseDate:'March 4, 2016'},  
        {title:'Batman v Superman: Dawn of Justice',director:'Zack Snyder',cast:'Ben Affleck, Henry Cavill, Amy Adams',releaseDate:'March 25, 2016'},  
        {title:'Captain America: Civil War',director:'Anthony Russo, Joe Russo',cast:'Scarlett Johansson, Elizabeth Olsen, Chris Evans',releaseDate:'May 6, 2016'},  
        {title:'X-Men: Apocalypse',director:'Bryan Singer',cast:'Jennifer Lawrence, Olivia Munn, Oscar Isaac',releaseDate:'May 27, 2016'},  
    ]  

  constructor() { }

  ngOnInit() {
  }

}
class Movie {  
  title : string;  
  director : string;  
  cast : string;  
  releaseDate : string;  
}  
