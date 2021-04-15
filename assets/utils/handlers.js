/* eslint-disable import/prefer-default-export */

// == Imports

// == Exports

// onClickHandler to toggle the visibility of passwords
export const passwordVisibilityOnClickHandler = (e) => {
  const passwordField = e.target.previousSibling;
  const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordField.setAttribute('type', type);
  const className = e.target.className === 'passwordToggle' ? 'passwordToggle active' : 'passwordToggle';
  e.target.className = className;
  const title = e.target.title === 'show password' ? 'hide password' : 'show password';
  e.target.title = title;
};
