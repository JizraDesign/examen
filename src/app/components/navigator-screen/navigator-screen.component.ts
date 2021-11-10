import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { SaleService } from 'src/app/services/sale/sale.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-navigator-screen',
  templateUrl: './navigator-screen.component.html',
  styleUrls: ['./navigator-screen.component.css']
})
export class NavigatorScreenComponent implements OnInit {

  @ViewChild( "nav" ) nav!: ElementRef;
  cartCount: number = 0;

  constructor(
    private render2: Renderer2,
    private dialog: MatDialog,
    private saleService: SaleService
  ){ }

  ngOnInit(): void {
    // escuchamos el servicio de ventas para actualizar el numero del carrito de compras
    this.saleService.newAdd.subscribe( data => {
      if (data.items_cart) this.cartCount = data.items_cart;
    })
  }

  /**
   * Mostrar u ocultar menú en pantallas de dispositos moviles
   */
  menuAction(): void {
    const $nav = this.nav.nativeElement;
    $nav.classList.contains( "visible" ) ? this.render2.removeClass( $nav, "visible" ) : this.render2.addClass( $nav, "visible" );
  }

  /**
   * ver contenido de carrito
   */
  cartView( data?:any ){
    if ( this.cartCount > 0 ) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.width="700px";
      dialogConfig.data = data;
      
      const dialogRef = this.dialog.open(CartComponent, dialogConfig);

      dialogRef.afterClosed().subscribe(result => {
        if ( result ) {
          console.log(`Dialog result: ${result}`);
          this.saleService.pay();
          this.cartCount = 0;
        }
      });
    }
      
  }

}