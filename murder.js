var czas = false;
            var pieniadze = document.getElementById("pie")
            var ludzie = document.getElementById("wyn")
            var narzedzia =  document.getElementById("narz")
            var posiadlosci = document.getElementById("pos")
            var zdrowie = document.getElementById("zdrowie")
            var pie=80, ludz=0, narz=0, pos=0, zdr = 100;
            var cenaNarzedzi = 20, cenaLudzi = 250, cenaPos = 500;
            var szankrad = 85, szanrab = 40, szanhack = 20;
            var szankrad1 = document.getElementById("kradnij")
            var szanrab1 = document.getElementById("rabuj")
            var szanhack1 = document.getElementById("hackuj")
            var info = document.getElementById("info")
            var cenanarz = document.getElementById("cenanarz")
            var cenacz = document.getElementById("cenacz")
            var cenapos = document.getElementById("cenapos")
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
                document.getElementsByTagName('body').style.color="red";
            }
            