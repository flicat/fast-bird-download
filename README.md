# fast-bird-download

nodejs download module, support multi-threaded segmented download,
breakpoint renewal.

Installation
------------

    npm install fast-bird-download



Usage
-----

> download(urlList, dir[, headers, retryCount])

Example:
```js
   const download = require('fast-bird-download')
    download([
        'http://172.31.1.235:3001/file_1.zip',
        'http://172.31.1.235:3001/file_2.exe',
        'http://172.31.1.235:3001/file_3.exe'
    ], './download').then(successList => {
        console.log('download success: ', successList)
    })
```

Arguments
-----

### urlList[Array]
 Array of files to download
 
### dir[String] 
 Download directory, Default value: './download'
  
### headers[Object] 
 Header information of network request

### retryCount[Number]
 Number of retries after download failure
