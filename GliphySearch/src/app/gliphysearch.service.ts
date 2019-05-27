import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GliphysearchService {
  public _url = "http://api.giphy.com/v1/gifs/search?api_key=UN8bHL25KcyCevZhFdAT7tx14Xvqkqvp&q=";

  constructor(private http: HttpClient) { }

  /**
   * Resposible to search gliphy from Gliphy API based on the input
   * @param searchTerm
   */
  public getGliphy(searchTerm): Observable<any> {
    let _searchURL = this._url + searchTerm.value;
    return this.http.get<any>(_searchURL);
  }
}
