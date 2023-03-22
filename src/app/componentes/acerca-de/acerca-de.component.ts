import { Component } from '@angular/core';
import { PortafolioService } from 'src/app/servicios/portafolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent {
  miPorfolio: any;

  constructor(private getDatos:PortafolioService){  }

  ngOnInit(): void{
    this.getDatos.getDatos().subscribe(data => {
      this.miPorfolio = data['acercaDe'];
    });
  }
}
