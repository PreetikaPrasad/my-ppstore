import { Component, OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit {
  myForm: FormGroup;
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    console.log('oninit');
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      image: new FormControl(''),
      description: new FormControl('', Validators.minLength(15)),
      imageAlt: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      isAvailable: new FormControl('', Validators.requiredTrue),
    });
    console.log(this.myForm.value);
  }

  onSubmit(data) {
    
    console.warn('this.myForm.value', data);
    const params = this.myForm.value;
    params['id'] = 'asdasd';
    if(params)

    {
    this.productService.addproducts(params);
    }
    else{
      alert('form is invalid')
    }

  }

  ngDoCheck() {
    console.log('do check');
  }

  ngAfterContentInit() {
    console.log('aftercontent');
  }

  ngOnDestroy() {
    console.log('destroy');
  }

  ngOnChanges() {
    console.log('changes');
  }

}
