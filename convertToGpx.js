const fs = require('fs');
const xlsx = require('xlsx');
const { buildGPX, GarminBuilder } = require('gpx-builder');
const { Point } = GarminBuilder.MODELS;

const inputFilePath = "./5708056.csv"

// Read the Excel file
const workbook = xlsx.readFile(inputFilePath);
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Convert Excel data to JSON
const jsonData = xlsx.utils.sheet_to_json(worksheet);

// Filter data in increasing gpstime
jsonData.sort((a, b) => new Date(a.gpstime) - new Date(b.gpstime));

// Create GPX points
const points = jsonData.map(row => {
	return new Point(
		parseFloat(row.gpslat),
		parseFloat(row.gpslong),
		{
			time: new Date(row.gpstime).toISOString()
		}
	);
});

// Build GPX
const gpxData = new GarminBuilder();
gpxData.setSegmentPoints(points);
// buildGPX(gpxData.toObject());

// Save GPX to file
fs.writeFileSync(`${inputFilePath.split(".").slice(0, -1).join(".")}.gpx`, buildGPX(gpxData.toObject()));

console.log('GPX file created successfully.');
