import { Inject, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../Services/loginService/login.service';


export const authGuardGuard: CanActivateFn = async (route, state) => {
  const router = inject(Router)
  const alreadySingin = await hasAuth()
  if(state.url === '/login' && alreadySingin){
    return false
  }
 else if(state.url !== '/login' && !alreadySingin){
    redirectLogin(router)
  }
  return true
};

async function hasAuth(): Promise<boolean>{//retorna true caso esteja autenticado e false caso nao esteja 
  try{
  return (!!(await inject(LoginService).getUserInfo()));
  }
  catch(err){
    return false
  }
}

function redirectLogin(router: Router){
  router.navigate(['/login'])

}

function redirectHome(router: Router){
  router.navigate(['/home'])

}

