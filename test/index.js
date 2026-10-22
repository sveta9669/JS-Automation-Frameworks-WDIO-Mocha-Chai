// Copyright © 2021-2026 EPAM Systems. JS Automation Excellence Pathway. All rights reserved.

import { describe, it } from 'mocha';
import { expect } from 'chai';
import { readFileSync } from 'fs';

describe('Intro', () => {

  let packageJson;

  before(() => {
    packageJson = JSON.parse(readFileSync('./package.json', 'utf8'));
  })

  it('should invite participants', () => {
    console.log('Welcome to JS Mentoring program. You are ready to start the journey!');
  });

  it('package should have 5 authors', () => {
    expect(packageJson.authors, 'New author is not found').to.have.length(5);
  });

  it('added value should be an email', () => {
    const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const matchResult = packageJson.authors[4]?.toLowerCase().match(reg);

    expect(matchResult, 'Added value is not an email').not.to.equal(null);
    expect(matchResult, 'New author is not found').not.to.equal(undefined);
  });

});
