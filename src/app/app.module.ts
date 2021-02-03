import { TaskService } from './services/tarefa.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';




import { ListarTarefaComponent } from './pages/tarefas/listar/listar-tarefa.component';
import { CadastrarTarefaComponent } from './pages/tarefas/cadastrar/cadastrar-tarefa.component';
import { EditarTarefaComponent } from './pages/tarefas/editar/editar-tarefa.component';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarTarefaComponent,
    CadastrarTarefaComponent,
    EditarTarefaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
