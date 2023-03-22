import { Component } from '@angular/core';
import { PortafolioService } from 'src/app/servicios/portafolio.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  miPorfolio:any;

  constructor(private getDatos:PortafolioService) { }

  ngOnInit():void {
    this.getDatos.getDatos().subscribe(data => {
      this.miPorfolio = (data["header"]); 
    });
  }
}
