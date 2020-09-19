import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Modal from '../../../../../components/UI/Modal';
import { Animation, ModalFooter } from '../../../../../components/UI/Modal/styled';

describe('Modal', () => {
  afterEach(cleanup);

  test('Modal should render correctly', () => {
    const { asFragment } = render(<Modal onClose={jest.fn()} show={true} />);

    expect(asFragment()).toBeDefined();
    expect(asFragment()).toMatchSnapshot();
  });

  test('Modal should render correctly with others props', () => {
    const content = 'content';
    const footer = 'footer';

    const { asFragment } = render(
      <Modal
        onClose={jest.fn()}
        show={true}
        closeModal={true}
        title={'Modal Test File'}
        content={<div>{content}</div>}
        footer={<div>{footer}</div>}
      />,
    );

    expect(asFragment()).toBeDefined();
    expect(asFragment()).toMatchSnapshot();
  });
});

// Styled Componentes Testing

describe('ModalFooter', () => {
  afterEach(cleanup);

  test('ModalFooter should render correctly', () => {
    const children = 'Modal';

    const { asFragment } = render(<ModalFooter position={'flex-end'}>{children}</ModalFooter>);

    expect(asFragment()).toBeDefined();
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Animation', () => {
  afterEach(cleanup);

  test('Animation should render correctly', () => {
    const content = 'Animation';
    const state = '';

    const { asFragment } = render(<Animation state={state}>{content}</Animation>);

    expect(asFragment()).toBeDefined();
    expect(asFragment()).toMatchSnapshot();
  });
});
