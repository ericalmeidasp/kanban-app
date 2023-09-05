import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PanelComponent } from './components/panel/panel.component';
import { QuadroComponent } from './components/quadro/quadro.component';
import { ColunaComponent } from './components/coluna/coluna.component';
import { TarefaComponent } from './components/tarefa/tarefa.component';
import { CardChatComponent } from './components/card-chat/card-chat.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PanelComponent,
    QuadroComponent,
    ColunaComponent,
    TarefaComponent,
    CardChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
