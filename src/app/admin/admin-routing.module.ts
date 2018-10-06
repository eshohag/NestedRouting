import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UsersComponent } from './users/users.component';
import { EmailBlastComponent } from './email-blast/email-blast.component';
import { PageNotFoundAdminComponent } from './page-not-found-admin/page-not-found-admin.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'users' },
      { path: 'users', component: UsersComponent },
      { path: 'emailBlast', component: EmailBlastComponent },
      { path: '**', pathMatch: 'full', component: PageNotFoundAdminComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
