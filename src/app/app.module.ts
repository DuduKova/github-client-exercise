import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { HomeComponent } from './home/home.component';
import { MapPipe } from './pipe/map.pipe';
import { CompanyPipe } from './pipe/company.pipe';

@NgModule({
    declarations: [
        AppComponent,
        UserComponent,
        UserListComponent,
        HomeComponent,
        MapPipe,
        CompanyPipe
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
