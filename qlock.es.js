// QLOCKTWO Spanish Localization
// after the official QlockTwo at http://qlocktwo.com/
// Script written by Markus Birth <markus@birth-online.de>

var qlockLangSpanish = {
    'langCode': 'es',
    'language': 'Spanish',

    'lines': [
        "ESONELASUNA",
        "DOSITRESORE",
        "CUATROCINCO",
        "SEISASIETEN",
        "OCHONUEVEYO",
        "LADIEZSONCE",
        "DOCELYMENOS",
        "OVEINTEDIEZ",
        "VEINTICINCO",
        "MEDIACUARTO"
    ],

    'pre': 'SON LAS ',

    'first': [
        "DOCE",
        "UNA",  // (!! SON LAS => ES LA !!)
        "DOS",
        "TRES",
        "CUATRO",
        "CINCO",
        "SEIS",
        "SIETE",
        "OCHO",
        "NUEVE",
        "DIEZ",
        "ONCE"
    ],

    'second': [
        "",
        "Y CINCO",
        "Y DIEZ",
        "Y CUARTO",
        "Y VEINTE",
        "Y VEINTICINCO",
        "Y MEDIA",
        "MENOS VEINTICINCO",
        "MENOS VEINTE",
        "MENOS CUARTO",
        "MENOS DIEZ",
        "MENOS CINCO"
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

        var sentence = this.pre + this.first[h12] + ' ' + this.second[m5];
        if (h12 == 1) {
            sentence = sentence.replace( /SON LAS/i, 'ES LA' );
        }
        return sentence;
    }

}

qlockTwo.availLangs.push( qlockLangSpanish );
