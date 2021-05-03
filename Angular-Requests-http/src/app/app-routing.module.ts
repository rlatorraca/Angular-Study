import { UnsubscribeRxjsModule } from './unsubscribe-rxjs/unsubscribe-rxjs.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'upload' },
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)
    //loadChildren: './courses/courses.module#CoursesModule' 
  },
  {
    path: 'upload',
    loadChildren: () => import('./upload-file/upload-file.module').then(m => m.UploadFileModule)
    //loadChildren: './upload-file/upload-file.module#UploadFileModule'
  },
  {
    path: 'rxjs-poc',
    loadChildren: () => import('./unsubscribe-rxjs/unsubscribe-rxjs.module').then(m => m.UnsubscribeRxjsModule)
    //loadChildren: './unsubscribe-rxjs/unsubscribe-rxjs.module#UnsubscribeRxjsModule' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
