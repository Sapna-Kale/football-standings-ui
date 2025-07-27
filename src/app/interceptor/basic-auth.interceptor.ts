import { HttpInterceptorFn } from '@angular/common/http';

export const BasicAuthInterceptor: HttpInterceptorFn = (request, next) => {
  const username = 'admin';
  const password = 'admin123';
  const authHeader = 'Basic ' + btoa(`${username}:${password}`);

  const authRequest = request.clone({
    setHeaders: {
      Authorization: authHeader
    }
  });

  return next(authRequest);
};
