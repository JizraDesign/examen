import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  @Output() newAdd: EventEmitter<any> = new EventEmitter();

  count: any[] = [];
  total: number = 0;

  constructor() { }

  /**
   * Agregar items a la cuenta del cliente
   * @param object objeto contados del platillo seleccionado por el cliente
   */
  addItem( object: any ): void {
    this.count.push( object );
    this.total += object.precio;

    this.newAdd.emit({"items_cart": this.count.length})
  }

  /**
   * Obtener datos de la compra
   * @returns regresa un array con los productos consumidos
   */
  getCount(): any {
    const count = {
      items: this.count.length,
      service: this.count,
      total: this.total
    }

    return count;
  }

  /**
   * Simula el pago de la cuenta y resetea los datos de consumo
   */
  pay(){
    this.count = [];
    this.total = 0;
  }
}
