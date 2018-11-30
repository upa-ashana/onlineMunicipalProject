import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {TransferService} from '../transfer.service';
import {TransferModel} from '../transfer-model';

@Component({
  selector: 'app-edit-transfer',
  templateUrl: './edit-transfer.component.html',
  styleUrls: ['./edit-transfer.component.scss']
})
export class EditTransferComponent implements OnInit {
  transferModel: TransferModel = new TransferModel();
  private imageUrl:String;
  constructor(private route: ActivatedRoute, private transferService: TransferService,
  private router:Router) {

    this.route.params.subscribe(
      params => {
        this.transferService.getTransferById(params.id).subscribe(
          data => {
            this.transferModel = JSON.parse(JSON.parse(JSON.stringify(data))._body);          
          }
        );
      }
    );
  }  

  ngOnInit() {
  }

  updateTransfer() {
    this.transferService.updateTransfer(this.transferModel).subscribe(
      data => {
          this.router.navigate(['/transfer/viewtransfer']);
      }
    );
  }

}
