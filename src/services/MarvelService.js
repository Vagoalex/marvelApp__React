class MarvelService {
  _server = {
    url: 'https://gateway.marvel.com:443/v1/public/',
    characters: 'characters',
    limit: 'limit=9',
    offset: 'offset=0',
    comics: 'comics',
    apiKeyIvan: 'c5d6fc8b83116d92ed468ce36bac6c62',
    apiKeyMail: 'b3252ae24667fd89a578925f8337c8d2',
    apiKeyGmail: 'af8551b0745198c417f5907893a2a765',
  };

  getResource = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok)
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);

      return await response.json();
    } catch (error) {
      console.log(`Error:\n${error.message}`);
    }
  };

  getAllCharacters = async () => {
    const { url, characters, limit, offset, apiKeyGmail } = this._server;

    const res = await this.getResource(
      `${url}${characters}?${limit}&${offset}&apikey=${apiKeyGmail}`
    );

    return res.data.results.map(this._transformCharacter);
  };

  getCharacterById = async (id) => {
    const { url, characters, apiKeyGmail } = this._server;
    const res = await this.getResource(
      `${url}${characters}/${id}?apikey=${apiKeyGmail}`
    );
    return this._transformCharacter(res.data.results[0]);
  };

  _transformCharacter = (char) => {
    const { id, name, description, thumbnail, urls } = char;
    const filteredDesc =
      description === ''
        ? `This Marvel character doesn't have description.\n Please, click the links`
        : `${description.slice(0, 210)}...`;

    return {
      id,
      name,
      description: filteredDesc,
      thumbnail: `${thumbnail.path}.${thumbnail.extension}`,
      homepage: urls[0].url,
      wiki: urls[1].url,
    };
  };
}

export default MarvelService;
