import { NgModule } from '@angular/core';

import { MemberListRoutingModule } from './member-list-routing.module';
import { MemberListComponent } from './member-list/member-list.component';
import { SharedModule } from '../shared/shared.module';
import { ListComponent } from './list/list.component';
import { MessagesComponent } from './messages/messages.component';
import { MemberCardComponent } from './member-card/member-card.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { TabsModule } from 'ngx-bootstrap';
import { NgxGalleryModule } from 'ngx-gallery';
import {
  HammerGestureConfig,
  HAMMER_GESTURE_CONFIG
} from '@angular/platform-browser';
import { MembersEditComponent } from './members-edit/members-edit.component';
import { MemberDetailResolver } from '../_resolver/member-details.resolver';
import { MemberListResolver } from '../_resolver/member-list.resolver';
import { MemberEditResolver } from '../_resolver/member-edit.resolve';
import { PreventUnsavedChanges } from '../_guard/prevent-unsaved-changed.guard';


export class CustomHammerConfig extends HammerGestureConfig {
  overrides = {
    pinch: { enable: false },
    rotate: { enable: false }
  };
}

@NgModule({
  declarations: [
    MemberListComponent,
    ListComponent,
    MessagesComponent,
    MemberCardComponent,
    MemberDetailComponent,
    MembersEditComponent
  ],
  imports: [
    SharedModule,
    MemberListRoutingModule,
    TabsModule.forRoot(),
    NgxGalleryModule
  ],
  providers: [{ provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig },
    MemberDetailResolver,
    MemberListResolver,
    MemberEditResolver,
    PreventUnsavedChanges
  ]
})
export class MemberListModule {}
