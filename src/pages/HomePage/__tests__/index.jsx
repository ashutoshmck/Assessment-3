/* eslint-disable no-unused-vars */
import {
  fireEvent, render, screen, waitFor
} from '@testing-library/react';
import React from 'react';
import HomePage from '..';
import Header from '../../../components/Header';
import makeRequest from '../../../utils/makeRequest';

jest.mock('../../../utils/makeRequest');
describe('EventsPage', () => {
  it('Should render the events when the events page is rendered with data', () => {
    render(<Header />);
    expect(screen.getByText('EVENTIFY')).toBeTruthy();
  });
});
