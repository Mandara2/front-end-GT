import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Theater } from 'src/app/models/theater.model';
import { TheaterService } from 'src/app/services/theater.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  theater:Theater;
  //Si mode es igual 1 --> view, mode=2 --> create, mode=3 --> update
  mode: number;
  constructor(private theaterService: TheaterService,
    private router:Router,   //Este es el que me ayuda a moverme entre las paginas
    private activateRoute:ActivatedRoute //toma foto de la URl para sacar informacion de ella
  ) {
    this.theater = {id: 0 , capacity: 0, location: ""}
    this.mode = 0;
   }

  ngOnInit(): void {
    const currentUrl = this.activateRoute.snapshot.url.join('/');
    if (currentUrl.includes('view')) {
      this.mode = 1;
    } else if (currentUrl.includes('create')) {
      this.mode = 2;
    } else if (currentUrl.includes('update')) {
      this.mode = 3;
    }
    if (this.activateRoute.snapshot.params.id) {
      this.theater.id = this.activateRoute.snapshot.params.id
      this.getTheater(this.theater.id)
    }
  }
  getTheater(id:number) {
    this.theaterService.view(id).subscribe(data=>{
      this.theater = data
    })
  }

  create() {
    this.theaterService.create(this.theater).subscribe(data=> {
      Swal.fire("Creado", "Se ha creado el teatro existosamente", "success")
      this.router.navigate(["theaters/list"]) //Aqui me muevo para el theaters list 
    })
  }

  update() {
    this.theaterService.update(this.theater).subscribe(data=> {
      Swal.fire("Actualizado", "Se ha actualizado el teatro existosamente", "success")
      this.router.navigate(["theaters/list"]) //Aqui me muevo para el theaters list 
    })
  }

}
