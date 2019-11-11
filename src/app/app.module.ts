import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ImagesComponent } from './images/images.component';
import { FooterComponent } from './footer/footer.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ImagelinkComponent } from './imagelink/imagelink.component';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {path: '',
  component: ImagesComponent
},
{
  path: 'Addproduct',
  component: AddproductComponent
},
{
  path: 'details/:id',
  component: ImagelinkComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImagesComponent,
    FooterComponent,
    AddproductComponent,
    ImagelinkComponent
 ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false}),
      ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
