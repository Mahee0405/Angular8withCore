import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberListComponent } from './member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListComponent } from './list/list.component';
import { AuthGuard } from '../_guard/auth.guard';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MemberDetailResolver } from '../_resolver/member-details.resolver';
import { MemberListResolver } from '../_resolver/member-list.resolver';


const routes: Routes = [
  {
    path: 'members' , component: MemberListComponent , resolve: { users: MemberListResolver}
  },
  {
    path: 'members/:id' , component: MemberDetailComponent, resolve: {user: MemberDetailResolver}
  },
  {
    path: 'messages' , component: MessagesComponent
  },
  {
    path: 'list' , component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberListRoutingModule { }
