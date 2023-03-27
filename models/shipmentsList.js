import { getFactor } from "../helpers/factors.js";
import Shipment from "./shipment.js";
import inquirer from "inquirer";

class ShipmentsList {
  _shipmentList = {};

  get shipmentListArray() {
    const list = [];
    Object.keys(this._shipmentList).forEach((key) => {
      const shipment = this._shipmentList[key];
      list.push(shipment);
    });
    return list;
  }

  constructor() {
    this._shipmentList = {};
  }

  addShipment(name = "", isEven = false, factors = []) {
    const shipment = new Shipment(name, isEven, factors);
    this._shipmentList[shipment.id] = shipment;
  }

  deleteShipment(id = "") {
    if (this._shipmentList[id]) {
      delete this._shipmentList[id];
    } else {
    }
  }

  showShipment() {
    if (this.shipmentListArray.length > 0) {
      this.shipmentListArray.forEach((e, i) => {
        const idx = `${i + 1}`;
        const { name, isEven, commonFactor } = e;
        console.log(`${idx}.- name: ${name}`);
      });
    }
    console.log("\nPlease upload a Shipment file\n");
  }

  loadShipment(item = {}) {
    item.shipments.forEach((destination) => {
      const factors = getFactor(destination.length);
      if (destination.length % 2 === 0) {
        this.addShipment(destination, true, factors);
      } else this.addShipment(destination, false, factors);
    });
  }
}
export default ShipmentsList;
