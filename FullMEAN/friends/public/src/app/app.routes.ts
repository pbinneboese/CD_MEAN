// app.routes.ts (Route Configurations)
import { Routes, RouterModule } from '@angular/router';
import { FriendsComponent } from './friends/friends.component';
import { FriendsListComponent } from './friends/friends-list/friends-list.component';
import { FriendsNewComponent } from './friends/friends-new/friends-new.component';
import { FriendsEditComponent } from './friends/friends-edit/friends-edit.component';
import { FriendsShowComponent } from './friends/friends-show/friends-show.component';
const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/friends', pathMatch: 'full' },
    { path: 'friends', component: FriendsComponent,
    children: [
      { path: 'list', component: FriendsListComponent },
      { path: 'show', component: FriendsShowComponent },
      { path: 'new', component: FriendsNewComponent },
      { path: 'edit', component: FriendsEditComponent },
      { path: ':id', component: FriendsShowComponent }
  ]
}
];
export const routing = RouterModule.forRoot(APP_ROUTES);
