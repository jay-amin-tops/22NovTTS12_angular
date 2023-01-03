import { Component } from '@angular/core';

@Component({
  selector: 'app-forloop',
  templateUrl: './forloop.component.html',
  styleUrls: ['./forloop.component.css']
})
export class ForloopComponent {

  // Movies:Movie[]=[
  //   { title:"movie name",director: "director name",cast: "casting by",releaseDate: "releasedate"}
  // ] 
  Movies: Movie[] = [
    { title: "zootopia", director: "Zack Snyder", cast: "Scarlett Johansson", releaseDate: "March 25, 2016" },
    { title: 'Batman v Superman: Dawn of Justice', director: 'Zack Snyder', cast: 'Ben Affleck, Henry Cavill, Amy Adams', releaseDate: 'March 25, 2016' },
    { title: 'Captain American: Civil War', director: 'Anthony Russo, Joe Russo', cast: 'Scarlett Johansson, Elizabeth Olsen, Chris Evans', releaseDate: 'May 6, 2016' },
    { title: 'X-Men: Apocalypse', director: 'Bryan Singer', cast: 'Jennifer Lawrence, Olivia Munn, Oscar Isaac', releaseDate: 'May 27, 2016' },
    { title: 'Warcraft', director: 'Duncan Jones', cast: 'Travis Fimmel, Robert Kazinsky, Ben Foster', releaseDate: 'June 10, 2016' },
  ]
}
class Movie{
  'title':string;
  'director': string;
  'cast': string;
  'releaseDate': string;
}