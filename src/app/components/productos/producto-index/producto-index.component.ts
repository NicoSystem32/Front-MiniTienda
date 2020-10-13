import { Component, OnInit } from '@angular/core';
import { GLOBAL } from 'src/app/services/GLOBAL';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-index',
  templateUrl: './producto-index.component.html',
  styleUrls: ['./producto-index.component.css']
})
export class ProductoIndexComponent implements OnInit {
  public productos;
  public url;
  constructor(
    private _productoService: ProductoService,
  ) { 
    this.url = GLOBAL.url;
   }

  ngOnInit() {
    this._productoService.get_productos('').subscribe(
      response =>{
        console.log(response);
        this.productos = response.productos;
      },
      error =>{

      }
    )
  }

}
