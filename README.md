# Demo Angular 6 con Firebase!

El demo construido permite registrar datos de clientes, calcular sus edades promedios, la desviación estándar de esas edades y finalmente mostrar en una lista la clientes con su probable fecha de muerte.

## Desviación Estándar
La fórmula empleada es *Desviación Estándar Muestral*: 
![Fórmula de Desviación Estándar Muestral ](desviacion-estandar-muestral.svg)

## Cálculo de la fecha probable de muerte de los empleados.


Para calcular la fecha probable de muerte de los empleados, se utilizó la esperanza de vida del país de origen o donde vive el empleado. Para la muestra se tienen como ejemplo 2 países: 
 - Perú: 76 años (promedio)
 - Argentina: 77 años (promedio) 
 - Somalia: 55 años (promedio)
 - [fuente](https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses_por_esperanza_de_vida)

#Asepcto Tecnico del Proyecto

Generado con [Angular CLI](https://github.com/angular/angular-cli) version 6.2.9.

## Para su ejecución

$ npm install firebase angularfire2

`ng serve` para a deplegar el localhost. Luego ir a `http://localhost:4200/`. 
