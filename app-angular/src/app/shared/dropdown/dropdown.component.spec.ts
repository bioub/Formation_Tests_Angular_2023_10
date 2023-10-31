import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownComponent } from './dropdown.component';

describe('DropdownComponent', () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contains default items', () => {
    expect(fixture.nativeElement.textContent).toContain('Item 1');
    expect(fixture.nativeElement.textContent).toContain('Item 2');
    expect(fixture.nativeElement.textContent).toContain('Item 3');
  });

  it('should contains input items', () => {
    component.items = ['Toto', 'Titi', 'Tata'];

    fixture.detectChanges(); // obligatoire si on touche aux inputs

    expect(fixture.nativeElement.textContent).toContain('Toto');
    expect(fixture.nativeElement.textContent).toContain('Titi');
    expect(fixture.nativeElement.textContent).toContain('Tata');
  });
});
