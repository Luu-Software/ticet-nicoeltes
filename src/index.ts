import { cuandoPasa, enviarAlFrontend, iniciar } from './lib/ui.ts';

/* Precios de los artistas en patacones 
ID_ARTISTA  | PRECIO
=============================
sabrina     |   1000
kgatlw      |    700
lali        |    500
magdalena   |    600
viagra      |    400
dillom      |    350
marilina    |    200
mugre       |    150

Descuentos:
CÓDIGO      | DESCUENTO
==============================
TIC10       |       10%
TIC20       |       20%
DARIO       |       50%
*/

// COMPLETAR: Implementar la función calcularTotal que reciba el id del artista, la cantidad de entradas y un código de descuento (opcional) y devuelva el precio total a pagar en patacones.

cuandoPasa('seleccionarArtista', ({ id, cantidad, codigoDescuento }) => {
  let cantidadNum: number = Number(cantidad);
  let precio: number = calcularTotal(id, cantidadNum, codigoDescuento);
  enviarAlFrontend('mostrarPrecio', precio);
});

iniciar();

function calcularTotal(id: string, cantidadNum: number, codigoDescuento: string): number {
  
  let precio1: number = 0;
   
  if (id === "sabrina"){
precio1=1000
}

else if(id === "kgatlw"){
  precio1=700
  }

  else if(id === "lali"){
    precio1=500
    }
   
   else if(id === "magdalena"){
      precio1=600
      }

    else if(id === "viagra"){
        precio1=400
        }
        else if(id === "dillom"){
          precio1=350
          }
          else if(id === "marilina"){
            precio1=200
            }
            else if(id === "mugre"){
              precio1=150
              }
  
              if (codigoDescuento === "TIC10"){
                precio1 = precio1 * 0.9;
              }
              
              if (codigoDescuento === "TIC20"){
                precio1 = precio1 * 0.8;
              }

              if (codigoDescuento === "DARIO"){
                precio1 = precio1 * 0.5;
              }
  
  
  
              return precio1;
  
}

