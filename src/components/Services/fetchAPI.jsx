const API_KEY = '24422661-37a7f6139833e92dcfc942398';

export async function fetchPicsApi(query, page) {
  const api = await fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  )
    .then(response => response.json())
    .then(data =>
      data.hits.map(hit => {
        return {
          id: hit.id,
          webformatURL: hit.webformatURL,
          largeImageURL: hit.largeImageURL,
          tags: hit.tags,
        };
      })
    )
    .catch(alert);
  return api;
}
