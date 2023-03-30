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
    const n = name.replace(/[^a-zA-Z0-9 ]/g, "");
    const shipment = new Shipment(n, isEven, factors);
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
        const { name } = e;
        console.log(`${idx}.- name: ${name}`);
      });
    } else {
      console.log("\nPlease upload a Shipment file\n");
    }
  }

  loadShipment(item = {}) {
    item.shipments.forEach((destination) => {
      const factors = getFactor(destination.length);
      if (destination.length % 2 === 0) {
        this.addShipment(destination, false, factors);
      } else this.addShipment(destination, true, factors);
    });
  }
}
export default ShipmentsList;
