import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import '@testing-library/jest-dom/extend-expect';

import Props from './Button.props';
import {
  Black,
  Green,
  LightPink,
  Pink,
  Primary,
  PrimaryWithLink,
  Secondary,
} from './Button.stories';

describe('Button component tests', () => {
  it('renders the Button in the primary state', () => {
    const props: Props = Primary.args as Props;
    const onClick = jest.fn();

    const { container } = render(
      <div data-testid="Button">
        <Primary {...props} onClick={onClick} />
      </div>,
    );

    const button = container.querySelectorAll('button')[0]; // Example usage of container, to bypass eslint issue
    userEvent.click(button);

    expect(button).toBeInTheDocument();
    expect(button).toMatchSnapshot();
    expect(onClick).toHaveBeenCalled();
  });

  it('renders the Button in the secondary state', () => {
    const props: Props = Secondary.args as Props;
    const onClick = jest.fn();

    const { container } = render(
      <div data-testid="Button">
        <Secondary {...props} onClick={onClick} />
      </div>,
    );

    const button = container.querySelectorAll('button')[0]; // Example usage of container, to bypass eslint issue
    userEvent.click(button);

    expect(button).toBeInTheDocument();
    expect(button).toMatchSnapshot();
    expect(onClick).toHaveBeenCalled();
  });

  it('renders the Button in the green state', () => {
    const props: Props = Green.args as Props;
    const onClick = jest.fn();

    const { container } = render(
      <div data-testid="Button">
        <Green {...props} onClick={onClick} />
      </div>,
    );

    const button = container.querySelectorAll('button')[0]; // Example usage of container, to bypass eslint issue
    userEvent.click(button);

    expect(button).toBeInTheDocument();
    expect(button).toMatchSnapshot();
    expect(onClick).toHaveBeenCalled();
  });

  it('renders the Button in the pink state', () => {
    const props: Props = Pink.args as Props;
    const onClick = jest.fn();

    const { container } = render(
      <div data-testid="Button">
        <Pink {...props} onClick={onClick} />
      </div>,
    );

    const button = container.querySelectorAll('button')[0]; // Example usage of container, to bypass eslint issue
    userEvent.click(button);

    expect(button).toBeInTheDocument();
    expect(button).toMatchSnapshot();
    expect(onClick).toHaveBeenCalled();
  });

  it('renders the Button in the light pink state', () => {
    const props: Props = LightPink.args as Props;
    const onClick = jest.fn();

    const { container } = render(
      <div data-testid="Button">
        <LightPink {...props} onClick={onClick} />
      </div>,
    );

    const button = container.querySelectorAll('button')[0]; // Example usage of container, to bypass eslint issue
    userEvent.click(button);

    expect(button).toBeInTheDocument();
    expect(button).toMatchSnapshot();
    expect(onClick).toHaveBeenCalled();
  });

  it('renders the Button in the black state', () => {
    const props: Props = Black.args as Props;
    const onClick = jest.fn();

    const { container } = render(
      <div data-testid="Button">
        <Black {...props} onClick={onClick} />
      </div>,
    );

    const button = container.querySelectorAll('button')[0]; // Example usage of container, to bypass eslint issue
    userEvent.click(button);

    expect(button).toBeInTheDocument();
    expect(button).toMatchSnapshot();
    expect(onClick).toHaveBeenCalled();
  });

  it('renders the Button in the primary state with a link', () => {
    const props: Props = PrimaryWithLink.args as Props;
    const onClick = jest.fn();

    const { container } = render(
      <div data-testid="Button">
        <PrimaryWithLink {...props} onClick={onClick} />
      </div>,
    );

    const button = container.querySelectorAll('a')[0];

    expect(button).toBeInTheDocument();
    expect(button).toMatchSnapshot();
    expect(button).toHaveAttribute('href', 'https://google.com');
  });
});
