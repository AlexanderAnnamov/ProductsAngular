import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ExampleProductService } from '../../services/exampleProduct.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent implements OnInit {
  constructor(
    private productService: ExampleProductService,
    private modalService: ModalService
  ) {}
  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    price: new FormControl<number | null>(null, [
      Validators.required,
      Validators.minLength(2),
    ]),
    description: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(50),
    ]),
    rate: new FormControl<number>(0, [
      Validators.required,
      Validators.minLength(2),
    ]),
  });

  get title() {
    return this.form.controls.title as FormControl;
  }

  ngOnInit() {}

  submit() {
    console.log(this.form.value);
    this.productService
      .create({
        title: this.form.value.title as string,
        price: this.form.value.price as number,
        description: this.form.value.description as string,
        image: 'https://i.pravatar.cc',
        category: 'electronic',
        rating: {
          rate: this.form.value.rate as number,
          count: 1,
        },
      })
      .subscribe(() => {
        this.modalService.close();
      });
  }
}
