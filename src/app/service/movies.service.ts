import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MovieDetail} from '../models/movie'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private api_key: string = 'b71f4a3bbb962e97ec3a48c5255b06cd'
  private base_url: string = 'https://api.themoviedb.org/3/movie/'

  constructor(private http: HttpClient) { }
  private build_url(sub: string): string {
    return this.base_url + sub + '?api_key=' + this.api_key
  }
  getMovieList(page: number) {
    const url: string = this.build_url('top_rated')
    return this.http.get(url + '&page=' + page)
  }
  getMovieDetail(id: number): Observable<MovieDetail> {
    const url: string = this.build_url(id.toString())
    return this.http.get<MovieDetail>(url +'&append_to_response=videos')
  }

}
