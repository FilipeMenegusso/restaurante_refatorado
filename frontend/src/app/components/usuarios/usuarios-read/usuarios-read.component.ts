import { Component, OnInit } from '@angular/core';
import { Usuarios } from "../../../models/usuarios.model";
import { UsuarioService } from "../../../service/usuarios.service";

@Component({
  selector: 'app-usuarios-read',
  templateUrl: './usuarios-read.component.html',
  styleUrls: ['./usuarios-read.component.css']
})

export class UsuariosReadComponent implements OnInit {

  usuarios: Usuarios[]
  displayedColumns = ['id', 'name', 'cargo','action']
  
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.read().subscribe(usuarios => {
      this.usuarios = usuarios;
    });
  }

}
