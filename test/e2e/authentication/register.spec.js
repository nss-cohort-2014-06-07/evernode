'use strict';

var h = require('../../helpers/helpers');

describe('register', function(){
  beforeEach(function(){
    browser.get('/#/register');
  });

  it('should get register page', function(){
    expect(element(by.css('div[ui-view] > h1')).getText()).toEqual('register');
  });

  it('should register a new user', function(){
    element(by.model('user.username')).sendKeys('sam' + h.random(5000));
    element(by.model('user.password')).sendKeys('456');
    element(by.model('user.avatar')).sendKeys('http://images.apple.com/global/elements/flags/16x16/usa_2x.png');
    element(by.css('button[ng-click]')).click();
    expect(element(by.css('div[ui-view] > h1')).getText()).toEqual('login');
  });
});
