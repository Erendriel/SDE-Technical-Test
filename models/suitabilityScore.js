import { v4 as uuidv4 } from "uuid";
import Driver from "./driver.js";
import Shipment from "./shipment.js";

class SuitabilityScore {
  id = "";
  destination = "";
  shipmentID = "";
  driversName = "";
  driversID = "";
  suitability = 0;
  driverCommonFactor = [];
  shipmentCommonFactor = [];

  constructor(
    destination,
    shipmentID,
    driversName,
    driversID,
    suitability,
    driverCommonFactor,
    shipmentCommonFactor
  ) {
    this.id = uuidv4();
    this.destination = destination;
    this.shipmentID = shipmentID;
    this.driversName = driversName;
    this.driversID = driversID;
    this.suitability = suitability;
    this.driverCommonFactor = driverCommonFactor;
    this.shipmentCommonFactor = shipmentCommonFactor;
  }
}
export default SuitabilityScore;
