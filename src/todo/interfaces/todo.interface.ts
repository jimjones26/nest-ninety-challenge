import { Document } from 'mongoose';

export interface Todo extends Document {
  readonly id: string;
  readonly name: string;
  readonly isComplete: boolean;
}
