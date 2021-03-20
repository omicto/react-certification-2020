import React from 'react';
import { render, screen } from '@testing-library/react';

import TextInput from './TextInput.component';

describe('TextInput', () => {
  it('should render and accept input props', () => {
    const { container } = render(<TextInput defaultValue="test" />);
    expect(container.firstChild).toHaveDisplayValue(/test/i);
  });
});
