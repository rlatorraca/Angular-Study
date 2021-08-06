import { NewTransferComponent } from './new-transfer/new-transfer.component';
import { ShowTransferComponent } from './show-transfer/show-transfer.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/new-transfer', pathMatch: 'full' },
  {path: 'view', component: ShowTransferComponent},
  {path: 'new-transfer', component: NewTransferComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    declarations: [],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {

}
