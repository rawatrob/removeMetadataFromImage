const ExifTransformer = require('exif-be-gone')
const fs = require("fs")

const reader = fs.createReadStream('./DSCN0012.jpg')
const writer = fs.createWriteStream('./out12345.jpg')

reader.pipe(new ExifTransformer()).pipe(writer)