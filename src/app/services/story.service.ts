import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {ServiceResponse} from '../models/service-response';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  token = localStorage.getItem('TOKEN');

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.token
    })
  };

  constructor(private http: HttpClient) {
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  // tslint:disable-next-line:typedef
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  // Mock data
  // getStories(): Observable<Story[]> {
  //   return of(STORIES);
  // }
  //
  // getStoryByID(id: number): Observable<Story> {
  //   return of(STORIES.find(story => story.id === id));
  // }

  // Call API
  getStories(page, limit: number): Observable<ServiceResponse> {
    let url = environment.STORY_SERVICE + '/stories';

    // Paging
    if (page < 1) {
      page = 1;
    }
    url += `?page=${page}`;

    if (limit > 0) {
      url += `&limit=${limit}`;
    }

    return this.http.get<ServiceResponse>(url, this.httpOptions).pipe(
      catchError(this.handleError<ServiceResponse>('getStories'))
    );
  }

  getStoryByID(id: number): Observable<ServiceResponse> {
    const url = environment.STORY_SERVICE + `/stories/${id}`;

    return this.http.get<ServiceResponse>(url, this.httpOptions).pipe(
      catchError(this.handleError<ServiceResponse>('getStoryByID'))
    );
  }
}
