#Notes:
```
#Install
npm install

#Run
node index.js

In menu you can select show lists, upload lists, in which app would let you upload two separated files, 
one for Drivers List and the other for Shipment list, and as an output you would get a json file with the asignments results of shipment to driver. 

Each driver can only have one shipment and each shipment can only be offered to one driver.

In the output you would see the following object:

{
    "id": "SuitabilityScore uuid",
    "destination": "Shipment Name",
    "shipmentID": "shipment uuid",
    "driversName": "Driver's Name",
    "driversID": "driver uuid",
    "suitability": number,
    "driverCommonFactor": [array of drivers factors],
    "shipmentCommonFactor": [array of shipment factors]
}
```