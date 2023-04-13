const e=[{questionNumber:"1",question:"Planificarea Round-Robin:",answers:["determină atribuirea unei cuante de timp în care procesului îi este permis să ruleze;","determină suspendarea unui proces într-un moment arbitrar;","determină atribuirea unei priorităţi fixe pentru execuţia unui proces;","determină lansarea în execuţie a unui proces dacă nu există altul mai prioritar în execuţie."],correct_answers:[1]},{questionNumber:"2",question:"La declanşarea unei întreruperi prima acţiune desfăşurată în sistemul de calcul este:",answers:["salvarea registrelor procesului întrerupt în tabela de procese;","încărcarea registrului program counter cu conţinutul vectorului de întrerupere;","salvarea stării programului întrerupt în stivă;","modificarea stării procesului interrupt."],correct_answers:[3]},{questionNumber:"3",question:"Un proces este:",answers:["activitatea unităţii de prelucrare;","un program compilat;","un program în execuţie;","un program link-editat."],correct_answers:[3]},{questionNumber:"4",question:'Registrul "contor program" conţine:',answers:["adresele operanzilor operaţiei ce trebuie executată;","adresa următoarei instrucţiuni ce trebuie executată;","chiar operanzii operaţiei ce trebuie executată;","numărul instrucţiunii ce trebuie executată."],correct_answers:[2]},{questionNumber:"5",question:"Secţiunile critice sunt:",answers:["secvenţe de program care trebuie tratate cu mare atenţie;","secvenţe de tratare a întreruperilor importante;","secvenţe din activitatea sistemului de calcul când resursele sunt insuficiente;","secvenţe de program unde se accesează date partajate."],correct_answers:[4]},{questionNumber:"6",question:"Planificatorul este componenta sistemului de operare care decide:",answers:["care proces trece în starea de execuţie şi pentru cât timp;","care proces trebuie terminat şi care proces trebuie început;","care dispozitiv periferic va fi folosit de către program;","care dintre fişierele deschise trebuie închis la un moment dat."],correct_answers:[1]},{questionNumber:"7",question:"Un sistem de operare asigură îndeplinirea următoarelor funcţii:",answers:["creşterea performanţelor unităţii de prelucrare;","un management eficient al resurselor fizice şi logice;","asistarea utilizatorului printr-un sistem dezvoltat de comunicaţie;","protecţia informaţiei."],correct_answers:[2,3,4]},{questionNumber:"8",question:'Tranziţia unui proces din starea “în execuţie" în starea “blocat" are loc atunci când:',answers:["planificatorul decide suspendarea procesului pentru a lansa un altul mai prioritar;","planificatorul decide blocarea procesului din cauza unei erori;","procesul aşteaptă apariţia unor date de care depinde continuarea execuţiei;","procesul nu mai poate continua execuţia din cauza unei erori."],correct_answers:[3]},{questionNumber:"9",question:"În sistemele de operare de tip client-server nucleul acestuia realizează:",answers:["servirea proceselor server;","servirea proceselor client;","transportul mesajelor de la procesele client către procesele server;","accesul la resursele proceselor client şi ale proceselor server."],correct_answers:[3]},{questionNumber:"10",question:"Evacuarea-reîncărcarea proceselor (swapping) este procesul de:",answers:["terminare, respectiv începere a proceselor;","transfer al datelor în fişiere pe disc;","lansare în execuţie a programelor;","transfer al proceselor între memorie şi disc."],correct_answers:[4]},{questionNumber:"11",question:'Tranziţia unui proces din starea “în execuţie" în starea “gata" are loc atunci când:',answers:["planificatorul decide suspendarea procesului pentru că i-a expirat cuanta de timp alocată;","planificatorul, în urma analizei proceselor active stabileşte că un proces nu poate continua execuţia;","procesul nu mai are date de prelucrat şi trebuie să-şi termine execuţia;","procesul nu mai are date de transferat şi poate sa-şi continue execuţia."],correct_answers:[1]},{questionNumber:"12",question:"Într-un sistem de operare de tip client-server procesele server lucrează în modul de lucru:",answers:["supervisor;","kernel;","utilizator;","privilegiat."],correct_answers:[3]},{questionNumber:"13",question:"Care din următoarele tipuri nu reprezintă un sistem de fișiere:",answers:["Swap;","ext1;","NTFS;","FAT32."],correct_answers:[1]},{questionNumber:"14",question:"În cadrul partiționării unui sistem Linux, reprezintă un tip de partiție?",answers:["Partiția logică;","Partiția primară;","Partiția virtuală;","Partiția extinsă."],correct_answers:[1,2,4]},{questionNumber:"15",question:"RUID reprezintă:",answers:["Userul logat iniţial în sistem;","Userul devenit prin rularea comenzii su;","RUID nu există. Doar EUID si UID;","UID secundar."],correct_answers:[1]},{questionNumber:"16",question:"EUID reprezintă:",answers:["Userul care s-a logat iniţial în sistem;","Userul devenit prin rularea comenzii su;","UID secundar al userului;","EUID nu exista, doar UID."],correct_answers:[2]},{questionNumber:"17",question:"Ce comandă se foloseşte pentru afişarea userilor logaţi în sistem?",answers:["login;","whosin;","who;","Whoami."],correct_answers:[3]},{questionNumber:"18",question:"Cum se află procesul programului care deschide portul 10000 pentru a asculta conexiuni ce folosesc protocolul tcp?",answers:["fuser -n tcp 10000;","grep 10000;","kill 10000;","fuser -n tcp."],correct_answers:[1]},{questionNumber:"19",question:"Comanda su are drept scop:",answers:["Substituirea userului curent cu root şi încărcarea environmentului lui root;","Substituirea userului curent fără root şi încărcarea environmentului lui root;","O eroare fiindcă s-a specificat semnul minus dar nu şi opţiunea;","Modificarea informaţiilor despre un user."],correct_answers:[1]},{questionNumber:"20",question:"Afişarea tuturor grupurilor din care face parte un utilizator numit user1 se realizează prin comanda:",answers:["groups;","show groups;","id;","show users."],correct_answers:[1,3]},{questionNumber:"21",question:"Ce comandă crează un user numit user1?",answers:["useradd user1;","useradd user1 -c 'user normal' -d /home/user1 -s /bin/bash;","useradd -c 'user normal' -d /home/user1 -m -s /bin/bash user1;","adduser -group root user1."],correct_answers:[1,3]},{questionNumber:"22",question:"Pentru fiecare user se pastrează în fisierul /etc/passwd următoarele informaţii:",answers:["username;","uid;","grupurile din care acesta face parte;","home directory."],correct_answers:[1,2,4]},{questionNumber:"23",question:"Cum ajungem în directorul home al utilizatorului logat?",answers:["cd ~;","cd /;","cd home;","cd."],correct_answers:[2]},{questionNumber:"24",question:"În Linux în mod standard userii se găsesc în fişierul:",answers:["/etc/users;","/etc/shadow;","/etc/system-users;","/etc/passwd."],correct_answers:[4]},{questionNumber:"25",question:"Ce comandă folosim în linux pentru a afla adresa ip a placii de reţea?",answers:["ifconfig;","ipconfig;","route;","traceroute."],correct_answers:[1]},{questionNumber:"26",question:"Afirmaţiile corecte sunt care se referă la echivalenţa dintre modul simbolic şi absolut:",answers:["775=rwxrwxrwx;","775=rwxrwxr-x;","1001=--------t;","664=rw-rw-r—."],correct_answers:[2,3,4]},{questionNumber:"27",question:"Umask are rolul de a:",answers:["Stabili cu ce permisiuni “default” se crează noile fişiere şi directoare;","Stabili cu ce permisiuni default se crează fişierele daca ne referim la files umsk;","Stabili masca sistemului;","Stabili masca userului."],correct_answers:[1]},{questionNumber:"28",question:"Daca se foloseste umask 0002 care dintre urmatoarele afirmaţii sunt corecte:",answers:["Fişierele se crează “default” cu permisiunile 664;","Fişierele se crează “default” cu permisiunile 440;","Directoarele se crează “default” cu permisiunile rwxrwxr-x;","Directoarele se crează “default” cu permisiunile 755."],correct_answers:[1,3]},{questionNumber:"29",question:"Cum se închide procesul 2543?",answers:["kill -9 2543;","ps – aux | 2543;","grep 2543;","exit 2543."],correct_answers:[1]},{questionNumber:"30",question:"În ce fişier se scriu comenzile ce se vor executate la pornirea calculatorului după pornirea tuturor proceselor?",answers:["/etc/rc.d/rc.local;","crontab;","/bin/sh;","/bin."],correct_answers:[1]},{questionNumber:"31",question:"Ce se scrie în prima linie a unui script bash?",answers:["#!/bin/sh;","#!/usr/local/perl;","#!/sbin/perl;","#!/bin."],correct_answers:[1]},{questionNumber:"32",question:"Ce defineşte directiva DirectoryIndex din fişierul de configurare a serverului Apache?",answers:["directorul în care trebuie pus fişierul index.html;","fişierele pe care le caută în Document Root pentru a le iniţializa ca primă pagină a site-ului;","indexul cuvintelor de căutare a paginii web folosind un motor ca www.google.com;","directorul în care intră doar root dacă furnizează parola."],correct_answers:[2]},{questionNumber:"33",question:"Cu ce comandă aflăm direct procesul folosit de un utilizator conectat prin ssh la server?",answers:["ps -aux | grep pts;","ps -aux | who;","ps -aux | grep last;","ps -aux | whoami."],correct_answers:[1]},{questionNumber:"34",question:"Cum facem pentru a avea anumite servicii pornite automat la pornirea calculatorului?",answers:["folosim comanda setup, apoi din meniu alegem system services şi bifăm acele servicii;","edităm fişierul /etc/xinetd;","edităm fişierul /etc/inet.d/inetd;","edităm un fişier nou în care enumerăm serviciile."],correct_answers:[1]},{questionNumber:"35",question:`Folosind interpretorul bash se creează următorul script denumit scr1:
# !/bin/bash
echo $#
Care va fi rezultatul afisat, dacă scriptul se va executa cu comanda: # bash scr1 arg1 arg2 4:`,answers:["3;","arg1;","arg2;","4."],correct_answers:[1]},{questionNumber:"36",question:`Ce rezultat va produce execuția urmatorului script:
#!/bin/bash
s=0
for i înls -l | awk '{print $5}'
do
s=expr $s + $i
done
echo expr $s / 1024`,answers:["scriptul afisează valoarea însumata, exprimată în Kb, a fișierelor din directorul current;","scriptul afisează o lista cu dimensiunea fișierelor, în octeti din directorul curent;","scriptul afisează valoarea insumata, exprimată înbiti, a fișierelor din directorul curent;","scriptul afisează o listă cu dimensiunea fișierelor din directorul curent exprimată în biți."],correct_answers:[1]},{questionNumber:"37",question:"Se presupune că ați editat un script cu numele /root/scr1. Care este comanda ce trebuie introdusă pentru a face scriptul executabil?",answers:["chmod u+x /root/scr1;","chmod 744 /root/scr1;","chmod 666 /root/scr1;","chmod u-wx /root/scr1."],correct_answers:[1,2]},{questionNumber:"38",question:`Care este rezultatul afișat în urma execuției comenzii:
ifconfig | grep "inet addr" | grep - v "127.0 .0 .1" | awk '{print $2;}' | awk - F ':' '{print $2;}'`,answers:["toate adresele ip mai puțin adresa interfeței loopback;","adresa ip a interfeței eth0;","adresa ip a interfeței loopback;","toate adresele ipv6."],correct_answers:[1]},{questionNumber:"39",question:`Care este rezultatul afișat în urma execuției:
init 3`,answers:["intrarea în nivelul 3, respectiv modul text, cu acces network;","intrarea înnivelul 3, respectiv modul grafic cu acces network;","crearea a 3 procese în memorie, subordonate procesului parinte init."],correct_answers:[1]},{questionNumber:"40",question:"Care dintre urmatoarele comenzi are ca rezultat crearea unui fișier file2 care este identic cu fișierul file1, ignorând liniile goale?",answers:['grep -v "^$" file1 > file2;',"sed -e '/^$/d' file1 > file2;",'grep -v "#^" file1 > file2;','grep "^$" file1 > file2.'],correct_answers:[1,2]},{questionNumber:"41",question:"Cu ce comandă se poate obține lista rutelor cunoscute de sistem?",answers:["route;","netstat –r;","netstat –n;","ifconfig;"],correct_answers:[1,2]},{questionNumber:"42",question:`Care este rezultatul afișat în urma execuției următoarei comenzi:
ps -ef --no-heading | awk '{print $1}' | sort | uniq`,answers:["numele tuturor userilor, fara valori duplicate, sub care sunt rulate procesele curente;","lista id-urilor aparținând proceselor curente, fară valori duplicate;","numarul de useri, fară valori duplicate, sub care sunt rulate procesele curente;","lista numelor proceselor curente, fară valori duplicate, sortate alfabetic."],correct_answers:[1]},{questionNumber:"43",question:"Care este semnificația urmatoarei comenzi echo $?",answers:["se afișează codul de eroare al ultimei comenzi;","se afișează numarul de parametri ai scriptului curent;","se afișează numele scriptului curent;","se afișează variabila de sistem $HOME."],correct_answers:[1]},{questionNumber:"44",question:"Care este comanda folosită pentru a porni serviciul network în sistemul de operare Linux?",answers:["service network start;","/etc/init.d/network start;","chkconfig network start;","sc start network."],correct_answers:[1,2]},{questionNumber:"45",question:"Ce nu se poate obține folosind comanda uname?",answers:["numarul de procesoare;","totalul de memorie disponibilă;","versiunea kernel-ului;","numele sistem;","denumirea kernel-ului."],correct_answers:[1,2]},{questionNumber:"46",question:"Pentru a funcționa rezoluția de nume, ce fisier trebuie să existe și să conțină una sau mai multe adrese ale serverelor DNS?",answers:["/etc/resolv.conf;","/etc/sysconfig/network;","/etc/sysconfig/network-scripts/network-functions;","/etc/hosts;"],correct_answers:[1]},{questionNumber:"47",question:"Care sunt informațiile care nu se regăsesc în fișierul /etc/passwd?",answers:["Hash-urile parolelor utilizatorilor;","Directorul home al utilizatorului curent;","Interpretorul de comenzi (shell-ul);","Grupurile secundare ale utilizatorului curent."],correct_answers:[1,4]},{questionNumber:"48",question:"Ce fișier este folosit pentru montarea automată a unui sistem de fișiere în sistemul de operare Linux?",answers:["/etc/fstab;","/dev/sda1;","/mnt/hda6;","/etc/fsck;"],correct_answers:[1]},{questionNumber:"49",question:`Care este rezultatul afișat în urma execuției următoarei comenzii:
cat /etc/passwd | grep nologin | cut –d: -f1`,answers:["numele utilizatorilor care nu se pot loga în sistem;","numele utilizatorilor al căror cont a fost dezactivat;","numele grupului utilizatorilor al căror cont a fost dezactivat;","numele grupului utilizatorilor care nu se pot loga însistem."],correct_answers:[1]},{questionNumber:"50",question:`Care este rezultatul afișat în urma execuției următoarei comenzii:
find -type f -atime -7`,answers:["căutarea în directorul curent a fișierelor accesate în ultimele 7 zile;","căutarea în directorul radacină a fișierelor accesate în ultimele 7 ore;","căutarea în directorul radacină a fișierelor create în ultimele 7 ore;","căutarea în directorul curent a fișierelor create în ultimele 7 zile."],correct_answers:[1]}];export{e as default};
