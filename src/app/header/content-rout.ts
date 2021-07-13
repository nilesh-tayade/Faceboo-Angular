import { Routes } from '@angular/router';
import { IsLoggedInGuard } from '../guards/is-logged-in.guard';


export const contentroutes: Routes = [
    {path:'home',loadChildren:() => import('src/app/home/home.module').then(m => m.HomeModule), canActivate:[IsLoggedInGuard]},
    {path:'watch',loadChildren:() => import('src/app/watch/watch.module').then(m => m.WatchModule),canActivate:[IsLoggedInGuard]},
    {path:'marketplace',loadChildren:() => import('src/app/marketplace/marketplace.module').then(m => m.MarketplaceModule),canActivate:[IsLoggedInGuard]},
    {path:'groups',loadChildren:() => import('src/app/groups/groups.module').then(m => m.GroupsModule),canActivate:[IsLoggedInGuard]},
    {path:'profile',loadChildren:() => import('src/app/profile/profile.module').then(m => m.ProfileModule),canActivate:[IsLoggedInGuard]},
    {path:'admin',loadChildren:() => import('src/app/admin/admin.module').then(m => m.AdminModule),canActivate:[IsLoggedInGuard]},

    
    
  
  ];