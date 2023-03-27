import { pause, inquirerMenu, readInput, confirm } from "./helpers/inquirer.js";
import DriversList from "./models/driversList.js";
import { saveDB, readSingleFile } from "./helpers/fileManagement.js";
import ShipmentsList from "./models/shipmentsList.js";
import SuitabilityScoreList from "./models/suitabilityScoreList.js";

const main = async () => {
  let opt = "";
  const driversList = new DriversList();
  const shipmentList = new ShipmentsList();
  const suitabilityScoreList = new SuitabilityScoreList();

  do {
    opt = await inquirerMenu();
    switch (opt) {
      case "1": {
        const ok = await confirm("want to upload file?");
        if (ok) {
          const uploadedDriversList = await readInput();
          const newDriversList = readSingleFile(uploadedDriversList);
          driversList._driversList = [];
          driversList.loadDrivers(newDriversList);
        }
        break;
      }
      case "2": {
        driversList.showDriversList();
        break;
      }
      case "3": {
        const ok = await confirm("want to upload file?");
        if (ok) {
          const uploadedShipmentList = await readInput();
          const newShipmentList = readSingleFile(uploadedShipmentList);
          shipmentList._shipmentList = [];
          shipmentList.loadShipment(newShipmentList);
        }
        break;
      }
      case "4": {
        shipmentList.showShipment();
        break;
      }
      case "5": {
        suitabilityScoreList._suitabilityList = [];
        if (suitabilityScoreList._suitabilityList.length == 0) {
          suitabilityScoreList.calculateSS(
            driversList.driverslistArray,
            shipmentList.shipmentListArray
          );
        }
        suitabilityScoreList.showSS();
        break;
      }
    }

    saveDB(suitabilityScoreList.suitabilityListArray);
    await pause();
  } while (opt !== "0");
};
main();
