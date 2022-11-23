import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ErrorsComponent } from './errors/errors.component';
import { LogoutComponent } from './logout/logout.component';
import { AdminComponent } from './admin/admin.component';
import { RouteGuardService } from './service/route-guard.service';
import { ArticleComponent } from './admin/article/article.component';
import { CategoryComponent } from './admin/category/category.component';
import { UserComponent } from './admin/user/user.component';
import { CategoryAddComponent } from './admin/category/category-add/category-add.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [RouteGuardService],
  },
  {
    path: 'admin/articles',
    component: ArticleComponent,
    canActivate: [RouteGuardService],
  },
  {
    path: 'admin/categories',
    component: CategoryComponent,
    canActivate: [RouteGuardService],
  },
  {
    path: 'admin/categories/add',
    component: CategoryAddComponent,
    canActivate: [RouteGuardService],
  },
  {
    path: 'admin/users',
    component: UserComponent,
    canActivate: [RouteGuardService],
  },
  { path: 'logout', component: LogoutComponent },
  { path: '**', component: ErrorsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
