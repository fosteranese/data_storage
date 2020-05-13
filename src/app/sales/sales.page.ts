import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.page.html',
  styleUrls: ['./sales.page.scss'],
})
export class SalesPage implements OnInit {

  private cart: Array<object>;
  public product = {
    name: '',
    amount: null
  };

  constructor(public navCtrl: NavController, public storage: Storage) { 

    storage.get('cart')
      .then((cartItems) => {
          this.cart = cartItems || new Array<object>();
      })
      .catch((err)=>{
        console.log('could not retreive cart', err);
      });

   }

  ngOnInit() {
  }

  addToCart (){
    
    this.cart.push({
      product: this.product.name,
      amount: this.product.amount
    });

    this.storage.set('cart', this.cart)
      .then((cartItems) => {
        this.navCtrl.navigateForward('cart');
      })
      .catch((err)=>{
        console.log('could not add item to cart', err);
      });

  }

}
