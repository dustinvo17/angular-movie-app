import { Component, OnInit,HostListener } from '@angular/core';
import {Movie} from '../../models/movie'
import {MoviesService} from '../../service/movies.service'

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit {
  movie_list: Movie[] 

  constructor(private movieService: MoviesService) { }
  page: number = 1
  ngOnInit(): void {
   this.getMovieData()
  
  }
  getMovieData(): void {
    this.movieService.getMovieList(this.page).subscribe( (data: any) =>{
        let results: Movie[] = data.results
        if (!this.movie_list) this.movie_list = results
        else this.movie_list = [...this.movie_list,...results]
        
      
      
    })
   
  }
  handleSearchSubmit(data : string){
    this.movie_list = this.movie_list.filter(movie => {
      return movie.title.toLowerCase().includes(data.toLowerCase())
    })
    console.log(this.movie_list)
  }
  @HostListener("window:scroll", [])
  onScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.page += 1
       this.getMovieData()
      // you're at the bottom of the page
    }
    }
}
