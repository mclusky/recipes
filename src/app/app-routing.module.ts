import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'recipes',
        loadChildren: './components/recipes/recipes.module#RecipesModule',
        canLoad: [AuthGuard]
    }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes, {
        preloadingStrategy: PreloadAllModules
    })],
    providers: [],
    declarations: []
})

export class AppRoutingModule { }
