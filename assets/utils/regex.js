/* eslint-disable no-useless-escape */
/* eslint-disable import/prefer-default-export */

export const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

// matches a (bad) password that has:
// less than 8 characters
// or no number
// or no uppercase letter
// or no lowercase letter
// or with a lowercase letter, uppercase letter and a number
// or with white spaces
export const invalidPasswordRegex = RegExp(/^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*|[^\s]*\s.*)$/);
