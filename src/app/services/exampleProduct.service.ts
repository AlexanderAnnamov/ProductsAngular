import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import {delay, Observable, catchError, throwError, retry, tap} from 'rxjs';
import { exampleIpProduct } from '../models/exampleProduct';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class ExampleProductService {
  constructor(private http: HttpClient, private errorService: ErrorService) {}

  products: exampleIpProduct[] = []

  getAll(): Observable<exampleIpProduct[]> {
    return this.http
      .get<exampleIpProduct[]>('https://fakestoreapi.com/products', {
        params: new HttpParams().append('limit', 5),
      })
      .pipe(delay(500),retry(2),tap(products => this.products = products), catchError(this.errorHandler.bind(this)));
  }

  create(product: exampleIpProduct): Observable<exampleIpProduct> {
    return this.http.post<exampleIpProduct>(
      'https://fakestoreapi.com/products',
      product
    ).pipe(tap(prod => this.products.push(prod)));
  }
  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}
