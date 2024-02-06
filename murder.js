            var czas = false;

            var pieniadze = document.getElementById("pie")
            var ludzie = document.getElementById("wyn")
            var narzedzia =  document.getElementById("narz")
            var posiadlosci = document.getElementById("pos")
            var zdrowie = document.getElementById("zdrowie")

            var pie=80, ludz=0, narz=0, pos=0, zdr = 100;
            var cenaNarzedzi = 20, cenaLudzi = 250, cenaPos = 500,cenaZdr=100;
            var szankrad = 85, szanrab = 40, szanhack = 20;

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
                pieniadze.innerHTML = pie;
                ludzie.innerHTML = ludz;
                posiadlosci.innerHTML = pos;
                zdrowie.innerHTML = zdr;
                narzedzia.innerHTML = narz;

                szankrad1.innerHTML = szankrad;
                szanrab1.innerHTML = szanrab;
                szanhack1.innerHTML = szanhack;

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
            function Kup(arg){
                switch(arg){
                    case 
                }




            }
            function UlZdrowie(){
            if (pie < cenaZdr) { info.innerHTML = "Nie masz pieniedzy na ulepszenie zdrowia" }
            else{
                money -= cenaZdr;
                zdr += 20;

            }
            }
            //AKCJE
            function kradnij() {
                let los1 = Math.floor(Math.random() * 100  ) + 1;
                console.log(los1)
                console.log(szankrad)
                if (los1 >szankrad) { info.innerHTML = "Zosta�e� z�apany na kradzie�y !!!"; zdr -= 5; pie -= 25 }
                else {
                    pie += 20;
                }
                if (Math.random() * 30 == 1) {zdarzenie() }
                Sync();
                
            }
            function rabuj() {
                let los1 = Math.floor(Math.random() * 100) + 1;
                
                if (los1 > szanrab) { info.innerHTML = "Zosta�e� z�apany na rabunku !!!"; zdr -= 10; pie -= 60 }
                else { pie += 45; }
                if (Math.random() * 30 == 1) { zdarzenie() }
                Sync();
            }
            function hackuj() {
                let los1 = Math.floor(Math.random() * 100) + 1;
                
                if (los1 > szanhack) { info.innerHTML = "Zosta�e� z�apany na hackerstwie !!!"; zdr -= 15; pie -= 100 }
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
                switch(a){
                    //KUP
                    case "kludz":
                    if(pie>=cenykupna[3]){posLudzi+=1}
                    else{info += "Nie masz pieniedzy na ludzi"}
                        break;
                    case "kziola":
                        if(pie>=cenykupna[1]){posZiola+=1}
                        else{info += "Nie masz pieniedzy na ziola"}
                        break;
                    case "kdok":
                        if(pie>=cenykupna[0]){posDok+=1}
                        else{info += "Nie masz pieniedzy na dokumenty"}
                        break;
                    case "knarz":
                        if(pie>=cenykupna[2]){posNarz+=1}
                        else{info += "Nie masz pieniedzy na narzady"}
                        break;
                        //SPRZEDAJ
                    case "sludz":
                        if(posLudzi>=1){posLudzi-=1}
                        break;
                    case "sziola":

                        break;
                    case "sdok":

                        break;
                    case "snarz":

                        break;






                }

            }










