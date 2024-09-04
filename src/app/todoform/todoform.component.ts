import {
  Component,
  ViewChild,
  ElementRef,
  EventEmitter,
  Output,
  AfterViewInit,
} from '@angular/core';
import { TodowrapperComponent } from '../todowrapper/todowrapper.component';

@Component({
  selector: 'app-todoform',
  standalone: true,
  imports: [TodowrapperComponent],
  templateUrl: './todoform.component.html',
  styleUrl: './todoform.component.css',
})
export class TodoformComponent implements AfterViewInit {
  @ViewChild('todoinput') todoinput!: ElementRef<HTMLInputElement>;

  @Output() handleSendData = new EventEmitter<HTMLInputElement>();

  addTodo(todoinput: HTMLInputElement) {
    if (todoinput.value !== '') this.handleSendData.emit(todoinput);
    this.todoinput.nativeElement.value = '';
  }

  ngAfterViewInit() {
    this.todoinput.nativeElement.focus();
  }
}
