import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable()
export class TaskService {

  constructor() { }

  listarTodos(): Task[] {
  	const tarefas = localStorage['tasks'];
  	return tarefas ? JSON.parse(tarefas) : [];
  }

  cadastrar(tarefa: Task): void {
  	const tarefas = this.listarTodos();
  	tarefa.id = new Date().getTime();
  	tarefas.push(tarefa);
  	localStorage['tasks'] = JSON.stringify(tarefas);
  }

  buscarPorId(id: number): Task {
    const tarefas: Task[] = this.listarTodos();
    var tarefa = tarefas.find(tarefa => tarefa?.id === id);
    return tarefas.find(tarefa => tarefa.id == id);
  }

  atualizar(tarefa: Task): void {
    const tarefas: Task[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if (tarefa.id === obj.id) {
        objs[index] = tarefa;
      }
    });
    localStorage['tasks'] = JSON.stringify(tarefas);
  }

  remover(id: number): void {
    let tarefas: Task[] = this.listarTodos();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    localStorage['tasks'] = JSON.stringify(tarefas);
  }

  alterarStatus(id: number): void {
    const tarefas: Task[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if (id === obj.id) {
        objs[index].concluida = !obj.concluida;
      }
    });
    localStorage['tasks'] = JSON.stringify(tarefas);
  }

}
