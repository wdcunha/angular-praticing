import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'  // root poder ser visto na aplicação toda, mas existem outras formas que tb são
})
export class CrudService {

  constructor(private http: HttpClient) {
  }

  public getFotos(): Observable<any> { // é preciso criar um http no constructor
    return this.http.get(`https://jsonplaceholder.typicode.com/photos`); // esse return é possível por usar observable
  }
}

/**
 * é necessário colocar HttpClientModule em declaratons e HttpClient em providers, ambos no AppModule
 */

/**
 * https://www.youtube.com/watch?v=nQJdSD0SSj0&list=PL4iwH9RF8xHnMnKewOLjDvTHzTmyxJNHF&index=5
 * https://jsonplaceholder.typicode.com/photos
 */
