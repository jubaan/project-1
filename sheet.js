const { GoogleSpreadsheet } = require('google-spreadsheet');
 
class Sheet {
  constructor() {
    this.doc = new GoogleSpreadsheet('1t1Hx6ZOGv3xTJsiOFlRtVweKcO0FVqdVuMn7y40jnYE');
  }
}

const sheet = new Sheet();
