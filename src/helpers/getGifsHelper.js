export const getGifs = async (category) => {
  try {
    const request = await fetch(
      `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
        category
      )}&limit=10&api_key=F4SP2EaugaLHanmgsJ69hKG5nafBUSrQ`
    );
    const { data } = await request.json();
    const gifs = data.map((c) => ({
      id: c.id,
      title: c.title,
      imgs: c.images?.original?.url || '',
    }));
    return gifs;
  } catch (err) {
    console.err(err);
    return [];
  }
};
