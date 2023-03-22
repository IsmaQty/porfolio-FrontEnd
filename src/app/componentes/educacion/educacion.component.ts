import { Component } from '@angular/core';
import { PortafolioService } from 'src/app/servicios/portafolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
  educacionList: any;

  constructor(private getDatos:PortafolioService) { }

  ngOnInit():void {
    this.getDatos.getDatos().subscribe(data => {
      this.educacionList = data['educacion'];
    });
  }
}
