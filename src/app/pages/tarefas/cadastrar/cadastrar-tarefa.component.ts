import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent implements OnInit {

  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm;
  tarefa: Task;

  constructor(private tarefaService: TaskService,
  	private router: Router) { }

  ngOnInit() {
  	this.tarefa = new Task(0, "", false);
  }

  cadastrar(): void {
    if (this.formTarefa.form.valid) {
  	  this.tarefaService.cadastrar(this.tarefa);
  	  this.router.navigate(["/listar-tarefas"]);
    }
  }

}
