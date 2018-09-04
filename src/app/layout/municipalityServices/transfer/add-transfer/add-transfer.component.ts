import { Component, OnInit } from '@angular/core';
import { TransferModel } from '../transfer-model';
import { TransferService } from '../transfer.service';
@Component({
  selector: 'app-add-transfer',
  templateUrl: './add-transfer.component.html',
  styleUrls: ['./add-transfer.component.scss']
})
export class AddTransferComponent implements OnInit {

  transferModel:TransferModel = new TransferModel();

  constructor(private transferService:TransferService) { }


  ngOnInit() {
  }

  addTransfer(){
    this.transferService.addTransfer(this.transferModel).subscribe(
      data=>{
        console.log(data);
        let added = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log(added);
    }
    )
  }


}
