import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  private cart: Array<object>;
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

  goBack(){
    this.navCtrl.back();
  }

}
