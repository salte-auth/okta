import { SalteAuth } from '@salte-auth/salte-auth';
import { Redirect } from '@salte-auth/redirect';
import { Okta } from '../src/okta';

const auth = new SalteAuth({
  providers: [
    new Okta({
      url: 'https://dev-960892.oktapreview.com',

      clientID: '0oajg1bj8hxM1z7pa0h7',

      routes: true
    })
  ],

  handlers: [
    new Redirect({
      default: true
    })
  ]
});

const logoutButton = document.createElement('button');
logoutButton.innerHTML = `Logout`;
logoutButton.addEventListener('click', () => {
  auth.logout('okta');
});
document.body.appendChild(logoutButton);
