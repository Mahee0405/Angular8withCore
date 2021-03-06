import { Photo } from './photo';

export interface User {
  id: number;
  username: string;
  age: number;
  gender: string;
  created: Date;
  knownAs: string;
  lastActive: Date;
  photoUrl: string;
  city: string;
  country: string;
  interest?: string;
  introduction?: string;
  lookingFor?: string;
  photos?: Photo[];
}
