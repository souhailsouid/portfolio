import React from 'react';
import { shallow } from 'enzyme';

import { Header } from './header.components';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

describe('Header component', () => {
  let wrapper;
  let mockSignOutStart;

  beforeEach(() => {
    mockSignOutStart = jest.fn();

    const mockProps = {
      hidden: true,
      currentUser: {
        uid: '123',
        displayName: "sss"
      },
      signOutStart: mockSignOutStart
    };

    wrapper = shallow(<Header {...mockProps} />);
  });

  it('should render Header component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('if currentUser is present', () => {
      const currentUser = {
          displayName: 'sss'
      }
    console.log(currentUser.displayName)
    it('should render name ', () => {
     
      expect(
        wrapper
          .find('span')
          .text()
      ).toBe( currentUser.displayName);
    });

   
  });

  describe('if currentUser is null', () => {
    it('should render sign in link', () => {
      const mockProps = {
        hidden: true,
        currentUser: null,
        signOutStart: mockSignOutStart
      };

      const newWrapper = shallow(<Header {...mockProps} />);

      expect(
        newWrapper
          .find('Link')
          .at(2)
          .text()
      ).toBe('Se connecter');
    });
  });

  describe('if hidden is true', () => {
    it('should not render CartDropdown', () => {
      expect(wrapper.exists(CartDropdown)).toBe(false);
    });
  });

  describe('if currentUser is null', () => {
    it('should render CartDropdown', () => {
      const mockProps = {
        hidden: false,
        currentUser: null,
        signOutStart: mockSignOutStart
      };

      const newWrapper = shallow(<Header {...mockProps} />);

      expect(newWrapper.exists(CartDropdown)).toBe(true);
    });
  });
});
