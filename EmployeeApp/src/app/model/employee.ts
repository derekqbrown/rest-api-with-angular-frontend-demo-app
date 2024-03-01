import { IEmployee } from './iemployee';
import { IUser } from './iuser';

export class Employee implements IEmployee, IUser {
    constructor(){}
    employeeId?: number | null | undefined;
    firstName?: string | null | undefined;
    lastName?: string | null | undefined;
    email?: string | null | undefined;
    password?: string | null | undefined;
    salary?: number | null | undefined;
    department?: string | null | undefined;

  }