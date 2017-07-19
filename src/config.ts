import { FormioAppConfig } from 'ng2-formio';
import { FormioAuthConfig } from 'ng2-formio/auth';

// AppConfig tells the MEAN App where to point to access Formio
export const AppConfig: FormioAppConfig = {
  appUrl: 'http://localhost:3001',
  apiUrl: 'http://localhost:3001'
};

// AuthConfig tells the authentication provider where the forms to be rendered are
export const AuthConfig: FormioAuthConfig = {
  login: {
    form: 'user/login'
  },
  register: {
    form: 'user/register'
  }
};
