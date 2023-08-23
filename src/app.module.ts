import { Module } from '@nestjs/common';
import { DataModule } from './DataModule/data.module';


@Module({
  imports: [DataModule],

})
export class AppModule { }
