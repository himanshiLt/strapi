'use strict';

module.exports = input => {
  const regex = /^[A-Za-z-]+$/g;

  if (!input) {
    return 'You must provide an input';
  }

  return regex.test(input) || "Please use only letters, '-' and no spaces";
};
