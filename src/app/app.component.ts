import {Component, OnInit} from '@angular/core';
import { exampleIpProduct } from './models/exampleProduct';
import {ExampleProductService} from "./services/exampleProduct.service";
import {Observable, tap} from "rxjs";
import {ModalService} from "./services/modal.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Products';

  // products: exampleIpProduct[] = []

  loading = false

  // products$: Observable<exampleIpProduct[]>

  term =''

  constructor(public exampleProductService: ExampleProductService, public modalService:ModalService) {

  }

  ngOnInit(): void {
    this.loading = true
    // this.products$ = this.exampleProductService.getAll().pipe(tap(() => this.loading = false))
    this.exampleProductService.getAll().subscribe(() => {
      this.loading = false
    })
  }
}
