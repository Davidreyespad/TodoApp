import { Component, OnInit } from '@angular/core';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {
  private _tarea: string = "";
  private _nota: any;

  constructor(private servicioTareas: TareasService){}
  ngOnInit(): void{
  }
  addTarea(): void{
    if(this._tarea !== '' ){
      this.servicioTareas.tareas.push(this._tarea);
      this._tarea = " ";
      this.servicioTareas.tareas.push(this._nota);
      this._nota = " ";
    }
  }

  set tarea(tarea: string){
    this._tarea = tarea;
  }
  get tarea(): string{
    return this._tarea;
  }
  set nota(nota: any){
    this._nota = nota;
  }
  get nota(): any{
    return this._nota;
  }
}
