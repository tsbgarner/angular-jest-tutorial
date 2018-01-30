import { TestBed } from '@angular/core/testing';
import { NameService } from './name.service';

describe('NameService', () => {
  let service: NameService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ NameService ]
    });
    service = TestBed.get(NameService);
  });

  test('should exist', () => {
    expect(service).toBeDefined();
  });

  test('should have a name getter', () => {
    expect(service.name).toBe('Sheep');
  });

  test('#setName should set the private name', () => {
    let newName = 'Goat';
    service.setName(newName);
    expect(service.name).toBe(newName);
  })
});