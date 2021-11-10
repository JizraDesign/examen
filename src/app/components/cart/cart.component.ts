import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SaleService } from 'src/app/services/sale/sale.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: any[] = [];
  total: number = 0;
  checkout: boolean = false;

  constructor(
    private dialogRef: MatDialogRef<CartComponent>,
    private saleService: SaleService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    const count = this.saleService.getCount();
    this.products = count.service;
    this.total = count.total;
  }

  /**
   * Simulacion de pago
   */
  pay(){
    this.checkout = true;
    setTimeout(() => {
      console.log("pagado");
      this.dialogRef.close( true );
      this.checkout = false;
    }, 4000);
  }

}
