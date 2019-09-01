import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: [`
      * {
        font-size: 12px;
        font-family: 'Times New Roman';
      }
      td,
      th,
      tr,
      table {
        border-top: 1px solid black;
        border-collapse: collapse;
      }
      td.producto,
      th.producto {
        width: 75px;
        max-width: 75px;
      }
      td.cantidad,
      th.cantidad {
        width: 40px;
        max-width: 40px;
        word-break: break-all;
      }
      td.precio,
      th.precio {
        width: 40px;
        max-width: 40px;
        word-break: break-all;
      }
      .centrado {
        text-align: center;
        align-content: center;
      }
      .ticket {
        width: 155px;
        max-width: 155px;
      }
      img {
        max-width: 100px;
        width: 100px;
      }
      @media print{
        .oculto-impresion, .oculto-impresion *{
          display: none !important;
        }
      }
  `]
})
export class Graficas1Component implements OnInit {

  constructor() { }

  visible = true;

  ngOnInit() {
  }

  imprimerTicket() {
    this.visible = false;

    // ticket
    const printContents = document.getElementById('ticket').innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;

  }

}
