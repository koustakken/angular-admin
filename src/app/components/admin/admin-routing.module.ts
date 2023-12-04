import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ContactsDetailComponent } from './components/contacts-detail/contacts-detail.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
	{
		path: '', component: AdminDashboardComponent,
		children: [
			{ path: 'contacs', component: ContactsComponent },
			{ path: 'contacs/user/:id', component: ContactsDetailComponent },
			{ path: 'home', component: HomeComponent }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AdminRoutingModule { }
