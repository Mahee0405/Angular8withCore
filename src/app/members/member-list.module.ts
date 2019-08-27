import { NgModule } from '@angular/core';

import { MemberListRoutingModule } from './member-list-routing.module';
import { MemberListComponent } from './member-list/member-list.component';
import { SharedModule } from '../shared/shared.module';
import { ListComponent } from './list/list.component';
import { MessagesComponent } from './messages/messages.component';
import { UserService } from '../_services/user.service';
import { MemberCardComponent } from './member-card/member-card.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { JwtModule } from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    MemberListComponent,
    ListComponent,
    MessagesComponent,
    MemberCardComponent,
    MemberDetailComponent
  ],
  imports: [SharedModule, MemberListRoutingModule]
})
export class MemberListModule {}
