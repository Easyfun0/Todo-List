import { Todo } from './../../models/Todo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  title = "My To Do List";
  todos!: Todo[];
  inputTodo: string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'Hit the gym',
        completed: false
      },
      {
        content: 'Pay bills',
        completed: true
      },
            {
        content: 'Meet George',
        completed: false
      },
      {
        content: 'Buy eggs',
        completed: false
      },
            {
        content: 'Read a book',
        completed: false
      },
      {
        content: 'Organize office',
        completed: false
      },
    ]
  }


  toggleDone (id: number) {
    this.todos.map((x, i) => {
      if (i == id) x.completed = !x.completed;

      return x;
    })
  }
  deleteTodo(id: number) {
    this.todos = this.todos.filter((x, i) => i !== id);
  }
  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });
    this.inputTodo = "";
  }
}
