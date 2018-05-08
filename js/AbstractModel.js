
export default class AbstractModel {
  get urlRead() {
    throw new Error(`Abstract method. Define the URL for model.`);
  }
  get urlWrite() {
    throw new Error(`Abstract method. Define the URL for model.`);
  }

  load() {
    return fetch(this.urlRead)
      .then((resp) => {
        if (resp.status === 200) {
          return resp.json();
        }

        throw new Error(`Server responded with an error`);
      })
      .then((data) => Object.values(data));
  }

  send(data) {
    const requestSettings = {
      body: data,
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`
    };

    return fetch(this.urlWrite, requestSettings);
  }
}
