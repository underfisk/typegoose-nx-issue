import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { Cat } from './cat.model';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Cat) readonly catModel: ReturnModelType<typeof Cat>
  ) {}

  getData(): { message: string } {
    return { message: 'Welcome to backend!' };
  }
}
