import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ParentComponent } from './parent/parent.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { SetBackground } from './Directive/custom.directive';
import { HighlightDirective } from './Directive/highlight.directive';
import { HoverDirective } from './Directive/hover.directive';
import { HostbindingDirective } from './Directive/hostbinding.directive';
import { ObservableComponent } from './observable/observable.component';
import { OperatorsComponent } from './operators/operators.component';


@NgModule({
  declarations: [AppComponent, LifecycleComponent, ContentChildComponent, ViewChildComponent, ParentComponent, CustomDirectiveComponent,SetBackground, HighlightDirective, HoverDirective, HostbindingDirective, ObservableComponent, OperatorsComponent ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
