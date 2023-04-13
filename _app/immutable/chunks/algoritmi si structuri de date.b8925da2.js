const e=[{questionNumber:"1.",question:`Se dă următorul algoritm:

            for i = 1, n
                                  poz[i] = 1
            endfor
            for i = 1, n-1
                        for j = i+1, n
                                  if x[j] &lt; x[i] then poz[i] = poz[i] + 1
                                                               else poz[j] = poz[j] + 1
                                  endif
                        endfor
            endfor
Știind că datele de intrare sunt n = 7 și vectorul x = (9, 15, 23, 2, 5, 4, 8) care vor fi valorile vectorului poz la sfârșitul algoritmului?`,answers:["(5, 6, 7, 1, 2, 3, 4)","(5, 6, 7, 1, 3, 2, 4)","(6, 5, 7, 1, 2, 3, 4)","(1, 2, 3, 4, 5, 6, 7)"],correct_answers:[2]},{questionNumber:"2.",question:`Se dă următoarea funcție recursivă
    1)   int inaltime(NodArb *rad)
    2)   // returneaza inaltimea unui arbore binar
    3)   {
    4)           if(rad == NULL) return 0;
    5)           ...............................................................................................
    6)           return 1 + max(inaltime(rad->stang), inaltime(rad->drept));
    7)
    8)   }
Ce instrucțiuni trebuie scrise în linia de cod 5) pentru ca funcția să returneze înălțimea unui arbore binar?`,answers:["instrucțiunea vidă","int inaltime =0;","else if(rad->stang == NULL && rad->drept == NULL) return 0;","else"],correct_answers:[3]},{questionNumber:"3.",question:`Se dă următoarea funcție
                        int cautare(int x[], int first, int last, int value)
                        {   int mid;
                            if(first > last) return -1;
                            mid = (first + last) / 2;
                            if (x[mid] == value) return mid;
                            if(x[mid] &lt; value) return cautare(x, mid + 1, last, value);
                            else return cautare(x, first, mid - 1, value);
                        }
Dacă vectorul x = (2, 4, 5, 8, 9, 15, 23), care va fi rezultatul apelării funcției cautare (x, 2, 6, 8) ?`,answers:["-1","2","3","1"],correct_answers:[3]},{questionNumber:"4.",question:`Parcurgerea în preordine a arborelui binar din Fig. 1 va afișa
<img style="margin: 10px 0; width: 100%;" src="images/algoritmi_fig1.png" alt="Poza a fost incarcata gresit" />
<span style="text-align: center; display: block">Fig. 1</span>`,answers:["10, 4, 1, 9, 21, 15, 28, 23","10, 4, 1, 9, 23, 21, 28, 15","1, 4, 9, 10, 15, 21, 23, 28","10, 4, 1, 9, 21, 15, 23, 28"],correct_answers:[4]},{questionNumber:"5.",question:`Parcurgerea în inordine a arborelui binar din Fig. 1 va afișa
<img style="margin: 10px 0; width: 100%;" src="images/algoritmi_fig1.png" alt="Poza a fost incarcata gresit" />
<span style="text-align: center; display: block">Fig. 1</span>`,answers:["10, 4, 1, 9, 21, 15, 23, 28","1, 4, 9, 10, 15, 21, 23, 28","1, 4, 9, 10, 15, 21, 28, 23","1, 4, 9, 10, 21, 23, 28, 15"],correct_answers:[2]},{questionNumber:"6.",question:`Parcurgerea în postordine a arborelui binar din Fig. 1 va afișa
<img style="margin: 10px 0; width: 100%;" src="images/algoritmi_fig1.png" alt="Poza a fost incarcata gresit" />
<span style="text-align: center; display: block">Fig. 1</span>`,answers:["1, 4, 9, 10, 15, 21, 23, 28","1, 4, 9, 10, 15, 21, 28, 23","1, 9, 4, 15, 28, 23, 21, 10","1, 9, 4, 15, 23, 28, 21, 10"],correct_answers:[3]},{questionNumber:"7.",question:`Ce returnează următoarea funcție dacă rad este pointer la rădăcina unui arbore binar nenul?
    int fct(NodArb *rad)
    {
              if(rad == NULL) return 0;
              return 1 + fct(rad->stang) + fct(rad->drept);
    }`,answers:["0","1","numărul de noduri terminale ale arborelui","numărul de noduri ale arborelui."],correct_answers:[4]},{questionNumber:"8.",question:"Ordinul de complexitate a algoritmului Bubblesort (metoda bulelor) este",answers:["O (n)","O(n<sup>2</sup>)","O(n log n)","O(n<sup>3</sup>)"],correct_answers:[2]},{questionNumber:"9.",question:"Cel mai rău caz pentru algoritmul de sortare rapidă este cazul în care",answers:["vectorul este deja sortat","vectorul nu este creat aleator","toate elementele vectorului sunt pare","vectorul conține și elemente negative"],correct_answers:[1]},{questionNumber:"10.",question:"Câte comparații se fac dacă se folosește algoritmul de căutare secvențială pentru căutarea elementului 12 în vectorul (2, 3, 6, 9, 10, 25)?",answers:["6","5","3","1"],correct_answers:[1]},{questionNumber:"11.",question:"Câte comparații se fac dacă se folosește algoritmul de căutare binară pentru căutarea elementului 12 în vectorul (2, 3, 6, 9, 10, 25)?",answers:["6","5","3","1"],correct_answers:[3]},{questionNumber:"12.",question:"O listă liniară în care inserările în lista se fac pe la un capăt, iar ștergerile pe la celălalt capăt se numește",answers:["stivă","vector","coadă","arbore"],correct_answers:[3]},{questionNumber:"13.",question:"Care din următorii algoritmi au ordinul de complexitate O(n log n)?",answers:["Bubblesort (sortarea cu metoda bulelor)","Mergesort (sortarea prin interclasare)","sortarea prin inserare","Quicksort(sortarea rapidă)."],correct_answers:[2,4]},{questionNumber:"14.",question:"Cel mai rău caz pentru algoritmul de căutare secvențială este cazul în care",answers:["elementul căutat este la mijlocul listei","elementul căutat nu se află în listă","elementul căutat este pe ultima poziție în listă","vectorul este ordonat crescator"],correct_answers:[2,3]},{questionNumber:"15.",question:"Timpul de execuție al unui algoritm se măsoară în",answers:["numărul de kilocteți necesari","numărul de instrucțiuni ale algoritmului","numărul de operații cheie","numărul de milisecunde necesar executării."],correct_answers:[3]},{questionNumber:"16.",question:"Ordinul de complexitate a algoritmului de căutare binară este",answers:["O(n)","O(n<sup>2</sup>)","O(n log n)","O(log n)"],correct_answers:[4]},{questionNumber:"17.",question:"O problemă se poate rezolva prin trei algoritmi, unul cu ordinul de complexitate O(n), altul cu ordinul O(log n) și al treilea cu ordinul O(n log n). Care este cel mai bun?",answers:["cel cu ordinul O(n)","cel cu ordinul O(log n)","cel cu ordinul O(n log n)","Toate sunt la fel."],correct_answers:[2]},{questionNumber:"18.",question:`Se dă următorul algoritm:

            for i = 1, n -1
                  index_min = i
                  for j = i + 1, n
                        if x[index_min] > x[j] then index_min = j
                        endif
                  endfor
                  if i  index_min then
                                    temp=x[i]
                                    x[i]=x[index_min]
                                    x[index_min]=temp
                  endif
            endfor
  
Care vor fi valorile vectorului x după terminarea pasului i = 3 știind că la intrare avem valorile n = 7 și vectorul x = (9, 15, 23, 2, 5, 4, 8)?`,answers:["(2, 4, 5, 9, 15, 23, 8)","(2, 5, 9, 15, 23, 4, 8)","(2, 5, 9, 15, 4, 23, 8)","(2, 4, 5, 9, 23, 15, 8)"],correct_answers:[4]},{questionNumber:"19.",question:`Se dă următorul algoritm. Care vor fi valorile vectorului x după terminarea pasului i = 5, știind că la intrare avem valorile n = 7 și x = (9, 15, 23, 2, 5, 4, 8)?

        for i = 2, n
                  elem = x[i]
                  j = i -1
                  while j >= 1 and x[j] > x[i]
                            j = j –1
                   endwhile
                  pozitie = j +1
                  for j= i, pozitie+1, -1
                            x[j] = x[j -1]
                  endfor
                  x[pozitie] = elem
        endfor`,answers:["(2, 4, 5, 9, 15, 23, 8)","(2, 5, 9, 15, 23, 4, 8)","(2, 5, 9, 15, 4, 23, 8)","(2, 4, 5, 8, 9, 15, 23)"],correct_answers:[2]},{questionNumber:"20.",question:"Se consideră următoarea secvență de operații într-o stivă: push(2), push(10), push(8), pop(), push(9), push(6), pop(), pop(), push(7), push(3), pop(), pop(), pop(), pop(). În ce ordine vor fi scoase din stivă elementele? (push = inserare, pop = ștergere)",answers:["(2, 10, 8, 9, 6, 7, 3)","(3, 7, 6, 9, 8, 10, 2)","(8, 6, 9, 3, 7, 10, 2)","(6, 9, 3, 7, 8, 10, 2)"],correct_answers:[3]},{questionNumber:"21.",question:"Se consideră următoarea secvență de operații într-o coadă: enqueue(2), enqueue(10), enqueue(8), dequeue(), enqueue(9), enqueue(6), dequeue(), dequeue(), enqueue(7), enqueue(3), dequeue(), dequeue(),dequeue(), dequeue(). În ce ordine vor fi scoase din coadă elementele? (enqueue = inserare, dequeue = ștergere)",answers:["(2, 10, 8, 9, 6, 7, 3)","(3, 7, 6, 9, 8, 10, 2)","(8, 6, 9, 3, 7, 10, 2)","(6, 9, 3, 7, 8, 10, 2)"],correct_answers:[1]},{questionNumber:"22.",question:`Se consideră următoarea funcție care caută o valoare dată într-o listă înlănțuită. val este variabila a cărei valoare este căutată, iar head este un pointer la capul listei în care se face căutarea.
    1)   NOD *cauta(NOD *head, int val)
    2)   {
    3)         NOD *iter = head; int gasit=0;
    4)         while (.......................)
    5)         {
    6)           if (iter -> info == val) gasit = 1;
    7)           else iter = iter -> link;
    8)         }
    9)         if(gasit) return iter;
    10)        else return NULL;
    11)  }

Cum trebuie completată linia de cod 4 astfel încât funcția să ruleze corect și să returneze un pointer la nodul cu valoarea căutată sau NULL dacă valoarea nu a fost găsită în listă?`,answers:["!gasit && iter != NULL","!gasit","iter!=NULL && !gasit","gasit ==0"],correct_answers:[1,3]},{questionNumber:"23.",question:`Se consideră următoarea funcție care are drept variabilă de intrare un pointer la capul unei liste înlănțuite. Ce face această funcție?
    1)   NOD *fct(NOD *head)
    2)   {
    3)         if (head == NULL) return NULL;
    4)         head = head -> link;
    5)         return head;
    6)   }`,answers:["returnează NULL","returnează un pointer la capul listei","elimină primul nod al listei și returnează un pointer la noul cap al listei","returnează NULL dacă lista este vidă"],correct_answers:[3,4]},{questionNumber:"24.",question:"Cel mai rău caz pentru algoritmul de sortare prin selecție este cazul în care",answers:["vectorul este ordonat descrescător","cel mai mare element al vectorului se află în prima poziție în vector","nu există un cel mai rău caz","vectorul este ordonat crescător"],correct_answers:[3]},{questionNumber:"25.",question:"Cel mai bun caz pentru algoritmul de sortare prin metoda bulelor (Bubblesort) este cazul în care",answers:["cel mai mic element al vectorului se află pe prima poziție în vector","cel mai mare element al vectorului se află în ultima poziție în vector","nu există un cel mai bun caz","vectorul este ordonat crescător"],correct_answers:[4]},{questionNumber:"26.",question:`Se consideră lista înlănțuită cu elemente numere întregi din Fig. 2:
<img style="margin: 10px 0; width: 100%;" src="images/algoritmi_fig2.png" alt="Poza a fost incarcata gresit" />
<span style="text-align: center; display: block">Fig. 2</span>
Dată următoarea definiție a tipului de date ce corespunde unui nod al listei,

      struct NOD
      {
                             int info;
                             NOD *link;
      };
ce va afișa următoarea funcție, dacă este apelată prin print(HEAD)?
      void print(NOD *head)
      {
           NOD *iter=head;
           while(iter!=NULL)
           {
           cout &lt;&lt; iter->info&lt;&lt;", ";
           iter=iter->link;
           }
      }`,answers:["10, 2, 8, 5, 7, 3","3, 7, 5, 8, 2, 10","2, 8, 5, 7, 3","2, 8, 5, 7"],correct_answers:[1]},{questionNumber:"27.",question:`Se consideră lista înlănțuită cu elemente numere întregi din Fig. 2. Dată următoarea definiție a tipului de date ce corespunde unui nod al listei,
     struct NOD
      {
                             int info;
                             NOD *link;
      };
ce va afișa următoarea funcție, dacă este apelată prin print(HEAD)?
      void print(NOD *head)
      {
           NOD *iter=head;
           while(iter->link !=NULL)
           {
           cout &lt;&lt; iter->info&lt;&lt;", ";
           iter=iter->link;
           }
      }`,answers:["10, 2, 8, 5, 7, 3","10, 2, 8, 5, 7","2, 8, 5, 7, 3, 10","2, 8, 5, 7"],correct_answers:[2]},{questionNumber:"28.",question:`Se consideră lista înlănțuită cu elemente numere întregi din Fig. 2. Dată următoarea definiție a tipului
de date ce corespunde unui nod al listei,
     struct NOD
      {
                           int info;
                           NOD *link;
      };
ce va afișa următoarea funcție, dacă este apelată prin print(HEAD)?
      void print(NOD *head)
      {
           NOD *iter=head;
           while(iter->link !=NULL)
           {
           iter=iter->link;
           if ((iter-> info)%2) cout &lt;&lt; iter->info&lt;&lt;", ";
           }
      }`,answers:["10, 2, 8, 5, 7, 3","10, 3, 7, 5, 8, 2","2, 8, 5, 7, 3","5, 7, 3"],correct_answers:[4]},{questionNumber:"29.",question:`Se dă următoarea funcție
      void interclasare(int x[], int prim, int mijloc, int ultim, int C[])
      {
                // lista A: x[prim ..mijloc]
                // lista B: x[mijloc+1 ..ultim]
                // lista C: C[0.. ultim - prim]
                int iterA = prim, iterB = mijloc+1, iterC = 0;
                while (iterA &lt;= mijloc && iterB &lt;=ultim)
                    if (x[iterA] &lt; x[iterB])
                                    C[iterC ++]= x[iterA ++];
                    else C[iterC ++]= x[iterB ++];
                while (iterA &lt;= mijloc)
                          C[iterC ++]= x[iterA ++];
                while (iterB &lt;= ultim)
                          C[iterC ++]= x[iterB ++];
      }
Dacă vectorul x = (9, 15, 23, 25, 4, 5, 8), care va fi vectorul C la apelarea funcției interclasare (x, 0, 3, 6, C)?`,answers:["4, 5, 8, 9, 15, 23, 25","0, 0, 0, 0, 0, 0, 0","9, 4, 15, 5, 23, 8, 25","9, 15, 23, 25, 4, 5, 8"],correct_answers:[1]},{questionNumber:"30.",question:`Se dă următoarea funcție, care apelează funcția interclasare descrisă la exercițiul 29.
      void mergesort(int x[], int prim, int ultim)
      {
             if (prim &lt; ultim)
             {
                     int mijloc = (prim + ultim)/2;
                     mergesort(x, prim, mijloc);
                     mergesort(x, mijloc + 1, ultim);
                     int C[ultim - prim +1];
                     interclasare(x, prim, mijloc, ultim, C);
                     for (int i = prim; i &lt;= ultim; i++)
                     x[i]=C[i-prim];
             }
      }
La apelul funcției mergesort(x, 0, 6) unde vectorul x = (9, 15, 23, 2, 4, 5, 8), de câte ori va fi apelată funcția mergesort (incluzând apelul inițial)?`,answers:["1","3","13","7"],correct_answers:[3]},{questionNumber:"31.",question:"Ordinul de complexitate a algoritmului de sortare prin inserare este",answers:["O (n)","O(n<sup>2</sup>)","O(n log n)","O(n<sup>3</sup>)"],correct_answers:[2]},{questionNumber:"32.",question:"Ordinul de complexitate a algoritmului de căutare secvențială este",answers:["O (n)","O(n<sup>2</sup>)","O(n log n)","O(log n)"],correct_answers:[1]},{questionNumber:"33.",question:"O listă liniară în care inserările și ștergerile în lista se fac pe la un singur capăt se numește",answers:["stivă","vector","coadă","arbore"],correct_answers:[1]},{questionNumber:"34.",question:"Ordinul de complexitate a algoritmului de sortare prin selecție este",answers:["O (n)","O(n<sup>2</sup>)","O(n log n)","O(n<sup>3</sup>)"],correct_answers:[2]},{questionNumber:"35.",question:`Se dă următoarea funcție în care front și rear sunt variabile globale și reprezintă pointeri la nodurile unei liste liniare reprezentate simplu înlănțuit, front la primul nod al listei, iar rear pointer la ultimul nod.

        void fct(int a)
        {
                  nod *p = new nod;
                  if (p != NULL)
                  {
                            p ->info = a;
                            p ->link = NULL;
                            if(rear!=NULL) rear->link=p;
                            else front=p;
                            rear = p;
                  }
                  else cout &lt;&lt; "OVERFLOW"&lt;&lt;endl;
        }

Ce face această funcție?`,answers:["Inserează un nod la începutul listei.","Inserează un nod la sfârșitul listei.","Șterge nodul de la începutul listei.","Șterge nodul de la sfârșitul listei."],correct_answers:[2]},{questionNumber:"36.",question:"Cel mai rău caz pentru algoritmul de sortare prin inserare este cazul în care",answers:["vectorul este deja sortat","vectorul este crescător și se dorește sortarea lui în ordine descrescătoare","vectorul este descrescător și se dorește sortarea lui în ordine crescătoare","vectorul conține și elemente negative"],correct_answers:[2,3]},{questionNumber:"37.",question:"Cel mai bun caz pentru algoritmul de sortare prin inserare este cazul în care",answers:["vectorul este deja sortat în ordinea dorită","vectorul nu este creat aleator","vectorul este descrescător și se dorește sortarea lui în ordine crescătoare","vectorul conține și elemente negative"],correct_answers:[1]},{questionNumber:"38.",question:"Numărul minim de comparații între elementele unui vector cu n elemente care este sortat cu algoritmul de sortare prin inserare este",answers:["n","n+1","n-1","log n."],correct_answers:[3]},{questionNumber:"39.",question:"Numărul minim de comparații între elementele unui vector cu n elemente care este sortat cu algoritmul de sortare prin metoda bulelor (Bubblesort) este",answers:["n-1","n+1","n","n log n"],correct_answers:[1]},{questionNumber:"40.",question:"Numărul maxim de comparații între elementele unui vector cu n elemente care este sortat cu algoritmul de sortare prin metoda bulelor (Bubblesort) este",answers:["n!","n(n+1)/2","n(n-1)/2","n log n."],correct_answers:[3]},{questionNumber:"41.",question:"Câte comparații se fac dacă se folosește algoritmul de căutare secvențială pentru căutarea elementului 9 în vectorul (8, 3, 5, 9, 11, 2)?",answers:["6","5","3","4"],correct_answers:[4]},{questionNumber:"42.",question:"Câte comparații se fac dacă se folosește algoritmul de căutare binară pentru căutarea elementului 19 în vectorul (1, 2, 3, 5, 8, 9, 19)?",answers:["6","5","3","O(log 7)"],correct_answers:[3]},{questionNumber:"43.",question:"Dacă se aplicăm metoda bulelor (bubblesort) pentru sortarea vectorului x = (9, 15, 23, 25, 4, 8, 5), cum se va modifica vectorul x după prima parcurgere a sa?",answers:["4, 5, 8, 9, 15, 23, 25","9, 15, 23, 4, 8, 5, 25","9, 4, 15, 5, 23, 8, 25","9, 15, 23, 25, 4, 5, 8"],correct_answers:[2]},{questionNumber:"44.",question:"Dacă se aplicăm metoda bulelor (bubblesort) pentru sortarea vectorului x = (9, 15, 23, 25, 4, 8, 5), cum se va modifica vectorul x după două parcurgeri ale sale?",answers:["4, 5, 8, 9, 15, 23, 25","9, 15, 4, 8, 5, 23, 25","9, 4, 15, 5, 23, 8, 25","9, 15, 23, 25, 4, 5, 8"],correct_answers:[2]},{questionNumber:"45.",question:"Dacă se aplicăm sortarea prin inserare pentru sortarea vectorului x = (9, 15, 23, 25, 4, 8, 5), care este primul element al vectorului a cărui analiză va implica efectuarea de modificări asupra vectorului?",answers:["15","23","25","4"],correct_answers:[4]},{questionNumber:"46.",question:"Care din următoarele afirmații sunt adevărate?",answers:["La aplicarea algoritmului de sortare rapidă elementul din mijloc este mutat pe prima poziție.","La aplicarea algoritmului de sortare rapidă elementul de pe prima poziție este mutat pe poziția din mijloc.","La aplicarea algoritmului de sortare rapidă se alege un element din listă, numit pivot și se rearanjează lista, prin interschimbări, inclusiv prin mutarea pivotului pe o altă poziție, astfel încât toate elementele mai mici decât pivotul să fie poziționate inaintea lui, iar toate elementele mai mari să fie poziționate după acesta.","La aplicarea algoritmului de sortare rapidă nu se alege niciun element pivot"],correct_answers:[3]},{questionNumber:"47.",question:`Care din următoarele afirmații sunt adevărate?
<img style="margin: 10px 0; width: 100%;" src="images/algoritmi_fig1.png" alt="Poza a fost incarcata gresit" />`,answers:["Arborele din figura Fig. 1 este un arbore binar.","Arborele din figura Fig. 1 nu este un arbore binar.","Arborele din figura Fig. 1 este un arbore binar de căutare.","Arborele din figura Fig. 1 nu este un arbore binar de căutare."],correct_answers:[1,3]},{questionNumber:"48.",question:`Parcurgerea in preordine a arborelui din Fig. 2 va afișa
<img style="margin: 10px 0; width: 100%;" src="images/algoritmi_fig2_1.png" alt="Poza a fost incarcata gresit" />
<span style="text-align: center; display: block">Fig. 2</span>`,answers:["/, +, 50, *, 25, 3, 8, -, 3","/, 50, +, *, 3, 25, 8, -, 3","50, +, 25, *, 3, 8, -, 3, /","/, +, 50, *, 25, 3, -, 8, 3"],correct_answers:[4]},{questionNumber:"49.",question:`Parcurgerea in inordine a arborelui din Fig. 2 va afișa
<img style="margin: 10px 0; width: 100%;" src="images/algoritmi_fig2_1.png" alt="Poza a fost incarcata gresit" />
<span style="text-align: center; display: block">Fig. 2</span>`,answers:["/, +, 50, *, 25, 3, 8, -, 3","50, +, 25, *, 3, /, 8, -, 3","50, +, 25, *, 3, 8, -, 3, /","50, /, +, *, 25, 3, -, 8, 3"],correct_answers:[2]},{questionNumber:"50.",question:`Parcurgerea in postordine a arborelui din Fig. 2 va afișa
<img style="margin: 10px 0; width: 100%;" src="images/algoritmi_fig2_1.png" alt="Poza a fost incarcata gresit" />
<span style="text-align: center; display: block">Fig. 2</span>`,answers:["50, 25, 3, *, +, 8, 3, -, /","/, 50, +, *, 3, 25, 8, -, 3","50, +, 25, *, 3, 8, -, 3, /","/, +, 50, *, 25, 3, -, 8, 3"],correct_answers:[1]}];export{e as default};
