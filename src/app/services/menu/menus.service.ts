import { Injectable } from '@angular/core';
import listaMenus from '../../json/menus.json';

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  menus: any[] = [];

  constructor() { }

  /**
   * Busca en el archivo json los datos del menú solicitado
   * @param menu Nombre del menú solicitado
   * @returns regresa un objeto con el menu solicitado
   */
  listarMemu( menu:string ): any {
    this.menus = listaMenus;
    menu = menu.toLowerCase();  

    const menuSelect = this.menus.find( ( element: any ) => element.menu == menu );
    return menuSelect.platos;
    
  }
}
