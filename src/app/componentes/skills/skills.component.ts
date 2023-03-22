import { Component } from '@angular/core';
import { PortafolioService } from 'src/app/servicios/portafolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skillHardList: any;
  skillSoftList: any;

  constructor(private getDatos:PortafolioService) { }

  ngOnInit():void {
    this.getDatos.getDatos().subscribe(data => {
      this.skillHardList = data['skills'][0]['hard'];
      this.skillSoftList = data['skills'][0]['soft'];
      console.log(this.skillHardList);
    });
  }
}
