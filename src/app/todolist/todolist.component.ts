import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodowrapperComponent } from '../todowrapper/todowrapper.component';
import { NgClass } from '@angular/common';
import { Todo } from '../todowrapper/Todo';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [TodowrapperComponent, NgClass],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css',
})
export class TodolistComponent {
  iscompleted(index: number) {
    this.todolist[index].iscompleted = true;
    this.todolist = [...this.todolist];
  }

  @Input() todolist: Todo[] = [];

  @Output() handleSentData = new EventEmitter<number>();

  removeTodo(index: number) {
    this.handleSentData.emit(index);
  }
}
