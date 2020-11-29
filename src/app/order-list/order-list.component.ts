import { Order } from './../shared/interfaces/order';
import { OrderService } from './../shared/services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
orderList: Order[];
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.read$().subscribe(
      data => this.orderList = data);
  }
delete(order){
  this.orderService.delete(order);

}
}
