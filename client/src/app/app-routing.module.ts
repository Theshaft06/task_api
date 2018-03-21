import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskListComponent } from './task/task-list/task-list.component';
import { TaskNewComponent } from './task/task-new/task-new.component';
import { TaskShowComponent } from './task/task-show/task-show.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: TaskListComponent },
    { path: 'task', component: TaskListComponent },
    { path: 'task/new', component: TaskNewComponent },
    { path: 'task/:id', component: TaskShowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
