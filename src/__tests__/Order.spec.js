// Name: Tommy Cao
// Date: 12/12/19
// Description: React-Testing-Library (RTL) testing

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Order } from '../components/Order';
import { twoBurritos } from '../fixtures';

beforeEach(cleanup);

describe('<Order />', () => {
  it('renders the order summary with two burriots', () => {
    const { getAllByTestId, getByText } = render(
      <Order orderItems={twoBurritos} />
    );

    expect(getAllByTestId('order-item').length).toBe(2);
    expect(getByText('🌯 Wet Burrito')).toBeTruthy();
    expect(getByText('🌶️')).toBeTruthy();
    expect(getByText('$5')).toBeTruthy();
    expect(getByText('🌯 Poncho Burrito')).toBeTruthy();
    expect(getByText('🌶️🌶️🌶️')).toBeTruthy();
    expect(getByText('$7')).toBeTruthy();
    expect(getByText('$12')).toBeTruthy();
  });

  it('renders the order summary with no burriots', () => {
    const { getByText } = render(<Order />);
    expect(
      getByText('It looks like you have an empty stomach, order now! 🌯🌯🌯')
    ).toBeTruthy();
  });
});
