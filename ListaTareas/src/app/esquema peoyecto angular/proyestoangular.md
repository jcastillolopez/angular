
*************-----Pasos proyecto Angular-----***************
****** Creación del proyecto
**************Pasos iniciales***********
========================================================
.................. CMD SISTEMA.................
========================================================
**OBLIGATORIO----
           comando.....****ng new NombreProyecto ****
           -----(OPCIONAL)---- 
          ------Instalación de bootstrap
           COMANDO.....****npm install botstrap****
    ------ Dentro del fichero angular.json incorporamos la ruta donde se ha instalado bootstrap
    //////
                    ****"styles": [
    ESTE**** "node_modules/bootstrap/dist/css/bootstrap.min.css",****
                "src/styles.css"
                 ],******
                 ///////
            ----(OPCIONAL) ----

 Si necesito recuperar el valor de algún campo de texto debo hacerlo a través de
                  ****ngModel*****
      Dentro de app.module.ts tenemos que incluir la librería        * ------FormsModule (dentro del array imports)----
     ****import { FormsModule } from '@angular/forms';*****

              *****imports: [
                 FormsModule, ****(INTRODUCIR LA COMA)****
                 BrowserModule
                  ],
                  *****
-------------Creación de componentes----------

Dependiendo del diseño que hagamos, generamos más o menos componentes
 COMANDO ----***** ng generate component components/NombreComponente --skip-tests *****----
(OPCIONAL) Dependiendo de los datos que necesitemos manejar dentro de la aplicación, generamos
nuestras interfaces
Las interfaces definen un TIPO propio
==============================================================
    -------------EN VISUAL STUDIO CODE-------
 ============================================================== 
El nombre del fichero es
---CARPETA INTERFACE Y ARCHIVO =***** nombredato.interface.ts *****

(depende del dato con el que necesitemos
trabajar)
Podemos generar el fichero dentro de la carpeta interfaces

 *******export interface NombreDato{
propiedad1: tipo1;
propiedad2: tipo2;
...
}*********
//Ejemplo
export interface Producto{
nombre: string;
cantidad: number;
departamento: string;
}
===================================================================
............TERMINADO LA CREACION iNICIAL DEL PROYECTO..........
=======================================================================
     ========================================================
...............EMPEZAMOS EL PROYECTO.............................
    ==============================================================
    En Visual Studio Code Tenemos (MAQUETACIÓN iNICIAL DEL INDEX)
    ------------------------------------------------------------------
    ****  LO QUE HAY EN COMPONENT SE DECLARA Y PINTA EN COMPONENT ****
    ------------------------------------------------------------------
        1ª-  **** app.component.css  **** (Estilo de colocacion de componentes)

        2ª-   **** app.component.html **** (Colocacion de los componentes Global)
           .- se hacen las llamadas a componentes:
              ****  <formulario></formulario> ****
                    se inicia la funcion llamada)
                     <formulario (crearTarea)="onCrearTarea($event)"></formulario>
           .- ****  <listados></listado>
                     se inicio el almacenamiento de datos
                    <listado-tareas [lista]="arrTareas"></listado-tareas>              

        3ª-  **** app.component.ts   **** (Inicio de proyecto e index a componentes) 
            .-Se importan los almacenamientos de datos
                ****import { Tarea } from './interfaces/tarea.interface';****
            .- se CREAN E INICIALIZAN Y EXPORTAN los datos a los componentes
             **** arrTareas: Tarea[];
                  constructor() {
                  this.arrTareas = [];
                   } ******
            .-  SE CREAN LAS FUNCIONES DE INICIO
              **** onCrearTarea($event: Tarea) {
                   this.arrTareas.push($event);
                   console.log(this.arrTareas);
                   } ******
==========================================================================================
...................... COMPONENTES......................................
===========================================================================================
MAQUETACIÓN de los diferentes componentes
COMPONENTE 1:
( EJEMPLO FORMULARIO)
   formulario.component.html:
        <div class="formulario mt-5"> (se da forma con bottstrap si esta instalado)
          <div class="mb-3">
            <label>Título</label>
            <input type="text" class="form-control" [(ngModel)]="nuevaTarea.titulo">            
          </div>
        <div class="mb-3">
        <label>Prioridad</label>
        <input type="text" class="form-control" [(ngModel)]="nuevaTarea.prioridad">
    </div>
    <button class="btn btn-info" (click)="onClick()">Enviar</button>
</div>
(se conectan los datos con ngModel)