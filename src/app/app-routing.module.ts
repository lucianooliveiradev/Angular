import { EditarTarefaComponent } from './pages/tarefas/editar/editar-tarefa.component';
import { CadastrarTarefaComponent } from './pages/tarefas/cadastrar/cadastrar-tarefa.component';
import { ListarTarefaComponent } from './pages/tarefas/listar/listar-tarefa.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '', component: ListarTarefaComponent },
  { path: '', component: ListarTarefaComponent, pathMatch: 'full' },
  { path: 'listar-tarefas', component: ListarTarefaComponent },
  { path: 'cadastrar-tarefa', component: CadastrarTarefaComponent },
  { path: 'editar-tarefa/:id', component: EditarTarefaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
