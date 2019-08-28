import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { MembersEditComponent } from '../members/members-edit/members-edit.component';

@Injectable()
export class PreventUnsavedChanges implements CanDeactivate<MembersEditComponent> {
    canDeactivate(component: MembersEditComponent) {
        if (component.editForm.dirty) {
            return confirm('Are your sure to continue ?');
        }
        return true;
    }
}
