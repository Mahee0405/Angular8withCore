import { NgModule } from '@angular/core';

import { MemberListRoutingModule } from './member-list-routing.module';
import { MemberListComponent } from './member-list/member-list.component';
import { SharedModule } from '../shared/shared.module';
import { ListComponent } from './list/list.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [MemberListComponent, ListComponent, MessagesComponent],
  imports: [SharedModule, MemberListRoutingModule]
})
export class MemberListModule {}
