// app.routes.ts (Route Configurations)
import { Routes, RouterModule } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { TaskPublicComponent } from './task/task-public/task-public.component';
import { TaskPrivateComponent } from './task/task-private/task-private.component';
import { NotesComponent } from './notes/notes.component';
import { NotesPublicComponent } from './notes/notes-public/notes-public.component';
import { NotesPrivateComponent } from './notes/notes-private/notes-private.component';
const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/task', pathMatch: 'full' },
    { path: 'task', component: TaskComponent,
    children: [
      { path: 'public', component: TaskPublicComponent },
      { path: 'private', component: TaskPrivateComponent },
  ]
},
    { path: 'notes', component: NotesComponent,
    children: [
      { path: 'public', component: NotesPublicComponent },
      { path: 'private', component: NotesPrivateComponent },
  ]
}

];
export const routing = RouterModule.forRoot(APP_ROUTES);
