import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodowrapperComponent } from './todowrapper.component';

describe('TodowrapperComponent', () => {
  let component: TodowrapperComponent;
  let fixture: ComponentFixture<TodowrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodowrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodowrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
