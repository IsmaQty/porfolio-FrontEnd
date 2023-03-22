import { Component } from '@angular/core';
import { PortafolioService } from 'src/app/servicios/portafolio.service';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent {
  miPorfolio:any;

  constructor(private getDatos:PortafolioService) { }

  ngOnInit(): void {
    this.getDatos.getDatos().subscribe(data => {
      this.miPorfolio = (data["presentacion"]); 
    });
  }
}
