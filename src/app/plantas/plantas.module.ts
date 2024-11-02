import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantasComponent } from './plantas.component';
import { PlantasService } from './plantas.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PlantasComponent],
  exports:[PlantasComponent]
})
export class PlantasModule { }
