#Notes:
```
This app would let you upload two separated files, one for Drivers List and the other for Shipment list
There's is an menu in which you can select either of show lists, upload lists, and as an output you would get a json file with the asignments results of one shipment per driver. Each driver can only have one shipment and each shipment can only be offered to one driver.

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