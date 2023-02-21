import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'array-custom-sequencing-angular';


  dataArray = [{"name":"Sam" , "sequence":1},
               {"name":"Ran" , "sequence":2},
               {"name":"Ban" , "sequence":3},
               {"name":"Dam" , "sequence":4},
               {"name":"Nam" , "sequence":5}]

  move(dataArray,new_index,old_index){
    dataArray.splice(new_index, 0, dataArray.splice(old_index, 1)[0]);
    let i= 0;
    dataArray.forEach(element => {
      i++
      element.sequence = i;
    });
    return dataArray;
  } 

}
