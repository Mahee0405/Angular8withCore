import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberListComponent } from './member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListComponent } from './list/list.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MemberDetailResolver } from '../_resolver/member-details.resolver';
import { MemberListResolver } from '../_resolver/member-list.resolver';
import { MembersEditComponent } from './members-edit/members-edit.component';
import { MemberEditResolver } from '../_resolver/member-edit.resolve';
import { PreventUnsavedChanges } from '../_guard/prevent-unsaved-changed.guard';

const routes: Routes = [
  {
    path: 'members',
    component: MemberListComponent,
    resolve: { users: MemberListResolver }
  },
  {
    path: 'members/:id',
    component: MemberDetailComponent,
    resolve: { user: MemberDetailResolver }
  },
  {
    path: 'member/edit',
    component: MembersEditComponent,
    resolve: { user: MemberEditResolver },
    canDeactivate: [PreventUnsavedChanges]
  },
  {
    path: 'messages',
    component: MessagesComponent
  },
  {
    path: 'list',
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberListRoutingModule {}
