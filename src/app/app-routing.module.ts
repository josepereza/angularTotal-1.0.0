import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { IconComponent } from './icon/icon.component';


const routes: Routes = [
  {path: '', component: HeaderComponent},
  {path:'home',component:HeaderComponent},
  {path:'contactos',component:ContactusComponent},
  {path:'empresa',component:IconComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
