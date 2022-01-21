import { ModuleWithProviders } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./Components/home/home.component";
import { PokedexComponent } from "./Components/pokedex/pokedex.component";

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'pokedex', component: PokedexComponent},
    {path: '**', component: HomeComponent}
    
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);