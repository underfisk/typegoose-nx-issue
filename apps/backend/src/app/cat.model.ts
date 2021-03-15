import { prop } from '@typegoose/typegoose';
import { CatSomething } from '@test-typegoose-issue/models';

export class Cat {
  @prop({ required: true, enum: CatSomething })
  name: CatSomething;
}
