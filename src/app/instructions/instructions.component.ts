import {Component, OnInit}       from '@angular/core';
import {InstructionsContentIntf} from '../library/components/instruction-step/instruction-step.component';




@Component({
	           selector   : 'app-instructions',
	           templateUrl: './instructions.component.html',
	           styleUrls  : ['./instructions.component.scss']
           })
export class InstructionsComponent implements OnInit {

	public readonly instructions: InstructionsContentIntf[] = [
		{
			title   : 'Notes',
			descr   : [],
			steps   : [
				{
					title   : '',
					descr   : ['At the time of receiving this documentation, you will have received an invitation to present your response.'],
					steps   : [],
					numbered: false
				},
				{
					title   : '',
					descr   : ['Your response should be approximately <strong>15-20 minutes</strong> in duration followed by a 10 minute question and answer discussion.'],
					steps   : [],
					numbered: false
				},
				{
					title   : '',
					descr   : ['If you have any questions while preparing your response, please contact your recruitment lead.'],
					steps   : [],
					numbered: false
				},
				{
					title   : '',
					descr   : ['Please return your code <strong>24 hours prior</strong> to the interview.'],
					steps   : [],
					numbered: false
				}
			],
			numbered: false
		},
		{
			title   : 'Setup',
			descr   : [],
			steps   : [
				{
					title   : 'Install a charting library',
					descr   : [
						'Using NPM, install a charting library of your choice. The aim of this task is to create something efficiently, try ChartJS if you\'re stuck for options. Don\'t forget, you\'ll <a target="_blank" href="https://valor-software.com/ng2-charts/">need a library that works with Angular</a>.'
					],
					steps   : [],
					numbered: true
				},
				{
					title   : 'Import the dataset',
					descr   : [
						`You'll find the source data files at <a href="https://data.gov.au/data/dataset/ultraviolet-radiation-index-canberra" target="_blank">https://data.gov.au/data/dataset/ultraviolet-radiation-index-canberra</a>, and the extracts in <pre class="inline-mono">/src/assets/data</pre>`
					],
					steps   : [],
					numbered: true
				},
				{
					title   : 'Follow the brief',
					descr   : [
						`Follow the brief in the next column as a guide to your minimum requirements. Feel free to be creative and add more if you think of something else.`
					],
					steps   : [],
					numbered: true
				},
				{
					title   : 'Build your dashboard',
					descr   : [
						`Start building your app in the empty module located in <pre class="inline-mono">src/app/content</pre> using <a href="https://tailwindcss.com/docs" target="_blank">Tailwind CSS classes</a> and any other tools you're famililar with. You might want to add Angular Material to create a tooltip, for example.`
					],
					steps   : [],
					numbered: true
				}
			],
			numbered: true
		},
		{
			title   : 'Brief',
			descr   : [],
			steps   : [
				{
					title   : 'Question 1',
					descr   : [
						'Create a chart that shows the average UV index through time over the course of a full year.'
					],
					steps   : [],
					numbered: true
				},
				{
					title   : 'Question 2',
					descr   : [
						'Create a chart that shows median uv index by month, coloured/filterable by season.'
					],
					steps   : [],
					numbered: true
				},
				{
					title   : 'Question 3',
					descr   : [
						'Create annotations highlighting the minimum, maximum and average UV Index.'
					],
					steps   : [],
					numbered: true
				},
				{
					title   : 'Bonus Question',
					descr   : [
						'Create a chart that shows where the data is sourced from on a map using the coordinates provided.'
					],
					steps   : [],
					numbered: true
				}
			],
			numbered: true
		},
		{
			title   : 'How to Return',
			descr   : [],
			steps   : [
				{
					title   : 'Remove node modules',
					descr   : [
						'Delete the <pre class="inline-mono">node_modules</pre> directory.'
					],
					steps   : [],
					numbered: true
				},
				{
					title   : 'Remove Tailwind',
					descr   : [
						'Delete the file located at <pre class="inline-mono">src/app/library/frameworks/tailwind/tailwind.dist.scss</pre>.'
					],
					steps   : [],
					numbered: true
				},
				{
					title   : 'Zip & Email',
					descr   : [
						'Zip your directory and return by email to your recruitment lead.'
					],
					steps   : [],
					numbered: true
				}
			],
			numbered: true
		}
	];

	constructor() { }

	ngOnInit(): void {
	}

}
