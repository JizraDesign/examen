# ExRestaurante

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Sobre ExRestaurante

ExRestaurante es una página con dos secciones o dos vistas, “Home” y “Menú” accesibles desde la barra de navegación (parte superior de la pantalla).

La sección “Home” es la vista inicial y muestra una breve descripción del cliente o negocio. El acceso a esta vista aparece como un botón link en la barra de navegación (parte superior de la pantalla), también se puede acceder desde la URL “http://localhost:4200/” y “http://localhost:4200/home”.

La sección “Menú” es una vista interactiva donde el usuario puede seleccionar los distintos tipos de menú disponibles “Desayunos”, “Comidas”, “Cenas”, “Postres” y “Bebidas” *1

El acceso a esta vista aparece como un botón link en la barra de navegación (parte superior de la pantalla), también se puede acceder desde la URL “http://localhost:4200/menu”

Después de haber seleccionado un menú el sistema mostrara la vista “Menú”, mostrando los platillos del menú (MenusService)*2 seleccionado y un botón “Atrás” para volver a la selección por tipo de comida”.

Las tarjetas que contienen lo platillos del menú tienen en su interior un botón “Agregar” al presionar este botón se agregara esta información a un servicio (“SaleService”)*3 encargado de almacenar los productos seleccionador por el cliente y actualizar la información para el cobro del servicio en un carrito de compras.

Carrito de compras ubicado en la parte superior derecha de la pantalla indica cuantos productos se han seleccionado, seleccionable solo cuando hay mínimo un producto dentro de él.

Cuando hay uno o más productos despliega en una ventana modal ( dialog ) con el detalle de los productos seleccionados ( nombre y precio) , el total de la compra, un botón “Cerrar” que cierra el modal (los productos seguirán almacenados en servicio “SaleService”) y un botón “Pagar” este botón limpia los datos del servicio “SaleService”, agradece por la compra y pone en 0 el carrito de compras.

*1 Los menús se iteran de un archivo json “src > app > json > nav.json” simulando que los datos podrían venir de una api.

*2 Los menús se iteran de un archivo json “src > app > json > menus.json” simulando que los datos podrían venir de una api. Además se integra el servicio “MenusService” “src > app > services > menu > menu.service.ts” para hacer el filtrado correspondiente a una categoría del menú.

*3 El servicio “SaleService” “src > app > services > menu > sale.service.ts” tiene la función de “emular” el almacenamiento y gestión de la compra considerando el uso de un servicio para trabajar con una api o un back-end.

## Descripción de componentes
src > app > components > navigator-screen

Modulo principal de la app  contiene el header (barra de navegacion), cometedor principal donde se verán las vistas de la app y el footer.

src > app > components > home

Contiene la vista “Home” información del cliente o negocio.

src > app > components > menu

Vista dinámica de pueden ver y seleccionar menús y platos.

src > app > components > cart

Contenido de modal. Muestra al cliente sus productos seleccionados y da opción de pago.

src > app > components > agregado

Contenido de modal. Indica al usuario que su producto fue agregado.

## Descripción de servicios

src > app > services > menu > menu.service.ts

Filtra los platillos según el menú seleccionado

src > app > services > sales > sale.service.ts

Almacena datos de los productos seleccionados por el usuario

## Descripción de interfaces

src > app > interfaces > Menu.ts

interface para el manejo de los platos que incluye el menú

export interface Menu {
    calorias: string,
    ingredientes: string,
    nombre: string,
    peso: string,
    precio: string,
    img: string
}

src > app > interfaces > Nav.ts

Interface para el manejo de los menús

export interface Nav {
    id: string,
    menu: string,
    img: string
}

## Archivos imágenes
src > assets >

imágenes del proyecto

## Otros archivos
src > app > json > menus.json

Contiene los platillos de los menús

src > app > json > nav.json

Contiene los menús

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
