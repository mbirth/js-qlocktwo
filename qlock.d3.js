// QLOCKTWO Swabian-German Localization
// after the official QlockTwo at http://qlocktwo.com/
// Script written by Markus Birth <markus@birth-online.de>

var qlockLangSwabian = {
    'langCode': 'd3',
    'language': 'Swabian-German',

    'lines': [
        "ESKISCHFUNK",
        "DREIVIERTLA",
        "ZEHNBIEFÜNF",
        "NACHGERTVOR",
        "HALBXFÜNFEI",
        "OISECHSELFE",
        "ZWOIEACHTED",
        "DREIEZWÖLFE",
        "ZEHNEUNEUHL",
        "SIEBNEVIERE"
    ],

    'pre': 'ES ISCH ',

    'first': [
        "",
        "FÜNF NACH ",
        "ZEHN NACH ",
        "VIERTL ",
        "ZEHN VOR HALB ",
        "FÜNF VOR HALB ",
        "HALB ",
        "FÜNF NACH HALB ",
        "ZEHN NACH HALB ",
        "DREIVIERTL ",
        "ZEHN VOR ",
        "FÜNF VOR "
    ],

    'second': [
        "ZWÖLFE",
        "OIS",
        "ZWOIE",
        "DREIE",
        "VIERE",
        "FÜNFE",
        "SECHSE",
        "SIEBN",
        "ACHTE",
        "NEUNE",
        "ZEHNE",
        "ELFE"
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
        if (m5 >= 3) {
            h12 += 1;
            if (h12 > 11) h12=0;
        }

        var sentence = this.pre + this.first[m5] + this.second[h12];
//        if (m5 == 0) {
//            sentence = sentence.replace( /OIS/i, 'EI' );
//        }
        return sentence;
    }

};

qlockTwo.availLangs.push( qlockLangSwabian );
