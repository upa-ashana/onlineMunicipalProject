import { Component, OnInit } from '@angular/core';
import { LandModule} from '../land.module';
import { LandService } from '../land.service';

@Component({
  selector: 'app-add-land',
  templateUrl: './add-land.component.html',
  styleUrls: ['./add-land.component.scss']
})
export class AddLandComponent implements OnInit {
  landModel:LandModule= new LandModule();

  constructor(private landService:LandService) { }

  
  ngOnInit() {
  }

  addLand(){
    this.landService.addLand(this.landModel).subscribe(
      data=>{
        console.log(data);
        let added = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        console.log(added);
    }
    )
  }
}
