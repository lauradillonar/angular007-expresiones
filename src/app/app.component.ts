import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fruta: string = 'manzana';
  verdura: string = 'lechuga';
  pi: number = 3.14159265359;
  ciudad = {
    nombre: 'Bahía Blanca',
    poblacion: 284776
  };
  helloWorld = () => {
    return "Hola mundo!"
  }
}

