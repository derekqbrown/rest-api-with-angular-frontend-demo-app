import { CanActivateFn } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  let token = localStorage.getItem('token')
  if(token) {
    return true;
  }

  return false;
};
