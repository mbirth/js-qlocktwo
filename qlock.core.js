// QLOCKTWO JavaScript Core
// after the official QlockTwo at http://qlocktwo.com/
// Script written by Markus Birth <markus@birth-online.de>

var qlockTwo = {
    'availLangs': [],
    'languageObj': null,

    'updateTime': function( once ) {
        if ( this.languageObj == null ) return false;
        var now = new Date();
        var sentence = this.languageObj.makeSentence( now );

        var m4 = now.getMinutes() % 5;

        this.highlight( sentence );

        this.paintDots( m4 );
        this.setTitle( sentence, m4 );
        if ( !once ) setTimeout( 'qlockTwo.updateTime();', (61-now.getSeconds())*1000 );
        return true;
    },

    'setTitle': function( text, m4 ) {
        // convert case
        var properText = text.toLowerCase().replace(/[^\s]+/g, function(s) { return s.charAt(0).toUpperCase() + s.substr(1); });

        switch ( m4 ) {
            case 0: properText += ' ○'; break;
            case 1: properText += ' ◔'; break;
            case 2: properText += ' ◑'; break;
            case 3: properText += ' ◕'; break;
            case 4: properText += ' ●'; break;
            default: break;
        }

        document.title = properText;
        $('title').text( properText );
    },

    /**
     * @param {String} sentence
     */
    'highlight': function( sentence ) {
        var xLINES = this.languageObj.lines;
        var words = sentence.split(' ');
        var seekline = 0;
        var seekcol  = 0;
        for (var i=0; i<xLINES.length; i++) {
            $('#line'+i).html( xLINES[i] );
        }

        for (var i in words) {
            var word = words[i];
            for (var j=seekline; j<xLINES.length; j++) {
                scol = seekcol;
                if ( j != seekline ) scol = 0;
                var k = xLINES[j].indexOf( word, scol );
                if ( k >= 0 ) {
                    var html = $('#line'+j).html();
                    // TODO: For words with different possible locations (es:"Y" or fr:"ET") find place nearest to another word
                    html = html.replace( word, '<span class="on">'+word+'</span>');
                    $('#line'+j).html(html);
                    seekline = j;
                    seekcol = k+word.length+1;
                    break;
                }
            }

        }
    },

    'paintDots': function( num ) {
        for (var i=1; i<=4; i++) {
            if (i <= num) {
                $('#dot'+i).html('<span class="on">●</span>');
            } else {
                $('#dot'+i).html('●');
            }
        }
    },

    'drawClock': function( parentDiv ) {
        $( parentDiv ).html( '' );
        $( parentDiv ).append( '<div id="dot1"></div><div id="dot2"></div><div id="matrix"></div><div id="dot4"></div><div id="dot3"></div></div>').addClass('off');

        for (var i in this.languageObj.lines) {
            $( parentDiv + ' #matrix' ).append( '<div id="line'+i+'">' + this.languageObj.lines[i] + '</div>');
        }
    },

    'setLanguage': function( langObj ) {
        this.languageObj = langObj;
    }

};