import { v4 as uuidv4 } from 'uuid';

class Shipment {
    id = '';
    isEven = false
    name = '';
    commonFactor = [];

    constructor (name, isEven, commonFactor) {
        this.id = uuidv4();
        this.name = name
        this.isEven = isEven
        this.commonFactor = commonFactor;
    }

}
export default Shipment