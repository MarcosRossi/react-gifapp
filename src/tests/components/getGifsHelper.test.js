import { getGifs } from '../../helpers/getGifsHelper';

describe('tests in getGifsHelper.js', () => {
  test('should return 10 elements', async () => {
    const gifs = await getGifs('Goku');
    expect(gifs.length).toBe(10);
  });

  test('should return 0 elements with an empty caterogy name', async () => {
    const gifs = await getGifs('');
    expect(gifs.length).toBe(0);
  });
});
