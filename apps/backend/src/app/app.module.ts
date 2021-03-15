import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { Cat } from './cat.model';

@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost:27001/something', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    TypegooseModule.forFeature([Cat]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
