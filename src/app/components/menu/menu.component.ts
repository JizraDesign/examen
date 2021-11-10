import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Menu } from 'src/app/interfaces/Menu';
import { Nav } from 'src/app/interfaces/Nav';
import { MenusService } from 'src/app/services/menu/menus.service';
import { SaleService } from 'src/app/services/sale/sale.service';

import listaMenus from '../../json/nav.json';
import { AgregadoComponent } from '../agregado/agregado.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @ViewChildren('imgCont') imgCont!: QueryList<ElementRef>
  @ViewChildren('imgMenu') imgMenu!: QueryList<ElementRef>

  arrayNav: Nav[] = [];
  menu:string = "";
  carta: Menu[] = [];

  constructor(
    private render2: Renderer2,
    private route: ActivatedRoute,
    private menusService: MenusService,
    private saleService: SaleService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( ( paramMap:any ) => {
      const {params} = paramMap;
      this.menu = params.menu;
    })

    !this.menu ? this.cargarData() : this.cargarMenu( this.menu );
  }

  /**
   * Cargar animaciones del menu
   */
   loadMenuAnimation(): void {
    this.imgCont.forEach( ( item: any, i: number ) => {
      
      const $imgCont = item.nativeElement;
      $imgCont.addEventListener( "mouseenter", () => {
        this.imgCont.forEach( item => this.render2.addClass( item.nativeElement, "gray" ) );
        if ( $imgCont.classList.contains( "gray" ) ) {
          this.render2.removeClass( $imgCont, "gray" );
        };
      }, false );

      $imgCont.addEventListener( "mouseleave", () =>{
        this.imgCont.forEach( item => this.render2.removeClass( item.nativeElement, "gray" ) );
      }, false );
    });
  }

  /**
   * Carga menus
   */
  cargarData(): void {
    this.arrayNav = listaMenus.menus;
    
    setTimeout( () => {
      this.loadMenuAnimation();
    }, 500 );
    
  }

  /**
   * Menu
   * @param menu nombre del menu a cargar
   */
  cargarMenu( menu:string ): void {
    this.carta = this.menusService.listarMemu( menu );

    setTimeout( () => {
      this.loadMenuAnimation();
    }, 500 );
  }

  /**
   * Se envia al sercivicio los datos del producto que fue leccionado
   * @param i index del item seleccionado
   */
  addItem( i:number ) {
    const data = {
      plato: this.carta[i].nombre,
      precio: parseInt(this.carta[i].precio.replace("$", ""))
    }
    this.saleService.addItem( data );
    this.addItemBtn();
  }

  /**
   * Lanza un cuadro de dialogo para indicar que el producto fue agregado
   */
  addItemBtn() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width="700px";;
    
    const dialogRef = this.dialog.open(AgregadoComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if ( result ) {
        
      }
    });
  }

}
