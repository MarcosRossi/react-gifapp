import { shallow } from 'enzyme';
import React from 'react';
import CategoryAdd from '../../components/CategoryAdd';

describe('Tests in CategoryAdd.js', () => {
  const setCategory = jest.fn();
  let wrapper = shallow(<CategoryAdd setCategory={setCategory} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<CategoryAdd setCategory={setCategory} />);
  });

  test('should create the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should change the input value', () => {
    const input = wrapper.find('input');
    const value = 'Hello word';
    input.simulate('change', { target: { value } });

    const pText = wrapper.find('p').text();
    expect(pText.trim()).toBe(value);
  });

  test('should not posted because the value is empty', () => {
    const preventDefault = jest.fn();
    wrapper.find('form').simulate('submit', { preventDefault });
    expect(setCategory).not.toHaveBeenCalled();
  });

  test('should call setCategory and clean the input', () => {
    const value = 'Hello word II';

    const input = wrapper
      .find('input')
      .simulate('change', { target: { value } });

    wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });

    expect(setCategory).toHaveBeenCalledWith(expect.any(Function));
    expect(input.prop('value')).toBe('');
  });
});
