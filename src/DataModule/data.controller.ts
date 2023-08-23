import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import { DataService } from './data.service';
import { DataDto } from './data.dto';

@Controller('api/data') // route for the conroller
export class DataController {
    constructor(private dataService: DataService) { }

    @Get() // GET handler
    getData(@Query(ValidationPipe) dataDto: DataDto) {
        if (dataDto.id === undefined && dataDto.name === undefined) {
            return this.dataService.getData()
        }
        else if (dataDto.id !== undefined && dataDto.name === undefined) {
            // Convert the id string to a number using parseInt
            const idNumber = parseInt(dataDto.id.toString(), 10);
            return this.dataService.getData(idNumber)
        }
        else {
            const idNumber = parseInt(dataDto.id.toString(), 10);
            //console.log(typeof idNumber)
            return this.dataService.getData(idNumber, dataDto.name)
        }

    }
}