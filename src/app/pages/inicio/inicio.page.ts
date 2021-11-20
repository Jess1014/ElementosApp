import { Component, OnInit } from '@angular/core';

interface Componente {
icon: string;
name: string;
redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

componentes: Componente[] = [
  { 
    icon: "american-football-outline",
    name: "action-sheet",
    redirectTo: "/action-sheet"
  },
  { 
    icon: "american-football-outline",
    name: "alert",
    redirectTo: "/alert"
  }
];
  constructor() { }

  ngOnInit() {
  }

}
