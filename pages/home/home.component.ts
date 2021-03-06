import { Component, OnInit } from '@angular/core';
import {GyTablePropertyListModel} from "../../../ui-library/models/gy.table.property.list.model";
import {UiLibraryUtilsService} from "../../../ui-library/services/ui-library-utils.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dataSource: any[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];

  tableData!: GyTablePropertyListModel;

  constructor(
    private uiLibraryUtilsService: UiLibraryUtilsService,
  ) {
    this.tableData = {
      modelAttributeNameList: this.uiLibraryUtilsService.getObjectArrayKeys(
        {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'}),
      displayedColumnsList: [
        'Posición', 'Nombre', 'Peso', 'Símbolo'
      ]
    };
  }

  ngOnInit(): void {}

  printLog(type: string) {
    console.log(type);
  }

}
