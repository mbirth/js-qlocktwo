// QLOCKTWO French Localization
// after the official QlockTwo at http://qlocktwo.com/
// Script written by Markus Birth <markus@birth-online.de>

var qlockLangFrench = {
    'langCode': 'fr',
    'language': 'French',

    'lines': [
        "ILNESTOUNER",
        "DEUXNUTROIS",
        "QUATREDOUZE",
        "CINQSIXSEPT",
        "HUITNEUFDIX",
        "ONZERHEURES",
        "MOINSOLEDIX",
        "ETRQUARTRED",
        "VINGT-CINQU",
        "ETSDEMIEPAN"
    ],

    'pre': 'IL EST ',

    'first': [
        "DOUZE",
        "UNE",  // (!! HEURES => HEURE !!)
        "DEUX",
        "TROIS",
        "QUATRE",
        "CINQ",
        "SIX",
        "SEPT",
        "HUIT",
        "NEUF",
        "DIX",
        "ONZE"
    ],

    'hours': ' HEURES ',

    'second': [
        "",
        "CINQ",
        "DIX",
        "ET QUART",
        "VINGT",
        "VINGT-CINQ",
        "ET DEMIE",
        "MOINS VINGT-CINQ",
        "MOINS VINGT",
        "MOINS LE QUART",
        "MOINS DIX",
        "MOINS CINQ"
    ],

    /**
     * @param {Date} time
     * @type String
     */
    'makeSentence': function( time ) {
        var h = time.getHours();
        var m = time.getMinutes();

        var h12 = h%12;
        var m5 = Math.floor( m/5 );
        if (m5 >= 7) {
            h12 += 1;
            if (h12 > 11) h12=0;
        }

        var sentence = this.pre + this.first[h12] + this.hours + this.second[m5];
        if (h12 == 1) {
            sentence = sentence.replace( /HEURES/i, 'HEURE' );
        }
        return sentence;
    }

}

qlockTwo.availLangs.push( qlockLangFrench );
