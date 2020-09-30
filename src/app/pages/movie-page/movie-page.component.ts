import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetail } from 'src/app/models/movie';
import {MoviesService} from '../../service/movies.service'
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {
  private id: number
  movie: MovieDetail
  constructor(private route: ActivatedRoute, private movieService: MoviesService, private _sanitizer: DomSanitizer) { }
  base_url: string = 'http://image.tmdb.org/t/p/w780'
  trailer_url: SafeResourceUrl[] = []
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.movieService.getMovieDetail(this.id).subscribe( (data: MovieDetail) => {
        const {title,backdrop_path,genres,overview,vote_average,release_date,videos } = data
        this.movie = {title,backdrop_path,genres,overview,vote_average,release_date,videos}
        videos.results.map(video => {
          this.build_video_url(video.key)
        })
       
      })
      // In a real app: dispatch action to load the details here.
   });
  }
  public build_video_url(url:string): void{
    this.trailer_url.push(this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + url))
  }

}
