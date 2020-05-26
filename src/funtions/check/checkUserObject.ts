import { userObjectType } from '../insertUser/insertUser';
import checkStrings from './checkStrings';

export default (payload: userObjectType): boolean => {
  const origin = [
    'email',
    'password',
    'lastName',
    'firstName',
    'birthYear',
    'birthMonth',
    'birthDay',
  ];
  const keys = Object.keys(payload);

  return checkStrings(origin, keys);
};
