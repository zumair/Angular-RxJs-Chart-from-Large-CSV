import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';

import {InstructionsRoutingModule} from './instructions-routing.module';
import {InstructionsComponent}     from './instructions.component';
import {LibraryModule}             from '../library/library.module';




@NgModule({
	          declarations: [
		          InstructionsComponent
	          ],
	          imports: [
		          CommonModule,
		          InstructionsRoutingModule,
		          LibraryModule
	          ]
          })
export class InstructionsModule {}
