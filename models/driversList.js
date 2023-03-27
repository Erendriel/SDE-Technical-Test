import { getFactor } from "../helpers/factors.js";
import Driver from "./driver.js";

class DriversList {
  _driversList = {};

  get driverslistArray() {
    const list = [];
    Object.keys(this._driversList).forEach((key) => {
      const driver = this._driversList[key];
      list.push(driver);
    });
    return list;
  }

  constructor() {
    this._driversList = {};
  }
  addDriver(name = "", vowels = 0, consonants = 0, factors = []) {
    const driver = new Driver(name, vowels, consonants, factors);
    this._driversList[driver.id] = driver;
  }

  deleteDriver(id = "") {
    if (this._driversList[id]) {
      delete this._driversList[id];
    }
  }

  showDriversList() {
    if (this.driverslistArray.length != 0) {
      this.driverslistArray.forEach((e, i) => {
        const idx = `${i + 1}`;
        const { name, vowels, consonants, commonFactor } = e;
        console.log(`${idx}.- name: ${name}`);
      });
    }
    console.log('\nPlease upload Drivers file \n')
  }

  loadDrivers(item = {}) {
    const driver = new Driver();
    item.drivers.forEach((driverName) => {
      const [vowels, consonants] = driver.vowelsAndConsonantsLength(driverName);
      const factors = getFactor(driverName.length);
      this.addDriver(driverName, vowels, consonants, factors);
    });
  }
}
export default DriversList;
