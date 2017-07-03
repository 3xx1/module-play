const theo = require('theo')
const jsonfile = require('jsonfile')

theo.convert({
  transform: {
    type: 'raw',
    file: './src/token/tokens.yml'
  },
  format: {
    type: 'raw.json'
  }
})
.then(result => {
  const tokenJSON = JSON.parse(result)
  jsonfile.writeFile('dist/tokens.json', tokenJSON, (err) => {
    if (err) console.error(err)
  })
  console.log('design token .yml files converted to token .json files')
})
.catch(error => console.log(`Something went wrong: ${error}`))
