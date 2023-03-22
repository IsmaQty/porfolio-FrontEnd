import { Component } from '@angular/core';
import { PortafolioService } from 'src/app/servicios/portafolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  miPorfolio:any;

  constructor(private getDatos:PortafolioService) { }

  ngOnInit():void {
    this.getDatos.getDatos().subscribe(data => {
      this.miPorfolio = (data["header"]); 
    });
  }
}
