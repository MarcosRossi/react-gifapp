import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('tests in GifGrid.js', () => {
  const categoryName = 'Goku';

  test('should create the component ', () => {
    useFetchGifs.mockReturnValue({ data: [], loading: true });
    const wrapper = shallow(<GifGrid category={categoryName} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should show items when images was loaded', () => {
    const data = [
      {
        id: 'abc',
        imgs: 'https://localhost/asd/asd.jpg',
        title: 'test',
      },
    ];
    useFetchGifs.mockReturnValue({ data, loading: false });
    const wrapper = shallow(<GifGrid category={categoryName} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBeFalsy();
    expect(wrapper.find('GifGridItem').length).toBe(data.length);
  });
});
