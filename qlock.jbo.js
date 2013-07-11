// QLOCKTWO Lojban Localization
// Script written by Markus Birth <markus@birth-online.de>

var qlockLangLojban = {
    'langCode': 'jbo',
    'language': 'Lojban',

/*
Format:

ma tcika ti = What's the time?

li papa (11:00)
li papa pi'e mu (11:05)
li pano pi'e mumu (10:55) = li papa pi'e ni'u mu (11-5)

[li papa pimu (11:30)] = li papa pi'e cino

numbers:
0 no
1 pa
2 re
3 ci
4 vo
5 mu
6 xa
7 ze
8 bi
9 so
10 (dau) pano
11 (fei) papa
12 (gai) pare
13 paci
14 pavo
15 pamu
16 paxa
17 paze
18 pabi
19 paso
20 reno
21 repa
22 rere
23 reci

HOURS
no  00
pa  01
re  02
ci  03
vo  04
mu  05
xa  06
ze  07
bi  08
so  09
pano 10
papa 11
pare 12
paci 13
pavo 14
pamu 15
paxa 16
paze 17
pabi 18
paso 19
reno 20
repa 21
rere 22
reci 23

LI-PAREPACI 1
PAPANO-PAVO 2
PAMU-RERENO 3
PAXA--PAZE- 4
PABI--PASO- 5
RECI----PIE 6
PANO-PAMUMU 7
RENO-REMUNO 8
CINO-CIMU-- 9
VONO-VOMU-- 10


MINUTES
-     0
mu    5
pano 10
pamu 15
reno 20
remu 25
cino 30
cimu 35
vono 40
vomu 45
muno 50
mumu 55

OR (with ni'u)
-
mu
pano
pamu
reno
remu
cino

*/

    'lines': [
        "LIXPAREPACI",
        "PAPANOPAVOF",
        "RERENOTPAMU",
        "PAXAWYPAZEB",
        "SPABIJCPASO",
        "RECIHDURPIἘ",
        "PANOTPAMUMU",
        "REMUNOSRENO",
        "CINOBCIMUYW",
        "VOMUZXVONOL"
    ],

    'pre': 'LI ',

    'first': [
        'NO',
        'PA',
        'RE',
        'CI',
        'VO',
        'MU',
        'XA',
        'ZE',
        'BI',
        'SO',
        'PANO',
        'PAPA',
        'PARE',
        'PACI',
        'PAVO',
        'PAMU',
        'PAXA',
        'PAZE',
        'PABI',
        'PASO',
        'RENO',
        'REPA',
        'RERE',
        'RECI'
    ],

    'middle': ' PIἘ ',

    'second': [
        '',
        'MU',
        'PANO',
        'PAMU',
        'RENO',
        'REMU',
        'CINO',
        'CIMU',
        'VONO',
        'VOMU',
        'MUNO',
        'MUMU'
    ],

    /**
     * @param {Date} time
     * @type String
     */
    'makeSentence': function( time ) {
        var h = time.getHours();
        var m = time.getMinutes();

        var m5 = Math.floor( m/5 );

        var sentence = this.pre + this.first[h];
        if (m5 != 0) {
            sentence += this.middle + this.second[m5];
        }
        return sentence;
    }

}

qlockTwo.availLangs.push( qlockLangLojban );
