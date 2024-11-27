import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Theater } from 'src/app/models/theater.model';
import { TheaterService } from 'src/app/services/theater.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  theaters:Theater[];
  constructor(private theatersService: TheaterService,
              private router: Router
  ) { //Inyectamos el theater service
    this.theaters=[];
  }

  ngOnInit(): void {
    this.list()
  }

  create() {
    this.router.navigate(["theaters/create"])
  }
  list() {
    this.theatersService.list().subscribe(data=>{ //subscribe es un tipo de await para esperar la respuesta del del servicio
      this.theaters = data
    })
  }
  update(id:number){
    this.router.navigate(["theaters/update/"+id])
  }
  view(id:number){
    this.router.navigate(["theaters/view/"+id])
  }
  delete(id:number) {
    Swal.fire({
      title: "¿Estas seguro?",
      text: "¡El teatro se eliminará para siempre!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: 'Cancelar',
      confirmButtonText: "¡Si, elimina esto!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.theatersService.delete(id).subscribe(data => {
          this.ngOnInit()
          Swal.fire({
            title: "¡Eliminado correctamente!",
            text: "Tu elemento ha sido eliminado.",
            icon: "success"
          })
        } 
         )
      }
    });
    
  }

  viewSeats(theaterId:number) {
    this.router.navigate(["seats/list/" + theaterId])
  }

}
