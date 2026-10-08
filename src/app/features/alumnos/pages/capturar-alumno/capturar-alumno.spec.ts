import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CapturarAlumno } from './capturar-alumno';

describe('CapturarAlumno', () => {
  let component: CapturarAlumno;
  let fixture: ComponentFixture<CapturarAlumno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapturarAlumno],
    }).compileComponents();

    fixture = TestBed.createComponent(CapturarAlumno);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
