import { TaskService } from './../../../services/tarefa.service';
import { Task } from 'src/app/models/task';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Task[];

  constructor(private tarefaService: TaskService) {}

  ngOnInit() {
  	this.tarefas = this.listarTodos();
  }

  listarTodos(): Task[] {
  	return this.tarefaService.listarTodos();
  }

  remover($event: any, tarefa: Task): void {
    $event.preventDefault();
    if (confirm('Deseja remover a tarefa "' + tarefa.nome + '"?')) {
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.tarefaService.listarTodos();
    }
  }

  alterarStatus(tarefa: Task): void {
    if (!confirm('Deseja alterar o status da tarefa "' + tarefa.nome + '"?')) {
      this.tarefaService.alterarStatus(tarefa.id);
      this.tarefas = this.tarefaService.listarTodos();
    }
  }

}
