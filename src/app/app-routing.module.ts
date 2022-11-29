import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcmeAboutComponent } from './acme-about/acme-about.component';
import { AcmeElectComponent } from './acme-elect/acme-elect.component';

const routes: Routes = [
{
  path:"",
  redirectTo:"elect",
  pathMatch:"full",
},
{path:'elect',
component: AcmeElectComponent
},
{path:'about',
component: AcmeAboutComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
