import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';

const appRoutes: Routes = [
	{ path: '', 		component: SearchComponent },
	{ path: 'about', 	component: AboutComponent },
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	],
	declarations: []
})
export class AppRoutingModule { }
