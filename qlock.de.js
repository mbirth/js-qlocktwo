// QLOCKTWO German Localization
// after the official QlockTwo at http://qlocktwo.com/
// Script written by Markus Birth <markus@birth-online.de>

var qlockLangGerman = {
    'langCode': 'de',
    'language': 'German',

    'lines': [
        "ESKISTAFÜNF",
        "ZEHNBYGVORG",
        "NACHVIERTEL",
        "HALBVORNACH",
        "EINSLMEZWEI",
        "DREIAUJVIER",
        "FÜNFTOSECHS",
        "SIEBENLACHT",
        "NEUNZEHNELF",
        "ZWÖLFUNKUHR"
    ],

    'pre': 'ES IST ',

    'first': [
        "",
        "FÜNF NACH ",
        "ZEHN NACH ",
        "VIERTEL NACH ",
        "ZEHN VOR HALB ",
        "FÜNF VOR HALB ",
        "HALB ",
        "FÜNF NACH HALB ",
        "ZEHN NACH HALB ",
        "VIERTEL VOR ",
        "ZEHN VOR ",
        "FÜNF VOR "
    ],

    'second': [
        "ZWÖLF",
        "EINS",
        "ZWEI",
        "DREI",
        "VIER",
        "FÜNF",
        "SECHS",
        "SIEBEN",
        "ACHT",
        "NEUN",
        "ZEHN",
        "ELF"
    ],

    'fullhour': ' UHR',  // volle Stunde (!! EINS => EIN !!)

    /**
     * @param {Date} time
     * @type String
     */
    'makeSentence': function( time ) {
        var h = time.getHours();
        var m = time.getMinutes();

        var h12 = h%12;
        var m5 = Math.floor( m/5 );
        if (m5 >= 4) {
            h12 += 1;
            if (h12 > 11) h12=0;
        }

        var sentence = this.pre + this.first[m5] + this.second[h12];
        if (m5 == 0) {
            sentence += this.fullhour;
            sentence = sentence.replace( /EINS/i, 'EIN' );
        }
        return sentence;
    }
    
};

qlockTwo.availLangs.push( qlockLangGerman );
