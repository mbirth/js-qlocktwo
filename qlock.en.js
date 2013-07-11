// QLOCKTWO English Localization
// after the official QlockTwo at http://qlocktwo.com/
// Script written by Markus Birth <markus@birth-online.de>

var qlockLangEnglish = {
    'langCode': 'en',
    'language': 'English',

    'lines': [
        "ITLISASTIME",
        "ACQUARTERDC",
        "TWENTYFIVEX",
        "HALFBTENFTO",
        "PASTERUNINE",
        "ONESIXTHREE",
        "FOURFIVETWO",
        "EIGHTELEVEN",
        "SEVENTWELVE",
        "TENSEƠCLOCK"
    ],

    'pre': 'IT IS ',

    'first': [
        "",
        "FIVE PAST ",
        "TEN PAST ",
        "A QUARTER PAST ",
        "TWENTY PAST ",
        "TWENTYFIVE PAST ",
        "HALF PAST ",
        "TWENTYFIVE TO ",
        "TWENTY TO ",
        "A QUARTER TO ",
        "TEN TO ",
        "FIVE TO "
    ],

    'second': [
        "TWELVE",
        "ONE",
        "TWO",
        "THREE",
        "FOUR",
        "FIVE",
        "SIX",
        "SEVEN",
        "EIGHT",
        "NINE",
        "TEN",
        "ELEVEN"
    ],

    'fullhour': ' ƠCLOCK',  // volle Stunde (!! EINS => EIN !!)

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

        var sentence = this.pre + this.first[m5] + this.second[h12];
        if (m5 == 0) {
            sentence += this.fullhour;
        }
        return sentence;
    }

}

qlockTwo.availLangs.push( qlockLangEnglish );
