import {NgModule}                 from '@angular/core';
import {CommonModule}             from '@angular/common';
import {InstructionStepComponent} from './components/instruction-step/instruction-step.component';




@NgModule({
	          declarations: [
		          InstructionStepComponent
	          ],
	          exports     : [
		          InstructionStepComponent
	          ],
	          imports     : [
		          CommonModule
	          ]
          })
export class LibraryModule {}
