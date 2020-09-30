import { Component, OnInit, Input } from '@angular/core';
import {Movie} from '../../models/movie'
@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movie: Movie
  base_url:string = 'http://image.tmdb.org/t/p/w342'
  constructor() { }

  ngOnInit(): void {
  }

}
