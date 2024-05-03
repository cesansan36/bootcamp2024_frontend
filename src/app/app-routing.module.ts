import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/templates/home/home.component';
import { TechnologiesComponent } from './components/pages/technologies/technologies.component';
import { CapabilitiesComponent } from './components/pages/capabilities/capabilities.component';
import { BootcampComponent } from './components/pages/bootcamp/bootcamp.component';

const routes: Routes = [
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: 'library/technologies',
		component: TechnologiesComponent
	},
	{
		path: 'library/capabilities',
		component: CapabilitiesComponent
	},
	{
		path: 'library/bootcamp',
		component: BootcampComponent
	},
	{
		path: 'library',
		redirectTo: 'library/technologies',
		pathMatch: 'full'
	},
	{
		path: '**',
		redirectTo: 'home',
		pathMatch: 'full'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
