import { useHttp } from '../hooks/http.hook';

const useMarvelService = () => {
  const { request, loading, error, clearError } = useHttp();

  const _server = {
    url: 'https://gateway.marvel.com:443/v1/public/',
    characters: 'characters',
    baseLimit: 9,
    comicsLimit: 8,
    baseOffset: 0,
    comics: 'comics',
    apiKeyIvan: 'c5d6fc8b83116d92ed468ce36bac6c62',
    apiKeyMail: 'b3252ae24667fd89a578925f8337c8d2',
    apiKeyGmail: 'af8551b0745198c417f5907893a2a765',
  };

  const getAllCharacters = async (offset = _server.baseOffset) => {
    const { url, characters, baseLimit, apiKeyGmail } = _server;

    const res = await request(
      `${url}${characters}?limit=${baseLimit}&offset=${offset}&apikey=${apiKeyGmail}`
    );

    return res.data.results.map(_transformCharacter);
  };

  const getAllComics = async (offset = _server.baseOffset) => {
    const { url, comics, comicsLimit, apiKeyGmail } = _server;

    const res = await request(
      `${url}${comics}?limit=${comicsLimit}&offset=${offset}&apikey=${apiKeyGmail}`
    );
    console.log(res.data.results);
    return res.data.results.map(_transformComics);
  };

  const getCharacterById = async (id) => {
    const { url, characters, apiKeyGmail } = _server;

    const res = await request(
      `${url}${characters}/${id}?apikey=${apiKeyGmail}`
    );

    return _transformCharacter(res.data.results[0]);
  };

  const _transformComics = (comics) => {
    const { id, title, thumbnail, urls, prices } = comics;

    return {
      id,
      title,
      thumbnail: `${thumbnail.path}.${thumbnail.extension}`,
      homepage: urls[0].url,
      comics: comics.items,
      price: prices[0].price,
    };
  };

  const _transformCharacter = (char) => {
    const { id, name, description, thumbnail, urls, comics } = char;

    const filteredDesc =
      description === ''
        ? `This Marvel character doesn't have description.\n Please, click the links`
        : `${description.slice(0, 100)}...`;

    return {
      id,
      name,
      description: filteredDesc,
      thumbnail: `${thumbnail.path}.${thumbnail.extension}`,
      homepage: urls[0].url,
      wiki: urls[1].url,
      comics: comics.items,
    };
  };

  return {
    getAllComics,
    getAllCharacters,
    getCharacterById,
    loading,
    error,
    clearError,
  };
};

export default useMarvelService;
