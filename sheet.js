const { GoogleSpreadsheet } = require('google-spreadsheet');
 
module.exports = class Sheet {
  constructor() {
    this.doc = new GoogleSpreadsheet('1t1Hx6ZOGv3xTJsiOFlRtVweKcO0FVqdVuMn7y40jnYE');
  }

  async load() {
    await this.doc.useServiceAccountAuth(require('./credentials.json'));
    await this.doc.loadInfo();
  }

  async addRows(rows) {
    const sheet = this.doc.sheetsByIndex[0]; // or use doc.sheetsById[id]

    await sheet.addRows(rows);
  }
}

// Test run 'node sheet.js'
// (async function() {
//   const sheet = new Sheet();

//   await sheet.load();
//   await sheet.addRows([
//     { title: 'Web Developer', location: 'MX' },
//     { title: 'Front-end Developer', location: 'US' },
//   ]);
// })();
