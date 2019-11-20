import { Component } from '@angular/core';
import { Button } from 'protractor';

@Component({
    selector: "products",
    templateUrl: '../views/product.component.html',
    styleUrls: ['../views/product.component.css']
})

export class ProductComponent {
  ProductName: string;
  ProductCost:any;
  ProductPedido: any;
  ProductContact: string;
  showTable: boolean;
  message: string;
  listOfProducts: any = [];
  bandera: boolean;
  boton: any;

  constructor(){
    this.ProductName='';
    this.ProductCost='';
    this.ProductPedido='';
    this.ProductContact='';
    this.message='';
    this.showTable = true;
    this.bandera =true;
    this.boton = `<button>hide table</button>`;
  }

  submit() {
   if(this.ProductName ==='' || this.ProductCost==='' || this.ProductPedido==='' || this.ProductContact ===''){
     this.message= 'ALL THE FIELDS ARE REQUIRED';
   }else{
     let product = {
       name: this.ProductName,
       price: this.ProductCost,
       type: this.ProductPedido,
       contact: this.ProductContact
     }
     this.listOfProducts.push(product)
   }
  }
  displayTable(){
    this.showTable = this.showTable ? false : true;
  
  }

  cambioboton(){
    if(this.showTable ==true){
      this.showTable = true;
      this.boton = this.boton;
    }

  }
}
