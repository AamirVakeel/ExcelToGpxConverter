#EXCEL TO GPX GENERATOR
This code is used to generate a GPX file from an excel format file.
Excel format file should have 3 values

1. gpslat
2. gpslong
3. gpstime

Here **_gpslat_** and **_gpslong_** are used to plot the path, while **_gpstime_** is a way to sort the gps coordinates in case you recieve a random sorted one.

##How to run it

> 1 => run `npm i`
> 2 => set inputFilePath variable in convertToGpx.js file
> 3 => run `node convertToGpx.js`
> 4 => find the gpx file in the same directory with same name but .gpx extension.
