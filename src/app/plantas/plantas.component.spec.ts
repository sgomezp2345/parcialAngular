/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { HttpClientModule } from '@angular/common/http';
import { PlantasComponent } from './plantas.component';
import { PlantasService } from './plantas.service';
import { Plantas } from './plantas';

describe('PlantasComponent', () => {
  let component: PlantasComponent;
  let fixture: ComponentFixture<PlantasComponent>;
  let debug: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PlantasComponent ],
      providers: [PlantasService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantasComponent);
    component = fixture.componentInstance;
    component.plantas = [{
      "id": 7,
      "nombre_comun": "Jade Hembra",
      "nombre_cientifico": "Crassula ovata",
      "tipo": "Interior",
      "altura_maxima": 200,
      "clima": "Templado",
      "sustrato_siembra": "Tierra orgánica con buen drenaje"
    },
    {
      "id": 8,
      "nombre_comun": "Espadas de San Jorge",
      "nombre_cientifico": "Sansevieria trifasciata",
      "tipo": "Interior",
      "altura_maxima": 150,
      "clima": "Templado, frío",
      "sustrato_siembra": "Buen drenage y mayor proporción de arena"
    },
    {
      "id": 9,
      "nombre_comun": "Pino libro",
      "nombre_cientifico": "Thuja orientalis",
      "tipo": "Exterior",
      "altura_maxima": 30000,
      "clima": "Templado",
      "sustrato_siembra": "Tierra orgánica y húmeda"
    },]

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("Component has a table", () => {
    expect(debug.query(By.css("tbody")).childNodes.length).toBeGreaterThan(0);
  });

  it('should have an dd element ', () => {
    const dd = debug.query(By.css('dd'));
    const content: HTMLElement = dd.nativeElement;
    expect(content.textContent).toEqual(String(component.plantas[0].id))
  });
});
