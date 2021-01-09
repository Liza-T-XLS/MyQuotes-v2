/* eslint-disable import/prefer-default-export */

// onClickHandler to toggle the visibility of passwords
export const passwordVisibilityOnClickHandler = (e) => {
  const passwordField = e.target.previousSibling;
  const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordField.setAttribute('type', type);
};
