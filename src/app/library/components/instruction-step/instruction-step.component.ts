import {Component, Input, OnInit} from '@angular/core';




export interface InstructionsContentIntf {
	title: string,
	descr: string[],
	numbered: boolean,
	steps: InstructionsContentIntf[]
}

@Component({
	           selector   : 'app-instruction-step',
	           templateUrl: './instruction-step.component.html',
	           styleUrls  : ['./instruction-step.component.scss']
           })
export class InstructionStepComponent implements OnInit {

	@Input() instruction!: InstructionsContentIntf;

	constructor() { }

	ngOnInit(): void {
	}

}
