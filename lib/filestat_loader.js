const path = require('path')
const fs = require('fs')

// emits a metadata file for each file


/**
 *
 * @param {string|Buffer} content Content of the resource file
 * @param {object} [map] SourceMap data consumable by https://github.com/mozilla/source-map
 * @param {any} [meta] Meta data, could be anything
 */
 module.exports = function webpackLoader(content, map, meta) {    
    const metadataFile = `${path.basename(this.resourcePath)}.meta`
    const assetInfo = { basename: metadataFile }

    this.addDependency(this.resourcePath)
    this.addDependency(`${this.resourcePath}.meta`)

    fs.stat(path.resolve(this.resourcePath), (err, fstat) => {
        if (err) {
            console.log(`File doesn't exist.`);
            return
        }
        const json = {
            name: path.basename(this.resourcePath),
            size: fstat.size
        }
        this.emitFile(metadataFile, JSON.stringify(json), null, assetInfo)
    })

    return content
  }

  module.exports.raw = true;