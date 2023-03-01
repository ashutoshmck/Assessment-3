/* eslint-disable no-unused-vars */
import {
  fireEvent, render, screen, waitFor
} from '@testing-library/react';
import React from 'react';
import Header from '..';
import makeRequest from '../../../utils/makeRequest';

jest.mock('../../../utils/makeRequest');
describe('Header', () => {
  it('Should render the title when the header is rendered', () => {
    render(<Header />);
    expect(screen.getByText('EVENTIFY')).toBeTruthy();
  });
});
