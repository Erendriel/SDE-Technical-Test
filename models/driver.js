import { v4 as uuidv4 } from 'uuid';

class Driver {
    id = '';
    name = '';
    vowels = 0;
    consonants = 0;
    commonFactor = [];

    constructor (name, vowels, consonants, commonFactor) {
        this.id = uuidv4();
        this.name = name
        this.vowels = vowels;
        this.consonants = consonants;
        this.commonFactor = commonFactor;
    }
    vowelsAndConsonantsLength = (name = '') => {
        let vowels = 0;
        let consonants = 0;
        let count;
    
        for (count = 0; count <= name.length; count++) {
          let char = name.charAt(count);
          if (char.match(/[aeiouAEIOU]/)) {
            vowels++;
          } else if (char.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)) {
            consonants++;
          }
        }
        return [vowels, consonants];
      };

}
export default Driver