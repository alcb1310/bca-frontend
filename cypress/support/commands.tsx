/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
import { mount } from 'cypress/react18'
import Wrapper from "../../src/components/Wrapper";
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//         mount: typeof mount
//     }
//   }
// }
//
// Cypress.Commands.add('mount', mount)
Cypress.Commands.add('mount', (component, options) => {
    const wrapper = <Wrapper>{component}</Wrapper>
    return mount(wrapper, options)
})
