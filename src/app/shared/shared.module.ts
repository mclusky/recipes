import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from '../directives/dropdown.directive';

@NgModule({
    imports: [
    ],
    declarations: [
        DropdownDirective
    ],
    exports: [DropdownDirective, CommonModule]
})
export class SharedModule { }
