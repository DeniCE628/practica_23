import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  {
    path: 'toast',
    loadChildren: () => import('./componentes_carlos/toast/toast.module').then( m => m.ToastPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./componentes_carlos/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'slides',
    loadChildren: () => import('./componentes_carlos/slides/slides.module').then( m => m.SlidesPageModule)
  },
  {
    path: 'segment',
    loadChildren: () => import('./componentes_carlos/segment/segment.module').then( m => m.SegmentPageModule)
  },
  {
    path: 'searchbar',
    loadChildren: () => import('./componentes_carlos/searchbar/searchbar.module').then( m => m.SearchbarPageModule)
  },
  {
    path: 'tab-bar',
    loadChildren: () => import('./componentes_carlos/tab-bar/tab-bar.module').then( m => m.TabBarPageModule)
  },
  {
    path: 'tab-button',
    loadChildren: () => import('./componentes_carlos/tab-button/tab-button.module').then( m => m.TabButtonPageModule)
  },
  {
    path: 'segment-button',
    loadChildren: () => import('./componentes_carlos/segment-button/segment-button.module').then( m => m.SegmentButtonPageModule)
  },
  {
    path: 'select',
    loadChildren: () => import('./componentes_carlos/select/select.module').then( m => m.SelectPageModule)
  },
  {
    path: 'select-option',
    loadChildren: () => import('./componentes_carlos/select-option/select-option.module').then( m => m.SelectOptionPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
