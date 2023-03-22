import { Component } from '@angular/core';
import { PortafolioService } from 'src/app/servicios/portafolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  experienciaList: any;

  constructor(private getDatos:PortafolioService) { }

  ngOnInit():void {
    this.getDatos.getDatos().subscribe(data => {
      this.experienciaList = data['experiencias'];
    });
  }
}
