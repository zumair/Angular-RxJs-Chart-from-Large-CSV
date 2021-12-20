import {NgModule}              from '@angular/core';
import {RouterModule, Routes}  from '@angular/router';
import {ContentComponent}      from './content/content.component';
import {InstructionsComponent} from './instructions/instructions.component';




const routes: Routes = [
	{
		path      : '',
		redirectTo: 'instructions',
		pathMatch : 'full'
	},
	
	{
		path        : 'content',
		component   : ContentComponent,
		loadChildren: () => import('./content/content.module').then(m => m.ContentModule)
	},
	{
		path        : 'instructions',
		component   : InstructionsComponent,
		loadChildren: () => import('./instructions/instructions.module').then(m => m.InstructionsModule)
	}
];

@NgModule({
	          imports: [RouterModule.forRoot(routes)],
	          exports: [RouterModule]
          })
export class AppRoutingModule {}
