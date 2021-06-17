import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('test GifGridItem.js', () => {
  const props = {
    title: 'hunter x hunter GIF',
    imgs: 'https://test.com.ar',
  };
  const wrapper = shallow(<GifGridItem {...props} />);

  test('should create the component GifGridItem ', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should have a paragraph with a title', () => {
    const p = wrapper.find('p');
    
    expect(p.text().trim()).toBe(props.title);
  });

  test('should have a image with a src and alt props', () => {
    const img = wrapper.find('img');
    // props => Todas => img.props().src

    expect(img.prop('src')).toBe(props.imgs);
    expect(img.prop('alt')).toBe(props.title);
  });

  test('DIV should have the class animate__fadeInDown', () => {
    const div = wrapper.find('div');
    div.hasClass('animate__fadeInDown');

    expect(div.hasClass('animate__fadeInDown')).toBeTruthy();
  });
});
