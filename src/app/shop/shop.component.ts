import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  id: number = 0; // initialize the property when declaring it
  quantite: number = 0;
  titre: string = '';
  isSubmitDisabled = true;

  constructor(private router: Router) { }
  ngOnInit(): void {
  }

  submitForm(): void {
    // handle the form submission here
    console.log('Form submitted successfully!');
    // navigate to the principal route
    this.router.navigate(['/principal']);
  }
  validateForm(): void {
    this.isSubmitDisabled = !(this.id && this.quantite && this.titre
      && this.id >= 1 && this.id <= 9
      && this.quantite.toString().length === 3
      && this.titre.length >= 3 && this.titre === this.titre.toUpperCase());
  }
}
