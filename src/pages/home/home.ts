import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   name1 = '';
   name2 = '';

   get score() {
     const letras =(this.name1 + this.name2).toLowerCase();
     let soma = 0;
     for (let indice = 0; indice < letras.length; indice++) {
       soma += letras.charCodeAt(indice);
     }
     return soma % 101;
   }

}
