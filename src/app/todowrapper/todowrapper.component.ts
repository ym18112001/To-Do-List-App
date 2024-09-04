import { Component } from '@angular/core';
import { TodoformComponent } from '../todoform/todoform.component';
import { TodolistComponent } from '../todolist/todolist.component';
import { Todo } from './Todo';

@Component({
  selector: 'app-todowrapper',
  standalone: true,
  imports: [TodoformComponent, TodolistComponent],
  templateUrl: './todowrapper.component.html',
  styleUrl: './todowrapper.component.css',
})
export class TodowrapperComponent {
  todolist: Todo[] = [];
  iscompleted() {
    this.todolist.forEach((todo) => {
      todo.iscompleted = true;
    });
    this.todolist = [...this.todolist];
  }

  addTodo(title: string) {
    this.todolist.push({ title: title, iscompleted: false });
  }

  removeTodo(index: number) {
    this.todolist.splice(index, 1);
    this.todolist = [...this.todolist];
  }

  handleReceiveData(todoinput: HTMLInputElement) {
    this.addTodo(todoinput.value);
  }

  handleReceivedData(index: number) {
    this.removeTodo(index);
  }
}
