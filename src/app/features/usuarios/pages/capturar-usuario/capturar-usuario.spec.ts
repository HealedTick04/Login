import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CapturarUsuario } from './capturar-usuario';

describe('CapturarUsuario', () => {
  let component: CapturarUsuario;
  let fixture: ComponentFixture<CapturarUsuario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapturarUsuario],
    }).compileComponents();

    fixture = TestBed.createComponent(CapturarUsuario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
