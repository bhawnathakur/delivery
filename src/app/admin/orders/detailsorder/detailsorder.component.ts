import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { OrderService } from 'src/app/services/order.service';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-detailsorder',
  templateUrl: './detailsorder.component.html',
  styleUrls: ['./detailsorder.component.scss']
})
export class DetailsorderComponent implements OnInit {
  orderForm: FormGroup;
  id:number ;
  constructor(
    private service: OrderService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"] ;
    this.orderForm = this.formBuilder.group({
      num: [''],
     priority: [''],
      ordername: [''],
      address: [''],
      phone: [''],
      driver: [''],
      delivered: [''],
      datetime: ['']
    });
    this.getOneOrder(this.id) ;
  }
  getOneOrder(id){

this.service.getOneOrder(id).subscribe(data=>
  {
    console.log(data);
    this.orderForm = this.formBuilder.group({
      num: data[0].number,
      priority: data[0].priority,
      ordername: data[0].ordername,
      address: data[0].address,
      phone: data[0].phone,
      driver: data[0].name,
      delivered: data[0].delivered,
      datetime: data[0].datetime
    });
  })
  }
  goBack(){
    this.router.navigate(['/admin']) ;
  }
}
