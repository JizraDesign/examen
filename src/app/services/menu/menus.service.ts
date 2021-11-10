import { Injectable } from '@angular/core';
import listaMenus from '../../json/menus.json';

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  menus: any[] = [];

  constructor() { }

  /**
   * 
   * @param menu nombre del menu solisitado
   * @returns 
   */
  listarMemu( menu:string ): any {
    this.menus = listaMenus;
    menu = menu.toLowerCase();  

    const menuSelect = this.menus.find( ( element: any ) => element.menu == menu );
    return menuSelect.platos;
    
  }
}
