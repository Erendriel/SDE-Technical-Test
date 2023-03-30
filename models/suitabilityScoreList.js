import ShipmentsList from "./shipmentsList.js";
import SuitabilityScore from "./suitabilityScore.js";
import { sameFactors } from "../helpers/factors.js";

class SuitabilityScoreList {
  _suitabilityList = {};

  get suitabilityListArray() {
    const list = [];
    Object.keys(this._suitabilityList).forEach((key) => {
      const suitabilityScore = this._suitabilityList[key];
      list.push(suitabilityScore);
    });
    return list;
  }

  constructor() {
    this._suitabilityList = {};
  }
  addSuitabilityScore(
    destination = "",
    shipmentID = "",
    driversName = "",
    driversID = "",
    suitability = 0,
    driverCommonFactor = [],
    shipmentCommonFactor = []
  ) {
    const suitabilityScore = new SuitabilityScore(
      destination,
      shipmentID,
      driversName,
      driversID,
      suitability,
      driverCommonFactor,
      shipmentCommonFactor
    );
    this._suitabilityList[suitabilityScore.id] = suitabilityScore;
  }

  showSS() {
    if (this.suitabilityListArray.length > 0) {
      this.suitabilityListArray.forEach((e, i) => {
        const idx = `${i + 1}`;
        const { destination, driversName, suitability } = e;
        console.log(
          `${idx}.- destination: ${destination}\n    driversName: ${driversName}\n    suitability: ${suitability}\n `
        );
      });
    }
  }

  calculateSS(_dl = [], _sl = []) {
    if (_dl.length > 0 && _sl.length > 0) {
      let i = _sl.length;
      let j = 0;
      let suitability = 0;
      while (j < i) {
        let suitabilityScores = [];
        _dl.forEach((driver) => {
          const factorResults = sameFactors(
            _sl[j].commonFactor,
            driver.commonFactor
          );

          if (_sl[j].isEven) {
            if (factorResults.length > 1) {
              suitability = driver.vowels * 1.5 * 1.5;
              suitabilityScores.push(suitability);
            } else {
              suitability = driver.vowels * 1.5;
              suitabilityScores.push(suitability);
            }
          } else if (factorResults.length > 1) {
            suitability = driver.consonants * 1.5 * 1.5;
            suitabilityScores.push(suitability);
          } else {
            suitability = driver.consonants;
            suitabilityScores.push(suitability);
          }
        });

        const max = Math.max(...suitabilityScores);
        const index = suitabilityScores.indexOf(max);
        this.addSuitabilityScore(
          _sl[j].name,
          _sl[j].id,
          _dl[index].name,
          _dl[index].id,
          suitabilityScores[index],
          _dl[index].commonFactor,
          _sl[j].commonFactor
        );
        _dl.splice(_dl.indexOf(_dl[index]), 1);
        _sl.splice(0, 1);
        i--;
      }
      j++;
    }
    else {
      console.log("\nPlease upload Drivers File and/or Shipments File\n");
    }
  }
}
export default SuitabilityScoreList;
