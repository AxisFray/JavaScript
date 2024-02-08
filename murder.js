            var czas = false;

            var pieniadze = document.getElementById("pie")
            var ludzie = document.getElementById("wyn")
            var narzedzia =  document.getElementById("narz")
            var posiadlosci = document.getElementById("pos")
            var zdrowie = document.getElementById("zdrowie")

            var pie=80, ludz=0, narz=0, pos=0, zdr = 100;
            var cenaNarzedzi = 20, cenaLudzi = 250, cenaPos = 500,cenaZdr=100;
            var szankrad = 85, szanrab = 40, szanhack = 20;
            var dokumenty1 = 0, ziola1 = 0, narzady1 = 0, ludzie1 = 0;

            var hdokumenty = document.getElementById("dok1")
            var hziola = document.getElementById("ziola1")
            var hnarzady = document.getElementById("narz1")
            var hludzie = document.getElementById("ludzie1")

            var szankrad1 = document.getElementById("kradnij")
            var szanrab1 = document.getElementById("rabuj")
            var szanhack1 = document.getElementById("hackuj")

            var info = document.getElementById("info")

            var cenanarz = document.getElementById("cenanarz")
            var cenacz = document.getElementById("cenacz")
            var cenapos = document.getElementById("cenapos")
            var cenazdr = document.getElementById("cenazdr")

            var cenykupna = [300,600,800,1500]
            var cenysprzedazy = [300,600,800,1500]
            var ckludzi = document.getElementById("cenaludzi")
            var ckdok = document.getElementById("cenadok")
            var cknarz = document.getElementById("cenanarzadow")
            var ckziola = document.getElementById("cenamar")
            var ck = [ckdok, ckziola, cknarz, ckludzi]
            var cs = [csdok,csziola,csnarz,csludzi]
            var csludzi = document.getElementById("cenasludzi")
            var csdok = document.getElementById("cenasdok")
            var csnarz = document.getElementById("cenasnarzadow")
            var csziola = document.getElementById("cenasmar")

            var posLudzi = 0;
            var posDok = 0;
            var posZiola = 0;
            var posNarz = 0;

            var wzrostnarz = 0, wzrostludzi = 0, wzrostpos = 0;
            var zdarzeniaP = ["zostałeś przylapany ","nakryli cie","nie zatarles sladow zbrodni","zostales zauwazony"]
            var zdarzeniaD = ["Masz kumpla w policji ktory cie uratowal ","udalo ci sie oklamac policje","masz szczescie"]
            function zdarzenie() {
                if (Math.floor(Math.random() * 10) + 1 > 5) {
                    let los = Math.floor(Math.random() * zdarzeniaD.length) + 1;
                    let los1 = Math.floor(Math.random() * (pie * 0.8));
                    info = zdarzeniaD[los] +" dostajesz " +los1
                    pie += los1
                    Sync();
                }
                else {
                    let los = Math.floor(Math.random() * zdarzeniaP.length) + 1;
                    let los1 = Math.floor(Math.random() * (pie * 0.8));
                    info = zdarzeniaP[los] +" placisz "+ los1
                    pie -= los1
                    Sync();
                }
            }
function Sync() {
    CCeny();
                pieniadze.innerHTML = pie;
                ludzie.innerHTML = ludz;
                posiadlosci.innerHTML = pos;
                zdrowie.innerHTML = zdr;
                narzedzia.innerHTML = narz;

                szankrad1.innerHTML = szankrad;
                szanrab1.innerHTML = szanrab;
                szanhack1.innerHTML = szanhack;

                hdokumenty.innerHTML = dokumenty1;
                hziola.innerHTML = ziola1;
                hnarzady.innerHTML = narzady1;
                hludzie.innerHTML = ludzie1;

                cenanarz.innerHTML = cenaNarzedzi;
                cenacz.innerHTML = cenaLudzi;
                cenapos.innerHTML = cenaPos;
                cenazdr.innerHTML = cenaZdr;
                if (czas == false && ludz > 0) {
                    var czaspozniej = new Date();
                    czas = true;
                }
                if (ludz > 0) {
                    var czasteraz = new Date();
                    if (czasteraz + 40 > czaspozniej) {
                        pie += ludz * 30;
                        czaspozniej = new Date();
                    }
                }
                if(zdr<=0){Death()}
                if(zdr<15){zdrowie.style.color="red";}
                else{zdrowie.style.color="white"}

            ckdok.innerHTML = cenykupna[0];
            ckziola.innerHTML = cenykupna[1]
            cknarz.innerHTML = cenykupna[2]
            ckludzi.innerHTML = cenykupna[3]

            csdok.innerHTML = cenysprzedazy[0];
            csziola.innerHTML = cenysprzedazy[1]
            csnarz.innerHTML = cenysprzedazy[2]
            csludzi.innerHTML = cenysprzedazy[3]



}


            function CCeny() {
                for (var i = 0; i < 4; i++) {
                    los1 = Math.floor(Math.random() * (1 / 20) *cs[i])
                    los2 = Math.floor(Math.random() * ( 1 / 20 ) * ck[i])
                    if ((Math.floor(Math.random() * 2) + 1) == 1) { cs[i] -= los1 } else { cs[i] += los1 }
                    if ((Math.floor(Math.random() * 2) + 1) == 1) { ck[i] -= los1 } else { ck[i] += los1 }


                }
            }
            //SKLEP
            function Narzedzia() {
                if (pie < cenaNarzedzi) { info.innerHTML = "Nie masz pieniedzy na narzedzia" }
                else {
                    narz += 1; pie -= cenaNarzedzi; wzrostnarz += 1; }
            
                if (wzrostnarz >= 5) {
                    cenaNarzedzi += Math.floor(cenaNarzedzi % 10)
                    wzrostnarz = 0;
                }
                
                Sync();
            }
            function Czlowiek() {
                if (pie < cenaLudzi) { info.innerHTML = "Nie masz pieniedzy na czlowieka" }
                else { ludz += 1; pie -= cenaLudzi; wzrostludzi += 1 }
                if (wzrostludzi >= 5) {
                    cenaLudzi += Math.floor(cenaLudzi % 10)
                    wzrostludzi = 0;
                }
                Sync();
            }
            function Posiadlosc() {
                if (pie < cenaPos) { info.innerHTML = "Nie masz pieniedzy na posiadlosc" }
                else { pos += 1; pie -= cenaPos; wzrostpos += 1 }
                if (wzrostpos >= 5) {
                    cenaPos += Math.floor(cenaPos % 10)
                    wzrostpos = 0;
                }
                Sync();
            }
            




            
            function UlZdrowie(){
            if (pie < cenaZdr) { info.innerHTML = "Nie masz pieniedzy na ulepszenie zdrowia" }
            else{
                pie -= cenaZdr;
                zdr += 20;

            }
            }
            //AKCJE
            function kradnij() {
                let los1 = Math.floor(Math.random() * 100  ) + 1;
                console.log(los1)
                console.log(szankrad)
                if (los1 >szankrad) { info.innerHTML = "Zostales zlapany na kradziezy !!!"; zdr -= 5; pie -= 25 }
                else {
                    pie += 20;
                }
                if (Math.random() * 30 == 1) {zdarzenie() }
                Sync();
                
            }
            function rabuj() {
                let los1 = Math.floor(Math.random() * 100) + 1;
                
                if (los1 > szanrab) { info.innerHTML = "Zostales zlapany na rabunku !!!"; zdr -= 10; pie -= 60 }
                else { pie += 45; }
                if (Math.random() * 30 == 1) { zdarzenie() }
                Sync();
            }
            function hackuj() {
                let los1 = Math.floor(Math.random() * 100) + 1;
                
                if (los1 > szanhack) { info.innerHTML = "Zostales zlapany na hackerstwie !!!"; zdr -= 15; pie -= 100 }
                else {
                    pie += 80; 
                }
                if (Math.random() * 30 == 1) { zdarzenie() }
                Sync();
            }
            function Death()
            {
                document.getElementsByTagName('body').innerHTML = "Przegrałeś";
                
            }
            
            //CZARNY RYNEK
            function kup(aaa){
                switch(aaa){
                    //KUP
                    case "kludz":
                        
                        if (pie >= cenykupna[3]) { ludzie1 += 1; pie -= cenykupna[3] }
                        else { info.innerHTML= "Nie masz pieniedzy na ludzi" }
                        Sync();
                        break;
                    case "kziola":
                        if (pie >= cenykupna[1]) { ziola1 += 1;pie-=cenykupna[1] }
                        else { info.innerHTML = "Nie masz pieniedzy na ziola" }
                        Sync();
                        break;
                    case "kdok":
                        if (pie >= cenykupna[0]) { dokumenty1 += 1;pie-=cenykupna[0] }
                        else { info.innerHTML = "Nie masz pieniedzy na dokumenty" }
                        Sync();
                        break;
                    case "knarz":
                        if (pie >= cenykupna[2]) { narzady1 += 1;pie-=cenykupna[2] }
                        else { info.innerHTML = "Nie masz pieniedzy na narzady" }
                        Sync();
                        break;
                        //SPRZEDAJ
                    case "sludz":
                        if (ludzie1 >= 1) { ludzie1 -= 1; pie += cenysprzedazy[3] }
                        else { info.innerHTML = "Nie masz ludzi" }
                        Sync();
                        break;
                    case "sziola":
                        if (ziola1 >= 1) { ziola1 -= 1; pie += cenysprzedazy[1] }
                        else { info.innerHTML = "Nie masz ziola" }
                        Sync();
                        break;
                    case "sdok":
                        if (dokumenty1 >= 1) { dokumenty1 -= 1; pie += cenysprzedazy[0] }
                        else { info.innerHTML = "Nie masz dokumentow" }
                        Sync();
                        break;
                    case "snarz":
                        if (narzady1 >= 1) { narzady1 -= 1; pie += cenysprzedazy[2] }
                        else { info.innerHTML = "Nie masz narządów" }
                        Sync();
                        break;






                }

            }










