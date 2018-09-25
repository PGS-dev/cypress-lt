import { TOKEN } from './credentials';
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

Cypress.Commands.add("login", () => {
  window.localStorage.setItem('access_token', TOKEN);
  window.localStorage.setItem('token_type', 'bearer');
  window.localStorage.setItem('currentUserEmail', 'dkowalski@pgs-soft.com');
  window.localStorage.setItem('currentUserName', 'Damian');
  window.localStorage.setItem('currentUserOffice', 'Wroclaw');
  window.localStorage.setItem('currentUserSurname', 'Kowalski')
  window.localStorage.setItem('currentUserPhoto', 'data:image/png;base64,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');
})

