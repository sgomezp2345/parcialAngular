import { Component, OnInit } from '@angular/core';
import { Plantas } from './plantas';
import { PlantasService } from './plantas.service';

@Component({
  selector: 'app-plantas',
  templateUrl: './plantas.component.html',
  styleUrls: ['./plantas.component.css']
})
export class PlantasComponent implements OnInit {

  plantas: Array<Plantas> = [];
  numeroPlantasInterior: number = 0;
  numeroPlantasExterior: number = 0;
  constructor(private plantasService: PlantasService) { }

  getPlantas() {
    this.plantasService.getPlantas().subscribe( plantas => {
      this.plantas = plantas;
      this.numeroPlantasInterior = this.plantas.filter( planta => planta.tipo === "Interior").length
      this.numeroPlantasExterior = this.plantas.filter( planta => planta.tipo === "Exterior").length
    });
  }

  ngOnInit() {
    this.getPlantas();
  }
}
