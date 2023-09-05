import { Test, TestingModule } from '@nestjs/testing';
import { OperacionesService } from './operaciones.service';

describe('OperacionesService', () => {
  let service: OperacionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OperacionesService],
    }).compile();

    service = module.get<OperacionesService>(OperacionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Debe devolver el resultado de la multiplicacion entre 3 y 5, osea 15', () => { 
    expect(service.producto(3,5)).toBe(15); 
  });

  it('Debe devolver el resultado de la división entre 100 y 5, osea 20', () => { 
    expect(service.division(100,5)).toBe(20); 
  });

  it('Debe devolver un error por la división entre 100 y 0, Sintax Error', () => { 
    expect(service.division(100,0)).toBe('Sintax Error'); 
  });

  it('Debe devolver el resultado de la suma entre 3 y 5, osea 8', () => { 
    expect(service.suma(3,5)).toBe(8); 
  });

  it('Debe devolver el resultado de la multiplicacion entre 3 y 5, osea 15', () => { 
    expect(service.resta(3,5)).toBe(-2); 
  });
});
