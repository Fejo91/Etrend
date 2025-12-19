// types/preparations.ts

// Egy étel-variáció (Meal.id) elkészítési leírása
export type CookingInstruction = {
  id: string;        // = Meal.id
  mealId: string;    // = Meal.id (ugyanaz mint id, de ezt használjuk)
  title?: string;
  timeMinutes?: number;
  steps: string[];
};

// IDE FOGJUK FELVINNI KÉSŐBB A TÉNYLEGES LEÍRÁSOKAT
const COOKING_INSTRUCTIONS: CookingInstruction[] = [
  // MINTA – nyugodtan törölheted, ha zavar
  {
    // legyen pontosan ugyanaz, mint a Meal.id az 1. napi 1. reggelinél
    id: "1-R-overnight",
    mealId: "1-R-overnight",
    title: "Overnight oats (1) – edzésnap / pihenőnap",
    timeMinutes: 8, // aktív meló, a hűtés nincs benne
    steps: [
      "Este: Mérd ki a zabpelyhet egy zárható dobozba vagy befőttes üvegbe. Edzésnapon ~70 g-ot, pihenőnapon ~50 g-ot használj.",
      "Öntsd rá a folyadékot: edzésnapon kb. 200 ml (1,5%-os tej / mandulatej / víz + kevés tej), pihenőnapon kb. 170–180 ml. Szórd bele a fahéjat bőkezűen.",
      "Keverd össze alaposan, hogy minden zabpelyhet érjen a folyadék. Ha nagyon sűrűnek tűnik, adj még egy kevés folyadékot.",
      "Zárd le a dobozt/üveget, és tedd a hűtőbe egy éjszakára (legalább 6–8 órára), hogy a zab megszívja magát.",

      "Reggel: Vedd ki a hűtőből, keverd át, és nézd meg az állagát. Ha túl tömör, önts hozzá 1–2 korty tejet vagy vizet, és lazítsd rajta.",
      "Add hozzá a fehérjeport: edzésnapon kb. 30 g (1 adagolókanál), pihenőnapon 25–30 g. Keverd simára kanállal vagy kis habverővel.",
      "A banánt karikázd fel: edzésnapon 1 közepes (~100 g), pihenőnapon ½ közepes (~50 g). Szórd a tetejére, vagy keverd bele a zabos alapba.",
      "Ha szeretnél extra jó zsírokat: edzésnapon szórhatsz rá 1 teáskanál lenmagot vagy chiát (opcionális). Pihenőnapon ezt el is hagyhatod, vagy csak egy nagyon vékony szórást tegyél.",
      "Hidegen is eheted, de ha nem bírod a teljesen hideget, tedd 10–15 másodpercre mikróba, csak langyosítsd meg, ne főzd meg a zabot.",
    ],
  },
   // ⬇⬇⬇ ÚJ: 1. napi 2. reggeli – mikrós gyors verzió
  {
    id: "1-R-mikros",
    mealId: "1-R-mikros", // PONTOSAN ugyanaz, mint a Meal.id a meals.ts-ben
    title: "Mikrós gyors zabkása – edzésnap / pihenőnap",
    timeMinutes: 6,
    steps: [
      "Mérd ki a zabpelyhet egy mikrózható tálba. Edzésnapon kb. 65–70 g-ot (átlag ~67,5 g), pihenőnapon 50 g-ot használj.",
      "Öntsd rá a folyadékot: edzésnapon ~200 ml (tej / víz / vegyes), pihenőnapon ~170 ml. Keverd át, hogy a zab ne csak a tetején ázzon.",
      "Tedd be a mikróba 2–3 percre. 30–45 másodpercenként állítsd meg, keverd át, hogy ne csomósodjon és ne fusson ki.",
      "Ha lejárt az idő, vedd ki a tálat. Ilyenkor még kicsit hígabb lehet, de 1–2 perc alatt tovább sűrűsödik magától.",
      "Várj kb. 1–2 percet, hogy ne legyen túl forró (a fehérje nem szereti a forráshoz közeli hőt).",
      "Szórd bele a fehérjeport: edzésnapon 30 g, pihenőnapon 25–30 g. Alaposan keverd el, hogy ne maradjanak csomók.",
      "Ha túl sűrű lett, nyugodtan önts hozzá még 20–30 ml vizet vagy meleg tejet, és keverd krémesre.",
      "Eheted így magában is, vagy feldobhatod pár szelet banánnal, kevés fahéjjal, esetleg 1 teáskanál mogyoróvajjal (ha belefér a napi keretbe).",
      "Ez a verzió a „reggel rohanok, de nem akarok szemetet enni” opció – 5–6 perc alatt kész, edzésnapra energiadúsabb, pihenőnapra kicsit visszafogottabb adaggal.",
    ],
  },
  {
  id: "1-R-baked",
  mealId: "1-R-baked", // PONTOSAN ugyanaz, mint a Meal.id a meals.ts-ben
  title: "Sütőben sült zabkása (baked oats) – edzésnap / pihenőnap",
  timeMinutes: 25,
  steps: [
    "Melegítsd elő a sütőt 180 °C-ra (alsó-felső sütés).",
    "Mérd ki a zabpelyhet: edzésnapon 60 g-ot, pihenőnapon 50 g-ot használj.",
    "Egy keverőtálban törd pépesre a banánt: edzésnapon 1 közepes (~100 g), pihenőnapon ½ közepeset (~50–60 g).",
    "Add hozzá a tojást (mindkét nap 1 db M-es), és keverd össze a pépes banánnal, hogy egy enyhén habos, folyós alapot kapj.",
    "Öntsd hozzá a tejet: edzésnapon kb. 150 ml-t, pihenőnapon kb. 120 ml-t. Szórd bele a fehérjeport (edzésnap: 25–30 g, pihenőnap: 20–25 g), és keverd simára. Ha kicsit csomós marad a fehérje, nem gond, sütés közben szépen eloszlik.",
    "Szórd bele a kimért zabpelyhet, adj hozzá bőven fahéjat és egy csipet sót. Keverd össze, amíg sűrű, de még önthető masszát kapsz. Ha túl sűrű, adj hozzá még egy kevés tejet.",
    "Kenj ki vékonyan egy kisebb tűzálló tálat / szufléformát / sütőformát egy kevés olajjal vagy fújd le olajsprayjel (szilikonforma esetén ez akár elhagyható).",
    "Öntsd bele a masszát a formába, és egyengesd el a tetejét, hogy egyenletesen süljön.",
    "Tedd a sütőbe, és süsd kb. 20–25 percig: akkor jó, ha a széle enyhén megpirul, a közepe rugalmas tapintású, de már nem folyós.",
    "Vedd ki a sütőből, hagyd 5–10 percig hűlni. Utána kikanalazhatod, vagy szeletelheted, mint egy sütit. Edzésnapon mehet egyben reggelire, pihenőnapon akár két kisebb részre is oszthatod.",
    "Ezt nyugodtan megsütheted előző este is: reggel csak picit rámelegítesz (vagy hidegen eszed), és kész is a „fit süti” reggeli."
  ],
},
{
  id: "2-R-muffin",
  mealId: "2-R-muffin", // PONTOSAN ugyanaz, mint a Meal.id a meals.ts-ben
  title: "Tojás muffin – edzésnap / pihenőnap",
  timeMinutes: 25,
  steps: [
    "Melegítsd elő a sütőt 180 °C-ra (alsó-felső sütés). Készíts elő egy muffin formát (szilikon vagy fém).",
    "Mosd meg és vágd apró kockákra a zöldségeket: paprika, vöröshagyma/újhagyma, paradicsom (magokat kicsit kikanalazhatod), spenótlevelek csíkokra tépve. Kb. 70–80 g vegyes zöldséggel számolj.",
    "Egy keverőtálba üsd bele a tojásokat: edzésnapon 3 egész tojás + 1 tojásfehérje, pihenőnapon 2 egész tojás + 1 tojásfehérje. (Ha dobozos fehérjét használsz, kb. 30 g mehet plusz fehérjeként.)",
    "Sózd, borsozd a tojásos alapot, mehet rá 1 csipet fokhagymapor, oregánó/bazsalikom, esetleg egy kevés chili, ha bírod a csípőset. Villával vagy habverővel verd fel, hogy egynemű, enyhén habos massza legyen.",
    "Add a felaprított zöldségeket a tojásos keverékhez, és keverd át alaposan, hogy mindenhol legyen zöldség, ne csak az alján üljön meg.",
    "A muffin mélyedéseket fújd ki olajspray-vel, vagy ecsettel kend ki vékonyan kb. 1 teáskanál olívaolajjal összesen. Fontos, hogy legyen egy vékony zsírréteg, különben könnyen beleragadnak a muffinek.",
    "Kanalazd a tojásos-zöldséges masszát a muffin mélyedésekbe kb. 80–85%-ig, mert sütés közben feljön. Ebből az adagból általában 3–4 darab normál méretű muffin lesz.",
    "Tedd a formát a 180 °C-os sütőbe, és süsd kb. 15–20 percig. Akkor jó, ha szépen megemelkedett, a teteje enyhén megpirult, és ha egy fogpiszkálót beleszúrsz, nem marad rajta folyós tojás.",
    "Vedd ki a sütőből, hagyd 5 percig a formában hűlni, majd óvatosan szedd ki a muffineket. Forrón is eheted, de hidegen, hűtőből kivéve is tökéletes reggeli vagy snack.",
    "Hűtőben 2–3 napig simán eláll: reggel csak előkapod, 20–30 másodperc mikró, és kész is az edzésnapos (~300 kcal, ~24 g fehérje) vagy pihenőnapos (~225 kcal, ~17–18 g fehérje) tojás muffin adag."
  ],
},
{
  id: "2-R-wrap",
  mealId: "2-R-wrap", // LEGYEN PONTOSAN UGYANAZ, mint a Meal.id a meals.ts-ben
  title: "Tojás wrap – omlett tortillában (edzésnap / pihenőnap)",
  timeMinutes: 20,
  steps: [
    "Készítsd el az omlett alapot: üsd egy tálba a tojásokat. Edzésnapon 2 egész tojás + 2 tojásfehérje, pihenőnapon 2 egész tojás + 1 tojásfehérje megy bele.",
    "Sózd, borsozd a tojásos alapot, adhatsz hozzá fokhagymaport, oregánót, bazsalikomot, esetleg egy kevés chilit, ha bírod a csípőset. Villával vagy habverővel keverd egyneműre.",
    "Mosd meg és vágd apró kockákra a zöldségeket (kb. 60–70 g összesen): kaliforniai paprika, vöröshagyma/újhagyma, kis kockákra vágott paradicsom (a magos, vizes részt kicsit kikanalazhatod), spenót vagy rukkola csíkokra tépve.",
    "Add a felaprított zöldségeket a tojásos keverékhez, majd keverd át, hogy mindenhol legyen zöldség, ne csak az alján üljön meg.",
    "Melegíts fel egy tapadásmentes serpenyőt közepes lángon. Fújj bele olajspray-t, vagy tegyél bele nagyon kevés olajat (edzésnapon max. 1 teáskanál ≈ 5 g, pihenőnapon mehet még kevesebb), és kend szét a serpenyő alján.",
    "Öntsd a tojásos-zöldséges keveréket a serpenyőbe. Közepes lángon süsd, ne legyen túl nagy a hő, hogy ne égjen meg az alja, mielőtt a teteje megkötne.",
    "Sütés közben a szélét óvatosan megemelheted spatulával, és engedheted, hogy a még folyós rész lefolyjon alá. Akkor jó az omlett, ha a teteje már csak enyhén remegős, de nem folyik.",
    "Ha szeretnéd, a végén félbehajthatod, mint egy félhold alakú omlettet, vagy egyben is hagyhatod – úgy könnyebb a tortillába tenni.",
    "Közben készítsd elő a teljes kiőrlésű tortillát: edzésnapon 1 nagyobb (kb. 50–60 g), pihenőnapon 1 kisebb (35–40 g) vagy egy nagyobb tortilla fele. Száraz serpenyőben mindkét oldalát 5–10 másodpercig melegítsd, vagy mikróban 5–10 másodpercig, hogy puhább, hajlítható legyen.",
    "Tedd a megmelegített tortilla lapot egy tányérra, és helyezd rá az omlettet a középső sávba hosszában. Ha szeretnél, tehetsz rá extra friss zöldséget (salátalevelet, paprikát, jégsalátát).",
    "Hajtsd be a tortilla alsó részét picit felfelé, hogy alul ne folyjon ki a töltelék, majd tekerd fel szorosan, mint egy wrapet vagy gyrost.",
    "Ha útra viszed, csomagold alufóliába vagy sütőpapírba. Otthon eheted egészben, vagy ferdén félbevágva, hogy látszódjon a belseje.",
    "Edzésnapos verzió: 2 egész tojás + 2 fehérje, 1 nagy tortilla, kevés olaj – kb. 390–400 kcal és ~21 g fehérje. Pihenőnapos verzió: 2 egész tojás + 1 fehérje, kisebb vagy fél tortilla, minimális olaj – kb. 335 kcal és ~17–18 g fehérje."
  ],
},
{
  id: "2-R-mikro",
  mealId: "2-R-mikro", 
  // ⬆️ FONTOS: legyen pontosan ugyanaz, mint a mikrós omlett Meal.id-je a meals.ts-ben!
  title: "Mikrós omlett („bögreomlett”) – edzésnap / pihenőnap",
  timeMinutes: 8,
  steps: [
    "Válassz egy mikrózható bögrét vagy kisebb tálat. Fontos, hogy elég magas legyen, mert a tojás mikrózás közben felpuffad.",

    "Edzésnapos adaghoz üsd bele a bögrébe: 3 egész tojást + 1 tojásfehérjét. Pihenőnapos adaghoz: 2 egész tojást + 1 tojásfehérjét.",
    "Sózd, borsozd, és fűszerezd ízlés szerint: mehet bele fokhagymapor, szárított petrezselyem, oregánó, bazsalikom, akár egy kevés chili is.",
    "Adj hozzá kb. 1 teáskanál vizet vagy egy korty tejet, hogy lazább legyen az állaga, majd villával keverd egészen egyneműre.",

    "Apríts fel kb. 60–80 g zöldséget (kaliforniai paprika, vörös-/újhagyma, spenót/rukkola, kis kockákra vágott paradicsom). Nem baj, ha nincs minden, ami van otthon, az is elég.",
    "Keverd bele a zöldségeket a tojásos alapba, majd kicsit nyomkodd le őket, hogy ne álljon ki túl sok a felszínből (így szebben fog feljönni, nem „robbantja szét” a tetejét).",

    "Tedd a bögrét a mikróba, állítsd közepes–magas teljesítményre, és süsd kb. 1 percig.",
    "Vedd ki óvatosan (forró lehet az oldala), és villával keverd át a tetejét, hogy a még folyós részek lejjebb tudjanak folyni.",

    "Tedd vissza a mikróba, és süsd további 40–60 másodpercig. Ha a teteje még nagyon folyós, adj hozzá újabb 10–20 mp-es etapokat.",
    "Akkor jó, ha a teteje megszilárdult, az egész omlett kicsit „pufi”, de nem száraz, nem gumis.",

    "Tálalás: eheted közvetlenül a bögréből kanállal/villával, vagy egy tányért a bögrére téve óvatosan kifordíthatod rá az omlettet.",
    "Edzésnapos verzióhoz nyugodtan egyél mellé 1 szelet teljes kiőrlésű kenyeret (~30–35 g). Pihenőnapon mehet kenyér nélkül, vagy csak max. ½–1 kisebb szelet, ha nagyon éhes vagy.",

    "Kalória / fehérje összefoglaló: Edzésnapos bögreomlett (3 egész tojás + 1 fehérje, 60–80 g zöldség) kb. 250–255 kcal és ~24 g fehérje – 1 szelet teljes kiőrlésű kenyérrel együtt kb. 320–325 kcal és ~26–27 g fehérje. Pihenőnapos adag (2 egész tojás + 1 fehérje, 60–80 g zöldség) kb. 180–185 kcal és ~17–18 g fehérje."
  ],
},
{
  id: "3-R-klasszikus",
  mealId: "3-R-klasszikus", 
  // ⬆️ EZT ÁLLÍTSD BE PONTOSAN A meals.ts-beli Meal.id-RE!
  title: "Cottage cheese – klasszikus paradicsommal, uborkával",
  timeMinutes: 8,
  steps: [
    "Mosd meg a paradicsomot és az uborkát. A paradicsomot vágd kockákra vagy nagyobb falatokra, az uborkát félkarikákra vagy kockákra – ahogy jobban szereted.",
    "Edzésnapos adaghoz mérj ki kb. 220 g zsírszegény cottage cheese-t egy közepes tálba. Pihenőnapos adaghoz kb. 200 g-ot használj.",
    "Sózd, borsozd ízlés szerint a cottage-ot. Ha szereted, szórj rá apróra vágott snidlinget vagy újhagymát, és keverd át, hogy kicsit krémesebb, kenhetőbb állaga legyen. Nem kell teljesen pépesre keverni, maradhat darabos.",
    "Edzésnapon készíts mellé 3 szelet puffasztott rizst vagy abonettet. Pihenőnapon elég 2 szelet – így a fehérje szinte ugyanannyi, de a szénhidrát kicsit kevesebb lesz.",
    "Tálas verzióhoz: a tányér egyik oldalára halmozd a cottage cheese-t, a másik oldalra tedd a paradicsomot és az uborkát külön kis kupacokban.",
    "Ha inkább mindent egyben ennél: a cottage-ot és az összevágott paradicsom–uborka kombót keverd össze egy nagyobb tálban, hogy saláta jellegű, kanalazható egytálas legyen.",
    "A puffasztott rizsszeleteket tedd a tányér szélére. Evés közben törd darabokra, és mártogasd bele a cottage + zöldség keverékbe, vagy kend meg őket cottage-tal, és tegyél rá pár kocka paradicsomot / uborkát – mini, ropogós „szendvicsként” is eheted.",
    "Ha jobban szereted a nagyon ropogós textúrát, a puffasztott rizst törd kisebb darabokra, és a végén szórd a cottage + zöldség keverék tetejére, mint egy crunchy topping.",
    "Edzésnapos adag összefoglaló (kb. 220 g cottage, ~100–120 g paradicsom, ~80–100 g uborka, 3 szelet puffasztott rizs): kb. 290 kcal és ~30 g fehérje – könnyű, de fehérjében erős reggeli egy kis szénhidráttal a délelőttre.",
    "Pihenőnapos adag összefoglaló (kb. 200 g cottage, ~100 g paradicsom, ~100–120 g uborka, 2 szelet puffasztott rizs): kb. 250 kcal és ~27 g fehérje – hasonló fehérjeszinttel, egy kicsit visszafogottabb szénhidráttal."
  ],
},
{
  id: "3-R-edes",
  mealId: "3-R-edes", 
  // ⬆️ EZT ÍRD PONTOSAN UGYANÚGY, MINT A meals.ts-BEN A 3. NAPI 2. REGGELI Meal.id-T!

  title: "Édes cottage cheese bogyós gyümölcsökkel",
  timeMinutes: 8,
  steps: [
    "Először készítsd elő a gyümölcsöt. Ha frisset használsz (eper, áfonya, málna), mosd meg alaposan, csöpögtesd le, a nagyobb szemű epret vágd kisebb darabokra. Ha fagyasztottat használsz, döntsd el: krémesebb állaghoz hagyd kicsit felengedni, jeges-fagyis fílinghez mehet félig fagyosan is.",
    "Edzésnapos adaghoz mérj ki kb. 200–220 g zsírszegény cottage cheese-t egy közepes tálba. Pihenőnapos adaghoz 180–200 g elég – így a fehérje marad magas, de a kalória picit alacsonyabb lesz.",
    "Szórj a cottage tetejére bőven fahéjat. Adj hozzá édesítést: vagy nullkalóriás édesítőt használsz (edzés- és pihenőnapra is simán mehet), vagy ha kicsit „treat” jellegűre vágysz, edzésnapon tehetsz bele 1–2 teáskanál mézet (kb. 5–10 g). Pihenőnapra inkább maradj a max. 1 tk méznél, vagy csak édesítőnél.",
    "Keverd át alaposan a cottage cheese-t, hogy a fahéj és az édesítő / méz mindenhol egyenletesen eloszoljon. A cél, hogy enyhén krémes, kanalas állaga legyen, de maradhatnak benne kis túrógöbök – nem baj, ha nem teljesen sima.",
    "Edzésnapon mérj ki kb. 80–100 g bogyós gyümölcsöt (vegyesen is mehet: eper + áfonya + málna), pihenőnapon kb. 60–80 g is bőven elég. Add hozzá a gyümölcsöt a fahéjas-édes cottage-hoz, és finoman keverd át: ha friss, maradhatnak nagyobb darabok, ha fagyasztott, kicsit „beszínezheti” a cottage-ot, ami tök jól néz ki.",
    "Készíts a tányér szélére puffasztott szeleteket. Edzésnapon használj 2–3 szelet puffasztott rizst vagy kukoricaszeletet (ha tudod, hogy kemény lesz az edzés, nyugodtan legyen 3). Pihenőnapon 1–2 szelet elég – ha diétásabb nap, inkább csak 1 szeletet tegyél mellé.",
    "Tálalásnál eheted úgy, hogy a tálból kanalazod a gyümölcsös cottage-ot, és mellé ropogtatod a puffasztott szeleteket, vagy úgy is, hogy a szeletek tetejére kensz a cottage-ból, ráteszel pár szem gyümölcsöt, és így „desszert-szendvicsként” eszed.",
    "Edzésnapos adag összefoglaló (kb. 210 g cottage, ~90 g bogyós gyümölcs, 3 szelet puffasztott rizs, édesítővel): kb. 300 kcal és ~28 g fehérje. Ha 1–2 tk mézet is teszel bele, kb. 330 kcal és ugyanúgy ~28 g fehérje – jó választás, ha kicsit édesebb reggelire vágysz edzés előtt vagy után.",
    "Pihenőnapos adag összefoglaló (kb. 190 g cottage, ~70 g bogyós gyümölcs, 2 szelet puffasztott rizs, édesítővel): kb. 245 kcal és ~25 g fehérje. Ha teszel bele 1 tk mézet, kb. 260 kcal és ~25 g fehérje – pont jó egy „light”, mégis desszert-jellegű pihenőnapos reggelinek."
  ],
},
{
  id: "3-R-bruschetta",
  mealId: "3-R-bruschetta",
  // ⬆️ EZT ÍRD PONTOSAN UGYANÚGY, MINT A meals.ts-BEN A 3. NAPI 3. REGGELI Meal.id-T!

  title: "Cottage bruschetta puffasztott szeleteken",
  timeMinutes: 8,
  steps: [
    "Először készítsd elő a paradicsomot. Mosd meg alaposan, majd vágd fel: ha klasszik bruschetta kinézetet szeretnél, vágd vékony szeletekre; ha jobban szereted falatnyi, szórt verzióban, kockázd fel kisebb darabokra.",
    "Edzésnapos adaghoz mérj ki kb. 200–220 g zsírszegény cottage cheese-t egy tálba. Pihenőnapon elég kb. 180–200 g – így a fehérje mennyisége közel marad, de a kalória egy kicsit lejebb megy.",
    "Sózd, borsozd finoman a cottage cheese-t. Keverj bele egy csipet szárított bazsalikomot vagy oregánót (ha van friss bazsalikomod, azt majd inkább a tetejére tépkedd). Keverd át, hogy a fűszerek egyenletesen eloszoljanak, de maradhat kicsit darabos a cottage – nem baj, ha nem teljesen krémes.",
    "Készítsd elő a puffasztott rizsszeleteket vagy abonettet. Edzésnapon használj 3–4 szeletet (ha ez az egyetlen reggelid, nyugodtan lehet 4 kisebb szelet). Pihenőnapon 2–3 szelet bőven elég – ha jobban vágod a kalóriát, inkább csak 2 szeletet tegyél ki.",
    "Fogj egy szeletet, és kend meg bőségesen a fűszeres cottage cheese-ből. Ne sajnáld rá, ez adja a fehérje nagy részét: edzésnapon kb. 210 g cottage-ból dolgozol, pihenőnapon kb. 190 g-ból.",
    "A megkent szeletek tetejére rakj paradicsomot: vagy szépen körberakod a paradicsomszeletekkel, vagy rászórsz egy jó adag paradicsomkockát. A tetejére tépkedj friss bazsalikomlevelet, vagy szórj még egy leheletnyi szárított bazsalikomot / oregánót.",
    "Extra ízfokozásként cseppents 1–2 csepp olívaolajat a tetejére (nem kell sok, csak íznek), majd mehet rá egy kevés frissen őrölt bors. Ettől lesz igazán „olaszos” a bruschetta feeling, miközben végig marad fit reggeli.",
    "Tálalásnál sorakoztasd a kész cottage bruschettákat egy tányérra. Edzésnapon 3–4 darabot készíts, pihenőnapon inkább 2–3-at. Kézből eheted, mint egy olasz előételt – csak most reggelire, cottage-ból jövő fehérjével és könnyű szénhidráttal.",
    "Edzésnapos adag összefoglaló (≈210 g cottage, ~110 g paradicsom, 4 szelet puffasztott rizs): kb. 300 kcal és ~29 g fehérje – jó választás, ha kell egy ropogós, mégis könnyű, fehérjés reggeli edzés előtt vagy után.",
    "Pihenőnapos adag összefoglaló (≈190 g cottage, ~100 g paradicsom, 2 szelet puffasztott rizs): kb. 230 kcal és ~25 g fehérje – könnyebb, kalóriaszegényebb verzió, ha pihenőnapon is szeretnél tartalmas, de „light” reggelit."
  ],
},
{
  id: "4-R-zabos",
  mealId: "4-R-zabos",
  // ⬆️ EZT ÍRD PONTOSAN UGYANÚGY, MINT A meals.ts-BEN A 4. NAPI 1. REGGELI Meal.id-T!

  title: "4-R – Zabos boost (fehérjés zabos alma-mandula shake)",
  timeMinutes: 5,
  steps: [
    "Öntsd a mandulatejet a turmixgépbe. Edzésnapos adaghoz kb. 250 ml cukormentes mandulatejet használj, pihenőnapon kb. 220 ml-t, hogy picit lejebb menjen a kalória, de az állag még mindig kellemesen krémes maradjon.",
    "Szórd bele a fehérjeport: mind edzésnapon, mind pihenőnapon kb. 30 g (1 adagolókanál) whey-t használj. Röviden elő is turmixolhatod a tejjel, hogy ne csomósodjon, így szebb, egyenletes alapot kapsz.",
    "Készítsd elő az almát. Mosd meg, vágd ki a magházát, a héját nem muszáj leszedni (jó kis rost + vitamin). Edzésnapon egy közepes (~140 g) almát kockázz fel, pihenőnapon kb. 100 g-ot (kb. 2/3 alma) tegyél a turmixgépbe.",
    "Mérd ki a zabpelyhet, és öntsd a turmixba. Edzésnapon használj kb. 30 g zabpelyhet, pihenőnapon elég kb. 20 g – így edzésnapra több szénhidrátot kapsz az energiához, pihenőnapra pedig kicsit visszafogottabb lesz a CH, miközben a fehérje ugyanott marad.",
    "Add hozzá a mandulát. Edzésnapos verzióhoz kb. 10 g mandula (kb. 7–8 szem) mehet, pihenőnapon kb. 8 g elég. Mehet bele egészben vagy durvára törve – ha extra krémes shaket akarsz, törd kicsit össze előtte.",
    "Most jöhet a turmixolás: indítsd el a turmixgépet, és kb. 30–40 másodpercig turmixold, amíg az alma pépes lesz, a zab nem látszik darabosan, és egy sűrű, de iható állagú shake-et kapsz. Ha túl sűrűnek érzed, adj hozzá egy kevés plusz mandulatejet vagy vizet, és még pár másodpercig turmixold át.",
    "Ha szereted, turbózhatod még egy kis fahéjjal vagy egy csipet sóval (nagyon jól kihozza az ízeket, főleg edzésnapos verziónál). Ezeket a fűszereket akár a turmixolás elején is hozzáadhatod a gépbe.",
    "Öntsd a kész Zabos boostot shakerbe vagy nagyobb pohárba. Ez nem csak egy kis „szomjoltó” shake: edzésnapon kompletten kivált egy reggelit (fehérje + zab + mandula + gyümölcs), pihenőnapon pedig egy kicsit könnyebb, de még mindig laktató, fehérjés reggeli.",
    "Edzésnapos adag összefoglaló (250 ml mandulatej, 30 g whey, 140 g alma, 30 g zab, 10 g mandula): kb. 400 kcal és kb. 30–32 g fehérje – erősebb napokra, súlyzós / crossfit edzés elé vagy után ideális.",
    "Pihenőnapos adag összefoglaló (220 ml mandulatej, 30 g whey, 100 g alma, 20 g zab, 8 g mandula): kb. 325 kcal és kb. 28–29 g fehérje – kicsit visszafogottabb szénhidrát, de végig magas fehérje, tökéletes light-osabb reggelinek."
  ],
},
{
  id: "4-R-zold-smoothie",
  mealId: "4-R-zold-smoothie", 
  // ⬆️ EZT ÍRD PONTOSAN UGYANÚGY, MINT A meals.ts-BEN A 4. NAPI 2. REGGELI Meal.id-T!

  title: "4-R – Zöld smoothie verzió (mandulatej + fehérje + alma + zöld levelek + mandula)",
  timeMinutes: 5,
  steps: [
    "Öntsd a mandulatejet a turmixgépbe. Edzésnapos adaghoz kb. 250 ml cukormentes mandulatejet használj, pihenőnapon kb. 220 ml-t – így edzésnapra kicsit több folyadék + CH, pihenőnapra picit visszafogottabb.",
    "Szórd hozzá a fehérjeport: edzés- és pihenőnapon is kb. 30 g whey (1 adagolókanál). Ha akarod, elő is turmixolhatod 5–10 másodpercig a mandulatejjel, hogy teljesen csomómentes alapod legyen.",
    "Készítsd elő a zöld leveleket. Spenót vagy fodros kel leveleket alaposan mosd meg, csepegtesd le. Ha nagyobb levelek, tépd őket kisebb darabokra. Edzésnapra és pihenőnapra is mehet kb. 1 jó maréknyi (~30–35 g) a turmixgépbe – rost, mikrotápanyag, szín mind innen jön.",
    "Mosd meg az almát, vágd ki a magházát, a héjat nem kell lehúzni (jó rost). Edzésnapon egy közepes almát használj (~140 g), pihenőnapon kb. 100 g-ot (kb. 2/3 alma). Vágd kockákra, és dobd a turmixba a zöld levelek mellé.",
    "Először turmixold össze a mandulatej + fehérje + zöld levelek + alma kombót kb. 20–30 másodpercig. A cél, hogy a spenót/kel teljesen szétmenjen, ne ússzanak benne nagy zöld levéldarabok, az alma pedig pépesedjen.",
    "Ellenőrizd az állagot: ha túl sűrű, adj hozzá egy kevés extra mandulatejet vagy vizet, és még pár másodpercig turmixold. Ha túl hígnak érzed, legközelebb indulhatsz picit kevesebb folyadékkal vagy több zölddel/zabbal (ha később bővíteni akarod).",
    "Mérd ki a mandulát. Edzésnapos verzióhoz kb. 15 g mandula mehet (kb. 10–12 szem), pihenőnapon kb. 10 g. Két opciód van: ha ropogós toppingt szeretnél, csak a végén szórd a tetejére durvára törve; ha krémesebb, diósabb ízt akarsz, dobd be a turmixgépbe, és turmixold a smoothie-val együtt.",
    "Ha a mandulát is bele akarod turmixolni, adj hozzá még 10–15 másodperc turmixolást, amíg teljesen el nem tűnnek a darabok, és krémes, enyhén diós ízű italt kapsz.",
    "Öntsd a kész zöld smoothie-t pohárba vagy shakerbe. Ha a mandulát nem turmixoltad bele, most szórd a tetejére: edzésnapon a teljes 15 g-ot, pihenőnapon kb. 10 g-ot. Így kapsz egy vitaminban és rostban gazdag, mégis fehérjebomba reggelit.",
    "Edzésnapos összefoglaló (250 ml mandulatej, 30 g whey, ~140 g alma, 1 marék spenót/kel, 15 g mandula): kb. 320 kcal és kb. 29 g fehérje – könnyű, de mégis tartalmas reggeli keményebb edzésnapokra.",
    "Pihenőnapos összefoglaló (220 ml mandulatej, 30 g whey, ~100 g alma, 1 marék spenót/kel, 10 g mandula): kb. 265 kcal és kb. 27 g fehérje – picit visszavett kalória és zsír, de végig magas fehérjebevitel, tökéletes light-osabb, zöld energialöketnek."
  ],
},
{
  id: "4-R-muzlis-tal",
  mealId: "4-R-muzlis-tal",
  // ⬆️ EZT ÍRD PONTOSAN UGYANÚGY, MINT A meals.ts-BEN A 4. NAPI 3. REGGELI Meal.id-T!

  title: "4-R – Müzlis tál (sűrű shake tálban, tetején alma + zab + mandula)",
  timeMinutes: 7,
  steps: [
    "Öntsd a mandulatejet a turmixgépbe. Edzésnapos verziónál kb. 220 ml-t használj, pihenőnapon kb. 200 ml-t – így edzésnapra picit több mennyiség, de továbbra is elég sűrű marad a tál.",
    "Szórd a mandulatejhez a fehérjeport: edzés- és pihenőnapon is kb. 30 g whey (1 adagolókanál). Keverd el röviden (akár 5–10 mp turmix), hogy csomómentes, krémes alapot kapj.",
    "Mosd meg az almát, vágd ki a magházát, a héjat nem muszáj lehúzni (jó rost). Edzésnapos adaghoz összesen kb. 140 g almával számolj, pihenőnapon kb. 100 g-mal. Az alma nagyjából felét–kétharmadát vágd kisebb kockákra, és dobd a turmixgépbe – ez megy az alapba, a maradék megy majd toppingnak a tetejére.",
    "Turmixold az alapot kb. 30 másodpercig, amíg sűrű, krémes, joghurt-szerű állagot nem kapsz. A cél, hogy iható helyett inkább kanalazható legyen – ezért kevesebb a folyadék, mint a sima shake-nél.",
    "Közben készítsd elő a toppingeket. A félretett almát vágd kis, falatnyi kockákra. Mérd ki a zabpelyhet: edzésnapra kb. 20 g-ot, pihenőnapra kb. 15 g-ot. Mérd ki a mandulát: edzésnapon kb. 15 g (durván 10–12 szem), pihenőnapon kb. 10 g. A mandulát hagyhatod egészben, de jobb, ha durvára vágod vagy kicsit összetöröd, így ropogósabb lesz a topping.",
    "Öntsd a kész, sűrű fehérjés–almás alapot egy mély tálba (mintha joghurtot ennél). Ha túl folyósnak látszik, várj 1–2 percet, kicsit sűrűsödni fog, vagy legközelebb indulj kevesebb mandulatejjel.",
    "Szórd a tetejére a felkockázott almát: edzésnapon mehet a maradék nagyobb alma-mennyiség, pihenőnapon a kisebb. Ezután jöhet a zabpehely topping: edzésnapon a teljes 20 g, pihenőnapon kb. 15 g. Végül szórd rá a mandulát: edzésnapon kb. 15 g-ot, pihenőnapon kb. 10 g-ot.",
    "Ellenőrizd az állagot: ha úgy érzed, hogy már-már „vágható”, legközelebb egy picivel több mandulatejjel indíthatsz. Ha túl híg és leveses, akkor kevesebb folyadékkal vagy kicsivel több zab-toppinggal tudod sűríteni.",
    "Kanalazd, mint egy müzlit vagy smoothie bowl-t: alul krémes, fehérjés–almás alap, felül ropogós zab + mandula + friss alma – jó rágás, jó telítettség, reggelre pont ideális.",
    "Edzésnapos összefoglaló (220 ml mandulatej, 30 g whey, ~140 g alma, 20 g zab, 15 g mandula): kb. 385 kcal és kb. 30–31 g fehérje – laktatóbb, energiadúsabb reggeli, súlyzós / crossfit napokra.",
    "Pihenőnapos összefoglaló (200 ml mandulatej, 30 g whey, ~100 g alma, 15 g zab, 10 g mandula): kb. 315 kcal és kb. 28–29 g fehérje – visszafogottabb kalória, de végig magas fehérjebevitel, light-osabb napokra."
  ],
},
{
  id: "5-R-gyors-alap",
  mealId: "5-R-gyors-alap",
  // ⬆️ EZT ÍRD PONTOSAN UGYANÚGY, MINT A meals.ts-BEN AZ 5. NAPI 1. REGGELI Meal.id-T!

  title: "5-R – Gyors alapverzió (görög joghurt + zab + bogyós + méz)",
  timeMinutes: 5,
  steps: [
    "Kanalazd a görög joghurtot egy közepes tálba. Edzésnapon kb. 200 g-bal számolj, pihenőnapon kb. 180 g-bal – így edzésnapra picit nagyobb, energiadúsabb adagod lesz.",
    "Ha a joghurt túl sűrű (nagyon tömör, alig lehet keverni), adhatsz hozzá 1–2 evőkanál vizet vagy egy kevés tejet/mandulatejet, hogy krémesebb, pudingosabb állagot kapj. Keverd át, hogy egységes legyen az alap.",
    "Mérd ki a zabpelyhet: edzésnapon kb. 30 g-ot, pihenőnapon kb. 20 g-ot. Szórd a joghurt tetejére. Ha ropogósabban szereted, hagyd a tetején; ha azt akarod, hogy picit megszívja magát, keverd bele a joghurtba. (Előre dobozolásnál érdemes inkább csak evés előtt rátenni, ha teljesen ropogósan szeretnéd.)",
    "Készítsd elő a bogyós gyümölcsöt. Ha friss: mosd meg, csöpögtesd le, a nagyobb szemű epret vágd félbe vagy negyedekre. Ha fagyasztott: hagyd 5–10 percig állni, hogy kicsit kiengedjen, vagy mehet fagyosan is, akkor „fagyis” jellegű lesz a tál. Edzésnapon kb. 70 g, pihenőnapon kb. 60 g bogyós gyümölccsel számolj.",
    "Szórd a bogyós gyümölcsöt a joghurtos–zabos alap tetejére. Eloszlathatod egyenletesen, vagy csinálhatsz egy csíkot/kupacot a tál egyik oldalán – ahogy jobban esik.",
    "Édesítéshez csorgass a tetejére vékony csíkban mézet. Edzésnapon kb. 10 g (kb. 2 teáskanál) a cél, de ha szigorúbb napod van, akár 5 g-bal (1 teáskanál) is számolhatsz. Pihenőnapon inkább maradj kb. 5 g-nál (~1 teáskanál), vagy használj nullkalóriás édesítőt, ha még jobban visszafognád a bevitt energiát.",
    "Ha édesítőt használsz méz helyett, azt bele is keverheted a joghurtba: így az egész alap enyhén édes lesz, a bogyós gyümölcs meg ráadja a plusz ízt a tetején.",
    "Finomhangolás: ha úgy érzed, túl „tömény” az egész (főleg edzésnapos zab + joghurt kombónál), akkor legközelebb nyugodtan adj hozzá egy kevés extra folyadékot, vagy csökkentsd enyhén a zabot. Ha túl hígnak tűnik, akkor csökkents egy picit a folyadékon, vagy tedd több időre hűtőbe, hogy a zab jobban megszívja magát.",
    "Tálalhatod azonnal – ez kb. 2–3 perces reggeli. Ha viszed magaddal: tedd zárható dobozba. A zabot és gyümölcsöt akár külön kis dobozban is viheted, és csak evés előtt szórod a joghurtra, hogy ropogós maradjon.",
    "Edzésnapos összefoglaló (200 g joghurt, 30 g zab, ~70 g bogyós, ~10 g méz): kb. 320 kcal és kb. 22 g fehérje – jó energiadúsabb, mégis clean reggeli edzéses napokra.",
    "Pihenőnapos összefoglaló (180 g joghurt, 20 g zab, ~60 g bogyós, ~5 g méz): kb. 250 kcal és kb. 19 g fehérje – kevesebb zab + kevesebb méz, így visszafogottabb kalória, de még mindig elég laktató és fehérjedús."
  ],
},
{
  id: "5-R-high-protein",
  mealId: "5-R-high-protein",
  // ⬆️ EZT ÍRD PONTOSAN UGYANÚGY, MINT A meals.ts-BEN AZ 5. NAPI 2. REGGELI Meal.id-T!

  title: "5-R – Magas fehérjetartalmú joghurt + whey + zab + bogyós + méz",
  timeMinutes: 5,
  steps: [
    "Tedd a görög joghurtot egy keverőtálba. Edzésnapon kb. 180 g-ot használj, pihenőnapon kb. 160 g-ot – így edzésnapra picit nagyobb, energiadúsabb alapod lesz.",
    "Szórd a joghurtra a vaníliás fehérjeport: edzés- és pihenőnapon is kb. 25–30 g-ot (1 adagolókanál). Először sűrű, ragacsos massza lesz, ezért kezd el alaposan elkeverni. Ha túl tömény, adj hozzá 1–2 evőkanál vizet vagy egy kevés tejet/mandulatejet, és keverd tovább, amíg szép krémes, pudingszerű állagot kapsz.",
    "Mérd ki a zabpelyhet: edzésnapon kb. 25 g, pihenőnapon kb. 20 g. Szórd a fehérjés joghurt tetejére. Ha ropogós zabos textúrát akarsz, hagyd a tetején. Ha azt szeretnéd, hogy a zab kicsit megszívja magát és „fehérjés-zabos krém” legyen, keverd bele részben vagy teljesen a joghurtba.",
    "Készítsd elő a bogyós gyümölcsöt. Edzésnapon kb. 60 g, pihenőnapon kb. 50 g-ot használj. Ha friss bogyós (áfonya, málna, eper): mosd meg, csöpögtesd le, a nagyobb epret vágd félbe vagy negyedeld. Ha fagyasztott: hagyd 5–10 percig állni, hogy picit kiengedjen, vagy félig fagyosan is mehet a tetejére, ha „jégkrémesebb” élményt szeretnél.",
    "Szórd a bogyós gyümölcsöt a zab tetejére. Eloszlathatod egyenletesen az egész tálon, vagy csinálhatsz egy „gyümölcs kupacot” az egyik oldalra, ha esztétikus, insta-kompatibilis tálat akarsz. Az alsó réteg így egy krémes, fehérjés joghurt, rajta zab, a tetején pedig gyümölcs.",
    "Édesítéshez edzés- és pihenőnapon is kb. 5 g (1 teáskanál) mézet csorgass vékony csíkban a tetejére. Ha nagyon diétásan fogod, a mézet elhagyhatod, és maradhatsz csak a whey édes ízénél, vagy használhatsz nullkalóriás édesítőt (ezt inkább pihenőnapon érdemes preferálni).",
    "Ha szereted, a mézet/édesítőt bele is keverheted a fehérjés joghurtba, hogy az egész alap enyhén édes legyen, és a gyümölcsök ráadják a friss, savanykás–édes pluszt felül. Ha kicsit állni hagyod 5–10 percig, a zab kicsit megszívja magát, és még krémesebb, desszert-szerűbb lesz az egész.",
    "Tálalás: kanalazd, mint egy pudingos–müzlis tálat. Az élmény: alul krémes, fehérjés joghurt, benne/rajta a zab, felül a gyümölcsök + méz. Ez az a verzió, amitől nem csak a lelked, de a tested is örül – főleg edzésnapon. 😄",
    "Edzésnapos makró összegzés (180 g joghurt, 25 g zab, ~60 g bogyós, 5 g méz, ~1 adag whey ≈ 21 g fehérje): kb. 365 kcal és kb. 40 g fehérje – magas fehérje, normális ch, nagyon jó alap súlyzós/crossfit edzés elé.",
    "Pihenőnapos makró összegzés (160 g joghurt, 20 g zab, ~50 g bogyós, 5 g méz, ugyanennyi whey): kb. 325 kcal és kb. 38 g fehérje – a fehérje továbbra is magas, a zab és az összkalória picit visszafogva pihenőnapra."
  ],
},
{
  id: "5-R-kremes-desszert",
  mealId: "5-R-kremes-desszert",
  // ⬆️ EZT ÍRD PONTOSAN UGYANÚGY, MINT A meals.ts-BEN AZ 5. NAPI 3. REGGELI Meal.id-T!

  title: "5-R – Krémes „desszert” joghurt + zab + bogyós + méz, rétegezve",
  timeMinutes: 7,
  steps: [
    "Edzésnapon kb. 180 g, pihenőnapon kb. 160 g görög joghurtot (2%) tegyél egy keverőtálba. Adj hozzá 20–30 ml vizet vagy tejet (pihenőnapon inkább a 20 ml-hez közelíts), és keverd addig, amíg sima, fényes, pudingos állagú, sűrű krémet kapsz. Ne legyen folyós, inkább krémes desszertszerű.",
    "Készíts elő egy átlátszó poharat vagy kisebb befőttes üveget – ettől lesz „desszert-skin”, szépen látszani fognak a rétegek.",
    "Mérd ki a zabpelyhet: edzésnapon kb. 25 g-ot, pihenőnapon kb. 20 g-ot használj. Ez lesz a ropogós–laktató réteg a joghurt között.",
    "Előkészíted a bogyós gyümölcsöt (áfonya/málna/eper): edzésnapon összesen kb. 70 g-ot, pihenőnapon kb. 60 g-ot. Ennek kb. a felét belekeverheted majd a joghurtba, a másik felét pedig rétegnek/tetejére hagyod. Friss gyümölcsnél mosd meg és csöpögtesd le, nagyobb epret vágj kisebb darabokra. Fagyasztott gyümölcsnél hagyd kicsit kiengedni, vagy használd félig fagyosan, ha „fagyis” fílinget szeretnél.",
    "Alsó réteg: kanalazz egy jó adag krémes joghurtot a pohár aljára (kb. a mennyiség 1/3–1/2 része). Simítsd el, hogy szép egyenes réteget kapj.",
    "Szórj rá egy vékony réteg zabpelyhet (a kimért zab kb. 1/3–1/2 része), majd erre egy réteg bogyós gyümölcsöt. Nem kell sok egyszerre, inkább több vékony réteg, hogy szépen váltakozzon a pohárban: joghurt → zab → gyümölcs.",
    "Ismételd a rétegezést: újra joghurt, rá zab, rá gyümölcs, amíg elfogynak az alapanyagok. A legfelső rétegnek maradjon egy kis joghurt és gyümölcs, hogy a pohár teteje is desszertes kinézetű legyen. Itt még extra 1–2 szem bogyó mehet díszítésnek.",
    "A tetejére csorgass mézet: edzésnapon kb. 10 g (2 teáskanál), pihenőnapon kb. 5 g (1 teáskanál). Vékony csíkban csorgasd rá a legfelső joghurt–gyümölcs rétegre. Ha szereted, egy csipet fahéjjal is megszórhatod, ettől még „desszertesebb” lesz az íze.",
    "Ha van időd, tedd be a hűtőbe 10–20 percre: a zab egy picit megszívja magát, a rétegek ízei jobban összeérnek, és az egész még inkább olyan lesz, mint egy fit desszertkelyh. Ha sietsz, azonnal is eheted – így ropogósabb marad a zab.",
    "Tálalás: kanalazd úgy, mint egy édességet. Minden kanálban lesz joghurt + zab + bogyós + egy kis méz. Edzésnapos adag (180 g joghurt, 25 g zab, 70 g bogyós, 10 g méz): kb. 290 kcal és kb. 20 g fehérje. Pihenőnapos adag (160 g joghurt, 20 g zab, 60 g bogyós, 5 g méz): kb. 235 kcal és kb. 17 g fehérje – fejben desszert, makróban fit mindkét napon."
  ],
},
{
  id: "6-R-alap",
  mealId: "6-R-alap",
  // ⬆️ EZT ÍRD PONTOSAN UGYANÚGY, MINT A meals.ts-BEN AZ 6. NAPI 1. REGGELI Meal.id-T!

  title: "6-R – Túrókrém – alap verzió (túró + whey + fahéj + TK pirítós)",
  timeMinutes: 6,
  steps: [
    "Edzésnapon kb. 180 g zsírszegény túrót használj, pihenőnapon kb. 160–170 g-ot. Tedd a túrót egy közepes tálba. Ha nagyon száraz, morzsálódik, adj hozzá 1–2 evőkanál vizet vagy 1 evőkanál natúr joghurtot, hogy könnyebben krémesíthető legyen.",
    "Szórd a túróra a fehérjeport: edzésnapon kb. 20 g-ot, pihenőnapon kb. 15 g-ot (vaníliás vagy natúr whey). Kanállal vagy villával kezdd el keverni. Eleinte sűrű, csomós lesz – ez normális. Ha túl tömör, mindig csak pár csepp vizet/joghurtot adj hozzá, és dolgozd el, amíg krémes, pudingos állagú, mégis sűrű túrókrémet kapsz.",
    "Szórj a masszára bőven fahéjat (mind edzésnapon, mind pihenőnapon). Keverd át alaposan, hogy a fahéj mindenhol eloszoljon. Ha a fehérje nem elég édes, egy kevés édesítőt is tehetsz bele – ez opcionális, nem kötelező.",
    "Közben készítsd elő a szénhidrát részt. Edzésnapon 1 normál szelet teljes kiőrlésű kenyeret használj (~35–40 g), pihenőnapon egy kicsit kisebbet (~30–35 g), vagy helyette 2 abonett szeletet. Ezek adják a kis, de hasznos CH-t a túró mellé.",
    "A kenyérszeletet tedd pirítóba, vagy száraz serpenyőben pirítsd mindkét oldalát kb. 1–1 percig, amíg kissé ropogós, aranybarna nem lesz. Abonettet nem kell pirítani, az alapból ropogós.",
    "Ha a túrókrém közben túl sűrű lett, adj hozzá még egy kevés vizet vagy joghurtot, és keverd simára. A cél: sűrű, krémes, kanállal kenhető állag – se száraz morzsa, se folyós lé.",
    "Tálaláskor kanalazd a fahéjas-fehérjés túrókrémet egy tálba. Mellé tedd a pirítóst vagy abonettet. Eheted úgy, hogy a kenyérre vastagon rákened a túrókrémet, vagy külön kanalazod a túrót, és mellé harapod a kenyeret – ahogy jobban esik.",
    "Edzésnapos adag (kb. 180 g túró + 20 g whey + ~38 g teljes kiőrlésű kenyér) makrói: nagyjából 300 kcal és kb. 39 g fehérje – magas fehérje, egy kis hasznos CH, jó alap edzés elé.",
    "Pihenőnapos adag (kb. 165 g túró + 15 g whey + ~32 g kenyér vagy 2 abonett) makrói: kb. 260 kcal és kb. 33 g fehérje – a fehérje továbbra is magas, a kalória és a szénhidrát viszont picit visszafogva marad."
  ],
},
{
  id: "6-R-gyumolcsos",
  mealId: "6-R-gyumolcsos",
  // ⬆️ EZT ÍRD PONTOSAN UGYANÚGY, MINT A meals.ts-BEN AZ 6. NAPI 2. REGGELI Meal.id-T!

  title: "6-R – Túrókrém – gyümölcsös verzió",
  timeMinutes: 7,
  steps: [
    "Edzésnapon kb. 180 g zsírszegény túrót használj, pihenőnapon kb. 160 g-ot. Tedd a túrót egy közepes tálba. Ha nagyon száraz, morzsálódik, adj hozzá 1–2 evőkanál vizet vagy 1 evőkanál natúr joghurtot, hogy könnyebben krémesíthető legyen.",
    "Szórd a túróra a fehérjeport: edzésnapon kb. 15–20 g-ot, pihenőnapon kb. 10–15 g-ot. Kanállal vagy villával keverd össze. Eleinte sűrű, kicsit csomós lesz – ha túl tömör, mindig csak kevés vizet/joghurtot adj hozzá, amíg krémes, pudingszerű, kanállal jól keverhető állagot kapsz.",
    "Készítsd elő a gyümölcsöt. Ha bogyós gyümölcsöt használsz (áfonya, málna, eper), frissnél mosd meg és csöpögtesd le, fagyasztottnál hagyd 5–10 percet picit kiengedni. Ha almát használsz, mosd meg, vágd negyedekre, szedd ki a magházat, majd vágd apró kockákra (kb. 1×1 cm). Edzésnapon kb. 60–70 g, pihenőnapon kb. 50–60 g gyümölcs az irányadó.",
    "A gyümölcsöt vagy belekeverheted a túrókrémbe, hogy minden falatban legyen, vagy a tetejére is szórhatod, ha inkább desszert-pohár kinézetet szeretnél. Almás verziónál nyugodtan mehet rá plusz fahéj is – almás pite hangulat, fitben.",
    "Szórj a túrókrémre egy jó adag fahéjat (mindkét napnál nyugodtan használhatod), és keverd át alaposan. Ha a fehérje édes, külön édesítőt nem muszáj használni, de 1–2 csepp mehet bele, ha nagyon édesszájú vagy.",
    "Közben készítsd el a kenyér/abonett részt. Edzésnapon 1 szelet teljes kiőrlésű kenyeret használj (~35–40 g), pihenőnapon egy vékonyabb szeletet (~30–35 g), vagy helyette 2 abonett szeletet. A kenyeret tedd pirítóba, vagy száraz serpenyőben pirítsd meg mindkét oldalát 1–1 percig, amíg enyhén aranybarna és ropogós lesz.",
    "Ha a túrókrém a keverés közben besűrűsödött, adj hozzá még 1–2 teáskanál vizet vagy joghurtot, és dolgozd el. A cél: sűrű, krémes, kanállal jól kenhető, de nem morzsálódó massza.",
    "Tálaláskor kanalazd a gyümölcsös túrókrémet egy tálba vagy pohárba. A pirítóst / abonettet tedd mellé. Eheted úgy, hogy a kenyérre is kensz a túrókrémből, vagy csak kanalazod a túrót, és mellé harapod a kenyeret – mindkettő teljesen oké.",
    "Edzésnapos adag (kb. 180 g túró, ~18 g whey, ~65 g gyümölcs, ~38 g teljes kiőrlésű kenyér) nagyjából 330 kcal és kb. 38 g fehérje – több CH (gyümölcs + kenyér), ami reggel, edzés előtt kifejezetten jól jön.",
    "Pihenőnapos adag (kb. 160 g túró, ~12 g whey, ~55 g gyümölcs, ~32 g kenyér vagy 2 abonett) kb. 270 kcal és kb. 31 g fehérje – a fehérjebevitel erős marad, a szénhidrát és a kalória picit visszafogottabb."
  ],
},
{
  id: "6-R-korozott",
  mealId: "6-R-korozott",
  // ⬆️ EZT ÍRD PONTOSAN UGYANÚGY, MINT A meals.ts-BEN A 6. NAPI 3. REGGELI Meal.id-T!

  title: "6-R – Túrókrém – sós körözött klasszikus",
  timeMinutes: 7,
  steps: [
    "Edzésnapon kb. 200 g zsírszegény túrót használj, pihenőnapon kb. 180 g-ot. Tedd a túrót egy közepes tálba. Ha nagyon száraz, morzsálódik, adj hozzá 1 evőkanál natúr joghurtot vagy pár csepp vizet, hogy könnyebben krémesíthető legyen.",
    "Pucolj meg egy kis darab vörös- vagy lilahagymát, és vágd nagyon apróra (szinte pötty méretűre). A cél, hogy ízt adjon, de ne legyenek nagy, nyers hagymadarabok a krémben. Ha túl erősnek érzed, hideg vízben gyorsan átöblítheted, majd lecsepegteted.",
    "Szórd a túróra az ízesítőket: 1–2 teáskanál őrölt pirospaprikát, egy csipet–½ teáskanál őrölt köményt, csipet sót és kevés frissen őrölt borsot. Add hozzá az apróra vágott hagymát is.",
    "Keverd össze alaposan a túrót a fűszerekkel és a hagymával, amíg a túró mindenhol egyenletesen narancsos-körözött színt kap, és a hagymadarabok szépen eloszlanak benne. Ha keverés közben túl sűrűnek érzed, adj hozzá még egy kevés joghurtot vagy pár csepp vizet, mindig csak kicsit.",
    "Edzésnapra számolj kb. 200 g túróval, pihenőnapra 180 g körüli mennyiséggel. A hagyma mindkét napnál lehet ugyanannyi (10–15 g), az íz miatt; kalória szempontból gyakorlatilag nem számít.",
    "Készítsd el mellé a szénhidrátforrást. Edzésnapon 1 szelet teljes kiőrlésű kenyeret használj (~35–40 g), pihenőnapon egy kicsit kisebbet (~30–35 g) vagy 2 abonett szeletet. A kenyeret pirítóban vagy száraz serpenyőben pirítsd ropogósra, aranybarnára.",
    "Ha a krém túl lágy lett, egy kevés extra túróval visszasűrítheted. A cél: kenhető, krémes, de nem folyós állag, amit szépen rá tudsz kenni a pirítósra.",
    "Tálaláskor a körözöttet teheted egy kis tálba, és a pirítóst mellé rakod, vagy rögtön meg is kenheted a szeleteket. A kenyeret félbe vagy háromszög alakra is vághatod, hogy kézzel könnyebb legyen enni.",
    "Edzésnapos adag (≈200 g túró + ~38 g teljes kiőrlésű kenyér) nagyjából 250 kcal és kb. 27 g fehérje – klasszik magyar körözött, csak fit verzióban, hasznos CH-val az edzésnapra.",
    "Pihenőnapos adag (≈180 g túró + ~32 g kenyér vagy 2 abonett) kb. 220 kcal és kb. 24 g fehérje – laktató, fehérjedús, de egy fokkal visszafogottabb kalóriában és szénhidrátban."
  ],
},
{
  id: "7-R-alap-rantotta",
  mealId: "7-R-alap-rantotta",
  // ⬆️ Ezt írd pontosan ugyanúgy, mint a meals.ts-ben a 7. napi 1. reggeli Meal.id-t!

  title: "7-R – Alap rántotta avokádóval és TK kenyérrel",
  timeMinutes: 8,
  steps: [
    "Edzésnapon a rántottához 3 db M-es tojást, kb. 60 g avokádót és 1 szelet (~35–40 g) teljes kiőrlésű kenyeret használj. Pihenőnapon szintén 3 db tojás megy, az avokádóból kb. 40–50 g, a kenyérből egy picit kisebb szelet (~30–35 g). Mindkét napra elég 3–4 g olaj a sütéshez.",
    "Törd fel a tojásokat egy kisebb tálba. Sózd, borsozd ízlés szerint. Villával vagy kis habverővel verd fel őket, hogy a sárgája és fehérje teljesen elkeveredjen. Nem kell habosra verni, csak szép egynemű legyen a tojásalap.",
    "Tedd a serpenyőt közepes lángra, és adj hozzá nagyon vékony rétegben kb. 1 teáskanálnyi (3–4 g) olajat, vagy fújd ki olajspray-vel. Várd meg, míg átmelegszik, de ne füstöljön – ha füstöl, túl forró, vedd lejjebb a lángot.",
    "Öntsd a felvert tojást a felmelegedett serpenyőbe. Hagyd 5–10 másodpercig békén, amíg a szélein kicsit megköt. Ezután fakanállal vagy spatulával finoman húzogasd befelé a megsült részeket, hogy a folyós tojás kifusson a helyükre.",
    "Süsd így a rántottát 2–3 percig közepes lángon: akkor jó, ha már nem folyós, de még szaftos és puha. Ha szárazabb, jobban átsült rántottát szeretsz, hagyhatod még fél–egy percig, de figyelj, hogy ne száradjon ki teljesen.",
    "Amíg a tojás sül, pirítsd meg a teljes kiőrlésű kenyeret pirítóban, vagy száraz serpenyőben mindkét oldalát 1–1 percig, amíg kissé aranybarna és ropogós nem lesz. Edzésnapon mehet a nagyobb szelet (~35–40 g), pihenőnapon valamivel kisebb (~30–35 g) vagy egy vékonyabb szelet.",
    "Az avokádót vágd félbe, kanalazd ki a szükséges mennyiséget (edzésnapon kb. 60 g, pihenőnapon kb. 40–50 g), majd szeleteld fel. Sózhatod, borsozhatod enyhén, ha szereted úgy.",
    "Tálaláskor a tányérra teszed a frissen sült rántottát, mellé rakod az avokádószeleteket és a pirított teljes kiőrlésű kenyeret. Ha szeretnéd, a rántotta tetejére szórhatsz apróra vágott snidlinget vagy petrezselymet egy kis extra zöldért.",
    "Edzésnapos adag (3 tojás, ~60 g avokádó, ~38 g TK kenyér, kevés olaj) kb. 440 kcal és ~23 g fehérje – nagyon stabil, fehérjedús, edzés előtt/után is jó választás.",
    "Pihenőnapos adag (3 tojás, ~45 g avokádó, ~32 g TK kenyér, kevés olaj) kb. 390 kcal és ~22 g fehérje – kicsit visszafogottabb szénhidrát és zsír, de ugyanúgy laktató és fehérjében erős."
  ],
},
{
  id: "7-R-avokado-toast",
  mealId: "7-R-avokado-toast",
  // ⬆️ EZ legyen PONTOSAN ugyanaz, mint a Meal.id a 7. napi 2. reggelinél!

  title: "7-R-avokado-toast",
  timeMinutes: 10,
  steps: [
    "Edzésnapon a reggelihez 3 db M-es tojást használsz rántottához, kb. 70 g avokádót (vastagabb, krémesebb rétegnek) és 1 szelet ~35–40 g teljes kiőrlésű kenyeret. Pihenőnapon marad a 3 db tojás, az avokádó mennyisége kb. 50 g, a kenyérszelet inkább 30–35 g körül legyen. Mindkét napra elég 3–4 g olaj a sütéshez.",
    "A teljes kiőrlésű kenyeret először pirítsd meg: tedd kenyérpirítóba, vagy száraz serpenyőben pirítsd mindkét oldalát 1–1 percig, amíg aranybarna, enyhén ropogós lesz. Tedd félre, hogy egy kicsit hűljön, amíg az avokádókrémet és a rántottát elkészíted.",
    "Az avokádót vágd félbe, kanalazd ki a szükséges mennyiséget (edzésnapon kb. 70 g, pihenőnapon kb. 50 g) egy kis tálba. Villával törd össze pépesre, majd sózd, borsozd ízlés szerint. Cseppents rá egy kevés citromlevet, hogy frissebb legyen az íze és ne barnuljon meg olyan gyorsan. Ha szereted, mehet bele egy csipet chilipehely vagy fokhagymapor is.",
    "A tojásokat törd egy külön tálba. Adj hozzá sót, frissen őrölt borsot, és villával vagy kis habverővel verd fel, amíg a sárgája és a fehérje teljesen elkeveredik. Nem kell habosra verni, csak egynemű tojásalap legyen belőle.",
    "Tedd a serpenyőt közepes lángra, és adj hozzá egy vékony rétegben kb. 1 teáskanálnyi (3–4 g) olajat, vagy fújd ki olajspray-vel. Várd meg, amíg átmelegszik, de ne kezdjen el füstölni – ha füstöl, vedd vissza a lángot.",
    "Öntsd a felvert tojást a serpenyőbe. Várj 5–10 másodpercet, majd fakanállal vagy spatulával finoman húzogasd befelé a megkötött részeket, hogy a még folyékony tojás kifusson a helyükre. Sütöd így 2–3 percig, amíg a rántotta már nem folyós, de még szaftos és puha marad. Ha szárazabban szereted, hagyhatod picit tovább a tűzön.",
    "Közben kend meg a pirított teljes kiőrlésű kenyeret az avokádókrémmel: edzésnapon jöhet rá vastagabb, bővebb réteg, pihenőnapon egy fokkal visszafogottabb. A kenyér legyen teljesen befedve, hogy minden falatba jusson avokádó.",
    "Tálaláskor az avokádókrémes pirítós mellé rakhatod a rántottát a tányérra, vagy akár rá is halmozhatod a toast tetejére, így egy brutál ‘brunch’ jellegű szendvics lesz belőle. Ha a rántottát a tetejére teszed, érdemes a kenyeret félbevágni, hogy könnyebb legyen enni.",
    "Díszítésnek szórhatsz a tetejére friss snidlinget, petrezselymet vagy egy kevés extra borsot. Így kapsz egy nagyon stabil, fehérjedús és jó zsíros (avokádós) reggelit, ami edzésnapra és pihenőnapra is jól illeszkedik a napodba."
  ],
},
{
  id: "7-R-wrap",
  mealId: "7-R-wrap", 
  // ⬆️ EZ legyen PONTOSAN ugyanaz, mint a Meal.id a 7. napi 3. reggelinél!

  title: "7-R-wrap",
  timeMinutes: 12,
  steps: [
    "Edzésnapon a wraphez 3 db M-es tojást használsz (rántottához), kb. 50–60 g avokádót, 1 db ~50 g-os teljes kiőrlésű tortillát, 40–50 g vegyes zöldséget (pl. paprika + paradicsom + uborka) és kb. 3–4 g olajat a sütéshez. Pihenőnapon marad a 3 tojás, az avokádó mennyisége kb. 40–50 g, a tortilla inkább ~40–45 g-os (vékonyabb/kisebb), zöldség mehet nyugodtan 50 g, az olaj pedig kb. 3 g.",
    "A tojásokat törd egy közepes tálba. Sózd, borsozd ízlés szerint, és villával vagy kis habverővel verd fel, amíg a sárgája és a fehérje teljesen elkeveredik. Nem kell habosra verni, csak egyenletes, egynemű tojásalapot készíts.",
    "Melegíts fel egy tapadásmentes serpenyőt közepes lángon. Adj hozzá vékony rétegben kb. 3–4 g olajat (vagy fújd ki olajspray-vel), majd várd meg, amíg átmelegszik, de még nem füstöl.",
    "Öntsd a felvert tojást a serpenyőbe. Várj 5–10 másodpercet, amíg a szélein kicsit megköt, majd spatulával/fakanállal finoman húzogasd befelé a megszilárult részeket, hogy a folyós tojás kifusson a helyére. Sütöd így 2–3 percig, amíg a rántotta már nem folyós, de még szaftos marad. Ne szárítsd ki – inkább legyen puha, hogy jó legyen wrapben.",
    "Közben készítsd elő a zöldségeket: a paprikát, uborkát és paradicsomot mosd meg, majd vágd vékony csíkokra vagy kis kockákra. Ha használsz salátát, tépkedd falatnyi darabokra. A cél, hogy könnyen tekerhető, falatnyi darabok kerüljenek a tortillába.",
    "Az avokádót vágd félbe, kanalazd ki a szükséges mennyiséget (edzésnapon kb. 50–60 g, pihenőnapon kb. 40–50 g), és döntsd el, hogyan szeretnéd használni: szeletelheted, és így teszed a wrapbe, vagy egy kis tálban villával pépesre töröd, sózod-borsozod, esetleg egy kevés citromlevet is adhatsz hozzá, és krémként kened majd a tortillára.",
    "Egy száraz serpenyőt tegyél közepes lángra, és melegítsd elő benne a teljes kiőrlésű tortillát: oldalanként kb. 10–15 másodpercig elég, csak annyira, hogy rugalmas és könnyen tekerhető legyen. Ne szárítsd ki, mert akkor törni fog.",
    "Tedd a meleg tortillát egy tányérra. Ha avokádókrémet készítettél, kend el a tortilla közepén egy hosszanti sávban. Erre jöhet a feldarabolt rántotta (hosszúkás csíkban elrendezve), majd a zöldségek csíkokban/kockákban ugyanebbe a sávba halmozva. Próbáld úgy pakolni, hogy hosszában középen legyen a töltelék.",
    "A feltekeréshez először hajtsd be a tortilla alját egy kicsit felfelé, hogy alul ne potyogjon ki a töltelék. Ezután az egyik hosszanti oldalról indulva szorosan feltekered az egészet, mintha gyrost vagy burritót készítenél. Ha nagyon tömött, félbevághatod ferdén tálalás előtt, így szebb lesz a belső metszet is.",
    "Tálalhatod azonnal melegen, de el is viheted dobozban – hidegen is teljesen vállalható. Edzésnapon a nagyobb tortilla + kicsit több avokádó és zsír jól jön energiának; pihenőnapon a kisebb tortilla és visszafogottabb avokádómennyiség tartja kontroll alatt a kalóriát, miközben a 3 tojás miatt a fehérje mindkét verziónál erős marad."
  ],
},
{
  id: "1-T-klasszikus",
  mealId: "1-T-klasszikus", 
  // ⬆️ Írd át, hogy pontosan egyezzen a Meal.id-vel az 1. napi 1. tízóraihoz

  title: "1-T – Klasszikus cottage cheese zöldségekkel (edzésnap / pihenőnap)",
  timeMinutes: 5,
  steps: [
    "Edzésnapon az adag kb.: 200 g zsírszegény/light cottage cheese, 1 közepes paprika (~80 g), 100–120 g uborka és 2 vékony szelet teljes kiőrlésű kenyér (~60–70 g összesen). Pihenőnapon kb.: 150 g cottage, 1 közepes paprika (~80 g), 100–150 g uborka és 1 szelet teljes kiőrlésű kenyér (~30–40 g) vagy 2 db ropogós extrudált kenyér. A zöldséget nyugodtan tolhatod felfelé, az alig dob a kalórián.",
    "Tedd a cottage cheese-t egy közepes tálba. Sózd és borsozd ízlés szerint. Ha szereted, mehet bele egy kevés őrölt paprika, szárított snidling vagy petrezselyem is, hogy kicsit izgalmasabb legyen az íz. Keverd át, hogy a fűszerek mindenhol eloszoljanak.",
    "Mosd meg a paprikát, csumázd ki, majd vágd csíkokra, karikákra vagy falatnyi darabokra – attól függően, hogy inkább mártogatni szeretnéd, vagy csak mellé rágcsálni. Az uborkát szintén mosd meg, vágd karikákra vagy hasábokra. Ha mártogatós fíling kell, a hasábok jobbak.",
    "A teljes kiőrlésű kenyeret (vagy extrudált kenyeret) készítsd elő: ha sima szeletelt TK kenyérrel dolgozol, akár meg is piríthatod pirítóban vagy száraz serpenyőben, hogy ropogós legyen. Edzésnapon 2 vékony szeletet eszel (kicsit több CH), pihenőnapon 1 kisebb szelet vagy 2 extrudált lap megy mellé.",
    "Tálalásnál tedd a cottage cheese-t a tál közepére, a paprikát és uborkát rendezd köré. A kenyeret külön tányérra vagy a zöldségek mellé rakhatod. Eheted úgy, hogy a kenyérre kensz egy adag cottage-ot és teszel rá pár paprikát/uborkát, vagy csak kanalazod a cottage-ot, közben zöldséget ropogtatsz és harapsz a kenyérből. Hideg, friss, 2 perc alatt összedobható tízórai."
  ],
},
{
  id: "1-T-dip",
  mealId: "1-T-dip", 
  // ⬆️ Ezt írd át, ha a Meal.id máshogy néz ki!

  title: "1-T – Krémes cottage dip zöldségekkel (edzésnap / pihenőnap)",
  timeMinutes: 10,
  steps: [
    "Edzésnapon az adag kb.: 200 g cottage cheese, 1–2 evőkanál (15–30 g) natúr görög joghurt vagy kefir (krémesítéshez), só, bors, snidling, fokhagyma ízlés szerint, 80–100 g paprika csík, 80–100 g uborka hasáb, 60–80 g répa hasáb. Ha edzés előtt vagy és kell még CH, mehet mellé 1 szelet teljes kiőrlésű kenyér (~30–40 g). Pihenőnapon kb.: 150 g cottage cheese, 1 evőkanál (15 g) joghurt/kefir vagy elhagyva, só, bors, snidling, fokhagyma, összesen 200–250 g vegyes zöldséghasáb (paprika + uborka + répa), kenyér inkább nincs, max. 1 nagyon vékony szelet, ha éhes vagy.",
    "A dip alapjához tedd a cottage cheese-t egy magasabb falú tálba, hogy keverésnél ne spricceljen. Adj hozzá 1–2 evőkanál joghurtot vagy kefirt (edzésnapon nyugodtan kicsit többet, pihenőnapon elég lehet 1 kanál vagy akár nulla), sózd, borsozd, szórj bele apróra vágott snidlinget (vagy szárítottat), és ha szereted, reszelj vagy zúzz bele 1 kis gerezd fokhagymát.",
    "Botmixerrel dolgozd össze az egészet, amíg krémes, mártogatós állagot kapsz. Ha túl sűrű, adj hozzá még egy kevés joghurtot vagy kefirt. Ha nincs botmixer, villával vagy kanállal is összetörheted–összekeverheted: nem lesz teljesen sima, de továbbra is tökéletes dip lesz.",
    "Közben készítsd elő a zöldségeket: a paprikát mosd meg, csumázd ki, és vágd hosszanti csíkokra; az uborkát mosd meg, hosszában vágd félbe, majd 4–6 hosszú hasábra; a répát hámozd meg, és szintén hosszú, mártogatáshoz ideális hasábokra vágd. Pihenőnapon nyugodtan tolhatsz kicsit nagyobb zöldségmennyiséget, az alig dob a kalórián.",
    "Tálalásnál tedd a krémes cottage dip-et egy kisebb tálkába, a zöldséghasábokat rendezd mellé egy nagyobb tányérra vagy köré állítva, ‘chips’ jelleggel. Ha eszel mellé kenyeret (inkább edzésnapon), a szelet teljes kiőrlésű kenyeret szeleteld vagy csíkokra vágva tedd külön a tányérra.",
    "Fogyasztás: fogsz egy répa/paprika/uborka hasábot, jó alaposan belemártod a cottage dip-be, és megeszed. Ha szeretnéd ‘szendvicsesebbre’, a dipet a kenyérre is kenheted, majd mellé rágcsálod a zöldségeket. Edzésnapon ez egy light, de fehérjedús, nem elnehezítő tízórai; pihenőnapon pedig szinte full clean, sok ropogós zöldséggel és visszafogott szénhidráttal."
  ],
},
{
  id: "1-T-wrap",
  mealId: "1-T-wrap", 
  // ⬆️ ha a Meal.id máshogy néz ki, írd át pontosan arra

  title: "1-T – Cottage wrap zöldségekkel (edzésnap / pihenőnap)",
  timeMinutes: 10,
  steps: [
    "Edzésnapos ajánlott mennyiség: 1 db nagyobb teljes kiőrlésű tortilla (~50–60 g), 150–180 g cottage cheese, kb. 50–60 g paprika csíkokra vágva, 50–60 g uborka csíkokra vágva, opcionálisan 1 marék (20–30 g) jégsaláta vagy rukkola. Pihenőnapon: 1 kisebb teljes kiőrlésű tortilla (~35–40 g) vagy egy nagyobb tortilla fele, 130–150 g cottage cheese, ugyanúgy kb. 50–60 g paprika + 50–60 g uborka, és 20–30 g saláta – ilyenkor a zöldség a ‘volumen’, a tortilla csak kísérő.",
    "A cottage krém alaphoz tedd a cottage cheese-t egy tálba, sózd, borsozd ízlés szerint. Ha szeretnéd, keverj bele egy kevés apróra vágott snidlinget, esetleg egy csipet fokhagymaport. Nem muszáj teljesen krémesre botmixerezni, maradhat darabos, túrós állagú – wrapben nagyon jól működik így is.",
    "Készítsd elő a zöldségeket: a paprikát mosd meg, vágd félbe, csumázd ki, majd vágd vékony csíkokra. Az uborkát mosd meg, vágd hosszanti csíkokra (julienne stílusban), a salátát (jégsaláta/rukkola) mosd meg, csöpögtesd le, és nagyobb leveleket csíkozd vagy tépkedd falatnyi darabokra.",
    "A tortillát eheted hidegen is, de jobb, ha picit megmelegíted: száraz serpenyőben mindkét oldalát 10–15 másodpercig melegítsd közepes lángon, vagy mikróban 5–10 másodpercig. A cél, hogy rugalmas, hajlékony legyen, ne törjön, amikor feltekered.",
    "Töltés: tedd a tortillát egy tányérra, és a középső sávba (nem egészen a szélekig) kend rá a cottage cheese-t. Erre szórd rá a paprika- és uborkacsíkokat, majd a tetejére a salátát. Ügyelj rá, hogy inkább egy hosszúkás sávba kerüljön minden, így könnyebb lesz feltekerni.",
    "Tekerés: először az alsó részt hajtsd fel kb. 2–3 cm-t, hogy alul ne folyjon ki a töltelék. Ezután az egyik oldalt hajtsd be a töltelék fölé, majd a másik oldalt is, és szorosan feltekered, mintha burritót vagy gyrost tekernél. Ha nagyon tömött, ferdén félbe vághatod, vagy fóliával/sütőpapírral rögzítheted.",
    "Tálalás: otthon ferdén félbevágva nagyon ‘instakompatibilis’, útra pedig alufóliába vagy sütőpapírba tekerve könnyen vihető. Edzésnapon jöhet a nagy tortilla + kicsit több cottage, pihenőnapon a kisebb tortilla és inkább több zöldség – a fehérje mindkét napon rendben lesz."
  ],
},
{
  id: "2-T-tojaskrem",
  mealId: "2-T-tojaskrem", 
  // ⬆️ ha a Meal.id máshogy néz ki, írd át pontosan arra

  title: "2-T – Tojáskrém puffasztott rizzsel (edzésnap / pihenőnap)",
  timeMinutes: 12,
  steps: [
    "Edzésnapos ajánlott adag: 2 db főtt tojás, kb. 25 g natúr görög vagy light joghurt, 1 tk mustár (opcionális), 3 szelet puffasztott rizs, só, bors, snidling ízlés szerint. Pihenőnapos adag: 1 db egész tojás + 1 db tojásfehérje, kb. 20 g joghurt, 1 tk mustár, 2 szelet puffasztott rizs, ugyanúgy só, bors, snidling.",
    "A tojásokat tedd egy kis lábasba, öntsd fel hideg vízzel úgy, hogy bőven ellepje őket. Forrald fel, majd a forrástól számítva gyöngyözve főzd kb. 9–10 percig, hogy keménytojás legyen. Ha letelt az idő, öntsd le a forró vizet, engedj rá hideg vizet, hagyd kicsit hűlni, majd hámozd meg a tojásokat.",
    "Edzésnapon tedd a 2 db meghámozott tojást egy kisebb tálba. Pihenőnapon 1 egész tojást és 1 tojásfehérjét használj: a második tojásnál vedd le a sárgáját (vagy egy másik ételbe felhasználhatod), és csak a fehérjét add a tálba az első teljes tojás mellé.",
    "Villával törd össze a tojást/okat, amíg morzsás–pépes állagot kapsz. Add hozzá a joghurtot (edzésnapon kb. 25 g, pihenőnapon kb. 20 g), és keverd krémesre. Ha szereted, mehet bele 1 tk mustár is – ez plusz ízt ad a majonéz helyett, extra zsír nélkül.",
    "Fűszerezés: sózd, borsozd ízlés szerint, majd szórj bele apróra vágott snidlinget vagy újhagymát. Keverd át alaposan, hogy a hagyma és a fűszerek mindenhol eloszoljanak. Ha túl sűrűnek érzed, adj hozzá még 1 tk joghurtot; ha túl híg, törj bele még egy kevés tojásfehérjét.",
    "Tálaláshoz készítsd elő a puffasztott rizsszeleteket: edzésnapon 3 szeletet, pihenőnapon 2 szeletet. Nem kell őket sütni vagy melegíteni, mehetnek úgy, ahogy vannak a tányérra.",
    "Kend a tojáskrémet a rizsszeletek tetejére egyenletes rétegben. Ha marad egy kevés krém, azt külön kis tálban is odarakhatod ‘mártogatósnak’. A tetejére díszítésként mehet még pár karika újhagyma vagy egy kis extra snidling.",
    "Edzésnapon a 2 tojás + 3 rizsszelet egy kicsit energiadúsabb tízórai, ami jól jön, ha később súlyzós vagy crossfit edzésed lesz. Pihenőnapon az 1 tojás + 1 fehérje + 2 rizsszelet verzió tartja a fehérjeszintet, de lejjebb húzza a zsírt és a szénhidrátot."
  ],
},
{
  id: "2-T-avokado",
  mealId: "2-T-avokado",
  title: "2-T – Avokádós boost (tojás + avokádókrém puffasztott rizsen)",
  timeMinutes: 10,
  steps: [
    "Edzésnapos ajánlott adag: 2 db főtt tojás, kb. 50–60 g avokádó (kb. 1/2 közepes), 3 szelet puffasztott rizs, só, bors, 1–2 tk citromlé, opcionálisan egy csipet fokhagymapor vagy chili. Pihenőnapos adag: 1 db főtt tojás, kb. 35–40 g avokádó (kb. 1/3 db), 2 szelet puffasztott rizs, ugyanúgy só, bors, citromlé, fűszerek.",
    "A tojás(oka)t tedd egy kis lábasba, öntsd fel hideg vízzel úgy, hogy bőven ellepje. Forrald fel, majd a forrástól számítva gyöngyözve főzd kb. 9–10 percig, hogy keménytojás legyen. Ha kész, öntsd le a forró vizet, engedj rá hideg vizet, hagyd kicsit hűlni, majd hámozd meg a tojásokat.",
    "Vágd félbe az avokádót, óvatosan vedd ki a magot. Egy kanállal kanalazd ki a szükséges mennyiséget (edzésnapon kb. 1/2 db, pihenőnapon kb. 1/3 db) egy kisebb tálba. Villával törd pépesre, hogy krémes legyen.",
    "A főtt tojást (edzésnapon 2 db-ot, pihenőnapon 1 db-ot) vágd nagyobb darabokra, majd tedd az avokádókrémhez. Villával törd és keverd össze: maradhatnak benne kisebb tojásdarabok, nem kell teljesen simára pürésíteni, jó, ha kicsit ‘chunky’ az állag.",
    "Locsold meg 1–2 teáskanál citromlével (ízt ad, és segít, hogy az avokádó ne barnuljon olyan gyorsan). Sózd, borsozd ízlés szerint. Ha szereted, szórhatsz bele egy csipet fokhagymaport vagy chili pelyhet is. Keverd át alaposan, hogy egységes, kanállal kenhető krémet kapj.",
    "Ha túl sűrűnek érzed a krémet, 1–2 teáskanál vízzel vagy kevés natúr joghurttal lazíthatod. A cél egy olyan állag, amit könnyen rá tudsz kenni a puffasztott rizsszeletekre, de nem folyik le róluk.",
    "Készítsd elő a puffasztott rizsszeleteket: edzésnapon 3 szeletet (ha kevésbé vagy éhes, elég 2), pihenőnapon 2 szeletet. Tedd őket egy tányérra.",
    "Kend a tojás–avokádó krémet egyenletesen a rizsszeletek tetejére. Eheted nyitott szendvicsként, vagy két rizsszelet közé fogva mini ‘szendvics/burger’ stílusban. Edzésnapon ez egy zsírosabb, stabil energiát adó tízórai; pihenőnapon a kisebb avokádó + kevesebb rizsszelet miatt kalóriában visszafogottabb marad."
  ],
},
{
  id: "2-T-szendvics",
  mealId: "2-T-szendvics",
  title: "2-T – Puffasztott rizs szendvics (tojás + alma két rizsszelet között)",
  timeMinutes: 10,
  steps: [
    "Edzésnapos ajánlott adag: 4 szelet puffasztott rizs (2 mini szendvicshez), 2 db főtt tojás, kb. 1/2 közepes alma (~70 g) vékony szeletekre vágva, só és bors ízlés szerint. Pihenőnapos adag: 3 szelet puffasztott rizs, 1 db főtt tojás, kb. 40 g alma (pár vékony szelet), opcionálisan kevés só és bors.",
    "A tojás(oka)t tedd egy kis lábasba, öntsd fel hideg vízzel úgy, hogy bőven ellepje. Forrald fel a vizet, majd a forrástól számítva gyöngyözve főzd kb. 9–10 percig, hogy keménytojás legyen. Ha kész, öntsd le a forró vizet, engedj rá hideg vizet, hagyd kicsit hűlni, majd óvatosan hámozd meg a tojásokat.",
    "A megfőtt tojásokat vágd fel: készíthetsz vékony szeleteket vagy negyedeket. Ha szeretnéd, a tojást enyhén sózhatod, borsozhatod, hogy a szendvics belseje ízesebb legyen.",
    "Mosd meg az almát, majd vágj le belőle annyi vékony szeletet, amennyire szükséged van (edzésnapon kb. 1/2 alma, pihenőnapon kb. 40 g). A szeletek legyenek elég kicsik és laposak, hogy kényelmesen elférjenek a két puffasztott rizsszelet között.",
    "Vegyél kézbe egy puffasztott rizsszeletet – ez lesz az alsó “kenyér”. Helyezz rá tojásszeleteket, majd rá néhány almaszeletet. Ha szereted a sós–édes kombót, itt is mehet rá egy leheletnyi só és frissen őrölt bors.",
    "Fedd le a tölteléket egy második puffasztott rizsszeleppel, és finoman nyomd össze, hogy a szendvics egyben maradjon. Edzésnapon ismételd meg még egyszer (összesen 2 mini szendvicshez 4 rizsszelet és 2 tojás), pihenőnapon elég 1–1,5 mini szendvics 3 rizsszelettel és 1 tojással.",
    "Tálalhatod azonnal tányérról, vagy óvatosan dobozba rakhatod, ha magaddal viszed. Figyelj rá, hogy a puffasztott rizs könnyen törik, ezért ne nyomd túl erősen és ne zsúfold túl a dobozt. Ez egy könnyű, ropogós, picit édesebb tízórai – edzésnapon egy fokkal laktatóbb, pihenőnapon pedig nagyon light snack marad."
  ],
},
{
  id: "3-T-tekercses",
  mealId: "3-T-tekercses",
  title: "3-T – Tekercses verzió (pulykasonkába tekert zöldségek + kenyér)",
  timeMinutes: 10,
  steps: [
    "Edzésnapos ajánlott adag: kb. 70–80 g pulykasonka (4–5 vékony szelet), 120–150 g zöldség összesen (kb. 40–50 g répa, 40–50 g uborka, 40–50 g paprika) és 1 szelet (~30–35 g) teljes kiőrlésű kenyér. Pihenőnapos adag: kb. 60 g pulykasonka (3–4 szelet), 130–160 g zöldség összesen, valamint 1/2–1 kisebb szelet (~20–30 g) teljes kiőrlésű kenyér.",
    "Mosd meg a répát, az uborkát és a paprikát. A répát hámozd meg, majd vágd vékony, hosszúkás hasábokra (kb. kisujj vastagságúra). Az uborkát szintén vágd hosszanti hasábokra. A paprikát csumázd ki, majd vágd hosszú, 1 cm körüli csíkokra.",
    "Terítsd ki a pulykasonka-szeleteket egy vágódeszkára. Ha egy szelet nagyon nagy, félbe is vághatod, hogy több, kisebb tekercset tudj készíteni, amiket könnyebb enni és dobozolni.",
    "Fogj egy szelet pulykasonkát, és a szelet egyik végébe tegyél 1–2 répa hasábot, 1–2 uborka hasábot és 1 paprika csíkot. Nem kell túlzsúfolni, hogy szépen fel tudd tekerni. Ha szeretnéd, a zöldségeket enyhén meg is sózhatod.",
    "A töltött végétől indulva szorosan feltekered a pulykasonkát, mintha kis palacsintát csinálnál. Ismételd ezt, amíg elfogynak a sonkaszeletek és a zöldségek. Ha nagyon lazának érzed a tekercseket, opcionálisan fogpiszkálóval rögzítheted, de általában szépen egyben maradnak.",
    "Ha falatnyi snack-formát szeretnél, a tekercseket vágd 2–3 részre. Ha inkább “meal prep dobozba” megy, akár egyben is hagyhatod őket. Tedd a kész sonkatekercseket egy tányérra vagy ételhordó dobozba.",
    "A teljes kiőrlésű kenyeret szeleteld (ha nem szeletelt), és tedd külön a tányérra vagy a doboz egy másik rekeszébe. Eheted úgy, hogy harapsz egyet a tekercsből, egyet a kenyérből – teljesen nasis élmény, csak fit kivitelben.",
    "Edzésnapon maradj az 1 szelet kenyér + kicsit több sonka/zöldség kombónál, pihenőnapon pedig nyugodtan told feljebb a zöldség mennyiségét, és használj egy fokkal kevesebb kenyeret – a telítettség meglesz, a kalória pedig barátságos marad."
  ],
},
{
  id: "3-T-melegszendvics",
  mealId: "3-T-melegszendvics",
  title: "3-T – Melegszendvics stílus (pulykasonka + cottage/light sajt + zöldség)",
  timeMinutes: 10,
  steps: [
    "Edzésnapos ajánlott adag: ~1 nagyobb szelet teljes kiőrlésű kenyér (~35–40 g), 60–70 g pulykasonka (3–4 szelet), 40–50 g cottage cheese VAGY 15–20 g light sajt, valamint 60–80 g zöldség a tetejére (paradicsom + paprika/uborka).",
    "Pihenőnapos ajánlott adag: ~1 kisebb szelet TK kenyér (~30 g), 50–60 g pulykasonka, 30–40 g cottage vagy 10–15 g light sajt, illetve 70–90 g zöldség (nyugodtan legyen domináns).",
    "Melegítsd elő a sütőt 180–200 °C-ra (alsó-felső sütés vagy grill fokozat). Bélelj ki egy kis tepsit sütőpapírral, hogy ne ragadjon le semmi, és a takarítás is egyszerű legyen.",
    "Tedd a teljes kiőrlésű kenyérszeletet a sütőpapírral bélelt tepsire. Ha a héja vastagabb, akár kicsit le is vághatod, de nem kötelező – plusz rost, plusz telítettség.",
    "Ha cottage cheese-t használsz: kend a kenyér tetejét egyenletesen 1 vékony réteg cottage-tal (edzésnapon 40–50 g, pihenőnapon 30–40 g). Ha nem sós eleve, finoman sózd, borsozd. Ha light szeletelt sajttal dolgozol: tegyél egy vékony szeletet a kenyér tetejére alapnak.",
    "A krém/sajt tetejére fektess 3–4 szelet pulykasonkát (edzésnapon kicsit több, pihenőnapon 1–2 vékony szelettel kevesebb), úgy, hogy nagyjából lefedje a kenyér felületét.",
    "Mosd meg a paradicsomot és a paprikát/uborkát. A paradicsomot vágd karikákra vagy vékony szeletekre, a paprikát csíkokra vagy karikákra. Rendezd el a zöldséget a sonka tetején, mintha egy mini pizzát raknál össze.",
    "Ha nagyon szereted a sajtos tetejét és edzésnap van: szórhatsz rá még 5–10 g reszelt light sajtot – ez pihenőnapon inkább opcionális/elhagyható, hogy a kalória lent maradjon.",
    "Tedd a tepsit a 180–200 °C-os sütőbe, és süsd kb. 5–7 percig, amíg a kenyér széle enyhén megpirul, a sajt (ha használsz) megolvad, és a zöldség átmelegszik. Grill funkción ez még gyorsabb (3–5 perc), de figyeld, hogy ne égjen meg.",
    "Vedd ki a tepsit, hagyd a melegszendvicset 1–2 percig hűlni, hogy ne égesse szét a szádat. Vágd félbe vagy keresztben, és eheted kézből, mint egy toastot, vagy tányérról villával – ahogy jobban esik.",
    "Edzésnapon nyugodtan maradhatsz a nagyobb kenyér + több sonka + kicsit több cottage/light sajt kombónál; pihenőnapon a kisebb kenyérszelet + több zöldség + kicsit kevesebb sajt/sonka tartja fittebben a kalóriát, miközben a fehérje még mindig jól áll."
  ],
},
{
  id: "3-T-bento",
  mealId: "3-T-bento",
  title: "3-T – Bento box verzió (pulykasonka-kockák + zöldségek + kenyér)",
  timeMinutes: 10,
  steps: [
    "Edzésnapos ajánlott adag: kb. 70–80 g pulykasonka (kockákra vágva), 150–180 g vegyes zöldség (kb. 50–60 g répa + 50–60 g uborka + 50–60 g paprika) és 1 szelet (~30–35 g) teljes kiőrlésű kenyér külön rekeszben.",
    "Pihenőnapos ajánlott adag: kb. 55–60 g pulykasonka, 160–190 g vegyes zöldség és ½–1 kisebb szelet (~20–30 g) teljes kiőrlésű kenyér – a zöldség nyugodtan lehet bőségesebb.",
    "Rakd egymásra a pulykasonka-szeleteket, vágd először csíkokra, majd kb. 1×1 cm-es kockákra. A kockákat tedd egy kis rekeszbe vagy a doboz egyik sarkába.",
    "Mosd meg a répát, az uborkát és a paprikát. A répát hámozd meg, majd vágd vékony hasábokra vagy karikákra. Az uborkát vágd csíkokra vagy félkarikákra, a paprikát csíkokra vagy csónakokra.",
    "Ha szeretnéd bővíteni a zöldségválasztékot, használhatsz még koktélparadicsomot (egészben vagy félbe vágva), retket vagy zellerszárat is – ami szimpi.",
    "Fogj egy rekeszes dobozt (vagy egy sima dobozt, amit képzeletben sarkokra osztasz), és rendezd el a zöldségeket külön „mezőkbe”: pl. bal oldalra a répát, középre az uborkát, jobb oldalra a paprikát, egy kis sarokba a koktélparadicsomot. A másik sarokban legyenek a pulykasonka-kockák.",
    "A teljes kiőrlésű kenyérszeletet vágd félbe vagy csíkokra, és csomagold külön kis zacskóba, vagy tedd a doboz külön rekeszébe, hogy ne ázzon el a zöldségek levétől.",
    "Ha szereted a plusz ízt, vihetsz magaddal egy mini sószórót vagy egy nagyon kis doboz light szószt / humuszt, amibe a zöldségeket mártogathatod (majd ha egyszer makróval együtt beépítjük).",
    "Evéskor csipegess felváltva: pár kocka pulykasonka, pár falat ropogós zöldség, időnként egy falat kenyér – olyan, mintha egy tányérnyi hideg ebédet nassolnál elosztva, csak fit bento box formában.",
    "Makró összkép: edzésnapos adaggal kb. 210–220 kcal és ~20 g fehérje, pihenőnapos adaggal kb. 175–185 kcal és ~16–17 g fehérje."
  ],
},
{
  id: "4-T-klasszikus",
  mealId: "4-T-klasszikus",
  title: "4-T – Klasszikus kefires zabos banán (kefir + zab + banán + fahéj)",
  timeMinutes: 5,
  steps: [
    "Edzésnapos ajánlott adag: 200 ml 1,5–2%-os kefir, 25 g zabpehely, kb. 80 g banán (kb. ¾ közepes) és bő fahéj – könnyű, de ad egy kis plusz energiát az edzéshez.",
    "Pihenőnapos ajánlott adag: 200 ml 1,5–2%-os kefir, 20 g zabpehely, kb. 50 g banán (kb. ½ kisebb banán) és fahéj – fehérje rendben, a szénhidrát kicsit visszafogva, diétásabb tízóraihoz.",
    "Öntsd a kefirt egy tálba vagy mélyebb pohárba.",
    "Szórd bele a kimért zabpelyhet (edzésnapon 25 g, pihenőnapon 20 g), és keverd össze, hogy minden zabot érjen a kefir.",
    "Ha van 5–10 perced, hagyd állni a keveréket, hogy a zab kicsit megszívja magát és krémesebb legyen az állaga; ha rohansz, azonnal is eheted, ilyenkor a zab még ropogósabb marad.",
    "A banánt hámozd meg, vágd fel karikákra vagy kis kockákra (edzésnapon kb. 80 g, pihenőnapon kb. 50 g), majd tedd a kefires-zabos alap tetejére, vagy keverd bele.",
    "Szórj a tetejére bőven fahéjat – jól passzol a banánhoz és a kefires alaphoz is.",
    "Ha munkába vagy útra viszed, zárható dobozba készítsd el; a banánt teheted rá csak evés előtt, hogy kevésbé barnuljon.",
    "Makró összkép: edzésnapos adaggal kb. 285 kcal és ~10 g fehérje, pihenőnapos adaggal kb. 240 kcal és ~9 g fehérje – könnyű, gyomorkímélő, inkább szénhidrát-dúsabb tízórai, nem fő fehérjeforrás, de szépen illeszkedik a napi összképbe."
  ],
},
{
  id: "4-T-extra-feherjes",
  mealId: "4-T-extra-feherjes",
  title: "4-T – Extra fehérjés verzió (kefir + zab + ½ adag whey + banán)",
  timeMinutes: 5,
  steps: [
    "Edzésnapos ajánlott adag: 200 ml 1,5–2%-os kefir, 25 g zabpehely, 15 g vaníliás whey és kb. 70 g banán – tízóraira kb. +7–8 g extra fehérje, pont jó izomépítéshez.",
    "Pihenőnapos ajánlott adag: 200 ml 1,5–2%-os kefir, 20 g zabpehely, 15 g vaníliás whey és kb. 50 g banán – a kalória picit lejjebb, a fehérje ugyanúgy rendben marad.",
    "Öntsd a kefirt egy tálba vagy shakerbe.",
    "Szórd bele a kimért, kb. 15 g fehérjeport, majd keverd simára; használhatsz kanalat, kis kézi habverőt vagy egyszerűen összerázhatod shakerben, hogy ne maradjanak csomók.",
    "Szórd a fehérjés kefirbe a zabpelyhet (edzésnapon 25 g, pihenőnapon 20 g), és keverd át, hogy a zab egyenletesen eloszoljon a keverékben.",
    "Ha krémesebb, desszertszerűbb állagot szeretnél, hagyd állni a keveréket 5–10 percig, hogy a zab kicsit megszívja magát; ha sietsz, azonnal is eheted, ilyenkor a zab enyhén ropogós marad.",
    "A banánt hámozd meg, vágd fel karikákra vagy kis kockákra (edzésnapon kb. 70 g-ot, pihenőnapon kb. 50 g-ot), majd tedd a tetejére, vagy keverd bele a fehérjés-kefires-zabos alapba.",
    "Ízlés szerint szórhatsz a tetejére egy kevés fahéjat is, jól passzol a banánhoz és a vaníliás fehérje ízéhez.",
    "Tálald egy tálban, és kanalazd el, mint egy fehérjés tejbegrízt; ha munkába vagy útra viszed, készítsd el zárható dobozban/pohárban, és csak egy kanalat kell mellé bedobnod.",
    "Makró összkép: edzésnapos adaggal kb. 335 kcal és ~22 g fehérje, pihenőnapos adaggal kb. 300 kcal és ~21 g fehérje – ez már kifejezetten jó fehérjés tízórai, edzésnapra különösen erős választás."
  ],
},
{
  id: "4-T-turmix",
  mealId: "4-T-turmix",
  title: "4-T – Turmix (smoothie) (kefir + zab + banán turmixolva)",
  timeMinutes: 5,
  steps: [
    "Edzésnapos ajánlott adag: 200 ml 1,5–2%-os kefir, 25–30 g zabpehely és kb. 100 g banán – ez a három közül a leginkább 'pre-workout' jellegű, iható, gyors szénhidrát, nem ül meg a gyomrodban.",
    "Pihenőnapos ajánlott adag: 180–200 ml kefir, 20 g zabpehely és kb. 70 g banán – picit visszafogottabb szénhidrát, de még mindig laktató, gyomorkímélő tízórai.",
    "Készítsd elő a turmixgépet vagy egy erősebb késes aprítót, és öntsd bele a kefirt (edzésnapon 200 ml, pihenőnapon 180–200 ml).",
    "Hámozd meg a banánt, törd 3–4 kisebb darabra, majd dobd a kefirhez a turmixgép kehelybe.",
    "Mérd ki a zabpelyhet (edzésnapon 25–30 g, pihenőnapon 20 g), és szórd a kefires–banános alaphoz.",
    "Kapcsold be a turmixgépet, és turmixold 20–40 másodpercig, amíg teljesen sima, sűrű, de még iható állagot kapsz, és nem maradnak benne nagyobb zabdarabok.",
    "Ha a smoothie túl sűrű lett, adj hozzá egy kevés plusz kefirt vagy hideg vizet, majd pár másodpercre indítsd újra a turmixot, hogy teljesen elkeveredjen.",
    "Ha inkább kanalas, 'desszertszerű' állagot szeretnél, kevesebb folyadékkal dolgozz, és hagyd 3–5 percig állni, hogy a zab kicsit megszívja magát.",
    "Öntsd a kész turmixot shakerbe vagy magas pohárba; ez egy tipikus 'felkapom és megyek' tízórai, főleg akkor hasznos, ha sétálsz, vezetsz vagy edzés előtt már nincs kedved rágcsálni.",
    "Makró összkép: edzésnapos adaggal kb. 300 kcal és ~10 g fehérje, pihenőnapos adaggal kb. 260 kcal és ~9 g fehérje – gyorsan iható energialöket, ami szépen illeszkedik a napi étrend fehérjedúsabb elemei mellé."
  ],
},
{
  id: "5-T-kremes-dio",
  mealId: "5-T-kremes-dio",
  title: "5-T – Görög joghurt dióval – Krémes verzió (joghurt + dió, minimál „clean” tízórai)",
  timeMinutes: 5,
  steps: [
    "Edzésnapos ajánlott adag: kb. 180 g 2%-os görög joghurt + 12 g (5–6 fél) durvára vágott dió. Jó kis fehérje + zsír kombó, nem nehéz, de stabilan tart.",
    "Pihenőnapos ajánlott adag: kb. 160 g görög joghurt + 8–10 g (3–4 fél) dió, kicsit kevesebb zsír/kalória, de még mindig szép fehérjés snack.",
    "Kanalazd a görög joghurtot egy közepes tálba. Ha nagyon sűrű, adj hozzá 1–2 evőkanál vizet vagy tejet, hogy könnyebben keverhető legyen.",
    "Keverd a joghurtot addig, amíg simább, 'pudingosabb' állagot kapsz – ne legyen folyós, inkább sűrű, krémes textúrára törekedj.",
    "Mérd ki a diómennyiséget (edzésnapon kb. 12 g, pihenőnapon kb. 8–10 g), majd egy éles késsel vágd durvára: maradjanak benne kis ropogós darabok, ne őröld porrá.",
    "Simítsd el a krémesített joghurtot a tálban, majd egyenletesen szórd a tetejére az aprított diót.",
    "Ha édesszájú vagy, de nem szeretnél plusz cukrot: szórhatsz rá egy csipet fahéjat, vagy adhatsz hozzá pár csepp édesítőt. Ezek opcionálisak, az alap verzió így is 'clean'.",
    "Tálalás: kanalazd, mint egy desszertet. Ha magaddal viszed, a joghurtot tedd egy zárható dobozba, a diót pedig külön kis zacskóba vagy mini dobozba, és csak evés előtt szórd a tetejére, hogy ropogós maradjon.",
    "Makró összkép: edzésnapos adaggal kb. 185–190 kcal és ~20 g fehérje, pihenőnapos adaggal kb. 155 kcal és ~17 g fehérje – minimál, mégis tartalmas, gyomorkímélő tízórai."
  ],
},
{
  id: "5-T-korte-fahejas-mezes",
  mealId: "5-T-korte-fahejas-mezes",
  title: "5-T – Görög joghurt körtével – Fahéjas–mézes csavar (joghurt + körte + méz + dió/mandula)",
  timeMinutes: 7,
  steps: [
    "Edzésnapos ajánlott adag: kb. 170 g 2%-os görög joghurt + 80–90 g körte (kb. ½ közepes, szeletelve) + 5 g méz (1 tk, ha nem vagy nagyon szigorú) + 10 g durvára vágott dió/mandula, bőven megszórt fahéjjal.",
    "Pihenőnapos ajánlott adag: kb. 160 g görög joghurt + 60–70 g körte + 5 g méz (vagy édesítő) + 6–8 g durvára vágott dió/mandula. Itt a körtét és a magot húzzuk picit lejjebb, a fehérje még mindig rendben marad.",
    "Kanalazd a görög joghurtot egy kisebb tálba. Hagyhatod sűrű, krémes állagúra – nem muszáj hígítani, pont ettől desszertes.",
    "Mosd meg a körtét, vágd félbe, majd vágd ki a magházat. Mérd ki a szükséges mennyiséget (edzésnapon 80–90 g, pihenőnapon 60–70 g), és szeleteld vékony szeletekre vagy kockákra, ahogy jobban szereted.",
    "Tedd a körtedarabokat egy kis tálba vagy deszkára, szórd meg bőven fahéjjal, majd locsold meg kb. 1 teáskanál (5 g) mézzel. Ha diétásabbra szeretnéd, használj kevesebb mézet vagy nullkalóriás édesítőt.",
    "Finoman forgasd át a körtét, hogy a fahéj és a méz minden szeletet bevonjon – ettől lesz 'fahéjas süti' hangulata.",
    "Mérd ki a diót/mandulát (edzésnapon kb. 10 g, pihenőnapon kb. 6–8 g), majd egy éles késsel vágd durvára, hogy maradjon ropogós textúra, ne legyen teljesen porrá vágva.",
    "Simítsd el a joghurtot a tálban, majd a tetejére halmozd a fahéjas–mézes körtedarabokat. Ezután szórd rá az aprított diót/mandulát egyenletesen.",
    "Ha szeretnéd, a tetejére mehet még egy leheletnyi extra fahéj – plusz illat, plusz 'desszert-feeling', kalóriát alig dob.",
    "Tálaláskor minden kanálba próbálj belefogni egy kis joghurtot, egy-két körtedarabot és pár ropogós magot – így jön ki a 'fit almás/körtés pite' élmény.",
    "Makró összkép – edzésnapos adag: kb. 230 kcal és ≈ 19 g fehérje. Pihenőnapos adag: kb. 195 kcal és ≈ 17 g fehérje. Jó kis fehérje + normális, de nem túlzó szénhidrát kombó tízóraira."
  ],
},
{
  id: "5-T-muzlis-tal",
  mealId: "5-T-muzlis-tal",
  title: "5-T – Görög joghurt müzlis tálként (joghurt + körte + dió/mandula + zab/granola – „mini reggeli” tízórai)",
  timeMinutes: 8,
  steps: [
    "Edzésnapos ajánlott adag: kb. 170 g 2%-os görög joghurt + 70–80 g körte (kockázva) + 10–12 g durvára vágott dió/mandula + 15–20 g zabpehely vagy granola. Ez a leglaktatóbb a három közül – jó, ha hosszabb, aktívabb a délelőtt.",
    "Pihenőnapos ajánlott adag: kb. 160 g görög joghurt + 60 g körte + 8–10 g dió/mandula + 10–15 g zab/granola. Itt a zab/mag mennyiséget húzzuk finoman lejjebb, hogy a kalória kicsit alacsonyabb legyen, de az élmény megmarad.",
    "Kanalazd a görög joghurtot egy mélyebb tálba. Ha túl sűrűnek érzed, adhatsz hozzá 1–2 evőkanál vizet vagy tejet, majd keverd át, amíg szép, krémes, de még mindig sűrű, 'pudingos' állagot kapsz.",
    "Mosd meg a körtét, vágd félbe, majd vágd ki a magházat. Mérd ki a szükséges mennyiséget (edzésnapon kb. 70–80 g, pihenőnapon kb. 60 g), és vágd kis, falatnyi kockákra, hogy jól keveredjen a tálban.",
    "Mérd ki a diót vagy mandulát (edzésnapra 10–12 g, pihenőnapra 8–10 g), majd egy késsel vágd durvára: maradjanak benne ropogós darabok, ne legyen teljesen porrá aprítva.",
    "Mérd ki a zabpelyhet vagy granolát. Zab esetén ez a 'tisztább', egyszerűbb verzió; granolánál picit édesebb, desszertesebb lesz a tál (általában több zsír/cukor, de a mennyiség kicsi, így belefér). Edzésnapon 15–20 g, pihenőnapon 10–15 g körül számolj.",
    "Simítsd el a joghurtot a tál alján, majd a tetejére szórd rá egyenletesen a felkockázott körtét. Ezután szórd meg az egészet az aprított dióval/mandulával.",
    "A joghurt + körte + dió/mandula tetejére szórd rá a kimért zabot vagy granolát. Ha szereted az 'almáspite/körtés desszert' ízvilágot, a tetejére még hinthetsz egy kis fahéjat is.",
    "Azonnali fogyasztásnál a zab/granola ropogósabb marad – ez 'friss müzli' élmény. Ha dobozban magaddal viszed, számolj azzal, hogy a zab/granola kicsit megszívja magát a joghurttal, krémesebb, kevésbé ropogós lesz – sokan pont így szeretik.",
    "Makró összkép – edzésnapos adag: kb. 300 kcal és ≈ 21 g fehérje. Pihenőnapos adag: kb. 245 kcal és ≈ 19 g fehérje. Ez már egy mini-reggeli jellegű tízórai: jó fehérje + kulturált mennyiségű szénhidrát, ami jól illik az izmosodás + zsírlefaragás céljaidhoz."
  ],
},
{
  id: "6-T-superfood",
  mealId: "6-T-superfood",
  title: "6-T – Superfood verzió (rizsszelet + mogyoróvaj + banán + chia)",
  timeMinutes: 6,
  steps: [
    "Edzésnapos ajánlott adag: 2 db puffasztott rizsszelet, kb. 16–18 g mogyoróvaj összesen (kb. 8–9 g / szelet), 60–70 g banán (kb. ½ kisebb vagy ⅓ nagyobb banán karikázva), 1 tk (kb. 4 g) chia mag. Jó kis energialöket délelőttre, de még nem 'szétcsapós'.",
    "Pihenőnapos ajánlott adag: 2 db puffasztott rizsszelet, kb. 12 g mogyoróvaj összesen (kb. 6 g / szelet), kb. 50 g banán, ½–1 kk (3–4 g) chia mag. Itt főleg a mogyoróvaj és a banán mennyiségét húzzuk picit lejjebb → kevesebb kalória, de még mindig jól laksz.",
    "Tedd a 2 db puffasztott rizsszeletet egy tányérra. Ha nagyon törékeny vagy morzsálódós a rizsszelet, óvatosan bánj vele kenés közben, hogy ne repedjen szét.",
    "Mérd ki a szükséges mennyiségű mogyoróvajat (edzésnapon kb. 16–18 g, pihenőnapon kb. 12 g), majd egy kiskanállal oszd el a két rizsszelet között. Kend el rajtuk vékony, de egyenletes rétegben – nem kell tükörsimára húzni, elég, ha a nagy része fedett.",
    "Hámozd meg a banánt, majd vágd kb. 0,5–1 cm vastag karikákra. Mérd ki a kívánt mennyiséget (edzésnapon 60–70 g, pihenőnapon kb. 50 g), és oszd el a karikákat a két rizsszelet tetején úgy, hogy szinte minden falatba jusson belőle.",
    "Mérd ki a chia magot (edzésnapon kb. 1 tk ≈ 4 g, pihenőnapon ½–1 kk), majd szórd egyenletesen a banánkarikák tetejére. Nem kell belenyomni, a banán és a mogyoróvaj szépen 'megtartja' a szemeket.",
    "Az elkészült superfood tízórait azonnal megeheted, vagy egy lapos dobozba téve magaddal viheted. Ha dobozba csomagolod, ügyelj rá, hogy a két rizsszelet egymás mellé kerüljön, ne tedd őket egymásra, mert összeragadnak és eltörhetnek.",
    "Makró összkép – edzésnapos adag (2 rizsszelet, ~17 g mogyoróvaj, ~65 g banán, ~4 g chia): kb. 250 kcal és ≈ 7 g fehérje. Pihenőnapos adag (2 rizsszelet, ~12 g mogyoróvaj, ~50 g banán, ~3–4 g chia): kb. 205 kcal és ≈ 6 g fehérje. Ez inkább energiát adó, gyors tízórai, a fehérjét majd más étkezésekkel együtt hozod fel a kívánt szintre."
  ],
},
{
  id: "6-T-fahejas-mezes",
  mealId: "6-T-fahejas-mezes",
  title: "6-T – Fahéjas–mézes verzió (rizsszelet + mogyoróvaj + banán + fahéj + méz)",
  timeMinutes: 6,
  steps: [
    "Edzésnapos ajánlott adag: 2 db puffasztott rizsszelet, összesen kb. 16–18 g mogyoróvaj (kb. 8–9 g / szelet), 60–70 g banán (kb. ½ kisebb vagy ⅓ nagyobb banán), bőven fahéj a tetején, és kb. 5 g méz (1 tk) vékony csíkban rácsorgatva. Ez a 'desszertesebb' tízórai: kicsit több gyors ch (banán + méz), edzős napra tökéletes energialöket.",
    "Pihenőnapos ajánlott adag: 2 db puffasztott rizsszelet, összesen kb. 12 g mogyoróvaj (kb. 6 g / szelet), 50–60 g banán, bőven fahéj, és kb. 3 g méz (½ tk, egy nagyon vékony csíkban). Itt a mézen és a mogyoróvajon húzunk lejjebb, ugyanaz az élmény, kevesebb kalóriával.",
    "Tedd a 2 db puffasztott rizsszeletet egy lapos tányérra. Óvatosan bánj velük, mert a kenés közben könnyen törhetnek, ha túl erősen nyomod a kést/kanalat.",
    "Mérd ki a szükséges mennyiségű mogyoróvajat (edzésnapon kb. 16–18 g, pihenőnapon kb. 12 g), majd egy kiskanál segítségével oszd el a két rizsszelet között. Kend el a tetejükön vékony, de egyenletes rétegben: elég, ha a nagy része fedett, nem kell tükörsima legyen.",
    "Hámozd meg a banánt, vágd kb. 0,5–1 cm vastag karikákra, majd mérd ki a kívánt mennyiséget (edzésnap: 60–70 g, pihenőnap: 50–60 g). Rendezd el a banánkarikákat a mogyoróvajas rizsszeletek tetején úgy, hogy szinte minden falatba jusson belőlük.",
    "Szórj a banánkarikák tetejére bőségesen fahéjat. Ez adja meg a 'desszertes', almáspite/jeges banános pite jellegű ízt – kalóriában gyakorlatilag nem számít, szóval nyugodtan lehetsz nagyvonalú.",
    "Mérd ki a mézet (edzésnapon kb. 5 g ≈ 1 tk, pihenőnapon kb. 3 g ≈ ½ tk), majd egy kiskanálról vékony csíkban csorgasd a banán + fahéj tetejére. Húzd ide-oda a kanalat, hogy mindenhova jusson egy kevés, ne csak egy pontra koncentrálódjon.",
    "Az elkészült fahéjas–mézes rizsszeleteket azonnal eheted, de ha hagyod állni 3–5 percet, a banán + méz + fahéj kicsit 'összeér', még desszertesebb lesz. Ha magaddal viszed, tedd őket egymás mellé egy dobozba, ne egymásra, hogy ne ragadjanak össze és ne törjenek szét.",
    "Makró összkép – edzésnapos adag (2 rizsszelet, ~17 g mogyoróvaj, ~65 g banán, ~5 g méz): kb. 245 kcal és ≈ 6 g fehérje. Pihenőnapos adag (2 rizsszelet, ~12 g mogyoróvaj, ~55 g banán, ~3 g méz): kb. 200 kcal és ≈ 5 g fehérje. Ez inkább egy desszert-feelinges energialöket, a nagyobb fehérjemennyiséget a nap többi étkezéséből hozzuk."
  ],
},
{
  id: "6-T-cottage-boost",
  mealId: "6-T-cottage-boost",
  title: "6-T – Cottage cheese boost verzió (rizsszelet + cottage + mogyoróvaj + banán)",
  timeMinutes: 6,
  steps: [
    "Edzésnapos ajánlott adag: 2 db puffasztott rizsszelet, összesen kb. 40 g cottage cheese (kb. 20 g / szelet – vékony alapréteg), 14–16 g mogyoróvaj (kb. 7–8 g / szelet a cottage tetejére), 60–70 g banán karikázva. Ez egy combosabb fehérjés–energialöket tízórai, jó edzésnapra, amikor kell az 'engine fuel'.",
    "Pihenőnapos ajánlott adag: 2 db puffasztott rizsszelet, 30–35 g cottage cheese összesen, 10–12 g mogyoróvaj, 50–60 g banán. A fehérje rendben marad, a zsiradékot (mogyoróvaj) és a ch-t (banán) picit visszavesszük, hogy a kalória alacsonyabb legyen.",
    "Tedd a 2 db puffasztott rizsszeletet egy lapos tányérra. Óvatosan bánj velük, mert a cottage + mogyoróvaj + banán réteg már picit magasabb, így könnyebben törhetnek, ha túl erősen nyomod a kanalat.",
    "Mérd ki a cottage cheese-t (edzésnapon összesen kb. 40 g, pihenőnapon kb. 30–35 g), és oszd el a két rizsszelet között. Egy kiskanállal vékony, egyenletes alaprétegben kend el a tetejükön – nem baj, ha darabos marad, a cottage alapból 'túrós' állagú.",
    "Mérd ki a mogyoróvajat (edzésnapon összesen kb. 14–16 g, pihenőnapon kb. 10–12 g), majd a cottage tetejére kanalazd. Kend szét a közepén és a szélek nagy részén – nem gond, ha nem fedi 100%-ban, elég, ha a falatok többségében ott van.",
    "Hámozd meg a banánt, vágd kb. 0,5–1 cm-es karikákra, majd mérd ki a kívánt mennyiséget (edzésnap: 60–70 g, pihenőnap: 50–60 g). Rendezd el a banánkarikákat a mogyoróvajas rétegen, finoman rányomva őket, hogy ne potyogjanak le.",
    "Opcionális extra íz: ha szeretnéd, szórj a tetejére egy csipet fahéjat, vagy nagyon pici sót – a só–édes kontraszt a mogyoróvaj + banán kombóval nagyon jól működik.",
    "Tálalás: az elkészült szeleteket azonnal eheted, vagy dobozba is teheted. Ha viszed magaddal, próbáld őket egy rétegben egymás mellé rakni, ne egymásra, hogy a tetejük ne ragadjon össze és a rizsszeletek ne törjenek szét.",
    "Makró összefoglaló – 6. napi mindhárom tízórai, edzés- és pihenőnapra (kb. értékek):",
    "• 6-T – Superfood verzió (rizsszelet + mogyoróvaj + banán + chia)\n  – Edzésnap: ≈ 250 kcal, ≈ 7 g fehérje\n  – Pihenőnap: ≈ 205 kcal, ≈ 6 g fehérje",
    "• 6-T – Fahéjas–mézes verzió (rizsszelet + mogyoróvaj + banán + fahéj + méz)\n  – Edzésnap: ≈ 245 kcal, ≈ 6 g fehérje\n  – Pihenőnap: ≈ 200 kcal, ≈ 5 g fehérje",
    "• 6-T – Cottage cheese boost verzió (rizsszelet + cottage + mogyoróvaj + banán)\n  – Edzésnap: ≈ 250 kcal, ≈ 10 g fehérje\n  – Pihenőnap: ≈ 210 kcal, ≈ 8 g fehérje\nÍgy a 6. napi tízóraik közül ez a cottage-es boost a legfehérjésebb, a másik kettő inkább 'okos energialöket' jellegű."
  ],
},
{
  id: "7-T-alap",
  mealId: "7-T-alap",
  title: "7-T – Alap avokádós pirítós (TK kenyér + avokádókrém + 1 főtt tojás)",
  timeMinutes: 8,
  steps: [
    "Edzésnapos ajánlott adag: 1 szelet teljes kiőrlésű kenyér (≈35–40 g, pirítva), 50–60 g avokádó (kb. ½ kisebb avokádó, villával pépesítve), 1 db M-es tojás keményre főzve, felszeletelve.",
    "Pihenőnapos ajánlott adag: 1 szelet teljes kiőrlésű kenyér (≈30–35 g), 40–50 g avokádó, 1 db M-es tojás. A fehérje marad stabil, a zsír + ch picit visszafogva.",
    "1) Tojás megfőzése: tedd a tojást egy kis lábosba, öntsd fel bőven hideg vízzel, hogy ellepje. Forrald fel, majd forrástól számítva 8–10 percig főzd, hogy keménytojás legyen. Ezután öntsd le a forró vizet, engedj rá hideg vizet, hagyd kicsit hűlni, majd hámozd meg és tedd félre.",
    "2) Kenyér pirítása: a teljes kiőrlésű kenyérszeletet tedd pirítóba, vagy száraz serpenyőben pirítsd mindkét oldalát kb. 1–1 percig, amíg enyhén ropogós, aranybarna lesz. Edzésnapon mehet a picit nagyobb szelet (35–40 g körül), pihenőnapon inkább a vékonyabb (30–35 g).",
    "3) Avokádókrém elkészítése: vágd körbe az avokádót a mag körül, csavard szét, majd kanalazd ki a szükséges mennyiséget egy kis tálba (edzésnap: 50–60 g, pihenőnap: 40–50 g). Villával törd pépesre, sózd és borsozd ízlés szerint. Ha szeretnéd, adj hozzá pár csepp citromlevet (nem barnul, frissebb íz) és egy csipet chili pelyhet – ez kalóriában gyakorlatilag nulla plusz.",
    "4) Tojás szeletelése: a kihűlt, megpucolt tojást vágd fel karikákra, vagy vágd félbe/négybe, attól függően, hogy a pirítós tetejére vagy inkább mellé szeretnéd tenni. Ha akarod, picit megsózhatod.",
    "5) Összeállítás: tedd a frissen pirított TK kenyeret egy tányérra, kend rá egyenletesen az avokádókrémet. A tojásszeleteket vagy a pirítós tetejére rakod végig sorban, vagy a pirítós mellé tálalod külön – mindkét verzió működik. Díszítheted friss petrezselyemmel vagy snidlinggel.",
    "6) Tálalás / csomagolás: azonnal eheted kézből, mint egy open-face szendvicset. Ha magaddal viszed, a legjobb, ha a pirítóst avokádókrémmel megkenve teszed dobozba, a felszeletelt tojást pedig külön rekeszbe/mini dobozba rakod, és csak evés előtt teszed rá, hogy ne ázzon el annyira a kenyér.",
    "Makró összefoglaló – 7-T – Alap avokádós pirítós (kb. értékek):",
    "• Edzésnapos adag (≈38 g TK kenyér, ≈55 g avokádó, 1 tojás)\n  ≈ 245 kcal\n  ≈ 10 g fehérje",
    "• Pihenőnapos adag (≈32 g TK kenyér, ≈45 g avokádó, 1 tojás)\n  ≈ 215 kcal\n  ≈ 9–10 g fehérje",
    "A 7. napi többi tízórai variációnál (2. és 3. verzió) ehhez igazítva fogjuk tartani a logikát: edzésnapon picit több energiát (kenyér/avokádó), pihenőnapon minimálisan visszavéve a ch + zsír mennyiséget, a fehérjét stabilan magasan tartva."
  ]
},
{
  id: "7-T-mediterran",
  mealId: "7-T-mediterran",
  title: "7-T – Mediterrán avokádós pirítós (TK pirítós + avokádó + paradicsom + olívabogyó + 1 tojás)",
  timeMinutes: 10,
  steps: [
    "Edzésnapos ajánlott adag: 1 szelet teljes kiőrlésű kenyér (≈35–40 g), 50–60 g avokádó, 35–40 g apróra vágott paradicsom, 8–10 g olívabogyó (2–3 kisebb szem, felkarikázva), oregánó + só + bors, 1 db M-es tojás keményre főzve.",
    "Pihenőnapos ajánlott adag: 1 szelet teljes kiőrlésű kenyér (≈30–35 g), 40–50 g avokádó, 35–40 g paradicsom, 5–8 g olívabogyó, 1 db M-es tojás. Itt főleg az olíván és az avón húzzuk lejjebb a zsírt.",
    "1) Tojás megfőzése: tedd a tojást egy kis lábosba, öntsd fel hideg vízzel, hogy ellepje. Forrald fel, majd forrástól számítva 8–10 percig főzd, hogy keménytojás legyen. Ezután öntsd le a forró vizet, engedj rá hideg vizet, hűtsd le és hámozd meg. Tedd félre teljesen kihűlni, hogy szépen lehessen szeletelni.",
    "2) Kenyér pirítása: a teljes kiőrlésű kenyérszeletet (edzésnap ≈35–40 g, pihenőnap ≈30–35 g) tedd pirítóba, vagy száraz serpenyőben pirítsd mindkét oldalát kb. 1–1 percig, amíg kívül enyhén ropogós, belül még puha marad.",
    "3) Mediterrán avokádókrém – avó alap: az avokádót vágd körbe a mag körül, csavard szét, kanalazd ki a szükséges mennyiséget (edzésnap 50–60 g, pihenőnap 40–50 g) egy kis tálba. Villával törd pépesre.",
    "4) Paradicsom + olívabogyó a krémbe: a paradicsomot mosd meg, vágd nagyon apró kockákra (kb. 35–40 g). Add az avokádóhoz. Az olívabogyókat (edzésnap 8–10 g, pihenőnap 5–8 g) karikázd fel vagy vágd apró darabokra, és ezt is keverd az avokádókrémhez.",
    "5) Fűszerezés: a paradicsomos–olívás avokádókrémet sózd, borsozd ízlés szerint, majd szórj bele szárított oregánót (vagy olasz fűszerkeveréket). Ha szeretnéd, mehet bele néhány csepp citromlé is, hogy frissebb legyen az íz és ne barnuljon olyan gyorsan az avó.",
    "6) Tojás szeletelése: a kihűlt, megpucolt keménytojást vágd fel karikákra vagy cikkekre. Ha szeretnéd, enyhén megsózhatod – de figyelj az össz sómennyiségre, mert a krémben is van só.",
    "7) Összeállítás: tedd a frissen pirított TK kenyérszeletet egy tányérra. Kend rá a mediterrán avokádókrémet egyenletes, bőséges rétegben (ez a fő zsíros–rostos alap). A tojásszeleteket a tetejére is fektetheted szépen sorban, vagy a pirítós mellé is tálalhatod külön – mindkét verzió működik.",
    "8) Tálalás / csomagolás: a kész pirítóst megszórhatod még egy csipet extra oregánóval díszítésnek. Azonnal eheted, vagy dobozban magaddal viheted. Ha viszed, a legjobb, ha a pirítóst és az avokádókrémet külön dobozban tárolod, a szeletelt tojást pedig külön rekeszben – evés előtt 1 perc alatt összerakod, így nem ázik el a kenyér.",
    "Makró összefoglaló – 7-T – Mediterrán avokádós pirítós (kb. értékek):",
    "• Edzésnapos adag (≈38 g TK kenyér, ≈55 g avokádó, ≈40 g paradicsom, ≈10 g olívabogyó, 1 tojás)\n  ≈ 270 kcal\n  ≈ 11 g fehérje",
    "• Pihenőnapos adag (≈32 g TK kenyér, ≈45 g avokádó, ≈40 g paradicsom, ≈7 g olívabogyó, 1 tojás)\n  ≈ 235 kcal\n  ≈ 10 g fehérje"
  ]
},
{
  id: "7-T-wrap",
  mealId: "7-T-wrap",
  title: "7-T – Avokádós tojásos wrap / pita (TK tortilla/pita + avokádókrém + tojás + zöldség)",
  timeMinutes: 10,
  steps: [
    "Edzésnapos ajánlott adag: 1 db teljes kiőrlésű tortilla vagy pita (≈45–50 g), 45–55 g avokádó (krémesre törve), 1 db M-es tojás keményre főzve, karikázva, 30–40 g zöldség (pl. paradicsom + paprika + uborka apróra vágva).",
    "Pihenőnapos ajánlott adag: 1 db kisebb/vékonyabb TK tortilla vagy pita (≈35–40 g), 35–45 g avokádó, 1 db M-es tojás, 40–50 g zöldség (nyugodtan több zöldség, ez szinte „ingyen” telít).",
    "1) Tojás megfőzése: tedd a tojást egy kis lábosba, öntsd fel hideg vízzel, hogy ellepje. Forrald fel, majd a forrástól számítva 8–10 percig főzd keménytojásnak. Ezután öntsd le a forró vizet, engedj rá hideg vizet, hűtsd le teljesen, majd hámozd meg.",
    "2) Tojás szeletelése: a megpucolt keménytojást vágd fel karikákra vagy cikkekre (amit jobban szeretsz wrapbe/pitába pakolni). Félretéve várja az összerakást.",
    "3) Avokádókrém készítése: az avokádót vágd körbe a mag körül, csavard szét, kanalazd ki a szükséges mennyiséget (edzésnap 45–55 g, pihenőnap 35–45 g) egy kis tálba. Villával törd pépesre. Sózd, borsozd ízlés szerint, majd adj hozzá pár csepp citromlét. Ha szeretnéd, szórhatsz bele kevés oregánót vagy bazsalikomot is, hogy mediterránabb íze legyen.",
    "4) Zöldségek előkészítése: mosd meg a paradicsomot, paprikát, uborkát. Vágd őket kis kockákra vagy rövid csíkokra (30–40 g edzésnap, 40–50 g pihenőnap). Ha salátát is használsz, tépkedd falatnyi darabokra. A cél, hogy a zöldség kényelmesen beférjen a wrapbe/pitába, ne potyogjon szét minden falatnál.",
    "5) Tortilla / pita előmelegítése – tortilla: egy száraz serpenyőt hevíts közepes lángon, majd tedd bele a teljes kiőrlésű tortillát. Mindkét oldalát 10–15 másodpercig melegítsd, hogy rugalmas, hajlítható legyen (ne törjön tekerés közben).",
    "6) Tortilla / pita előmelegítése – pita: a pitát serpenyőben vagy előmelegített sütőben pár percig melegítsd, amíg kicsit felpuhul és langyos lesz. Így könnyebb lesz megnyitni és megtölteni anélkül, hogy szétszakadna.",
    "7) Töltés – wrap verzió: tedd a meleg tortillát egy tányérra. A középső sávra (nem a szélekig) kend fel az avokádókrémet egyenletesen. Erre sorban tedd rá a tojásszeleteket, majd halmozd rá a felkockázott/csíkokra vágott zöldséget. Figyelj, hogy hosszanti csíkban legyen a töltelék, így könnyebb lesz feltekerni.",
    "8) Wrap feltekerése: a tortilla alját hajtsd fel kb. 2–3 cm-t, hogy alul ne folyjon ki a töltelék. Ezután egyik oldalról kezdve szorosan feltekered, majd a végén kicsit odanyomod, hogy megtartsa a formáját. Ha nagyon tömött, ferdén félbe vághatod – így könnyebb enni, és jobban is néz ki.",
    "9) Töltés – pita verzió: a megmelegített pitát vágd félbe, így kapsz két félkör alakú „zsebet”. Mindkét fél pitába kenj egy vékony réteg avokádókrémet belülre, majd töltsd meg tojásszeletekkel és a felaprított zöldségekkel. Finoman nyomkodd meg, hogy a töltelék eloszoljon a zseben belül, de ne repessze szét a kenyeret.",
    "10) Tálalás / csomagolás: a wrapet ferdén félbevágva tálalhatod, a pitazsebeket pedig egyszerűen kézbe kapva. Ha viszed magaddal, csomagold alufóliába vagy sütőpapírba, hogy evéskor ne essen szét. Hűtve is jól bírja néhány órán át.",
    "Makró összefoglaló – 7-T – Avokádós tojásos wrap / pita (kb. értékek):",
    "• Edzésnapos adag (≈50 g TK tortilla/pita, ≈50 g avokádó, ≈35 g zöldség, 1 tojás)\n  ≈ 300 kcal\n  ≈ 12 g fehérje",
    "• Pihenőnapos adag (≈38–40 g TK tortilla/pita, ≈40 g avokádó, ≈45 g zöldség, 1 tojás)\n  ≈ 250 kcal\n  ≈ 11 g fehérje"
  ]
},
{
  id: "1-E-alap",
  mealId: "1-E-alap",
  title: "1-E – Alap grillezett csirkemell és barna rizs",
  timeMinutes: 35,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Edzésnapos adag (súlyzós / crossfit / intenzívebb nap): kb. 170–180 g nyers csirkemell, 70–75 g nyers barna rizs, 150 g brokkoli (nyersen), 80–100 g sárgarépa, 1 evőkanál (≈8–10 g) olívaolaj.",
    "Pihenőnapos adag: kb. 150–160 g nyers csirkemell, 50–55 g nyers barna rizs, 180–200 g brokkoli, 80–100 g sárgarépa, 1 teáskanál (≈5 g) olívaolaj.",

    // 1) Rizs előkészítése
    "1) Barna rizs kimérése és öblítése: mérj ki edzésnapon 70–75 g, pihenőnapon 50–55 g barna rizst. Szűrőben, folyó hideg víz alatt öblítsd át, hogy lejöjjön róla a felesleges keményítő.",
    "2) Rizs főzése: tedd a rizst egy kisebb lábosba kb. 2,5× mennyiségű vízzel (pl. 70 g rizshez ~175 ml víz). Enyhén sózd meg. Forrald fel, majd vedd vissza a lángot, fedd le, és lassú tűzön főzd kb. 25–30 percig, amíg a rizs megpuhul és felveszi a vizet.",
    "3) Pihentetés: amikor megfőtt, húzd le a tűzről, továbbra is lefedve hagyd állni még 5–10 percig, hogy pergősebb, puhább legyen. Tálalásig lefedve pihentesd.",

    // 2) Zöldség párolása
    "4) Zöldségek előkészítése: a brokkolit mosd meg, szedd kisebb rózsákra. A sárgarépát hámozd meg, majd vágd karikákra vagy vékony csíkokra. Edzésnapon kb. 150 g brokkolit és 80–100 g répát, pihenőnapon 180–200 g brokkolit és 80–100 g répát használj.",
    "5) Zöldség párolása: tedd a brokkolit és a répát párolóbetétbe, vagy kevés (1–2 ujjnyi) sós vízbe egy lábosban. Fedd le, és közepes lángon párold kb. 8–10 percig, amíg roppanós-puhák lesznek (ne főzd szét).",
    "6) Olívaolaj hozzáadása: amikor a zöldség elkészült és leszűrted (ha vízben pároltad), locsold meg az előírt mennyiségű olívaolajjal (edzésnap: ~1 ek, pihenőnap: ~1 tk). Forgasd át, hogy mindenhol bevonja egy vékony réteg.",

    // 3) Csirkemell sütése
    "7) Csirkemell előkészítése: a csirkemellet tisztítsd meg a hártyáktól, inaktól. Vágd 1–2 nagyobb szeletre, vagy „pillangózd” (hosszában félbevágod és kihajtod), hogy egyenletes vastagságú legyen, így egyformán sül.",
    "8) Fűszerezés: sózd, borsozd, majd szórd meg kedvenc fűszereiddel (pl. fokhagymapor, fűszerpaprika, olasz fűszerkeverék, grill fűszer). Dörzsöld bele a fűszert mindkét oldalába.",
    "9) Serpenyő / grill előkészítése: forrósíts fel egy grillserpenyőt vagy kontaktgrillt közepes–magas lángon. Ha nem tapadásmentes, fújj rá nagyon vékonyan olajspray-t, vagy kenj rá néhány csepp olajat papírtörlővel eloszlatva.",
    "10) Csirke sütése: tedd a befűszerezett csirkeszeleteket a forró serpenyőbe/grillre. Süsd oldalanként kb. 5–6 percig (vastagságtól függően), amíg a külseje szépen megpirul, a belseje pedig teljesen átsül. Villával óvatosan megnyomva már ne legyen nyers/puha, de belül még maradjon szaftos, ne szárítsd ki.",

    // 4) Tálalás
    "11) Tálalás – edzésnap: egy mélyebb tányérra kanalazd ki az elkészült barna rizst (a nagyobb, edzésnapi mennyiséget). Mellé halmozd a párolt brokkolit és répát. A tetejére vagy a rizs mellé tedd a felszeletelt grillezett csirkemellet. Ha ételhordó dobozba készíted, mehet alulra a rizs, rá a csirke, oldalra a zöldség.",
    "12) Tálalás – pihenőnap: a kisebb rizsadagot tedd a tányérra, mellé a nagyobb zöldségmennyiséget (itt a brokkoli–répa a „volumen”). A csirkemellet ugyanúgy szeletelve tedd a rizs mellé/fölé. Olívaolaj már rajta van a zöldségen, plusz zsiradék nem szükséges.",
    
    // 5) Makró összefoglaló
    "Makró összefoglaló – 1-E – Alap grillezett csirkemell és barna rizs (kb. értékek):",
    "• Edzésnapos adag (≈175 g csirke, ≈72,5 g barna rizs, 150 g brokkoli, 90 g répa, ~1 ek olívaolaj)\n  ≈ 620 kcal\n  ≈ 51 g fehérje",
    "• Pihenőnapos adag (≈155 g csirke, ≈52,5 g barna rizs, 190 g brokkoli, 90 g répa, ~1 tk olívaolaj)\n  ≈ 505 kcal\n  ≈ 46 g fehérje"
  ]
},
{
  id: "1-E-curry",
  mealId: "1-E-curry",
  title: "1-E – Csirkecurry barna rizzsel",
  timeMinutes: 35,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Edzésnapos adag: kb. 170–180 g nyers csirkemell, 70–75 g nyers barna rizs, 120–150 g brokkoli, 80–100 g sárgarépa, főzéshez max. 1 teáskanál (≈5 g) olaj vagy olajspray, kb. 40 ml light kókusztej (vagy 20 ml kókusztej + 20 ml víz/alaplé).",
    "Pihenőnapos adag: kb. 150–160 g nyers csirkemell, 50–55 g nyers barna rizs, 150–180 g brokkoli, 80–100 g sárgarépa, főzéshez max. 1 teáskanál (≈5 g) olaj vagy olajspray, kb. 30 ml light kókusztej (vagy ~15 ml kókusztej + víz).",

    // 1) Rizs főzése
    "1) Barna rizs kimérése és öblítése: mérj ki edzésnapon 70–75 g, pihenőnapon 50–55 g barna rizst. Szűrőben, folyó hideg víz alatt alaposan öblítsd át, hogy lejöjjön róla a felesleges keményítő.",
    "2) Rizs főzése: tedd a rizst egy kisebb lábosba kb. 2,5× mennyiségű vízzel (pl. 70 g rizshez ~175 ml víz). Enyhén sózd meg. Forrald fel, majd vedd vissza a lángot, fedd le, és lassú tűzön főzd kb. 25–30 percig, amíg megpuhul és felveszi a vizet.",
    "3) Pihentetés: amikor megfőtt, húzd le a tűzről, továbbra is lefedve hagyd állni még 5–10 percig, hogy pergősebb, puhább legyen. Tálalásig lefedve pihentesd.",

    // 2) Zöldség előkészítése
    "4) Brokkoli és répa előkészítése: a brokkolit mosd meg, szedd kisebb rózsákra (edzésnapon kb. 120–150 g, pihenőnapon 150–180 g). A sárgarépát hámozd meg, majd vágd vékony félkarikákra vagy csíkokra (~80–100 g mindkét napon).",
    "5) Zöldség párolása – két opció: A) Külön párolod a brokkolit és a répát enyhén sós víz fölött/párolóbetétben kb. 8–10 percig, roppanós-puhára, és a végén kevered a currybe. B) Közvetlenül a curry szószba teszed őket, és abban párolódnak meg (ekkor picit tovább hagyod rotyogni a szószt).",

    // 3) Csirke előkészítése és pirítása
    "6) Csirkemell előkészítése: tisztítsd meg a csirkemellet a hártyáktól, inaktól, majd vágd falatnyi kockákra. Enyhén sózd, borsozd, és szórd meg kevés curry fűszerrel.",
    "7) Serpenyő felforrósítása: forrósíts fel egy mélyebb serpenyőt vagy wokot közepes–magas lángon. Fújj bele olajspray-t vagy adj hozzá legfeljebb 1 teáskanál olajat, és oszlasd el a felületen.",
    "8) Csirke pirítása: dobd a felforrósított serpenyőbe a csirkekockákat, és időnként átkeverve pirítsd kb. 6–8 percig, amíg minden oldaluk kifehéredik és enyhén megpirul. Ne szárítsd ki, de ne maradjon nyers a közepe.",

    // 4) Curry alap készítése
    "9) (Opcionális) Hagymás alap: ha szeretnél hagymát, egy kis fej vöröshagymát apróra vágsz, a csirke előtt vagy után a serpenyőbe teszed, és üvegesre párolod kevés zsiradékon.",
    "10) Fűszerezés: szórd meg a serpenyő tartalmát bőséges curry fűszerrel, és ízlés szerint adhatsz hozzá kurkumát, fokhagymaport, gyömbért, chilit. Keverd át, hogy a fűszerek egyenletesen bevonják a csirkét (és a hagymát).",
    "11) Light kókusztej hozzáadása: öntsd fel a csirkét a kimért light kókusztejjel (edzésnapon ~40 ml, pihenőnapon ~30 ml). Ha sűrű kókusztejet használsz, hígítsd kevés vízzel vagy alaplével, hogy a szósz ne legyen túl tömény. Keverd össze, hogy szép sárga, illatos curry alapot kapj.",

    // 5) Zöldség a curryben
    "12) Zöldségek hozzáadása: ha külön pároltad a brokkolit és a répát, most keverd a curry-s csirkéhez. Ha a szószban párolod őket, most dobd bele a nyers brokkolit és répát, fedd le, és közepes lángon párold 5–8 percig, amíg roppanós-puhák lesznek, de nem főnek szét.",
    "13) Állag és ízesítés finomhangolása: ha a curry túl sűrű, adj hozzá egy kevés vizet vagy alaplevet; ha túl híg, fedő nélkül főzd még pár percig, hogy sűrűsödjön. Kóstold meg, és szükség szerint állíts a só, bors és curry mennyiségén.",

    // 6) Tálalás
    "14) Tálalás – edzésnap: egy tányérra kanalazd ki a nagyobb, edzésnapi barna rizsadagot. Rá vagy mellé halmozd a curry-s csirkét a brokkolival és répával együtt. Ez lesz a „tankolósabb” ebéd: sok fehérje + normál mennyiségű szénhidrát.",
    "15) Tálalás – pihenőnap: a kisebb rizsadagot tedd a tányérra, mellé a nagyobb zöldségmennyiséget (itt a brokkoli–répa a volumen). A curry-s csirkét a rizs mellé/fölé tálald – a fehérje magas marad, a szénhidrát és zsír picit visszafogottabb.",
    "16) Dobozolás: ha ételhordóba készíted, az aljára mehet a barna rizs, rá a csirkecurry a zöldségekkel. Másnapra is jól melegíthető, az ízek még jobban összeérnek.",

    // 7) Makró összefoglaló
    "Makró összefoglaló – 1-E – Csirkecurry barna rizzsel (kb. értékek):",
    "• Edzésnapos adag (≈175 g csirke, ≈72,5 g barna rizs, ≈135 g brokkoli, ≈90 g répa, ~1 tk olaj, ~40 ml light kókusztej)\n  ≈ 600 kcal\n  ≈ 51 g fehérje",
    "• Pihenőnapos adag (≈155 g csirke, ≈52,5 g barna rizs, ≈165 g brokkoli, ≈90 g répa, ~1 tk olaj, ~30 ml light kókusztej)\n  ≈ 510 kcal\n  ≈ 45 g fehérje"
  ]
},
{
  id: "1-E-salata",
  mealId: "1-E-salata",
  title: "1-E – Salátás hideg változat (rizses–csirkés saláta)",
  timeMinutes: 35,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Edzésnapos adag: kb. 170 g nyers csirkemell, 65–70 g nyers barna rizs, ~200–250 g vegyes zöldség (pl. brokkoli + répa + paprika + uborka), kb. 1 evőkanál (≈8–10 g) olívaolaj az öntethez, 1–2 ek citromlé, só, bors, friss vagy szárított zöldfűszerek (petrezselyem, snidling).",
    "Pihenőnapos adag: kb. 150–160 g nyers csirkemell, 50 g nyers barna rizs, ~220–270 g vegyes zöldség, 2–3 teáskanál (≈6–8 g) olívaolaj az öntethez, 1–2 ek citromlé, só, bors, zöldfűszerek.",

    // 1) Rizs főzése és hűtése
    "1) Barna rizs kimérése és öblítése: mérj ki edzésnapon 65–70 g, pihenőnapon 50 g barna rizst. Szűrőben, folyó hideg víz alatt alaposan öblítsd át, hogy lejöjjön róla a felesleges keményítő.",
    "2) Rizs főzése: tedd a rizst egy kisebb lábosba kb. 2,5× mennyiségű vízzel (pl. 70 g rizshez ~175 ml víz). Enyhén sózd meg. Forrald fel, majd vedd vissza a lángot, fedd le, és lassú tűzön főzd kb. 25–30 percig, amíg megpuhul és felveszi a vizet.",
    "3) Pihentetés és hűtés: amikor megfőtt, húzd le a tűzről, lefedve hagyd állni még 5–10 percet. Ezután terítsd szét egy nagyobb tálban vagy tányéron, hogy gyorsabban kihűljön, és ne tapadjon nagy csomókba. Hagyhatod szobahőn kihűlni, vagy betolhatod rövid időre a hűtőbe.",

    // 2) Csirkemell sütése és felkockázása
    "4) Csirkemell előkészítése: a csirkemellet tisztítsd meg a hártyáktól, inaktól, majd vágd 1–2 nagyobb szeletre vagy csíkokra. Enyhén sózd, borsozd, szórd meg fűszerpaprikával, fokhagymaporral, olaszos/grill fűszerkeverékkel ízlés szerint.",
    "5) Csirke sütése: forrósíts fel egy tapadásmentes serpenyőt vagy grillserpenyőt közepes–magas lángon. Ha szükséges, fújj bele egy kevés olajspray-t vagy kenj el nagyon vékonyan pár csepp olajat. Tedd bele a csirkeszeleteket/csíkokat, és süsd oldalanként kb. 5–6 percig, amíg szépen megpirulnak és teljesen átsülnek, de nem száradnak ki.",
    "6) Csirke hűtése és felkockázása: amikor a csirke megsült, vedd le a tűzről, hagyd néhány percig hűlni. Ezután vágd fel csíkokra vagy falatnyi kockákra, hogy salátába dobható legyen. Tedd félre hűlni (szobahő vagy hűtő).",

    // 3) Zöldségek előkészítése
    "7) Brokkoli előkészítése: a brokkolit mosd meg, szedd kisebb rózsákra. Dobd lobogó enyhén sós vízbe 3–4 percre, vagy párold röviden, hogy roppanós-puhára főjön. Szűrd le, majd hideg vízzel öblítsd át, hogy megállítsd a főzést és szép zöld maradjon.",
    "8) Répa, paprika, uborka: a répát hámozd meg, majd vágd vékony karikákra vagy hasábokra. A paprikát mosd meg, csumázd ki, és vágd csíkokra vagy kockákra. Az uborkát mosd meg, és vágd karikákra, félkarikákra vagy csíkokra. Használhatsz pluszban salátát is (jégsaláta, rukkola, vegyes leveles), amit mosás után csíkokra vágsz vagy tépkedsz.",

    // 4) Öntet elkészítése
    "9) Öntet alap: egy kis tálban vagy fedeles mini dobozban keverd össze az olívaolajat (edzésnap: ~1 ek, pihenőnap: ~2–3 tk), a citromlevet (1–2 ek), egy csipet sót és borsot.",
    "10) Zöldfűszerek hozzáadása: szórj az öntethez aprított friss petrezselymet/snidlinget vagy szárított zöldfűszereket (pl. oregánó, bazsalikom). Villával keverd össze, vagy ha fedeles tálkád van, rázd össze, amíg egynemű, emulgeált öntetet kapsz.",

    // 5) Saláta összeállítása – tál vs. mealprep
    "11) Tál-saláta (azonnali evéshez): egy nagy tálba tedd a kihűlt barna rizst (edzésnapon a nagyobb, pihenőnapon a kisebb mennyiséget). Add hozzá a felkockázott csirkemellet és az összes előkészített zöldséget. Öntsd rá az olívaolajos–citromos öntetet, majd alaposan forgasd össze, hogy minden falatra jusson egy kis szósz.",
    "12) Dobozolós mealprep verzió: ételhordó doboz aljára szórd a barna rizst. Erre tedd a csirkekockákat/csíkokat. A tetejére vagy külön rekeszekbe rendezd a zöldségeket (brokkoli, répa, paprika, uborka, saláta), hogy ne ázzanak el. Az öntetet külön kis dobozban vagy mini üvegben vidd magaddal, és csak evés előtt öntsd rá, majd forgasd át a salátát.",

    // 6) Tálalás / fogyasztás
    "13) Fogyasztás: ez az ebéd hidegen is nagyon jó (főleg nyáron), de ha szeretnéd, fogyasztás előtt kiveheted kicsit a hűtőből, hogy szobahőmérsékletű legyen. A lényeg: minden falatban legyen egy kis rizs, csirke és ropogós zöldség – laktató, de nem „elnehezítő” ebéd.",

    // 7) Makró összefoglaló
    "Makró összefoglaló – 1-E – Salátás hideg változat (rizses–csirkés saláta) (kb. értékek):",
    "• Edzésnapos adag (≈170 g csirke, ≈67,5 g barna rizs, ≈225 g vegyes zöldség, ~1 ek olívaolaj)\n  ≈ 580 kcal\n  ≈ 49 g fehérje",
    "• Pihenőnapos adag (≈155 g csirke, 50 g barna rizs, ≈245 g vegyes zöldség, ~2–3 tk olívaolaj)\n  ≈ 485 kcal\n  ≈ 44 g fehérje"
  ]
},
{
  id: "2-E-suto",
  mealId: "2-E-suto",
  title: "2-E – Sütőben egyben (pulykamell + édesburgonya + zöldbab)",
  timeMinutes: 35,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Edzésnapos adag: kb. 170–180 g nyers pulykamell, 200–220 g nyers édesburgonya (kb. 1 nagyobb darab), 150 g zöldbab, ~1 evőkanál (≈8–10 g) olívaolaj összesen (fele mehet a húsra, fele az édesburgonyára/zöldbabra), só, bors, fokhagymapor, rozmaring/fűszerpaprika ízlés szerint.",
    "Pihenőnapos adag: kb. 150–160 g nyers pulykamell, 140–160 g nyers édesburgonya (kb. 1 közepes darab), 170–200 g zöldbab, ~1 teáskanál (≈5 g) olívaolaj összesen (elsősorban az édesburgonyára, a zöldbab mehet nagyon minimális zsiradékkal), ugyanazok a fűszerek.",

    // 1) Sütő előmelegítése
    "1) Sütő előmelegítése: melegítsd elő a sütőt 180–200 °C-ra (alsó-felső sütés). Amíg melegszik, elő tudsz készülni a hússal és a zöldségekkel.",

    // 2) Pulykamell előkészítése
    "2) Pulykamell előkészítése: a pulykamellet öblítsd le hideg vízzel, majd papírtörlővel töröld szárazra. Ha nagyon vastag a darab, vágd 2 vékonyabb szeletre, hogy egyenletesebben átsüljön.",
    "3) Fűszerezés: a pulykát mindkét oldalán sózd, borsozd. Szórd meg fokhagymaporral, fűszerpaprikával, rozmaringgal/majoránnával vagy egy grill fűszerkeverékkel. Dörzsöld bele a fűszereket, hogy mindenhova jusson.",

    // 3) Édesburgonya előkészítése
    "4) Édesburgonya hámozása: az édesburgonyát alaposan mosd meg. Ha héj nélkül szereted, hámozd meg, ha héjjal ennéd, csak dörzsöld tisztára.",
    "5) Édesburgonya darabolása: vágd kockákra vagy hasábokra (steak-burgonya stílusban), kb. ujjnyi vastagságú darabokra, hogy nagyjából egyszerre süljenek át a hússal.",
    "6) Édesburgonya fűszerezése: tedd a felkockázott édesburgonyát egy tálba. Locsold meg az adagodnak megfelelő mennyiségű olívaolaj nagyobb részével (edzésnap: bátrabban, pihenőnap: visszafogottabban). Sózd, borsozd, szórhatsz rá füstölt pirospaprikát, rozmaringot vagy egyéb kedvenc fűszert. Forgasd át, hogy az olaj és a fűszerek minden darabot bevonjanak.",

    // 4) Tepsi előkészítése és első sütési fázis
    "7) Tepsi kibélelése: bélelj ki egy közepes tepsit sütőpapírral, így kevesebbet kell majd mosogatni, és kevésbé ragad le semmi.",
    "8) Pulyka és édesburgonya elrendezése: a tepsi egyik oldalára tedd le a befűszerezett pulykaszeleteket. A másik oldalára szórd egy rétegben az édesburgonya-darabokat; ne legyen túl vastag rétegben, hogy szépen piruljanak, ne csak párolódjanak.",
    "9) Első sütési kör: tedd a tepsit az előmelegített sütőbe, és süsd kb. 15 percig. Közben elő tudod készíteni a zöldbabot.",

    // 5) Zöldbab előkészítése
    "10) Zöldbab – friss vagy fagyasztott: ha fagyasztott zöldbabot használsz, nem kell teljesen felolvasztani, elég, ha kiveszed a fagyasztóból. Ha friss zöldbabod van, mosd meg, és vágd le a végeit.",
    "11) Zöldbab fűszerezése: tedd a zöldbabot egy tálba, enyhén sózd. Ha szeretnéd, fújhatsz rá nagyon kevés olajspray-t vagy tehetsz rá pár csepp olajat (edzésnapon lazábban, pihenőnapon minimálisan). Forgasd át, hogy a só egyenletesen eloszoljon.",

    // 6) Második sütési fázis – zöldbabbal együtt
    "12) Tepsi átforgatása: 15 perc sütés után húzd ki a tepsit. Az édesburgonya-darabokat egy spatulával vagy lapáttal forgasd át, hogy minden oldaluk szépen pirulni tudjon.",
    "13) Zöldbab hozzáadása: szórd a zöldbabot a tepsibe a pulyka és az édesburgonya mellé/közé úgy, hogy lehetőleg egy rétegben legyen. Ha maradt még az olívaolajból (edzésnapon), azt finoman rácsorgathatod a zöldségre.",
    "14) Vissza a sütőbe: tedd vissza a tepsit a sütőbe további kb. 10–12 percre. Ez idő alatt a pulyka teljesen átsül, az édesburgonya belül krémes, kívül picit pirult lesz, a zöldbab pedig roppanós-puhára készül.",

    // 7) Készre ellenőrzés
    "15) Pulykamell ellenőrzése: vágj egyet a pulykaszelet vastagabb részébe. A belseje ne legyen rózsaszín, a húslé legyen átlátszó. Ha még kicsit nyersnek látod, tedd vissza pár percre a sütőbe.",
    "16) Édesburgonya ellenőrzése: szúrj villát egy nagyobb darabba. Ha könnyedén belemegy, az édesburgonya megpuhult, kész.",
    "17) Zöldbab állaga: akkor jó, ha már nem nyers-ropogós, de még nem főtt szét – enyhén roppanós, rugalmas marad.",

    // 8) Tálalás – edzésnap vs. pihenőnap
    "18) Tálalás – edzésnap: tégy a tányér egyik felére bőséges adagot az édesburgonyából (a nagyobb, edzésnapi mennyiséget). Mellé halmozd a zöldbabot, a tányér másik felére pedig tedd a szeletelt pulykamellet. Ha ételhordóba készíted, alulra mehet az édesburgonya és a zöldbab, tetejére a pulyka.",
    "19) Tálalás – pihenőnap: a kisebb édesburgonya-adagot tedd a tányérra, mellé a nagyobb mennyiségű zöldbabot (itt a zöldség a „volumen”). A pulykamellet szeletelve tedd a zöldség mellé/fölé. Plusz zsiradékot már nem kell hozzáadni, a pici olívaolaj bőven elég.",

    // 9) Makró összefoglaló
    "Makró összefoglaló – 2-E – Sütőben egyben (pulykamell + édesburgonya + zöldbab) (kb. értékek):",
    "• Edzésnapos adag (≈175 g pulyka, ≈210 g édesburgonya, 150 g zöldbab, ≈10 g olívaolaj)\n  ≈ 510 kcal\n  ≈ 48 g fehérje",
    "• Pihenőnapos adag (≈155 g pulyka, 150 g édesburgonya, ≈185 g zöldbab, ≈5 g olívaolaj)\n  ≈ 400 kcal\n  ≈ 43 g fehérje"
  ]
},
{
  id: "2-E-wok",
  mealId: "2-E-wok",
  title: "2-E – Wok verzió (pulykacsík + édesburgonya + zöldbab)",
  timeMinutes: 25,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Edzésnapos adag: kb. 170 g nyers pulykamell csíkokra vágva, 180–200 g nyers édesburgonya (kockázva), 150 g zöldbab, ~1 evőkanál (≈8–10 g) olaj összesen a wokban, 1–2 teáskanál light szójaszósz, fokhagyma, gyömbér, chili, bors, kevés citromlé ízlés szerint.",
    "Pihenőnapos adag: kb. 150–160 g nyers pulykamell, 130–150 g nyers édesburgonya, 170–200 g zöldbab, ~1 teáskanál (≈5 g) olaj, 1 teáskanál light szójaszósz, ugyanazok a fűszerek. Itt kicsit kevesebb édesburgonya és zsír, cserébe több zöldbab adja a volument.",

    // 1) Édesburgonya előkészítése
    "1) Édesburgonya hámozása és kockázása: az édesburgonyát mosd meg, hámozd meg (vagy héjastul, ha úgy szereted, csak dörzsöld tisztára), majd vágd kb. 1–1,5 cm-es kockákra. Edzésnapon 180–200 g, pihenőnapon 130–150 g mennyiséggel számolj.",
    "2) Előfőzés (gyorsabb wokoláshoz – opcionális, de ajánlott): forralj fel egy kis lábosban sós vizet, dobd bele az édesburgonya-kockákat, és főzd 5–7 percig, míg kívül elkezdenek puhulni, de még nem főttek szét. Szűrd le, tedd félre. Ha nem akarod előfőzni, a wokban fogsz velük kicsit hosszabban dolgozni.",

    // 2) Pulykacsíkok előkészítése
    "3) Pulyka csíkozása: a pulykamellet öblítsd le, töröld szárazra, majd vágd vékony csíkokra. Edzésnapon kb. 170 g, pihenőnapon kb. 150–160 g nyers húst használj.",
    "4) Fűszerezés alap: enyhén sózd és borsozd a pulykacsíkokat. Mehet rá fokhagymapor vagy aprított fokhagyma, valamint gyömbérpor vagy frissen reszelt gyömbér. Chilivel is megszórhatod, ha bírod a csípőset. Forgasd át, hogy minden csík kapjon a fűszerekből.",

    // 3) Zöldbab előkészítése
    "5) Zöldbab – friss vagy fagyasztott: ha fagyasztott zöldbabot használsz, elég, ha kiveszed a fagyasztóból, nem kell külön előfőzni. Ha friss zöldbabot használsz, mosd meg, vágd le a végeit, és ha nagyon hosszú, vágd félbe vagy harmadolva falatnyira.",
    "6) Zöldbab mennyiség: edzésnapon kb. 150 g, pihenőnapon 170–200 g zöldbabbal számolj – pihenőnapon a nagyobb zöldségmennyiség segít, hogy laktató maradjon az étel alacsonyabb kalóriával.",

    // 4) Wok / serpenyő felforrósítása
    "7) Wok előkészítése: tegyél fel egy wokot vagy nagyobb serpenyőt magas lángra. Hagyd felforrósodni, ez a jó pirult íz kulcsa.",
    "8) Olaj hozzáadása: edzésnapon adj a wokba kb. 1 evőkanál (≈8–10 g) olajat, pihenőnapon kb. 1 teáskanál (≈5 g) olajat. Keringesd meg a wokban, hogy a felületet bevonja a vékony olajréteg.",

    // 5) Pulykacsíkok pirítása
    "9) Pulykacsíkok wokolása: tedd a fűszerezett pulykacsíkokat a forró wokba. Magas lángon pirítsd 5–6 percig, közben folyamatosan kevergetve, amíg mindenhol kifehéredik és kicsit megpirul a külseje.",
    "10) Félretétel: ha a pulyka már átsült kívül-belül, szedd ki egy tányérra, és tedd félre. Ha sok levet engedett, mielőtt kiszeded, pár percig nagy lángon forrald el a felesleges nedvességet, hogy ne legyen vizes az alap.",

    // 6) Édesburgonya pirítása a wokban
    "11) Édesburgonya a wokban – előfőzés nélkül: ha nem főzted elő az édesburgonyát, tedd a kockákat a wokba (szükség esetén cseppents még nagyon kevés olajat), és közepes–magas lángon pirítsd kb. 8–10 percig, gyakran kevergetve. A cél, hogy kívül piruljon, belül puhuljon.",
    "12) Édesburgonya a wokban – előfőzve: ha előfőzted a kockákat, elég 4–5 perc pirítás a wokban, hogy kívül enyhén megpiruljanak és felvegyék az alap ízeket.",

    // 7) Zöldbab hozzáadása
    "13) Zöldbab hozzáadása: add a zöldbabot az édesburgonyához a wokban. Pirítsd együtt 5–7 percig, hogy a zöldbab átmelegedjen, kicsit piruljon, de maradjon roppanós-puha. Ha úgy érzed, túl száraz, egy kevés vizet (1–2 evőkanál) adhatsz hozzá, hogy gőzben is párolódjon.",

    // 8) Pulyka vissza, fűszerezés, szójaszósz
    "14) Pulyka visszarakása: tedd vissza a pulykacsíkokat a wokba a zöldbab–édesburgonya keverék mellé.",
    "15) Szójaszósz és fűszerek: önts rá edzésnapon 1–2 teáskanál, pihenőnapon kb. 1 teáskanál light szójaszószt. Mehet még rá friss vagy granulált fokhagyma, reszelt gyömbér, chilipehely, bors, és egy kevés citromlé. Keverd jól össze, hogy a szósz és a fűszerek mindenhol bevonják az alapanyagokat.",
    "16) Rövid összeforgatás: nagy lángon még 2–3 percig forgasd a wok tartalmát, hogy az ízek összeérjenek, a szósz kissé besűrűsödjön, de a zöldség ne főjön szét.",

    // 9) Tálalás – edzésnap vs. pihenőnap
    "17) Tálalás – edzésnap: szedd a teljes wokkeveréket egy nagy tányérra vagy ételhordó dobozba. Itt az édesburgonya mennyisége és a kicsit több olaj ad plusz energiát a súlyzós / crossfit / intenzívebb napokra, a pulyka pedig stabil fehérjealapot ad.",
    "18) Tálalás – pihenőnap: pihenőnapon a kisebb édesburgonya- és olajmennyiség miatt a fogás könnyebb, de a több zöldbab és a magas pulykamennyiség miatt mégis laktató. Tányérra szedve a zöldbabot és édesburgonyát halmozd nagyobb részen, a pulykát tedd a tetejére vagy mellé.",

    // 10) Megjegyzés – plusz köret opció
    "19) Megjegyzés: edzésnapon, ha extrém módon kellene még több szénhidrát (pl. nagyon hosszú edzés vagy két edzés egy nap), elvileg mellé tehetnél egy kis adag főtt rizst is, de az alapreceptben az édesburgonya önmagában is teljes értékű szénhidrátforrás, így a legtöbb napra bőven elég lesz.",

    // 11) Makró összefoglaló
    "Makró összefoglaló – 2-E – Wok verzió (pulykacsík + zöldbab + édesburgonya) (kb. értékek):",
    "• Edzésnapos adag (≈170 g pulyka, ≈190 g édesburgonya, 150 g zöldbab, ≈10 g olaj)\n  ≈ 490 kcal\n  ≈ 47 g fehérje",
    "• Pihenőnapos adag (≈155 g pulyka, 140 g édesburgonya, ≈185 g zöldbab, ≈5 g olaj)\n  ≈ 395 kcal\n  ≈ 43 g fehérje"
  ]
},
{
  id: "2-E-hidegtal",
  mealId: "2-E-hidegtal",
  title: "2-E – Meal prep hidegtál (pulyka + édesburgonya + zöldbab + saláta)",
  timeMinutes: 30,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Edzésnapos adag: kb. 170–180 g nyers pulykamell (sütve, majd csíkokra/kockákra vágva), 180–200 g nyers édesburgonya (sütve, kockázva), 150–170 g zöldbab, 30–50 g extra saláta (jégsaláta / rukkola / salátamix), az öntethez kb. 1 evőkanál (≈8–10 g) olívaolaj, 1–2 evőkanál citromlé vagy balzsamecet, só, bors, oregánó/bazsalikom.",
    "Pihenőnapos adag: kb. 150–160 g nyers pulykamell, 130–150 g nyers édesburgonya, 170–200 g zöldbab, 40–60 g extra saláta, az öntethez 2–3 teáskanál (≈6–8 g) olívaolaj, ugyanannyi citromlé/balzsamecet és fűszer. Itt kicsit kevesebb édesburgonya és zsír, de több zöldség és stabil fehérje.",

    // 1) Pulyka & édesburgonya előkészítése
    "1) Pulykamell előkészítése: a pulykamellet öblítsd le, töröld szárazra, majd vágd 1–2 nagyobb szeletre, hogy egyenletesen süljön. Sózd, borsozd, szórd meg fokhagymaporral, fűszerpaprikával, oregánóval vagy grill fűszerkeverékkel. Dörzsöld bele a fűszereket mindkét oldalába.",
    "2) Édesburgonya előkészítése: az édesburgonyát mosd meg, hámozd meg (vagy héjastul, alaposan ledörzsölve), majd vágd kb. 1,5–2 cm-es kockákra vagy vastagabb hasábokra. Edzésnapon 180–200 g, pihenőnapon 130–150 g nyers mennyiséggel számolj.",
    "3) Sütés (használhatod a sütőben egyben verzió logikáját is): bélelj ki egy tepsit sütőpapírral. Az egyik oldalára tedd a befűszerezett pulykaszeleteket, a másik oldalára az édesburgonya-darabokat egy rétegben. Locsold meg az édesburgonyát az előírt olívaolaj-mennyiség kb. felével (edzésnap: kb. ½ ek, pihenőnap: kb. ½ tk–1 tk), sózd, borsozd, fűszerezd (pl. rozmaring, füstölt paprika). A pulykára mehet a maradék pici olaj, ha szükséges.",
    "4) Sütés ideje: tedd a tepsit 180–200 °C-ra előmelegített sütőbe. Süsd kb. 20–25 percig, félidőnél az édesburgonyát forgasd át, hogy minden oldala szépen piruljon. A pulyka akkor jó, ha a belseje nem rózsaszín, de még szaftos. Ha kész, hagyd kihűlni, majd a pulykát vágd csíkokra vagy falatnyi kockákra, az édesburgonyát is igazítsd falatnyi darabokra, ha kell.",

    // 2) Zöldbab elkészítése
    "5) Zöldbab főzése/párolása: a zöldbabot (edzésnap: kb. 150–170 g, pihenőnap: 170–200 g) forrásban lévő, enyhén sós vízben főzd 5–7 percig, amíg roppanós-puhává válik, majd szűrd le. Alternatívaként kevés víz fölött párolhatod fedő alatt is hasonló ideig.",
    "6) Lehűtés: ha salátásan, hidegen szeretnéd enni, a zöldbabot szűrés után öblítsd át hideg vízzel, hogy gyorsabban lehűljön, és megmaradjon a szép zöld színe. Tedd félre hűlni.",

    // 3) Salátaalap
    "7) Saláta előkészítése: a jégsalátát / rukkolát / salátamixet mosd meg bő vízben, majd alaposan csöpögtesd le (vagy salátacentrifugával pörgesd szárazra). Tépjed vagy vágd falatnyi darabokra. Edzésnapon kb. 30–50 g, pihenőnapon 40–60 g salátával számolj (pihenőnapra jöhet több volumen).",
    
    // 4) Öntet elkészítése
    "8) Öntet – edzésnap: egy kis tálban vagy fedeles mini üvegben keverd össze az edzésnapi öntetet: kb. 1 evőkanál (≈8–10 g) olívaolajat, 1–2 evőkanál citromlevet vagy balzsamecetet, sót, borsot, és ízlés szerint oregánót, bazsalikomot vagy petrezselymet. Villával keverd simára, vagy rázd össze.",
    "9) Öntet – pihenőnap: pihenőnapra ugyanígy készítsd, de olívaolajból 2–3 teáskanálnyit (≈6–8 g) használj, citromlé/balzsamecet és fűszerek mennyisége maradhat az edzésnapos szinten. Így picit alacsonyabb lesz a zsír- és kalóriatartalom.",

    // 5) Hidegtál összeállítása (tál-verzió)
    "10) Hidegtál összeállítása – azonnali fogyasztásra: egy nagy keverőtálba tedd a salátát, a kihűlt zöldbabot, az édesburgonya-kockákat és a pulykacsíkokat. Öntsd rá az elkészített öntetet (edzés- vagy pihenőnapi verziót), majd kanál + villa segítségével alaposan forgasd össze, hogy az olajos–citromos/balzsamecetes keverék mindenhol bevonja az alapanyagokat.",
    "11) Tálalás: szedd ki egy nagy tányérra – alul a salátás–zöldséges alap, benne/fölötte az édesburgonya és a pulyka. Ez hidegen is nagyon jól működik, főleg, ha friss, ropogós salátát használsz.",

    // 6) Dobozolás (meal prep)
    "12) Dobozolás – meal prep: ha több adagot készítesz előre, oszd szét az elkészített hidegtálat 2–3 ételdobozba (1 doboz = 1 ebéd). Arányokat tartsd: edzésnapra nagyobb édesburgonya- és pulykamennyiség, pihenőnapra kicsit kevesebb édesburgonya és olaj, több zöldbab + saláta.",
    "13) Öntet külön tárolása (opció): ha nem szeretnéd, hogy a saláta túlzottan megpuhuljon, az öntetet tárold külön kis üvegben vagy mini dobozban, és csak evés előtt öntsd a tálra, majd gyorsan forgasd össze.",
    "14) Hűtés, eltarthatóság: a meal prep hidegtál hűtőben 2–3 napig biztonsággal eláll. Evés előtt kiveheted 10–15 perccel, hogy ne legyen teljesen „hűtő-hideg”, vagy ha úgy szereted, közvetlenül a hűtőből is eheted. Melegítés nem kötelező, ez kimondottan hideg/ langyos fogás.",

    // 7) Tálalási különbségek – edzésnap vs. pihenőnap
    "15) Tálalás – edzésnap: edzésnapon a tányéron/dobozban az édesburgonya és a pulyka mennyisége domináljon, a zöldbab és saláta pedig kellemes, laktató hátteret ad. Ez így jó energialöketet biztosít a nap második felére / edzéshez.",
    "16) Tálalás – pihenőnap: pihenőnapon a nagyobb zöldbab + saláta mennyiség adja a fő volument. Az édesburgonya mennyisége picit visszafogottabb, így a kalória alacsonyabb, de a pulyka miatt a fehérjebevitel továbbra is stabilan magas marad.",

    // 8) Makró összefoglaló
    "Makró összefoglaló – 2-E – Meal prep hidegtál (kb. értékek):",
    "• Edzésnapos adag (≈175 g pulyka, ≈190 g édesburgonya, ≈160 g zöldbab, egy kevés saláta, ≈10 g olívaolaj)\n  ≈ 500 kcal\n  ≈ 48 g fehérje",
    "• Pihenőnapos adag (≈155 g pulyka, 140 g édesburgonya, ≈185 g zöldbab, saláta, ≈7 g olívaolaj)\n  ≈ 410 kcal\n  ≈ 43 g fehérje"
  ]
},
{
  id: "3-E-alap",
  mealId: "3-E-alap",
  title: "3-E – Lazac – alap verzió (serpenyős lazac + sütőben édesburgonya + serpenyős zöldség)",
  timeMinutes: 35,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Edzésnapos adag: kb. 150–160 g nyers lazacfilé, 200–220 g nyers édesburgonya, 180–200 g zöldségmix (pl. brokkoli + cukkini + paprika + répa), összesen kb. 8–10 g olívaolaj (kb. 1 evőkanál – ebből egy kevés mehet az édesburgonyára és a zöldségre, a többi a lazac sütéséhez), fűszerek: só, bors, citromlé, fokhagyma, kakukkfű/rozmaring ízlés szerint.",
    "Pihenőnapos adag: kb. 130–140 g nyers lazacfilé, 150–170 g nyers édesburgonya, 200–220 g zöldségmix, összesen kb. 5–6 g olívaolaj (kb. 1 teáskanál + egy leheletnyi spriccelés a zöldségre), fűszerek ugyanazok. Itt inkább az édesburgonyán és az olajon húzunk lejjebb, a lazac mennyisége csak kicsit csökken (jó zsír!).",

    // 1) Édesburgonya – sütőben
    "1) Sütő előmelegítése: melegítsd elő a sütőt 200 °C-ra (alsó–felső sütés).",
    "2) Édesburgonya előkészítése: az édesburgonyát mosd meg, hámozd meg (vagy hagyhatod héjastul is, ha alaposan ledörzsölöd). Vágd hasábokra (mint a sült krumplit) vagy kb. 1–2 cm-es kockákra. Edzésnapon 200–220 g, pihenőnapon 150–170 g nyers mennyiséggel számolj.",
    "3) Fűszerezés, olaj: tedd egy tálba az édesburgonya-darabokat. Locsold meg az összes olívaolaj-mennyiség egy részével (edzésnap: kb. 1/2 evőkanál, pihenőnap: kb. 1/2 teáskanál), sózd, borsozd, és szórhatsz rá füstölt paprikát, rozmaringot vagy kakukkfüvet.",
    "4) Tepsire rendezés: borítsd az édesburgonyát sütőpapírral bélelt tepsire, egyetlen rétegben, hogy minden darab tudjon pirulni.",
    "5) Sütés: tedd a tepsit a 200 °C-os sütőbe, és süsd kb. 20–25 percig. Félidőben (10–12 perc körül) egyszer forgasd át a darabokat. Akkor jó, ha kívül picit pirult, belül pedig puha – villával könnyen beléjük tudsz szúrni.",

    // 2) Zöldségek – serpenyőben
    "6) Zöldségek előkészítése: a választott zöldségeket (pl. brokkoli, cukkini, paprika, répa) mosd meg. A brokkolit szedd kis rózsákra, a cukkinit vágd félkarikákra, a paprikát csíkokra, a répát vékonyabb karikákra vagy hasábokra. Edzésnapon kb. 180–200 g, pihenőnapon 200–220 g zöldséget használj.",
    "7) Serpenyő felmelegítése: forrósíts fel egy tapadásmentes serpenyőt közepes–magas lángon. Adj hozzá nagyon kevés olívaolajat az összkeretből (pár csepp vagy egy spricc olajspray).",
    "8) Zöldségek pirítása: dobd a zöldségeket a serpenyőbe, és közepes–magas lángon pirítsd 8–12 percig, időnként megkeverve. Sózd, borsozd, mehet rá fokhagymapor, oregánó, bazsalikom vagy egy sima zöldfűszer-mix. Akkor jó, ha kívül egy kicsit pirult, de belül még roppanós marad.",

    // 3) Lazac – serpenyőben
    "9) Lazac előkészítése: a lazacfilét papírtörlővel töröld szárazra. Ha bőrös, rajta hagyhatod a bőrt – sütéshez jól jön. Sózd, borsozd mindkét oldalát.",
    "10) Lazac fűszerezése: locsold meg kevés citromlével, szórhatsz rá fokhagymaport vagy frissen reszelt fokhagymát, illetve egy kevés kakukkfüvet/rozmaringot vagy kaprot, ha szereted a klasszikus halas ízvilágot.",
    "11) Serpenyő olajozása: egy tiszta serpenyőt forrósíts fel közepes–magas lángon. Tedd bele az olívaolaj-mennyiség maradékát (edzésnap: kb. 1/2 ek, pihenőnap: kb. 1/2 tk + szükség esetén pár csepp), és forgasd el, hogy vékony rétegben bevonja a serpenyő alját.",
    "12) Lazac sütése – bőrös oldal: ha bőrös a lazac, először a bőrös felével lefelé tedd a forró serpenyőbe. Süsd kb. 3–4 percig, amíg a hús széle a feléig–kétharmadáig kivilágosodik/átszíneződik.",
    "13) Lazac sütése – másik oldal: fordítsd meg a lazacot, és a másik oldalát is süsd kb. 3–4 percig. Cél, hogy a közepe még enyhén szaftos maradjon, de ne legyen nyers. Ha nagyon vastag a filé, a végén lefedheted a serpenyőt 1–2 percre, hogy átpárolódjon.",
    "14) Készre ellenőrzés: a lazac akkor van kész, ha villával könnyen „pikkelyekre” esik, és a belseje halvány rózsaszín, nem nyers, de nem is teljesen kiszáradt. A bőrös rész szépen megpirul, ropogós lesz.",

    // 4) Tálalás – edzésnap vs. pihenőnap
    "15) Tálalás – edzésnap: tegyél a tányérra egy nagyobb adag sült édesburgonyát (az edzésnapi mennyiséget), mellé halmozd a serpenyős zöldségmixet. A tetejére vagy mellé fekteted a frissen sült lazacfilét. Locsolhatsz az egészre még pár csepp friss citromlevet tálaláskor.",
    "16) Tálalás – pihenőnap: a pihenőnapi mennyiségeket használd – a tányéron a lazac és a zöldség legyen a fő volumen, az édesburgonya kicsit visszafogottabb, így a kalória alacsonyabb, de a hal jó zsírtartalma és fehérjéje megmarad. Szintén mehet rá kevés friss citromlé.",

    // 5) Dobozolás (meal prep opció)
    "17) Dobozolás (opcionális): ha előre szeretnél több adagot készíteni, az édesburgonyát, zöldséget és lazacot külön is elraktározhatod dobozokban. Evéskor egy dobozba mehet alulra az édesburgonya, mellé/fölé a zöldség, tetejére a lazac. Melegítésnél a lazacot óvatosan, rövid ideig melegítsd, hogy ne száradjon ki.",

    // 6) Makró összefoglaló
    "Makró összefoglaló – 3-E – Lazac – alap verzió (kb. értékek):",
    "• Edzésnapos adag (≈155 g lazac, ≈210 g édesburgonya, ≈190 g zöldség, ≈9 g olívaolaj)\n  ≈ 630 kcal\n  ≈ 38 g fehérje",
    "• Pihenőnapos adag (≈135 g lazac, ≈160 g édesburgonya, ≈210 g zöldség, ≈5,5 g olívaolaj)\n  ≈ 520 kcal\n  ≈ 34 g fehérje"
  ]
},
{
  id: "3-E-suto-egyben",
  mealId: "3-E-suto-egyben",
  title: "3-E – Sütőben egyben változat (lazac + édesburgonya + zöldségek egy tepsiben)",
  timeMinutes: 30,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Edzésnapos adag: kb. 150–160 g nyers lazacfilé, 190–210 g nyers édesburgonya, 200 g zöldségmix (pl. brokkoli + répa + cukkini + lilahagyma), összesen kb. 8–10 g olívaolaj (fele a lazacra, fele az édesburgonyára + zöldségekre), fűszerek: só, bors, fokhagyma, oregánó, citromlé/citromkarikák.",
    "Pihenőnapos adag: kb. 130–140 g nyers lazacfilé, 140–160 g nyers édesburgonya, kb. 220 g zöldségmix, összesen kb. 5–6 g olívaolaj (visszafogottabb mennyiség az edzésnaphoz képest), fűszerezés ugyanaz. Itt inkább az édesburgonyán és az olajon spórolunk, a lazac csak kicsit kevesebb (jó zsír marad).",

    // 1) Előmelegítés, tepsi
    "1) Sütő előmelegítése: melegítsd elő a sütőt 200 °C-ra (alsó–felső sütés).",
    "2) Tepsi előkészítése: bélelj ki egy nagyobb tepsit sütőpapírral – így nem tapad le a lazac és a zöldség, kevesebbet kell mosogatni.",

    // 2) Édesburgonya + zöldség előkészítése
    "3) Édesburgonya előkészítése: az édesburgonyát mosd meg, hámozd meg (vagy hagyd héjastul, ha alaposan ledörzsölted). Vágd kb. 1–2 cm-es kockákra vagy hasábokra. Edzésnapon 190–210 g, pihenőnapon 140–160 g nyers mennyiséggel számolj.",
    "4) Zöldségek előkészítése: a zöldségmixet (pl. brokkoli, répa, cukkini, lilahagyma) mosd meg. A brokkolit szedd kis rózsákra, a répát vágd vékonyabb karikákra, a cukkinit félkarikákra vagy kockákra, a lilahagymát cikkekre/szeletekre. Edzésnapon kb. 200 g, pihenőnapon kb. 220 g zöldséget használj.",
    "5) Fűszerezés és olajozás: tedd az édesburgonyát és a zöldségeket egy nagy tálba. Locsold meg az olívaolaj-mennyiség nagyobb részével (edzésnap: kb. 1/2–2/3 evőkanál, pihenőnap: kb. 1/2 teáskanál + egy leheletnyi spricc), sózd, borsozd, és szórj rá fokhagymaport, oregánót, kakukkfüvet – amit szeretsz.",
    "6) Átforgatás: kézzel vagy kanállal forgass mindent alaposan össze, hogy az olaj és a fűszerek minden darabot vékonyan bevonjanak.",

    // 3) Lazac előkészítése
    "7) Lazac szárazra törlése: a lazacfilét papírtörlővel óvatosan töröld szárazra, hogy szebben piruljon.",
    "8) Lazac fűszerezése: sózd, borsozd mindkét oldalát. Locsold meg kevés citromlével, szórhatsz rá oregánót, kaprot vagy egy kevés fokhagymaport. Ha szeretnéd, tehetsz a tetejére 1–2 vékony citromkarikát is.",
    "9) Olaj a lazacra: a maradék olívaolajat csorgasd a lazacra (edzésnapon bátrabban, pihenőnapon visszafogottabban), és oszlasd el a felületén.",

    // 4) Tepsibe rendezés
    "10) Zöldségek és édesburgonya elrendezése: az olajos-fűszeres édesburgonya–zöldség mixet borítsd a sütőpapírral bélelt tepsire, és egyenletesen terítsd szét egy rétegben (ne legyen nagyon egymás tetején, hogy tudjon pirulni).",
    "11) Lazac a tetejére: a lazacfilét (egyben vagy két kisebb darabra vágva) tedd az édesburgonya–zöldség ágyra, középre vagy kissé oldalra. Ha használsz citromkarikát, most tedd a lazac tetejére.",

    // 5) Sütés
    "12) Sütés: tedd a tepsit a 200 °C-ra előmelegített sütőbe. Süsd kb. 20–25 percig. Közben nem muszáj megkeverni, de ha nagyon pirul a széle, 15 perc körül óvatosan átmozgathatod a zöldségeket.",
    "13) Készre ellenőrzés: akkor jó, ha az édesburgonya puha (villával könnyen beleszúrsz), a zöldségek picit pirultak, de nem szenesek, a lazac pedig átsült, de belül még szaftos. A lazac húsa villával könnyen „pikkelyekre” esik, nem nyers a közepe.",

    // 6) Tálalás
    "14) Tálalás – edzésnap: tegyél a tányérra egy nagyobb adag sült édesburgonyát és zöldségmixet (az edzésnapi mennyiséget), mellé/tetejére fektetve a lazacfilét. Ha szeretnéd, locsolj rá még pár csepp friss citromlevet közvetlenül tálalás előtt.",
    "15) Tálalás – pihenőnap: a pihenőnapi mennyiségekkel dolgozz – a tányéron a lazac és a zöldség legyen a fő volumen, az édesburgonya kicsit visszafogottabb. Ízben ugyanaz az élmény, csak kicsit diétásabb kalóriaoldalon.",

    // 7) Meal prep / dobozolás
    "16) Meal prep / dobozolás: ha több adagot készítesz, a sült édesburgonyát, a zöldségeket és a lazacot arányosan oszd szét ételhordó dobozokba (1 doboz = 1 ebéd). Hűtőben 2–3 napig simán eláll. Melegítésnél érdemes a lazacot óvatosan, közepes hőfokon visszamelegíteni, hogy ne száradjon ki.",

    // 8) Makró összefoglaló
    "Makró összefoglaló – 3-E – Sütőben egyben változat (kb. értékek):",
    "• Edzésnapos adag (≈155 g lazac, ≈200 g édesburgonya, ≈200 g zöldség, ≈9 g olívaolaj)\n  ≈ 620 kcal\n  ≈ 38 g fehérje",
    "• Pihenőnapos adag (≈135 g lazac, ≈150 g édesburgonya, ≈220 g zöldség, ≈5,5 g olívaolaj)\n  ≈ 515 kcal\n  ≈ 34 g fehérje"
  ]
},
{
  id: "3-E-azsiai-bowl",
  mealId: "3-E-azsiai-bowl",
  title: "3-E – Ázsiai bowl (szezámmagos lazac + édesburgonya + wok zöldség)",
  timeMinutes: 30,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Edzésnapos adag: kb. 150 g nyers lazacfilé, 180–200 g nyers édesburgonya (kockázva/szeletelve), 180–200 g zöldségmix (pl. répa + kaliforniai paprika + cukkini + brokkoli + vöröshagyma), kb. 8–10 g olaj összesen (lazachoz + wokhoz együtt), kb. 5 g szezámmag (≈1 teáskanál), 1–2 tk light szójaszósz, opcionálisan kevés citrom-/lime-lé, gyömbér, fokhagyma, chili.",
    "Pihenőnapos adag: kb. 130–140 g lazacfilé, 140–160 g nyers édesburgonya, 200–220 g zöldségmix, kb. 5–6 g olaj összesen, 3–4 g szezámmag, kb. 1 tk light szójaszósz. Itt a lazac csak kicsit kevesebb (jó zsír marad), inkább az édesburgonya és az olaj mennyisége csökken, a zöldség aránya nő.",

    // 1) Édesburgonya – alap
    "1) Édesburgonya tisztítása: az édesburgonyát mosd meg alaposan, hámozd meg (vagy hagyd héjastul, ha jó minőségű és jól ledörzsölted).",
    "2) Felvágás: vágd kb. 1–1,5 cm-es kockákra vagy kisebb hasábokra, hogy gyorsan puhuljon. Edzésnapon 180–200 g, pihenőnapon 140–160 g nyers mennyiséggel dolgozz.",
    "3) Főzés vagy sütés – opció 1 (főtt alap): forrásban lévő, enyhén sós vízbe tedd a kockákat, és főzd kb. 10–12 percig, amíg puha, de nem esik szét. Szűrd le, és tedd félre – ez lesz a bowl alja.",
    "4) Főzés vagy sütés – opció 2 (sült alap): ha inkább sütve szeretnéd, akkor 200 °C-ra előmelegített sütőben, sütőpapíros tepsin, kevés olajjal meglocsolva, 20–25 perc alatt süsd puhára/pirultra, félidőben átforgatva. A kész édesburgonyát tálalásig félretolhatod/melegen tartod.",

    // 2) Zöldségek – wokban
    "5) Zöldségek előkészítése: a répa, kaliforniai paprika, cukkini, brokkoli és vöröshagyma (vagy amit használsz) legyen megmosva, megtisztítva. Répát vágd vékony csíkokra vagy julienne-re, paprikát csíkokra, cukkinit félkarikákra/csíkokra, brokkolit kis rózsákra, a hagymát vékony szeletekre.",
    "6) Wok/serpenyő felforrósítása: melegíts fel egy wokot vagy nagyobb serpenyőt magas lángon. Adj hozzá az olajból kb. 1–2 teáskanálnyit (edzésnapon itt kicsit bátrabban, pihenőnapon inkább vékony réteg).",
    "7) Zöldségek pirítása: dobd a zöldségeket a forró wokba, és nagy lángon pirítsd 6–8 percig, folyamatosan rázva/kevergetve. A cél, hogy kívül picit piruljanak, belül roppanós-puhák maradjanak.",
    "8) Fűszerezés ázsiai módra: a végén önts rá 1–2 tk light szójaszószt (pihenőnapon elég 1 tk), keverj hozzá reszelt gyömbért, aprított fokhagymát (vagy port), ízlés szerint egy csipet chilit. Kóstold meg, ha kell, mehet még pici bors.",

    // 3) Szezámmagos lazac
    "9) Lazac előkészítése: a lazacfilét papírtörlővel töröld szárazra, hogy szépen piruljon. Sózd, borsozd mindkét oldalát. Locsold meg egy kevés citrom- vagy lime-lével, ha szereted a frissebb ízt.",
    "10) Szezámmag kérge: szórj egy kis tányérba 3–5 g szezámmagot (edzésnapon mehet a kb. 5 g, pihenőnapon elég 3–4 g). A lazac felső (nem bőrös) oldalát óvatosan nyomd bele a szezámmagba, hogy rátapadjon és kérget képezzen.",
    "11) Serpenyő és olaj: forrósíts fel egy tapadásmentes serpenyőt közepes–magas lángon, és tedd bele a maradék olajat (az edzésnapos/pihenőnapos keretből).",
    "12) Lazac sütése – első oldal: tedd a lazacot a serpenyőbe (ha bőrös, bőrös felével lefelé kezdj), és süsd kb. 3–4 percig, amíg az alsó oldal szépen megpirul, a hús oldalt nézve elkezd kivilágosodni.",
    "13) Lazac sütése – szezámmagos oldal: óvatosan fordítsd meg, és a szezámmagos oldalt is süsd 2–3 percig közepes lángon. Figyelj, hogy a szezámmag ne égjen meg – ha nagyon nagy a láng, vedd kicsit vissza. A lazac belül maradjon szaftos, ne szárítsd ki.",

    // 4) Bowl összeállítása
    "14) Alap réteg – édesburgonya: vegyél elő egy mélyebb tálat. Az aljára kanalazd a megfőtt/megsült édesburgonyát – ez adja a bowl „alapját”, a lassú szénhidrátot. Edzésnapon jöhet a nagyobb mennyiség, pihenőnapon a visszafogottabb.",
    "15) Wok zöldség réteg: az édesburgonya tetejére halmozd a wokolt zöldségeket. Pihenőnapon nyugodtan legyen kicsit több zöldség-volumen – ez telít, de kevés kalóriával.",
    "16) Lazac a tetején: a szezámmagos lazacot fektetsd a zöldségek tetejére. Ha szépen egyben maradt a filé, így mutat a legjobban, de fel is darabolhatod, ha könnyebben szeretnél falatozni.",
    "17) Extra ízesítés: tálaláskor locsolhatsz a tetejére még pár csepp citrom- vagy lime-levet, és ha a sót engedik a makróid, mehet még 1 tk szójaszósz a bowlra – óvatosan, mert sós. Szórhatsz rá egy csipet extra szezámmagot is, ha elfér a napi keretben.",

    // 5) Makró összefoglaló
    "Makró összefoglaló – 3-E – Ázsiai bowl (kb. értékek):",
    "• Edzésnapos adag (≈150 g lazac, ≈190 g édesburgonya, ≈190 g zöldség, ≈9 g olaj, ≈5 g szezámmag)\n  ≈ 630 kcal\n  ≈ 38 g fehérje",
    "• Pihenőnapos adag (≈135 g lazac, ≈150 g édesburgonya, ≈210 g zöldség, ≈5,5 g olaj, ≈3,5 g szezámmag)\n  ≈ 530 kcal\n  ≈ 34 g fehérje"
  ]
},
{
  id: "4-E-alap",
  mealId: "4-E-alap",
  title: "4-E – Alap verzió – Marhahús + bulgur + párolt karfiol és gomba",
  timeMinutes: 30,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Edzésnapos adag: kb. 150 g sovány marhahús (nyersen, pl. comb, nem zsíros tarja), 70 g bulgur szárazon mérve, 200 g karfiol, 100 g gomba (csiperke vagy laska), összesen kb. 5–7 g olívaolaj/étolaj (kb. 1 lapos evőkanál – egy része a húshoz, egy része a zöldséghez).",
    "Pihenőnapos adag: kb. 130–140 g marhahús, 50 g bulgur, 220–250 g karfiol, 120 g gomba, kb. 4–5 g olaj összesen. Fehérje mindkét napon magas marad, pihenőnapon inkább a szénhidrát (bulgur) és a zsír megy lejjebb, a zöldség volumene nő.",

    // 1) Bulgur főzése
    "1) Bulgur kimérése: mérj ki edzésnapon 70 g, pihenőnapon 50 g bulgurt. Tedd egy kisebb lábosba.",
    "2) Víz hozzáadása: önts rá kb. 2–2,5× mennyiségű vizet (70 g bulgurhoz nagyjából 150–170 ml víz, 50 g-hoz arányosan kevesebb). Adj a vízhez egy csipet sót.",
    "3) Főzés: forrald fel, majd vedd vissza a lángot alacsonyra. Fedd le, és lassú tűzön főzd kb. 10–12 percig, amíg a bulgur beszívja a vizet és megpuhul.",
    "4) Pihentetés: amikor a víz eltűnt, húzd le a tűzről, továbbra is lefedve hagyd állni még 5–10 percig, majd egy villával lazítsd fel a szemeket. Tálalásig lefedve pihenhet.",

    // 2) Karfiol párolása
    "5) Karfiol előkészítése: a karfiolt mosd meg, szedd közepes rózsákra. Edzésnapon kb. 200 g-ot, pihenőnapon 220–250 g-ot használj.",
    "6) Párolás: tedd a karfiolrózsákat egy párolóedénybe vagy egy lábasba 1–2 ujjnyi enyhén sós vízzel. Fedd le, és közepes lángon párold kb. 5–8 percig, amíg puha, de még picit roppanós marad (ne főzd pépesre).",
    "7) Leszűrés: ha elkészült, szűrd le, és tedd félre egy tálban. Később akár a gombával együtt is összeforgathatod.",

    // 3) Gomba elkészítése
    "8) Gomba tisztítása: a gombát gyorsan mosd át vagy töröld le nedves papírtörlővel, majd vágd szeletekre vagy negyedekre. Edzésnapon 100 g, pihenőnapon 120 g körüli mennyiséggel számolj.",
    "9) Serpenyő felforrósítása: melegíts fel egy tapadásmentes serpenyőt közepes–magas lángon. Adj hozzá nagyon kevés olajat (az össz-mennyiség egy kisebb részét), vagy használj olajspray-t vékony rétegben.",
    "10) Gomba pirítása: dobd a gombát a forró serpenyőbe, és pirítsd 6–8 percig, amíg a leve nagy része elpárolog, és a széleken enyhén megpirul. A végén sózd, borsozd. Ha szeretnéd, a kész karfiolt is rádobhatod, és 1–2 percig együtt átforgathatod, hogy enyhén lepiruljanak.",

    // 4) Marhahús elkészítése
    "11) Hús előkészítése: ha egész marhahúst használsz, vágd csíkokra vagy kisebb kockákra, hogy gyorsabban és egyenletesebben süljön. Ha darált marhád van, azt közvetlenül a serpenyőben tudod szétnyomkodni.",
    "12) Serpenyő és olaj: forrósíts fel egy másik tapadásmentes serpenyőt. Adj hozzá kb. 1 teáskanálnyi olajat (a napi keretből – edzésnapon picit bátrabban, pihenőnapon óvatosabban).",
    "13) Hús lepirítása: tedd a marhahúst a forró serpenyőbe, és nagy lángon pirítsd körbe, hogy kicsit kérget kapjon. Ez plusz ízt ad, és bezárja a szaftokat.",
    "14) Fűszerezés: amikor a hús minden oldala kifehéredett, sózd, borsozd, és szórd meg fokhagymával (por vagy friss), majoránnával, rozmaringgal vagy borsikafűvel – ezek nagyon jól passzolnak a marhához.",
    "15) Készre sütés: vedd közepes lángra, és süsd készre. Csíkokra vágva kb. 8–10 perc elég, darált húsnál addig pirítsd, amíg teljesen átsül, és sehol nem látsz nyers részt, de ne szárítsd szét.",

    // 5) Tálalás
    "16) Tálalás – edzésnap: a tányérra először szedd ki a bulgurt (a nagyobb, edzésnapi adagot). Mellé/mögé halmozd a párolt karfiolt és a pirított gombát (akár együtt forgatva). A tetejére vagy a bulgur mellé tedd a szeletelt/pirított marhahúst. Az olajból maradt mennyiséget inkább a zöldségre csorgasd, hogy fényes, ízes legyen.",
    "17) Tálalás – pihenőnap: a kisebb bulguradagot tedd a tányér egyik felére, mellé a nagyobb karfiol + gombavolument (itt a zöldség adja a „tele tál” érzetet). A marhahúst ugyanúgy mellé vagy a tetejére tedd. Extra zsiradékra itt már nincs szükség, a mennyiséget a sütésnél elhasználtad.",
    "18) Extra díszítés: ha szeretnéd, a kész ételt megszórhatod friss, aprított petrezselyemmel vagy snidlinggel – plusz íz, minimális kalória.",

    // 6) Makró összefoglaló
    "Makró összefoglaló – 4-E – Alap verzió (kb. értékek):",
    "• Edzésnapos adag (≈150 g marhahús, 70 g bulgur szárazon, 200 g karfiol, 100 g gomba, ~6 g olaj)\n  ≈ 635 kcal\n  ≈ 45 g fehérje",
    "• Pihenőnapos adag (≈135 g marhahús, 50 g bulgur, 230 g karfiol, 120 g gomba, ~4,5 g olaj)\n  ≈ 540 kcal\n  ≈ 41 g fehérje"
  ]
},
{
  id: "4-E-azsiai",
  mealId: "4-E-azsiai",
  title: "4-E – Ázsiai verzió – Wokolt marhahús szójaszósszal + bulgur + karfiol + gomba",
  timeMinutes: 30,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Edzésnapos adag: kb. 150 g sovány marhahús csíkokra vágva, 65–70 g bulgur (szárazon mérve), 180–200 g karfiol, 80–100 g gomba, kb. 5 g olaj (≈1 tk) wokoláshoz összesen, 1–2 tk light szójaszósz, fokhagyma és gyömbér ízlés szerint.",
    "Pihenőnapos adag: kb. 130 g marhahús, 50 g bulgur, 200–220 g karfiol, 100–120 g gomba, kb. 4 g olaj (vékonyan elosztva), 1 tk light szójaszósz. Itt a bulgur és az olaj lejjebb megy, a zöldség kicsit feljebb, fehérje továbbra is magas.",

    // 1) Bulgur főzése
    "1) Bulgur kimérése: mérj ki edzésnapon 65–70 g, pihenőnapon 50 g bulgurt, és tedd egy kisebb lábosba.",
    "2) Víz hozzáadása: önts rá kb. 2–2,5× mennyiségű vizet (pl. 70 g bulgurhoz kb. 150–170 ml vizet). Adj a vízhez egy csipet sót.",
    "3) Főzés: forrald fel, majd vedd alacsonyra a lángot, fedd le, és lassú tűzön főzd kb. 10–12 percig, amíg a bulgur megpuhul és felveszi a vizet.",
    "4) Pihentetés: amikor beszívta a vizet, húzd le a tűzről, fedd le, és hagyd állni még 5–10 percet. Tálalás előtt egy villával lazítsd fel a szemeket.",

    // 2) Zöldségek előkészítése
    "5) Karfiol előkészítése: a karfiolt mosd meg, szedd kisebb rózsákra. Edzésnapon kb. 180–200 g-ot, pihenőnapon 200–220 g-ot használj.",
    "6) Gomba előkészítése: a gombát gyorsan mosd át vagy töröld le, majd szeleteld fel (vagy negyedeld). Edzésnapon 80–100 g, pihenőnapon 100–120 g körüli mennyiséggel számolj.",
    "7) Extra zöldség (opcionális): ha szeretnél plusz zöldséget (pl. répa, kaliforniai paprika), vágd vékony csíkokra/julienne-re – jól illik az ázsiai jelleghez.",

    // 3) Marhahús mini pácolása
    "8) Hús csíkozása: a marhahúst vágd vékony csíkokra (minél vékonyabb, annál gyorsabban pirul és szaftos marad).",
    "9) Gyors pác elkészítése: egy tálban keverd össze a light szójaszószt (edzésnapon 1–2 tk, pihenőnapon 1 tk), 1 gerezd reszelt fokhagymát vagy 1/2 tk fokhagymaport, 1 tk reszelt friss gyömbért vagy kevés gyömbérport és egy csipet borsot.",
    "10) Hús bepácolása: tedd a marhahúst a pácba, jól forgassd össze, hogy mindenhol bevonja. Hagyd állni legalább 5–10 percig (amíg a bulgur fő és a zöldségeket előkészíted).",

    // 4) Wokolás – hús és zöldségek
    "11) Wok/serpenyő felforrósítása: melegíts fel egy wokot vagy nagy serpenyőt magas lángon. Adj hozzá kb. 1 tk olajat (edzésnapon a teljes 5 g-ot, pihenőnapon valamivel kevesebbet – a maradékot nagyon vékonyan oszd el).",
    "12) Marhahús pirítása: tedd a bepácolt marhahús-csíkokat a forró wokba. Nagy lángon, kevergetés nélkül pirítsd 2–3 percig, hogy kérget kapjon. Ezután még 1–2 percig forgasd át, míg a legtöbb része kifehéredik és átpirul.",
    "13) Hús félretétele: ha a hús már szépen kérges, de még nem száraz, szedd ki egy tányérra és tedd félre. A wokban maradó pici pörzsanyag + szaft extra ízt ad majd a zöldségeknek.",
    "14) Zöldségek wokolása: ugyanabba a forró wokba (szükség esetén nagyon kevés plusz olajat adva) dobd bele a karfiolrózsákat és a gombaszeleteket (valamint opcionális plusz zöldségeket). Nagy lángon pirítsd 4–6 percig, folyamatosan rázva/forgatva.",
    "15) Fűszerezés wok közben: a zöldségekre mehet 1 tk light szójaszósz, egy kevés reszelt fokhagyma és gyömbér. Pirítsd tovább, amíg a karfiol roppanós-puha, a gomba pedig enyhén megpirult.",
    "16) Hús vissza a wokba: tedd vissza a marhahúst a zöldségek mellé, keverd össze. Ha szeretnél egy nagyon enyhe szaftot, adj hozzá 1–2 evőkanál vizet. Kóstold meg, és ha kell, szójaszószból vagy borsból egy keveset még adhatsz hozzá. Még 1–2 percig forgasd együtt nagy lángon.",

    // 5) Tálalás
    "17) Tálalás – alap: egy mélyebb tányér vagy tál aljára kanalazd a kész bulgurt (edzésnapon a nagyobb, pihenőnapon a kisebb adagot).",
    "18) Wokkeverék rárakása: a bulgur mellé vagy tetejére halmozd a wokolt marhahús + zöldség keveréket. A szaftos részeket is kapard rá, hogy ízesebb legyen.",
    "19) Extra topping (opcionális): megszórhatod a tetejét kevés szezámmaggal, friss újhagymával, és csöpögtethetsz rá pár csepp lime- vagy citromlevet az ázsiai „street food” hangulatért.",

    // 6) Makró összefoglaló
    "Makró összefoglaló – 4-E – Ázsiai verzió (kb. értékek):",
    "• Edzésnapos adag (≈150 g marhahús, 70 g bulgur, 190 g karfiol, 90 g gomba, ~5 g olaj)\n  ≈ 620 kcal\n  ≈ 45 g fehérje",
    "• Pihenőnapos adag (≈130 g marhahús, 50 g bulgur, 210 g karfiol, 110 g gomba, ~4 g olaj)\n  ≈ 520 kcal\n  ≈ 40 g fehérje"
  ]
},
{
  id: "4-E-rakott",
  mealId: "4-E-rakott",
  title: "4-E – Rakott tál verzió – Bulgur + karfiol + gomba + marhahús sütőben",
  timeMinutes: 40,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Edzésnapos adag: kb. 150 g darált vagy apró kockára vágott marhahús, 70 g bulgur (szárazon mérve), 180–200 g előpárolt karfiol, 100 g gomba, összesen kb. 5–7 g olaj (kis rész a húshoz, kis rész a tepsi kikenéséhez), opcionálisan 10 g reszelt light sajt a tetejére.",
    "Pihenőnapos adag: kb. 130–140 g marhahús, 50 g bulgur, 200–230 g karfiol, 110–120 g gomba, kb. 4–5 g olaj, opcionálisan max. 5–10 g reszelt light sajt (vagy el is hagyható). Itt inkább a bulgur és az olaj csökken, a zöldség megy feljebb, a fehérje mindkét napon magas marad.",

    // 1) Bulgur főzése
    "1) Bulgur kimérése: mérj ki edzésnapon 70 g, pihenőnapon 50 g bulgurt, és tedd egy kisebb lábosba.",
    "2) Víz + só: önts rá kb. 2–2,5× mennyiségű vizet (pl. 70 g bulgurhoz kb. 150–170 ml vizet). Adj a vízhez egy csipet sót.",
    "3) Főzés: forrald fel, majd vedd alacsonyra a lángot, fedd le, és lassú tűzön főzd kb. 10–12 percig, amíg a bulgur megpuhul és a vizet felveszi.",
    "4) Pihentetés: amikor beszívta a vizet, húzd le a tűzről, fedd le, és hagyd állni még 5–10 percet. Tálalás előtt egy villával lazítsd fel a szemeket.",

    // 2) Zöldségek előkészítése
    "5) Karfiol előfőzése: a karfiolt mosd meg, szedd kis–közepes rózsákra. Tedd enyhén sós vízbe, és főzd 5–7 percig, amíg félpuha lesz (ne főzd szét, maradjon tartása). Szűrd le és tedd félre.",
    "6) Gomba előkészítése: a gombát tisztítsd meg (gyorsan mosd át vagy töröld le), majd szeleteld fel vagy negyedeld.",
    "7) Gomba pirítása: egy serpenyőt forrósíts fel, fújj bele kevés olajspray-t vagy adj hozzá nagyon kevés olajat a napi keretből. Dobd rá a gombát, közepes–magas lángon pirítsd, amíg a leve nagy része elpárolog, és enyhén megpirul. A végén sózd, borsozd. Ha akarod, a karfiolt és gombát egy serpenyőben is átforgathatod, hogy egy kis pirult ízt kapjanak.",

    // 3) Marhahús elősütése
    "8) Marhahús serpenyőben: a darált vagy apró kockára vágott marhahúst tedd egy forró, tapadásmentes serpenyőbe. Adj hozzá egy kevés olajat (az adott napi keretből).",
    "9) Pirítás és fűszerezés: nagy lángon pirítsd, míg kifehéredik/megpirul, és nem marad nyers rész. Fűszerezd sóval, borssal, fokhagymával (por vagy friss), ízlés szerint kevés őrölt pirospaprikával, oregánóval/majoránnával. Amikor szépen átpirult, húzd le a tűzről és tedd félre.",

    // 4) Tepsi/jénai előkészítése
    "10) Sütő előmelegítése: kapcsold be a sütőt 180–200 °C-ra (alsó–felső sütés).",
    "11) Tepsi/jénai kikenése: egy kisebb tepsit vagy jénai tálat vékonyan kenj ki 1 tk olajjal, vagy fújd ki sütőspray-vel. Ez beleszámolható a napi olajmennyiségbe.",

    // 5) Rétegezés – rakott tál
    "12) Alsó réteg – bulgur: a főtt bulgur kb. felét oszd el az edény alján egyenletes rétegben.",
    "13) Második réteg – zöldség: a párolt karfiol kb. felét és a pirított gomba felét szórd a bulgurra.",
    "14) Középső réteg – marhahús: a marhahús nagy részét terítsd a zöldséges rétegre. Enyhén nyomkodd le kanállal, hogy egyenletes legyen.",
    "15) Felső réteg – maradék zöldség + bulgur: a maradék karfiolt és gombát oszd el a hús tetején, majd erre jöhet a maradék bulgur (vagy fordítva, ha úgy jobban tetszik – a rétegezés sorrendje rugalmas, a lényeg a komplett kombó).",
    "16) Sajt (opcionális): ha használsz light reszelt sajtot, szórd a tetejére a mennyiségnek megfelelően (edzésnapon kb. 10 g, pihenőnapon 5–10 g). Csak egy vékony réteg kell, hogy szépen rápiruljon.",

    // 6) Sütés
    "17) Sütés: tedd a rakott tálat a 180–200 °C-os sütőbe. Süsd kb. 10–15 percig. Itt már minden alapanyag készre van főzve, a cél, hogy az ízek összesüljenek, a teteje enyhén megpiruljon, és az egész egyben maradjon szeleteléskor.",

    // 7) Pihentetés és tálalás
    "18) Pihentetés: amikor kész, vedd ki a sütőből, és hagyd 5 percig pihenni. Így kevésbé esik szét, amikor vágod.",
    "19) Tálalás: vágd a rakott tálat kockákra/szeletekre, és tányérra szedve tálald. Meal prephez a szeleteket egyszerűen átemelheted ételhordó dobozokba – másnap mikrózva is jól működik, ízekben még összébb ér.",

    // 8) Makró összefoglaló
    "Makró összefoglaló – 4-E – Rakott tál verzió (kb. értékek, light sajttal számolva):",
    "• Edzésnapos adag (≈150 g marhahús, 70 g bulgur, 190 g karfiol, 100 g gomba, ~6 g olaj, ~10 g light sajt)\n  ≈ 655 kcal\n  ≈ 48 g fehérje",
    "• Pihenőnapos adag (≈135 g marhahús, 50 g bulgur, 215 g karfiol, 115 g gomba, ~4,5 g olaj, ~7 g light sajt)\n  ≈ 550 kcal\n  ≈ 43 g fehérje"
  ]
},
{
  id: "5-E-alap",
  mealId: "5-E-alap",
  title: "5-E – Alap tonhalsaláta – tonhal + tojás + sok zöldség",
  timeMinutes: 20,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Edzésnapos adag: kb. 120 g lecsepegtetett tonhal (konzerv, vízben), 2 db M-es főtt tojás, ~250–300 g vegyes zöldség (pl. paradicsom, uborka, paprika, lilahagyma, jégsaláta/rukkola), kb. 8 g olívaolaj (≈ 1 lapos evőkanál) citromlével kikeverve.",
    "Pihenőnapos adag: kb. 120 g lecsepegtetett tonhal, 1 db M-es főtt tojás, ~260–300 g zöldség, kb. 5 g olívaolaj (≈ 1 púpos teáskanál) citromlével. Itt főleg a tojás és az olaj mennyisége csökken, a tonhal (fehérje) marad magas.",

    // 1) Tojás előkészítése
    "1) Tojás főzése: tedd a tojásokat egy kis lábasba (edzésnap: 2 db, pihenőnap: 1 db), és öntsd fel annyi hideg vízzel, hogy bőven ellepje őket.",
    "2) Főzés: forrald fel a vizet, majd forrástól számítva 9–10 percig főzd, hogy keménytojást kapj.",
    "3) Hűtés, pucolás: öntsd le a forró vizet, engedj rá hideg vizet, majd amikor kézmelegre hűlt, hámozd meg a tojásokat. Vágd karikákra vagy cikkekre, és tedd félre a tálaláshoz.",

    // 2) Zöldségek felaprítása
    "4) Zöldség alap: mérj ki edzésnapra kb. 250–300 g, pihenőnapra kb. 260–300 g vegyes zöldséget. Használhatsz paradicsomot, uborkát, paprikát, lilahagymát, jégsalátát/rukkolát ízlés szerint.",
    "5) Paradicsom, uborka, paprika: a paradicsomot kockázd, az uborkát karikázd vagy félkarikázd, a paprikát csíkokra vagy kockákra vágd.",
    "6) Lilahagyma és saláta: a lilahagymát vékony szeletekre vágd (ha nagyon erős, langyos vízben kicsit átöblítheted, hogy szelídebb legyen). A jégsalátát/rukkolát mosd meg, csöpögtesd le és tépkedd falatnyi darabokra.",
    "7) Zöldség egy tálban: tedd a felaprított zöldségeket egy nagy tálba – ez lesz a saláta alapja.",

    // 3) Tonhal előkészítése
    "8) Tonhal lecsepegtetése: nyisd ki a tonhalkonzervet, és a levét alaposan csepegtesd le (szükség esetén késsel/fedéllel kicsit lenyomhatod, hogy a felesleges lé kijöjjön).",
    "9) Tonhal fellazítása: tedd a lecsepegtetett tonhalat egy kisebb tálba, és villával törd durvára – ne pépesítsd teljesen, maradjanak benne kisebb falatkák. Ezután add a zöldséges tálhoz.",

    // 4) Öntet összeállítása
    "10) Öntet – olíva + citrom: egy kis pohárban vagy tálkában keverd össze az olívaolajat (edzésnap: ~8 g, pihenőnap: ~5 g) 1–2 evőkanál frissen facsart citromlével.",
    "11) Fűszerezés: adj az öntethez egy csipet sót, borsot, és ízlés szerint aprított petrezselymet. Ha szereted, tehetsz bele egy kevés mustárt vagy fokhagymaport is egy kis extra ízért.",
    "12) Öntet homogenizálása: egy kis villával keverd simára az öntetet, hogy az olaj és a citromlé szépen emulzióvá álljon össze.",

    // 5) Saláta összeállítása
    "13) Zöldség + tonhal összevonása: a zöldségekhez add hozzá a villával fellazított tonhalat.",
    "14) Öntet ráöntése: locsold a saláta tetejére az olívaolaj–citrom öntetet.",
    "15) Átforgatás: óvatosan, de alaposan forgasd össze a salátát (kanál + villa vagy két kanál segítségével), hogy a tonhal és az öntet egyenletesen eloszoljon a zöldségek között.",
    "16) Tojás hozzáadása: a tojáskarikákat/cikkeket tedd a saláta tetejére díszítésként, vagy ha jobban szereted „egyben”, finoman bele is keverheted (csak ne törd teljesen szét).",

    // 6) Tálalás / dobozolás
    "17) Tálalás azonnali fogyasztáshoz: nagy tálban tálald – ez egy masszív, de könnyű érzetű fehérjedús saláta ebéd, ami nem „rizs-komás”, mégis jól laksz tőle.",
    "18) Meal prep / dobozolás: ha munkába viszed, tedd a salátát zárható dobozba. Az öntetet akár külön kis üvegben/dobozban is viheted, és csak evés előtt öntöd a salátára, így a zöldségek ropogósabbak maradnak.",

    // 7) Makró összefoglaló
    "Makró összefoglaló – 5-E – Alap tonhalsaláta (kb. értékek):",
    "• Edzésnapos adag (120 g tonhal, 2 tojás, ~250–300 g zöldség, ~8 g olívaolaj)\n  ≈ 440 kcal\n  ≈ 47 g fehérje",
    "• Pihenőnapos adag (120 g tonhal, 1 tojás, ~260–300 g zöldség, ~5 g olívaolaj)\n  ≈ 340 kcal\n  ≈ 41 g fehérje"
  ]
},
{
  id: "5-E-avokados",
  mealId: "5-E-avokados",
  title: "5-E – Avokádós tonhalsaláta – tonhal + avokádó + tojás + zöldség",
  timeMinutes: 20,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Edzésnapos adag: kb. 120 g lecsepegtetett tonhal (konzerv, vízben), ~70 g avokádó (≈ ½ közepes darab), 1 db M-es főtt tojás, ~220–250 g vegyes zöldség (pl. paradicsom, uborka, paprika, saláta, lilahagyma), kb. 4–5 g olívaolaj (≈ 1 teáskanál) citromlével kikeverve.",
    "Pihenőnapos adag: kb. 120 g lecsepegtetett tonhal, ~50 g avokádó, 1 db M-es főtt tojás, ~230–260 g zöldség, kb. 3 g olívaolaj (≈ ½ púpos teáskanál) citromlével. Itt főleg a zsírokon (avokádó + olaj) húzunk lejjebb, a fehérje marad erős.",

    // 1) Tojás főzése
    "1) Tojás főzése: tedd a tojást/tojásokat (edzésnap: 1 db, pihenőnap: 1 db) egy kis lábasba, és öntsd fel hideg vízzel úgy, hogy bőven ellepje.",
    "2) Főzés: forrald fel a vizet, majd forrástól számítva 9–10 percig főzd, hogy keménytojást kapj.",
    "3) Hűtés, pucolás, szeletelés: öntsd le a forró vizet, engedj rá hideg vizet, majd amikor kézmelegre hűlt, hámozd meg a tojást. Vágd karikákra vagy cikkekre, és tedd félre a tálaláshoz.",

    // 2) Zöldségek felaprítása
    "4) Zöldségek kimérése: mérj ki edzésnapra kb. 220–250 g, pihenőnapra kb. 230–260 g vegyes zöldséget (paradicsom, uborka, paprika, saláta, lilahagyma kombinációban).",
    "5) Felaprítás: a paradicsomot kockázd, az uborkát karikázd vagy félkarikázd, a paprikát vágd csíkokra vagy kockákra. A lilahagymát vékony szeletekre vágd – ha túl erős, langyos vízben átöblítheted, hogy szelídebb legyen az íze.",
    "6) Salátaalap: a jégsalátát/rukkolát mosd meg, csöpögtesd le, majd tépkedd falatnyi darabokra. Tedd az összes felaprított zöldséget egy nagy tálba – ez lesz a saláta alapja.",

    // 3) Tonhal előkészítése
    "7) Tonhal lecsepegtetése: nyisd ki a tonhalkonzervet, és a levét alaposan csöpögtesd le. Ha kell, a fedéllel/kanállal finoman lenyomhatod, hogy a felesleges lé kijöjjön.",
    "8) Tonhal fellazítása: tedd a lecsepegtetett tonhalat egy kisebb tálba, majd villával törd durvára (ne pépesre) – maradjanak benne kisebb falatok. Ezután add a zöldséges tálhoz.",

    // 4) Avokádó előkészítése
    "9) Avokádó kimérése: vágd körbe az avokádót a mag mentén, csavard szét, vedd ki a magot. Kanalazd ki a szükséges mennyiséget (edzésnap: ~70 g, pihenőnap: ~50 g).",
    "10) Avokádó darabolása/krémesítése: ha darabosabb salátát szeretnél, vágd kockákra. Ha inkább krémesebb textúrát akarsz, tedd egy kis tálba és villával törd össze, hogy „mini guacamole” állagú legyen.",
    "11) Avokádó hozzáadása: add az avokádót (kockázva vagy törve) a zöldségek + tonhal mellé a nagy tálba.",

    // 5) Összeforgatás, öntet
    "12) Citromlé hozzáadása: locsold meg az egész salátát 1–2 evőkanál citromlével – ez nemcsak ízt ad, de segít abban is, hogy az avokádó kevésbé barnuljon.",
    "13) Fűszerezés: szórd meg az egészet egy csipet sóval és frissen őrölt borssal. Ha szereted, mehet bele aprított petrezselyem vagy snidling is.",
    "14) Olívaolaj hozzáadása: csorgasd a tetejére az olívaolajat (edzésnap: kb. 4–5 g, pihenőnap: kb. 3 g).",
    "15) Óvatos összeforgatás: kanál és villa (vagy két kanál) segítségével óvatosan forgasd össze a salátát, hogy az avokádó ne törjön teljesen péppé, de az ízek jól elkeveredjenek.",
    "16) Állag ellenőrzése: ha túl száraznak érzed, egy kevés extra citromlé vagy 1–2 teáskanál víz mehet még rá – ettől nem lesz zsírosabb, csak szaftosabb.",

    // 6) Tojás hozzáadása, tálalás / dobozolás
    "17) Tojás hozzáadása: a felszeletelt tojást tedd a saláta tetejére díszítésként, vagy óvatosan keverd bele, hogy minden falatba jusson belőle.",
    "18) Tálalás / meal prep: azonnal fogyaszthatod egy mélyebb tálból, vagy dobozolhatod is. Ha munkába viszed, a salátát zárható dobozba tedd. Az olívaolajat-citromot akár külön is viheted, és csak evés előtt öntöd rá, hogy a zöldségek extra ropogósak maradjanak.",

    // 7) Makró összefoglaló
    "Makró összefoglaló – 5-E – Avokádós tonhalsaláta (kb. értékek):",
    "• Edzésnapos adag (120 g tonhal, ~70 g avokádó, 1 tojás, ~220–250 g zöldség, ~5 g olívaolaj)\n  ≈ 435 kcal\n  ≈ 42 g fehérje",
    "• Pihenőnapos adag (120 g tonhal, ~50 g avokádó, 1 tojás, ~230–260 g zöldség, ~3 g olívaolaj)\n  ≈ 390 kcal\n  ≈ 42 g fehérje"
  ]
},
{
  id: "5-E-bulgur-bowl",
  mealId: "5-E-bulgur-bowl",
  title: "5-E – Tonhalas bulgur/quinoa tál – bulgur/quinoa + tonhal + zöldség + tojás",
  timeMinutes: 25,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Edzésnapos adag: kb. 60–70 g száraz bulgur vagy quinoa (mindkettő jó, quinoa kicsit több fehérjét ad), 120 g lecsepegtetett tonhal (konzerv, vízben), 1 db M-es főtt tojás, ~200–220 g vegyes zöldség (pl. paradicsom, uborka, paprika, kevés kukorica), kb. 6 g olívaolaj (≈ 1 lapos evőkanál) citromlével kikeverve.",
    "Pihenőnapos adag: kb. 40–50 g száraz bulgur/quinoa, 120 g tonhal, 1 db főtt tojás, ~220–250 g zöldség, kb. 4 g olívaolaj. Itt a szénhidráton és az olajon húzunk lejjebb, a fehérje mindkét napon stabilan magas marad.",

    // 1) Bulgur / quinoa megfőzése
    "1) Bulgur kimérése: mérj ki edzésnapon kb. 60–70 g, pihenőnapon kb. 40–50 g bulgurt, ha bulgurral készíted.",
    "2) Bulgur főzése: tedd a bulgurt egy lábasba, önts rá kb. 2–2,5× mennyiségű vizet (pl. 70 g-hoz kb. 150–170 ml vizet). Enyhén sózd meg, forrald fel, majd vedd takarékra, fedd le, és főzd 10–12 percig. Amikor a vizet beszívta, vedd le a tűzről, fedd le, és hagyd 5–10 percig pihenni. Végül villával lazítsd fel a szemeket.",
    "3) Quinoa kimérése: ha quinoával készíted, ugyanígy mérd ki a száraz mennyiséget (edzésnap kb. 60–70 g, pihenőnap kb. 40–50 g).",
    "4) Quinoa átöblítése: tedd szűrőbe, és folyó víz alatt alaposan öblítsd át, hogy lejöjjön a kesernyés réteg.",
    "5) Quinoa főzése: tedd egy kisebb lábasba, önts rá kb. 2× mennyiségű vizet, enyhén sózd. Forrald fel, majd takarék lángon, fedő alatt főzd kb. 15 percig, amíg a víz elfő, és a magok kinyílnak. Vedd le a tűzről, hagyd 5 percig pihenni, majd villával lazítsd fel.",

    // 2) Tojás és zöldségek
    "6) Tojás főzése: tedd a tojást egy kis lábasba, öntsd fel hideg vízzel. Forrástól számítva 9–10 percig főzd, hogy keménytojást kapj. Hideg vízben hűtsd le, hámozd meg, majd vágd cikkekre vagy karikákra.",
    "7) Zöldségek kimérése: mérj ki edzésnapra kb. 200–220 g, pihenőnapra kb. 220–250 g vegyes zöldséget (paradicsom, uborka, paprika, esetleg kevés kukorica, salátalevél stb.).",
    "8) Zöldségek felaprítása: a paradicsomot kockázd, az uborkát karikázd vagy félkarikázd, a paprikát vágd csíkokra vagy kockákra. Ha használsz salátalevelet, mosd meg és tépkedd falatnyi darabokra. A kukoricát (ha használsz) mérd ki kis mennyiségben, és keverd a zöldségekhez.",

    // 3) Tonhal + öntet
    "9) Tonhal előkészítése: nyisd ki a tonhalkonzervet, a levét alaposan csöpögtesd le. Tedd a tonhalat egy kisebb tálba, és villával lazítsd szét, hogy falatnyi darabokra essen, de ne legyen teljesen pépes.",
    "10) Öntet elkészítése: egy kis pohárban vagy tálkában keverd össze az olívaolajat (edzésnap: ~6 g, pihenőnap: ~4 g) 1–2 evőkanál citromlével. Adj hozzá egy csipet sót, frissen őrölt borsot, és ha szereted, kevés fokhagymaport vagy egy pici mustárt is. Keverd simára az öntetet.",

    // 4) Bowl összeállítása
    "11) Alap réteg – bulgur/quinoa: vegyél egy mély tálat, és az aljára kanalazd a megfőtt, villával fellazított bulgurt vagy quinoát. Ez lesz a bowl szénhidrát alapja.",
    "12) Zöldségek elrendezése: a bulgur/quinoa tetejére halmozd rá a felaprított zöldségeket – akár külön kis „szeletekbe” rendezve (paradicsom, uborka, paprika, kukorica), hogy szépen, színesen nézzen ki.",
    "13) Tonhal ráhalmozása: a tonhalat tedd a zöldségek egyik oldalára vagy a tál közepére egy kupacban. Így jól látszik, mennyi fehérje van benne, és kanalazásnál bárhonnan hozzá tudsz jutni.",
    "14) Tojás elhelyezése: a főtt tojást cikkekre vagy vastagabb karikákra vágva tedd a bowl tetejére – a tonhal mellé vagy a tál szélére körben.",
    "15) Öntet rácsorgatása: az elkészített olívaolaj–citrom öntetet csorgasd a bowl tetejére. Ha inkább „fit edzőskaja” érzetet szeretnél, akár összeforgathatod az egészet egy nagy kanállal, hogy minden falatba jusson az ízekből.",
    "16) Textúra beállítása: ha túl száraznak érzed a tálat, adhatsz még egy kevés extra citromlevet vagy 1–2 teáskanál vizet az öntethez – ettől szaftosabb lesz, de a kalóriát alig növeli.",

    // 5) Tálalás / dobozolás
    "17) Tálalás: azonnal fogyaszthatod a bowl-t, villával vagy kanál–villa párossal. Nagyon laktató, de nem nehéz érzetű ebéd – jó edzés előtt vagy után is.",
    "18) Meal prep / dobozolás: ha előre készíted, a bulgurt/quinoát tedd az ételes doboz aljára, rá a zöldségeket, egyik oldalra a tonhalat, tetejére a tojást. Az öntetet külön kis zárható tégelyben vidd, és csak evés előtt öntsd rá, hogy a zöldségek ropogósak maradjanak.",

    // 6) Makró összefoglaló
    "Makró összefoglaló – 5-E – Tonhalas bulgur/quinoa tál (kb. értékek):",
    "• Edzésnapos adag (~65 g száraz bulgur/quinoa, 120 g tonhal, 1 tojás, ~200–220 g zöldség, ~6 g olívaolaj)\n  ≈ 555 kcal\n  ≈ 48 g fehérje",
    "• Pihenőnapos adag (~45 g száraz bulgur/quinoa, 120 g tonhal, 1 tojás, ~220–250 g zöldség, ~4 g olívaolaj)\n  ≈ 470 kcal\n  ≈ 46 g fehérje"
  ]
},
{
  id: "6-E-klasszikus",
  mealId: "6-E-klasszikus",
  title: "6-E – Klasszikus grillezett csirkemell – csirke + basmati rizs + borsó–répa",
  timeMinutes: 30,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Edzésnapos adag: kb. 180 g nyers csirkemell, 70 g száraz basmati rizs, 200 g borsó–répa zöldség (pl. 100 g zöldborsó + 100 g répa), ~5 g olívaolaj vagy kókuszolaj (≈ 1 teáskanál) a sütéshez.",
    "Pihenőnapos adag: kb. 170 g nyers csirkemell, 50 g száraz basmati rizs, 220–250 g borsó–répa zöldség, ~3–4 g olaj vékonyan a serpenyőben. Kevesebb rizs + olaj, több zöldség, fehérje szinte ugyanannyi.",

    // 1) Csirkemell előkészítése
    "1) Csirkemell megtisztítása: a csirkemellet mosd meg gyorsan hideg víz alatt, majd papírtörlővel itasd szárazra. Vágd le róla a hártyákat, inakat, zsírdarabokat.",
    "2) Vastagság beállítása: ha a csirkemell nagyon vastag, hosszában vágd félbe („pillangózás”), hogy egyenletesen és gyorsabban átsüljön.",
    "3) Fűszerezés: mindkét oldalát sózd, borsozd, és szórd meg kedvenc fűszereiddel (pl. fokhagymapor, fűszerpaprika, grill fűszerkeverék). Dörzsöld bele a fűszert a húsba.",
    "4) Pihentetés: tedd félre 5–10 percre szobahőn, amíg a rizs és a zöldség előkészítése zajlik – ennyi idő alatt a fűszerek egy picit be tudnak húzódni a húsba.",

    // 2) Basmati rizs főzése
    "5) Rizs kimérése és öblítése: mérj ki edzésnapon 70 g, pihenőnapon 50 g basmati rizst. Tedd szűrőbe, és folyó víz alatt öblítsd át 20–30 másodpercig, hogy a felesleges keményítő lemosódjon róla.",
    "6) Rizs főzése: tedd a rizst egy kisebb lábasba, önts rá kb. 2–2,2× mennyiségű vizet (pl. 70 g rizshez kb. 150 ml vizet). Adj hozzá egy csipet sót. Forrald fel, majd vedd alacsonyra a lángot, tedd rá a fedőt, és főzd kb. 10–12 percig, amíg a víz nagy részét beszívja.",
    "7) Pihentetés: amikor a víz elfogyott, húzd le a tűzről, továbbra is lefedve hagyd állni még kb. 5 percig. Ezután villával lazítsd fel a rizs szemeket, hogy pergősebb legyen. Tálalásig lefedve pihentesd.",

    // 3) Borsó + répa párolása
    "8) Zöldség kimérése: mérj ki edzésnapra kb. 200 g borsó–répa mixet (pl. 100 g zöldborsó + 100 g répa), pihenőnapra 220–250 g-ot.",
    "9) Fagyasztott zöldség párolása: ha fagyasztott borsó–répa keveréket használsz, tedd egy kisebb lábasba, önts alá kb. 0,5–1 dl vizet, adj hozzá egy csipet sót.",
    "10) Párolás: fedd le, és közepes lángon párold 8–10 percig, amíg a zöldség roppanós-puha lesz. Ha idő közben elfő a víz, de a zöldség még nem elég puha, adj hozzá 1–2 evőkanál vizet, és párold még 1–2 percet.",
    "11) Befejezés: amikor kész, szűrd le – ha már alig maradt alatta víz, akár úgy is hagyhatod, csak ne legyen leveses a tálalásnál.",

    // 4) Csirkemell sütése
    "12) Serpenyő előkészítése: tegyél egy grillserpenyőt vagy tapadásmentes serpenyőt a tűzre, és közepes–erős lángon forrósítsd fel.",
    "13) Olaj hozzáadása: mérj ki edzésnapra kb. 5 g, pihenőnapra kb. 3–4 g olajat. Csorgasd a serpenyőbe, majd egy ecsettel vagy papírtörlővel kend el vékonyan az alján, hogy épp csak bevonja.",
    "14) Csirke sütése – első oldal: amikor a serpenyő forró, tedd bele a befűszerezett csirkemellet. Süsd az első oldalát kb. 4–5 percig közepes–erős lángon, amíg szép aranybarna kérget kap.",
    "15) Csirke sütése – második oldal: fordítsd meg a csirkét, és a másik oldalát is süsd kb. 4–5 percig, vastagságtól függően. Ha bizonytalan vagy, a legvastagabb részen vágd meg: belül már ne legyen rózsaszín, de a hús maradjon szaftos, ne szárítsd ki.",
    "16) Pihentetés: a kész csirkemellet vedd ki a serpenyőből, tedd egy tányérra, és hagyd 2–3 percig pihenni. Ez segít, hogy a szaft visszaoszoljon a húson belül, és szeleteléskor ne folyjon ki az összes nedv.",

    // 5) Tálalás
    "17) Tálalás – edzésnap: egy tányérra halmozd a nagyobb rizsadagot (70 g szárazból főzve), mellé tedd a párolt borsó–répát (kb. 200 g), a tetejére vagy oldalára pedig a felszeletelt csirkemellet. Ha van friss zöldfűszered (pl. petrezselyem, snidling), szórd meg vele a tányért.",
    "18) Tálalás – pihenőnap: a kisebb rizsadagot (50 g szárazból főzve) tedd a tányérra, mellé jöhet a nagyobb zöldségmennyiség (220–250 g borsó–répa). A csirkemell (170 g nyersből sütve) ugyanúgy szeletelve kerül a rizs mellé/fölé. Itt a zöldség adja a nagyobb „volument”, a fehérje továbbra is magas marad.",

    // 6) Makró összefoglaló
    "Makró összefoglaló – 6-E – Klasszikus grillezett csirkemell (kb. értékek):",
    "• Edzésnapos adag (≈180 g csirke, 70 g száraz basmati rizs, 200 g borsó–répa, ≈5 g olaj)\n  ≈ 610 kcal\n  ≈ 52 g fehérje",
    "• Pihenőnapos adag (≈170 g csirke, 50 g száraz basmati rizs, 230 g borsó–répa, ≈3–4 g olaj)\n  ≈ 530 kcal\n  ≈ 50 g fehérje"
  ]
},
{
  id: "6-E-azsiai-wok",
  mealId: "6-E-azsiai-wok",
  title: "6-E – Ázsiai wok csirkemell verzió – csirkecsíkok + borsó–répa + rizs",
  timeMinutes: 25,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Edzésnapos adag: kb. 180 g nyers csirkemell csíkokra vágva, 60–65 g száraz basmati rizs, 200–220 g zöldség (zöldborsó + répa, opcionálisan kevés hagyma/paprika), ~6 g olaj (≈ 1 lapos evőkanál) a wokhoz, 1–2 evőkanál light/sócsökkentett szójaszósz.",
    "Pihenőnapos adag: kb. 160–170 g nyers csirkemell, 45–50 g száraz basmati rizs, 220–250 g zöldség (borsó–répa + opcionális hagyma/paprika), ~4 g olaj, kb. 1 evőkanál szójaszósz. Kevesebb ch + zsír, több zöldség, fehérje továbbra is magas.",

    // 1) Rizs főzése
    "1) Rizs kimérése és öblítése: mérj ki edzésnapon 60–65 g, pihenőnapon 45–50 g basmati rizst. Tedd szűrőbe, és folyó víz alatt öblítsd át 20–30 másodpercig, hogy a felesleges keményítő lejöjjön róla.",
    "2) Rizs főzése: tedd a rizst egy kisebb lábasba, önts rá kb. 2–2,2× mennyiségű vizet (pl. 65 g rizshez ~140 ml vizet). Adj hozzá egy csipet sót, forrald fel, majd vedd alacsonyra a lángot, tedd rá a fedőt, és főzd kb. 10–12 percig, amíg a vizet beszívja.",
    "3) Pihentetés: húzd le a tűzről, hagyd lefedve 5 percig pihenni, majd villával lazítsd fel a rizst. Tálalásig lefedve melegen tarthatod.",

    // 2) Csirke és zöldség előkészítése
    "4) Csirkemell csíkozása: a csirkemellet mosd meg gyorsan, itasd szárazra, majd vágd vékony, ujjnyi csíkokra. Enyhén sózd (a szójaszósz is sós!), borsozd, szórhatsz rá kis fokhagymaport is.",
    "5) Zöldségek előkészítése: a zöldborsót és répát készítsd elő. Ha fagyasztott borsó–répa mixet használsz, mehet így a wokba. Ha friss répa van, vágd vékony csíkokra vagy karikára, hogy gyorsan puhuljon. Ha teszel mellé hagymát/paprikát, azokat is vágd vékony csíkokra/szeletekre.",

    // 3) Wok / serpenyő felforrósítása
    "6) Wok előkészítése: egy nagy serpenyőt vagy wokot tegyél magas hőfokra. Mérj ki edzésnapra kb. 6 g, pihenőnapra kb. 4 g olajat, és öntsd a wokba. Forgasd el, hogy vékonyan bevonja az alját.",
    "7) Fontos: a wok nagyon legyen forró, hogy az alapanyagok inkább piruljanak, ne csak főjenek a saját levükben.",

    // 4) Csirkecsíkok pirítása
    "8) Csirke pirítása: tedd a felforrósított wokba a csirkecsíkokat. Nagy lángon 3–4 percig pirítsd, időnként átforgatva, amíg minden oldaluk kifehéredik, és elkezdenek picit barnulni.",
    "9) Fokhagyma/gyömbér: ekkor adhatsz hozzá 1–2 gerezd apróra vágott fokhagymát vagy ½ teáskanál fokhagymaport, illetve egy kevés frissen reszelt vagy szárított gyömbért. Röviden forgasd össze, hogy illatos legyen.",

    // 5) Zöldségek hozzáadása
    "10) Zöldség a wokban: add a csirkéhez a borsót, répát (és a plusz hagymát/paprikát, ha használsz). Nagy lángon, folyamatos kevergetés mellett pirítsd 4–5 percig.",
    "11) Szójaszósz: öntsd rá a szójaszószt (edzésnap: 1–2 evőkanál, pihenőnap: kb. 1 evőkanál, vagy kevesebb, ha a sóbevitelre figyelsz). Ha szeretnél egy kis szaftot, adj hozzá 1–2 evőkanál vizet is. Forrón forgasd össze még 1–2 percig, amíg a zöldség roppanós-puha lesz, a csirke teljesen átsül, és mindent bevon a szójaszószos „máz”.",

    // 6) Rizzsel összeforgatás / tálalás
    "12) Opció 1 – külön tálalás: egy tányérra halmozd a főtt basmati rizst, mellé tedd a csirkés-zöldséges wokkeveréket. Ez kicsit „klasszikusabb” tálalás.",
    "13) Opció 2 – teljes wokos verzió: a kész csirkés-zöldséges alaphoz add hozzá a főtt rizst is, és nagy lángon 1–2 percig együtt forgasd át, mintha egy „fried rice / stir-fry” lenne. Így minden falatban benne lesz rizs + csirke + zöldség együtt.",

    // 7) Edzésnap vs. pihenőnap fókusz
    "14) Tálalás – edzésnap: a nagyobb rizsadag (60–65 g szárazból főzve) mellé jön a kb. 180 g csirkéből és 200–220 g zöldségből készült wokkeverék. Jó energiaszint edzéshez: normális ch + magas fehérje, kicsi extra zsír.",
    "15) Tálalás – pihenőnap: a kisebb rizsadagot (45–50 g szárazból főzve) párosítod a 160–170 g csirkével és 220–250 g zöldséggel. Itt a volumen nagy része zöldség, a kalória kicsit lejjebb megy, a fehérje marad erős – jó recompos / pihenő napra.",

    // 8) Makró összefoglaló
    "Makró összefoglaló – 6-E – Ázsiai wok csirkemell verzió (kb. értékek):",
    "• Edzésnapos adag (≈180 g csirke, 60–65 g száraz basmati rizs, ≈210 g zöldség, ≈6 g olaj)\n  ≈ 600 kcal\n  ≈ 52 g fehérje",
    "• Pihenőnapos adag (≈165 g csirke, 45–50 g száraz basmati rizs, ≈235 g zöldség, ≈4 g olaj)\n  ≈ 525 kcal\n  ≈ 48 g fehérje"
  ]
},
{
  id: "6-E-rakott",
  mealId: "6-E-rakott",
  title: "6-E – Rakott csirke–rizs–zöldség tál – rétegezett: alul rizs, középen zöldség, felül csirke",
  timeMinutes: 35,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Edzésnapos adag: kb. 180 g nyers csirkemell csíkokra vágva, 70 g száraz basmati rizs, 200 g párolt borsó + répa együtt, ~5 g olaj (csirke elősütéséhez + tepsi vékony kikenéséhez). Így kapod a „legdobozolhatóbb”, crossfit-nap kompatibilis rakott tálat.",
    "Pihenőnapos adag: kb. 170 g nyers csirkemell, 55 g száraz basmati rizs, 220–240 g borsó + répa, ~3–4 g olaj. Itt kicsit kevesebb a rizs + olaj, több a zöldség, a fehérje szintje szinte ugyanúgy magas marad.",

    // 1) Rizs + zöldség + csirke előkészítése
    "1) Rizs főzése: főzd meg a basmati rizst ugyanúgy, mint a klasszikus csirkemelles verziónál. Mérj ki edzésnapon 70 g-ot, pihenőnapon 55 g-ot, öblítsd át, majd kb. 2–2,2× mennyiségű sós vízben főzd 10–12 percig. Ha beszívta a vizet, húzd le a tűzről, fedd le és pihentesd 5 percig, végül villával lazítsd fel a szemeket.",
    "2) Zöldség párolása: a borsót és répát (fagyasztott mix vagy külön) tedd egy kisebb lábasba. Önts alá kevés vizet (0,5–1 dl), adj hozzá egy csipet sót, fedd le, és 8–10 percig párold, amíg roppanós-puha lesz. A végén szűrd le vagy hagyd rajta a minimális maradék levet.",
    "3) Csirkemell csíkokra vágása: a csirkemellet mosd meg gyorsan, itasd szárazra, vágd ujjnyi csíkokra. Sózd, borsozd, szórd meg fokhagymaporral és pirospaprikával (vagy kedvenc grill fűszerkeverékkel).",
    "4) Csirkecsíkok elősütése: egy serpenyőben melegíts fel egy vékony réteg olajat (az edzés/pihenőnapos mennyiségből). Dobd rá a csirkecsíkokat, és közepes–erős lángon 4–5 percig pirítsd, amíg kívül mindenhol kifehéredik és elkezd aranybarna lenni. Nem baj, ha a közepe csak éppen kész: a sütőben úgyis befejezi.",

    // 2) Tepsi / sütőtál rétegezése
    "5) Sütő előmelegítése: kapcsold be a sütőt 180–200 °C-ra (alsó–felső sütés).",
    "6) Tepsi előkészítése: vegyél elő egy kisebb tepsit vagy jénait. Ha nem tapadásmentes, vékonyan kend ki a maradék olajjal, vagy fújd ki olajspray-vel – csak egy hajszálvékony réteg kell.",
    "7) Első réteg – rizs: az elkészült basmati rizst egyenletesen terítsd el a tepsi alján. Kicsit lenyomkodhatod kanállal, hogy stabil alap legyen a rétegeknek.",
    "8) Második réteg – zöldség: a rizs tetejére szórd rá a párolt borsó–répa keveréket. Oszlasd el egyenletesen, hogy minden falatban legyen zöldség.",
    "9) Harmadik réteg – csirke: a zöldség tetejére pakold rá az elősütött csirkecsíkokat. Ha maradt egy kis szaft a serpenyőben, azt nyugodtan csurgasd rá – plusz íz, minimális extra kalória.",
    "10) (Opcionális) Light sajt: ha szeretnél, a tetejére szórhatsz 5–10 g reszelt light sajtot. Ez szépen rápirul majd, de ha makróban nagyon szigorú akarsz lenni, simán el is hagyhatod.",

    // 3) Sütés
    "11) Összesütés: tedd a rétegezett tálat az előmelegített, 180–200 °C-os sütőbe. Süsd kb. 8–10 percig – minden alapanyag már készre van főzve/sütve, a cél csak az, hogy az ízek összeérjenek, a tetején a csirke és (ha használsz) a sajt picit rápiruljon.",
    
    // 4) Tálalás / dobozolás
    "12) Pihentetés: vedd ki a sütőből, hagyd állni 2–3 percet, hogy kicsit összeálljon. Így szépen szeletelhető/kockázható lesz, nem esik teljesen szét.",
    "13) Tálalás: kanállal vagy lapáttal szedj ki egy nagyobb „kockát” a tányérra: alul a rizs, középen a zöldség, felül a csirke. Ha dobozolod, hagyd langyosra hűlni a sütőtálban, majd adagokban átpakolhatod ételhordóba – másnapra is nagyon jól melegíthető ebéd.",
    
    // 5) Edzésnap vs. pihenőnap fókusz
    "14) Tálalás – edzésnap: a 70 g száraz rizsből főtt adag, 180 g csirkéből készült csíkok és 200 g zöldség együtt adnak egy masszívan laktató, edzésbarát ebédet – normális ch, magas fehérje, kontrollált zsír.",
    "15) Tálalás – pihenőnap: 55 g száraz rizsből főzött kisebb rizsalapra érkezik a 170 g csirke és 220–240 g zöldség. A szénhidrát és zsír kicsit lejjebb, a zöldség volumen és a fehérje felfelé – recompos napokra ideális.",

    // 6) Makró összefoglaló
    "Makró összefoglaló – 6-E – Rakott csirke–rizs–zöldség tál (kb. értékek):",
    "• Edzésnapos adag (≈180 g csirke, 70 g száraz basmati rizs, 200 g zöldség, ≈5 g olaj)\n  ≈ 610 kcal\n  ≈ 52 g fehérje",
    "• Pihenőnapos adag (≈170 g csirke, 55 g száraz basmati rizs, ≈230 g zöldség, ≈3–4 g olaj)\n  ≈ 550 kcal\n  ≈ 50 g fehérje"
  ]
},
{
  id: "7-E-klasszikus",
  mealId: "7-E-klasszikus",
  title: "7-E – Pulykafasírt – Klasszikus verzió kölessel és párolt zöldséggel",
  timeMinutes: 40,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Edzésnapos adag (kicsit combosabb ebéd): kb. 180 g nyers darált pulykamell a fasírtmasszához, ½–1 db tojás (ha 2 adagra főzöl, 1 egész tojás elég), 10–12 g zabliszt / finomra őrölt zabpehely. Köretnek 60–65 g száraz köles és kb. 200–220 g vegyes zöldség (pl. répa, borsó, zöldbab, brokkoli). Ezekből jön ki egy ~640 kcal körüli, kb. 59 g fehérjés edzésnapi ebéd.",
    "Pihenőnapos adag (picit visszafogottabb, de még mindig izom-barát): kb. 160–170 g nyers darált pulykamell, ½–1 db tojás a teljes masszához, 8–10 g zabliszt. Köretnek 50 g száraz köles és 220–250 g vegyes zöldség. Itt kevesebb a köles (ch) és kicsit kevesebb a hús + olaj, viszont több a zöldség – kb. 540 kcal körül, kb. 53 g fehérjével.",

    // 1) Fasírtmassza elkészítése
    "1) Pulykahús tálba tétele: a nyers darált pulykamellet tedd egy nagyobb keverőtálba, hogy kézzel könnyen át tudd dolgozni.",
    "2) Tojás hozzáadása: üsd rá a tojást (ha 2 adagra főzöl, 1 egész tojás bőven elég; 1 adaghoz elég ½ tojást is, de gyakorlatban egyszerűbb 1 tojással 2 fasírtadagot lefedni).",
    "3) Zabliszt / zabpehely: adj a masszához edzésnapon kb. 10–12 g, pihenőnapon kb. 8–10 g zablisztet vagy finomra darált zabpelyhet. Ez fogja kicsit összefogni és szaftosabbá tenni a fasírtot.",
    "4) Fűszerezés: sózd, borsozd, és mehet bele ízlés szerint fokhagyma (frissen zúzva vagy por formában), őrölt fűszerpaprika, őrölt kömény, szárított vagy friss petrezselyem. Ha szereted, egy kis oregánó vagy majoránna is mehet bele.",
    "5) Alapos összegyúrás: kézzel gyúrd össze a masszát, míg egynemű, kissé tapadós, de jól formázható állagot kapsz. Ha túl lágy, mehet még egy kevés zabliszt; ha túl száraz, pici víz vagy pár csepp olaj segít.",
    "6) Formázás: nedves kézzel formázz belőle kisebb golyókat vagy lapított pogácsákat (fasírt formában). Edzésnapi adagból kb. 3–4 közepes fasírt jön ki, pihenőnapnál is hasonló méretben érdemes dolgozni.",

    // 2) Fasírt sütőben – „klasszikus fitnesz verzió”
    "7) Sütő előmelegítése: melegítsd elő a sütőt 180 °C-ra (alsó–felső sütés).",
    "8) Tepsi előkészítése: bélelj ki egy tepsit sütőpapírral. Ha biztosra akarsz menni, a sütőpapírt nagyon vékonyan átkenheted olajjal vagy lefújhatod olajspray-vel.",
    "9) Fasírtok elrendezése: tedd a formázott pulykafasírtokat a tepsire egymás mellé, hagyj köztük egy kis helyet, hogy mindenhol tudjanak pirulni.",
    "10) Vékony olajréteg: ha szeretnéd, a fasírt tetejét ujjaddal/kenőecsettel nagyon vékonyan átkenheted az adagba számolt olaj egy részével, vagy röviden fújhatsz olajsprayt rájuk. Nem kell, hogy tocsogjanak, csak egy leheletnyi réteg kell a szép piruláshoz.",
    "11) Sütés ideje: süsd őket kb. 18–22 percig. Kb. 10 perc után fordítsd meg a fasírtokat, hogy mindkét oldal szépen megpiruljon. Akkor jó, ha kívül enyhén aranybarna, belül átsült, de nem száraz.",

    // 3) Fasírt serpenyőben – alternatív módszer
    "12) Serpenyő előkészítése: ha nem sütőben, hanem serpenyőben sütöd, tegyél egy tapadásmentes serpenyőt közepes lángra, és adj hozzá egy leheletnyi olajat (az összes napi olaj mennyiségéből számolva).",
    "13) Fasírtok sütése serpenyőben: tedd a fasírtokat a serpenyőbe, és oldalanként kb. 3–4 percig süsd őket, amíg szép aranybarna kéreg képződik rajtuk, és a belsejük is átsül. Itt is figyelj arra, hogy ne szárítsd ki – jobb, ha közepes lángon, türelmesen sülnek, mintha égetnéd.",

    // 4) Köles köret elkészítése
    "14) Köles átöblítése: mérj ki edzésnapon 60–65 g, pihenőnapon 50 g kölest, majd szűrőben, hideg víz alatt alaposan öblítsd át (így a kesernyés íz nagy része lejön).",
    "15) Köles főzése: tedd a kölest egy kisebb lábasba, önts rá kb. 2–2,5× mennyiségű vizet (edzésnap nagyjából 130–160 ml, pihenőnap valamivel kevesebb). Adj hozzá egy csipet sót.",
    "16) Főzési idő: forrald fel, majd vedd vissza a lángot alacsonyra, tedd rá a fedőt, és főzd kb. 10–12 percig, amíg a víz nagy részét felszívja és a szemek megpuhulnak.",
    "17) Pihentetés és lazítás: vedd le a tűzről, fedd le, és hagyd állni 5 percig. Ezután egy villával lazítsd fel a szemeket, hogy pergős, könnyű köretet kapj.",

    // 5) Zöldségköret (répa, borsó, zöldbab, brokkoli)
    "18) Zöldségek előkészítése: használhatsz friss vagy mirelit zöldséget (pl. répa, zöldborsó, zöldbab, brokkoli). Vágd falatnyi darabokra, ha szükséges.",
    "19) Párolás: tedd a zöldségeket egy kisebb lábasba 0,5–1 dl vízzel és egy csipet sóval. Fedd le, és közepes lángon párold 8–10 percig, amíg roppanós-puhák lesznek (ne főzd pépesre).",
    "20) Befejezés: ha nagyon minimális víz maradt alatta, azt is nyugodtan ott hagyhatod. Ha szeretnéd, a végén mehet rá egy leheletnyi olívaolaj, de a legtöbb napra bőven jó natúran, mert a fasírt és a köles már ad elég zsiradékot.",

    // 6) Tálalás – edzésnap vs. pihenőnap
    "21) Tálalás – edzésnap: egy tányérra halmozd a nagyobb adag főtt kölest (60–65 g szárazból főzve), mellé tedd a kb. 200–220 g párolt zöldséget, és helyezd rá a 3–4 darab pulykafasírtot. Ez lesz a tartalmasabb, ~640 kcal körüli, kb. 59 g fehérjés edzésnapi menüd.",
    "22) Tálalás – pihenőnap: a kisebb kölesadag (50 g szárazból) mellé jöhet a több zöldség (220–250 g), és a kicsit visszafogottabb, de még mindig combos pulykaadag (160–170 g-ból készült fasírtok). Ez kb. 540 kcal, kb. 53 g fehérjével – jóllaksz tőle, de nem terhel túl.",

    // 7) Makró összefoglaló
    "Makró összefoglaló – 7-E – Pulykafasírt – Klasszikus verzió (kb. értékek):",
    "• Edzésnapos adag (≈180 g pulykamell, 65 g száraz köles, ≈210 g zöldség, kevés tojás + zabliszt, ≈5 g olaj)\n  ≈ 640 kcal\n  ≈ 59 g fehérje",
    "• Pihenőnapos adag (≈165 g pulykamell, 50 g száraz köles, ≈230 g zöldség, kevés tojás + zabliszt, ≈3 g olaj)\n  ≈ 540 kcal\n  ≈ 53 g fehérje"
  ]
},
{
  id: "7-E-egytal",
  mealId: "7-E-egytal",
  title: "7-E – Pulykafasírt – Sütőben rakott egytál kölessel és zöldséggel",
  timeMinutes: 45,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Edzésnapos adag (kicsit combosabb, edzés utáni ebédre): fasírtmasszához kb. 180 g nyers darált pulykamell, ½–1 db tojás (ha 2 adagra főzöl, 1 egész tojás bőven elég), 10–12 g zabliszt vagy finomra őrölt zabpehely. A tepsi aljára 60–65 g száraz kölesből főzött köret kerül, köretnek pedig kb. 200–220 g vegyes zöldség (pl. répa, borsó, zöldbab, brokkoli). A tepsi kikenéséhez és a fasírtokra összesen kb. 1–2 g olaj/adaggal számolhatsz (olajspray formában szinte 0 kcal).",
    "Pihenőnapos adag (visszafogottabb ch + zsír, de magas fehérje): fasírtmasszához kb. 160–170 g nyers darált pulykamell, ½–1 db tojás, 8–10 g zabliszt. Alulra 50 g száraz kölesből főzött köret, rá 220–250 g vegyes zöldség. A tepsit szintén csak vékonyan kenjük ki (kb. 1–2 g olaj/adag). A makrók gyakorlatilag megegyeznek a klasszikus verzióval (≈640 / 540 kcal, magas fehérje).",

    // 1) Fasírtmassza elkészítése
    "1) Pulyka tálba tétele: tedd a nyers darált pulykamellet egy nagyobb keverőtálba, hogy kézzel kényelmesen át tudd dolgozni.",
    "2) Tojás hozzáadása: üsd a húsra a tojást (ha 2 adagot készítesz, 1 egész tojás bőven elég; ha 1 adagra számolsz, elég a tojás fele is, de gyakorlatban érdemes 2 adagban gondolkodni).",
    "3) Zabliszt: add hozzá a zablisztet vagy finomra őrölt zabpelyhet – edzésnapon kb. 10–12 g, pihenőnapon kb. 8–10 g. Ez fogja összefogni a masszát.",
    "4) Fűszerezés: sózd, borsozd, és ízesítsd fokhagymával (frissen zúzva vagy por formában), őrölt fűszerpaprikával, köménnyel, szárított vagy friss petrezselyemmel. Ha szereted, mehet bele egy kis oregánó vagy majoránna is.",
    "5) Összegyúrás: kézzel alaposan gyúrd át a masszát, amíg egynemű, kissé tapadós, de jól formázható állagot nem kapsz. Ha túl lágy, mehet még egy kevés zabliszt; ha túl száraz, pár csepp víz segít.",
    "6) Golyók formázása: nedves kézzel formázz a masszából kisebb gombócokat (húsgolyó méret), hogy a sütőben gyorsan és egyenletesen átsüljenek.",

    // 2) Köles előkészítése
    "7) Köles átöblítése: mérj ki edzésnapon 60–65 g, pihenőnapon 50 g kölest, majd szűrőben, hideg víz alatt alaposan öblítsd át, hogy a kesernyés réteg lejöjjön róla.",
    "8) Köles főzése: tedd a kölest egy kisebb lábasba, és önts rá kb. 2–2,5× mennyiségű vizet (edzésnapon kb. 130–160 ml, pihenőnapon valamivel kevesebb). Adj hozzá egy csipet sót.",
    "9) Főzési idő: forrald fel, majd vedd vissza a lángot alacsonyra, tedd rá a fedőt, és főzd kb. 10–12 percig, amíg a víz nagy részét felszívja és megpuhul.",
    "10) Pihentetés: vedd le a tűzről, továbbra is lefedve hagyd még 5 percig pihenni, majd egy villával lazítsd fel a szemeket. Ez lesz az alsó réteg a rakott tálban.",

    // 3) Zöldség előfőzése
    "11) Zöldség kiválasztása: használhatsz mirelit zöldségmixet (répa, borsó, zöldbab, brokkoli), vagy friss zöldségeket felkockázva.",
    "12) Mirelit zöldség előfőzése: tedd a mirelit zöldséget egy kisebb lábasba, önts alá kb. 0,5–1 dl vizet, adj hozzá egy csipet sót, fedd le, és párold 5–7 percig, amíg félpuha lesz.",
    "13) Friss zöldség előkészítése: a friss zöldségeket vágd falatnyi darabokra, tedd őket kevés sós vízbe, és blansírozd 4–6 percig, majd szűrd le. A cél, hogy félig megpuhuljanak, a sütőben fejeződnek be.",

    // 4) Tepsi rétegezése – „rakott egytál”
    "14) Sütő előmelegítése: melegítsd elő a sütőt 180 °C-ra (alsó–felső sütés).",
    "15) Tepsi / jénai előkészítése: vegyél elő egy kisebb tepsit vagy jénait, és vékonyan kend ki az adagba számolt olajjal, vagy fújd ki olajspray-vel (így kb. 1–2 g olaj/fő elég).",
    "16) Alsó réteg – köles: a megfőtt, fellazított kölest simítsd el a tepsi alján egyenletes rétegben. Finoman lenyomkodhatod kanállal, hogy minket jól tartson.",
    "17) Középső réteg – zöldség: a főtt/párolt zöldségeket szórd a köles tetejére, és oszlasd el egyenletesen, hogy minden falatban legyen zöldség.",
    "18) Felső réteg – pulykafasírt-golyók: a formázott pulykafasírt-golyókat sorban helyezd a zöldségrétegre. Nem baj, ha kicsit sűrűn vannak, sütés közben egyben „összeérik” az egész tál.",

    // 5) Sütés
    "19) Sütés ideje: tedd a rakott egytálat a 180 °C-os sütőbe, és süsd kb. 20 percig. Ez idő alatt a fasírt-golyók teljesen átsülnek és szépen megpirulnak a tetején, a köles és a zöldségek pedig átmelegszenek és összefőnek.",
    "20) Ellenőrzés: ha bizonytalan vagy, egy fasírtot kettévághatsz – belül már ne legyen rózsaszín, de ne is legyen teljesen kiszáradva.",

    // 6) Tálalás – edzésnap vs. pihenőnap
    "21) Tálalás – edzésnap: egy mélyebb tányérra szedj egy nagyobb adag rakott egytálat úgy, hogy minden rétegből jusson (köles + zöldség + 3–4 kisebb pulykafasírt-golyó). Ez lesz a kb. 640 kcal körüli, kb. 59 g fehérjét adó edzésnapi verzió.",
    "22) Tálalás – pihenőnap: ugyanígy szedj egy adagot, csak a kisebb kölesmennyiséget (50 g szárazból főzve) és több zöldséget fogsz kapni, a picit visszafogottabb pulykaadag mellett. Ez kb. 540 kcal és kb. 53 g fehérje körül mozog – jól laktat, de kalóriában visszafogottabb.",

    // 7) Makró összefoglaló
    "Makró összefoglaló – 7-E – Pulykafasírt – Sütőben rakott egytál (kb. értékek, a klasszikus verzióval megegyező alapokra):",
    "• Edzésnapos adag (≈180 g pulykamell, 60–65 g száraz köles, ≈200–220 g zöldség, kevés tojás + zabliszt, tepsihez minimális olaj)\n  ≈ 640 kcal\n  ≈ 59 g fehérje",
    "• Pihenőnapos adag (≈165 g pulykamell, 50 g száraz köles, ≈220–250 g zöldség, kevés tojás + zabliszt, minimális olaj)\n  ≈ 540 kcal\n  ≈ 53 g fehérje"
  ]
},
{
  id: "7-E-azsiai",
  mealId: "7-E-azsiai",
  title: "7-E – Ázsiai ihletésű pulykafasírt kölessel és wokzöldséggel",
  timeMinutes: 40,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Edzésnapos adag: fasírtmasszához kb. 180 g nyers darált pulykamell, ½–1 db tojás (ha 2 adagra főzöl, 1 egész tojás bőven elég), 10–12 g zabliszt vagy finomra őrölt zabpehely, 1 evőkanál (≈10–12 g) light szójaszósz, 1–2 teáskanál frissen reszelt gyömbér. Köretnek kb. 60–65 g száraz kölesből főzött köret és 200–220 g wokzöldség (répa, borsó, zöldbab, paprika, hagyma, cukkini, brokkoli stb.), a wokhoz összesen kb. 4–5 g olaj (adagodra kb. 3 g jut).",
    "Pihenőnapos adag: fasírtmasszához kb. 160–170 g nyers darált pulykamell, ½–1 db tojás, 8–10 g zabliszt, 2–3 teáskanál (kicsit kevesebb) light szójaszósz, 1 tk körüli reszelt gyömbér. Köretnek 50 g száraz kölesből főzött köret és 220–250 g wokzöldség, a wokhoz összesen kb. 3–4 g olaj. Sózásnál számolj azzal, hogy a szójaszósz is sós.",

    // 1) Köles előkészítése
    "1) Köles átöblítése: mérd ki edzésnapon 60–65 g, pihenőnapon 50 g kölest, majd szűrőben, hideg folyó víz alatt alaposan öblítsd át, hogy a kesernyés réteg lejöjjön róla.",
    "2) Köles főzése: tedd a kölest egy kisebb lábasba, önts rá kb. 2–2,5× mennyiségű vizet (edzésnapon kb. 130–160 ml, pihenőnapon valamivel kevesebb), adj hozzá egy csipet sót.",
    "3) Főzési idő: forrald fel, majd vedd vissza a lángot alacsonyra, fedd le, és főzd kb. 10–12 percig, amíg a víz nagy részét felszívja és a köles megpuhul.",
    "4) Pihentetés: vedd le a tűzről, lefedve hagyd még 5 percig pihenni, majd egy villával lazítsd fel a szemeket. Tálalásig félreteheted, ez lesz az alap a tányéron.",

    // 2) Wokzöldség előkészítése
    "5) Zöldségek felvágása: válogass össze kb. 200–220 g (pihenőnapon 220–250 g) vegyes zöldséget: répa, kaliforniai paprika, cukkini, vöröshagyma, brokkoli, zöldbab, borsó stb. A répát vágd vékony csíkokra vagy karikára, a paprikát csíkokra, a cukkinit félkarikákra/csíkokra, a brokkolit kisebb rózsákra, a hagymát vékony szeletekre.",
    "6) Wok előkészítése: tegyél egy wokot vagy nagy serpenyőt magas lángra, adj hozzá egy kevés olajat (edzésnapon összesen kb. 4–5 g, pihenőnapon kb. 3–4 g – ha több adagot készítesz, ez eloszlik az adagok között).",
    "7) Zöldség wokolása: először a keményebb zöldségeket (répa, brokkoli, hagyma) dobd a forró wokba, és pirítsd 2–3 percig nagy lángon, folyamatosan rázogatva/kevergetve.",
    "8) Gyorsabban puhuló zöldségek: add hozzá a paprikát, cukkinit, zöldbabot, borsót, és pirítsd további 2–3 percig. A végén locsold meg kb. 1–2 evőkanál light szójaszósszal, ha kell, adj hozzá 1–2 evőkanál vizet, hogy nagyon enyhe szaftja legyen. Akkor jó, ha a zöldség még kicsit roppan, de már nem nyers. Vedd le a tűzről, tartsd melegen.",

    // 3) Ázsiai pulykafasírt-massza elkészítése
    "9) Pulyka tálba tétele: tedd a nyers darált pulykamellet egy nagyobb keverőtálba.",
    "10) Tojás + zabliszt: üsd rá a tojást (ha 2 adagra dolgozol, elég 1 egész tojás), add hozzá a zablisztet (edzésnapon kb. 10–12 g, pihenőnapon kb. 8–10 g).",
    "11) Szójaszósz + gyömbér: öntsd a húshoz a szójaszószt (edzésnapon kb. 1 evőkanál, pihenőnapon 2–3 teáskanál) és add hozzá a reszelt friss gyömbért (1–2 teáskanál). Sóval óvatosan bánj, mert a szójaszósz is sós – elég lehet egy nagyon pici só vagy akár semmi plusz só.",
    "12) Fűszerezés: ízlés szerint mehet még egy kevés fokhagyma (por vagy friss), őrölt bors, esetleg egy kevés chilipor vagy chilipehely, ha szeretnél csípősebb verziót.",
    "13) Massza összedolgozása: kézzel alaposan gyúrd össze a masszát, amíg tapadós, de jól formázható nem lesz. Ha túl lágy, mehet bele egy kevés plusz zabliszt; ha túl száraz, 1–2 evőkanál víz vagy plusz szójaszósz lazít rajta.",
    "14) Golyók formázása: nedves kézzel formázz kisebb gombócokat vagy lapított fasírtokat – minél laposabbak, annál gyorsabban átsülnek.",

    // 4) Fasírt sütése – sütő vagy serpenyő
    "15) Sütőben sütés opció: melegítsd elő a sütőt 180 °C-ra, bélelj ki egy tepsit sütőpapírral, és rakd rá a fasírtgolyókat. Fújhatsz rájuk olajsprayt vagy nagyon vékonyan átforgathatod őket egy kevés olajban. Süsd kb. 18–20 percig, félidőnél fordítsd meg, hogy mindkét oldala szépen megpiruljon.",
    "16) Serpenyőben sütés opció: melegíts fel egy tapadásmentes serpenyőt közepes–magas lángon, adj hozzá egy leheletnyi olajat (ha a wokhoz már elhasználtad a keretet, itt minimális mennyiséggel dolgozz vagy olajsprayt használj). Tedd bele a fasírtokat, és süsd oldalanként kb. 3–4 percig, amíg kívül aranybarna, belül már nem rózsaszín.",

    // 5) Tálalás – „ázsiai bowl” jelleg
    "17) Tálalás – alap összeállítás: egy mély tányér vagy tál aljára halmozd a főtt kölest (edzésnapon a nagyobb, pihenőnapon a kisebb mennyiséget).",
    "18) Zöldség réteg: a köles mellé vagy tetejére tedd a wokolt zöldségeket – ez adja a színt és a volument.",
    "19) Fasírtok: a tál tetejére rendezgess néhány gyömbéres–szójás pulykafasírt-golyót/fasírtot (edzésnapon 3–4 kisebb, pihenőnapon kicsit kisebb adag, de még mindig bőven fehérjedús).",
    "20) Extra topping: ha van otthon, megszórhatod az egészet egy kevés szezámmaggal és meglocsolhatod pár csepp friss lime- vagy citromlével – jól kiemeli az ázsiai ízeket.",

    // 6) Makró összefoglaló
    "Makró összefoglaló – 7-E – Ázsiai ihletésű pulykafasírt (kb. értékek):",
    "• Edzésnapos adag (≈180 g pulykamell, ≈60 g száraz köles, ≈210 g wokzöldség, szójaszósz, ≈5 g olaj)\n  ≈ 630 kcal\n  ≈ 59 g fehérje",
    "• Pihenőnapos adag (≈170 g pulykamell, ≈50 g száraz köles, ≈230 g wokzöldség, szójaszósz, ≈3 g olaj)\n  ≈ 560 kcal\n  ≈ 55 g fehérje"
  ]
},
{
  id: "1-U-alap",
  mealId: "1-U-alap",
  title: "1-U – Alap túró-gyümölcsös pohárkrém",
  timeMinutes: 10,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Edzésnapos adag: kb. 170–180 g zsírszegény túró (0,2–1,5%), ~100 g gyümölcs (bogyós mix vagy ½ banán + pár bogyós), 10–12 g dió vagy mandula, 5–10 g méz (1–2 tk – ha kicsit „desszertesebbre” akarod).",
    "Pihenőnapos adag: kb. 150 g túró, 80–100 g gyümölcs, 5–8 g dió/mandula, max. 1 tk (≈5 g) méz – vagy akár elhagyható, ha nagyon húzod le a kalóriát.",

    // 1) Túró alap elkészítése
    "1) Túró tálba tétele: tedd a kimért túrót egy kisebb keverőtálba.",
    "2) Ízesítés: adj hozzá edzésnapon 5–10 g, pihenőnapon kb. 5 g mézet (vagy energialimitnél nullkalóriás édesítőt).",
    "3) Krémesítés: villával vagy kanállal törd és keverd össze a túrót, hogy kicsit krémesebb, kenhetőbb állagot kapj. Ha nagyon száraz/morzsás, adj hozzá egy kevés (1–2 ek) natúr joghurtot, tejet vagy kefirt – csak annyit, hogy ne legyen folyós, inkább sűrű krémes.",

    // 2) Gyümölcs előkészítése
    "4) Bogyós gyümölcs esetén: málnát, áfonyát, epret mosd meg folyó víz alatt, majd csepegtesd le. Ha fagyasztottat használsz, hagyd picit kiengedni vagy mikróban 10–20 mp-et melegíthetsz rajta.",
    "5) Banán esetén: hámozd meg, vágd kb. 0,5–1 cm-es karikákra.",
    "6) Alma / körte esetén: mosd meg, vágd cikkekre, magházat vágd ki, majd kockázd falatnyi darabokra (héj maradhat a rost miatt).",

    // 3) Magvak előkészítése
    "7) Magvak durvára vágása: mérd ki a diót/mandulát (edzésnap: 10–12 g, pihenőnap: 5–8 g), majd vágd durvára késsel, hogy ne egy helyre koncentrálódjanak a nagy darabok.",
    "8) Pirítás (opcionális, de finomabb): egy száraz, forró serpenyőben 1–2 percig pirítsd a magvakat, folyamatosan rázogatva. Amint illatozni kezdenek, vedd le a tűzről (ne égesd meg, mert keserű lesz). Hagyd kicsit hűlni.",

    // 4) Rétegezés pohárba / tálba
    "9) Első réteg – túró: egy átlátszó pohár vagy kisebb tál aljára kanalazz egy réteg túrókrémet.",
    "10) Második réteg – gyümölcs: szórj rá egy réteg gyümölcsöt (bogyós, banánkarika, almakocka – amit választottál).",
    "11) Ismétlés: ismételd meg a rétegezést (túró → gyümölcs), amíg elfogynak az alapanyagok. A túró legyen a fő tömeg, a gyümölcs inkább „betét”.",
    "12) Teteje – magvak: a tetejére szórd rá az összevágott diót/mandulát. Ha szeretnéd, mehet még rá egy nagyon vékony mézcsík vagy egy csipet fahéj.",

    // 5) Pihentetés / tálalás
    "13) Azonnali fogyasztás: így is tökéletes – kanalazható, ropogós magvakkal a tetején.",
    "14) Hűtős verzió: ha van 10–15 perc, tedd be a hűtőbe – kicsit összeérnek az ízek, a túró krémesebbnek érződik, a gyümölcslé picit átjárja a rétegeket.",
    "15) Dobozolás: ha útra viszed, műanyag vagy üveg ételes dobozba/pohárba rétegezd, tetejét zárd le. A magvakat akár külön kis dobozban is viheted, és csak evés előtt szórod rá, hogy ropogós maradjon.",

    // 6) Makró összefoglaló
    "Makró összefoglaló – 1-U – Alap túró-gyümölcsös pohárkrém (kb. értékek):",
    "• Edzésnapos adag (≈175 g túró, 100 g gyümölcs, 10 g dió/mandula, ≈8 g méz)\n  ≈ 280 kcal\n  ≈ 24 g fehérje",
    "• Pihenőnapos adag (≈150 g túró, ≈90 g gyümölcs, 7 g dió/mandula, ≈5 g méz)\n  ≈ 225 kcal\n  ≈ 20 g fehérje"
  ]
},
{
  id: "1-U-feherjes",
  mealId: "1-U-feherjes",
  title: "1-U – Fehérjés verzió (túró + whey + gyümölcs + magvak)",
  timeMinutes: 10,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Edzésnapos adag: kb. 160–170 g zsírszegény túró, 10 g fehérjepor (vaníliás/csokis, ami illik a gyümölcshöz), ~100 g gyümölcs, 10–12 g dió vagy mandula, méz vagy nincs, vagy max. 1 tk (≈5 g), ha édesebbre vágysz.",
    "Pihenőnapos adag: kb. 150 g túró, 10 g fehérjepor, 80–100 g gyümölcs, 5–8 g dió/mandula, méz inkább nélkül, vagy csak egy nagyon vékony csurgatás (2–3 g).",

    // 1) Fehérjés túrókrém alap
    "1) Túró tálba tétele: tedd a kimért túrót egy kisebb keverőtálba (edzésnap: ~165 g, pihenőnap: ~150 g).",
    "2) Fehérjepor hozzáadása: szórd rá a 10 g fehérjeport (kb. 1/3 adagolókanál). Vaníliás nagyon jól passzol bogyós gyümölcsökhöz és banánhoz, csokis inkább banánhoz/alma-kakaó jelleghez.",
    "3) Folyadék hozzáadása: önts hozzá 1–2 evőkanál vizet, tejet vagy kefirt, hogy a fehérje könnyebben elkeveredjen. Kezdj kevesebb folyadékkal, és ha nagyon sűrű, fokozatosan adj hozzá még 1–2 kortyot.",
    "4) Krémesítés: keverd össze alaposan (kanállal vagy villával), amíg egynemű, krémes masszát kapsz. Az állag legyen sűrű „pudingos”, ne folyós.",

    // 2) Édesítés (méz / édesítő)
    "5) Kóstolás: kóstold meg a fehérjés túrókrémet.",
    "6) Ha elég édes: nem kell mézet hozzáadni – így „legcleanebb” marad az uzsonna.",
    "7) Ha nem elég édes: edzésnapon adhatsz hozzá max. 1 tk (≈5 g) mézet vagy energiaszegény édesítőt, pihenőnapon inkább csak édesítőt vagy max. egy nagyon vékony mézcsíkot (2–3 g). Újra keverd át.",

    // 3) Gyümölcs előkészítése
    "8) Bogyós gyümölcs esetén (málna, áfonya, eper): mosd meg, csepegtesd le. Fagyasztott esetén hagyd picit kiengedni, vagy mikróban 10–20 mp-et melegíthetsz rajta.",
    "9) Banán esetén: hámozd meg, vágd 0,5–1 cm-es karikákra.",
    "10) Alma / körte esetén: mosd meg, vágd cikkekre, magházat vágd ki, majd kockázd falatnyi darabokra (héj maradhat a rost miatt). A mennyiség: edzésnapon kb. 100 g, pihenőnapon 80–100 g.",

    // 4) Magvak előkészítése
    "11) Magvak mérése: mérj ki edzésnapon 10–12 g, pihenőnapon 5–8 g diót vagy mandulát.",
    "12) Durvára vágás: vágd késsel durvára, hogy ropogós darabok legyenek, de ne hatalmas fél diók.",
    "13) Pirítás (opcionális): egy száraz serpenyőben 1–2 percig pirítsd a magvakat, folyamatosan rázogatva. Amint elkezdenek illatozni, vedd le a tűzről, nehogy megégjenek. Hagyd kicsit hűlni.",

    // 5) Rétegezés pohárba / tálba
    "14) Első réteg – fehérjés túró: egy átlátszó pohár vagy kisebb tál aljára kanalazz egy réteg fehérjés túrókrémet.",
    "15) Második réteg – gyümölcs: szórj rá egy réteg gyümölcsöt (bogyós, banánkarika, almakocka – attól függően, mit választottál).",
    "16) Ismétlés: ismételd meg a rétegezést (túró → gyümölcs), amíg elfogynak az alapanyagok. A fő tömeg a túró legyen, a gyümölcs inkább kiegészítő réteg.",
    "17) Teteje – magvak: a tetejére szórd rá a durvára vágott diót/mandulát. Extra ízhez mehet rá egy csipet fahéj is.",

    // 6) Pihentetés / tálalás / extra textúra
    "18) Azonnali fogyasztás: így is tökéletes – krémes túró, édeskés gyümölcs, ropogós magvak.",
    "19) Hűtős verzió: tedd be 10–15 percre a hűtőbe, hogy kicsit összeérjen, főleg, ha előre készíted.",
    "20) Plusz „puding-hangulat” (opcionális): keverhetsz a fehérjés túróba 1–2 tk zabpelyhet is, majd hagyd állni 10–15 percet. A zab kicsit megszívja magát, és még sűrűbb, pudingosabb textúrát ad.",

    // 7) Makró összefoglaló
    "Makró összefoglaló – 1-U – Fehérjés verzió (kb. értékek):",
    "• Edzésnapos adag (≈165 g túró, 10 g whey, 100 g gyümölcs, 10 g dió/mandula, méz nélkül vagy max. 1 tk)\n  ≈ 295 kcal\n  ≈ 30 g fehérje",
    "• Pihenőnapos adag (≈150 g túró, 10 g whey, ≈90 g gyümölcs, 7 g dió/mandula, méz nélkül számolva)\n  ≈ 250 kcal\n  ≈ 28 g fehérje\n  (Ha mégis ráteszel 1 tk mézet, az +≈15 kcal.)"
  ]
},
{
  id: "1-U-energiadus",
  mealId: "1-U-energiadus",
  title: "1-U – Magas energiatartalmú verzió (túró + zab + mogyoróvaj + gyümölcs + magvak)",
  timeMinutes: 10,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Edzésnapos adag: kb. 160–170 g zsírszegény túró (átlagosan ~165 g), 15–20 g zabpehely (kb. 1 púpos evőkanál, átlag ~18 g), 10–12 g mogyoróvaj (kb. 1 csapott evőkanál, ~11 g), ~100 g gyümölcs, 8–10 g dió vagy mandula (átlag ~9 g). Ez egy energiadúsabb, “mini tömegelős” uzsonna keményebb edzés / crossfit / sok kardió napokra.",
    "Pihenőnapos adag: kb. 150 g túró, 10–12 g zabpehely (kb. 1 lapos evőkanál, ~11 g), 5–8 g mogyoróvaj (kb. 1 teáskanál, ~6 g), 80–100 g gyümölcs (átlag ~90 g), 5–8 g dió/mandula (átlag ~7 g). Így megmarad a krémes, kicsit „bűnös” érzet, de kalóriában kezelhető marad.",

    // 1) Túró + zab + mogyoróvaj alap
    "1) Túró alap: tedd a kimért túrót egy keverőtálba (edzésnap: ~165 g, pihenőnap: ~150 g).",
    "2) Zab hozzáadása: szórd a túróra a kimért zabpelyhet (edzésnap: 15–20 g, pihenőnap: 10–12 g). A zab ad plusz rostot és lassú szénhidrátot, illetve kicsit besűríti az állagot.",
    "3) Mogyoróvaj hozzáadása: kanalazd hozzá a mogyoróvajat (edzésnap: ~11 g, pihenőnap: ~6 g). Ez hozza a krémes, desszertes érzetet és a plusz jó zsírt.",
    "4) Összekeverés: egy kanállal vagy kis spatulával keverd össze alaposan a túrót, zabot és mogyoróvajat. Ha túl száraz vagy morzsálódós:",
    "   • adj hozzá 1–2 evőkanál vizet, tejet vagy joghurtot,",
    "   • keverd tovább, amíg krémes, enyhén ropogós (zab miatt), mogyoróvajas túrókrémet kapsz.",

    // 2) Gyümölcs előkészítése
    "5) Gyümölcs mosása / szeletelése: válassz kb. 100 g (pihenőnapon 80–100 g) gyümölcsöt.",
    "   • Bogyós gyümölcs (málna, áfonya, szeder, eper): mosd meg, csepegtesd le.",
    "   • Banán: hámozd meg, vágd 0,5–1 cm-es karikákra – mogyoróvajhoz különösen jól passzol.",
    "   • Alma / körte: mosd meg, magházat vágd ki, kockázd falatnyi darabokra (héj maradhat).",
    "   • Fagyasztott bogyósnál: hagyd kicsit kiengedni, vagy mikrózd 10–20 másodpercig, hogy ne legyen jégkása.",

    // 3) Magvak előkészítése
    "6) Magvak kimérése: mérj ki edzésnapon kb. 8–10 g, pihenőnapon 5–8 g diót vagy mandulát.",
    "7) Durvára vágás: vágd késsel durvára, hogy legyen harapható ropogós textúra, de ne hatalmas darabok.",
    "8) Pirítás (opcionális, de nagyon finom): egy száraz serpenyőben 1–2 percig pirítsd a magvakat közepes lángon, folyamatosan rázogatva. Amint erősen illatozni kezdenek, vedd le a tűzről, hogy ne égjenek meg. Hagyd kicsit hűlni.",

    // 4) Rétegezés pohárba / tálba
    "9) Alsó réteg – zabos-mogyoróvajas túró: egy átlátszó pohár vagy kisebb tál aljára kanalazz egy adag zabos-mogyoróvajas túrókrémet (a teljes mennyiség kb. felét).",
    "10) Gyümölcsréteg: szórd rá a gyümölcs felét (banánkarika, bogyós mix, almakocka – amihez kedved van).",
    "11) Második túró réteg: kanalazd rá a maradék túrókrémet, egyengesd el a tetejét.",
    "12) Tetejére gyümölcs + magvak: a tetejére szórd a maradék gyümölcsöt, majd a durvára vágott diót/mandulát. Ha nagyon szereted a mogyoróvajat, edzésnapon a tetejére csorgathatsz még egy egészen vékony csíkot (1–2 g), pihenőnapon ezt inkább hagyd el.",

    // 5) Állni hagyás (opcionális)
    "13) Azonnali fogyasztás: ha rögtön megeszed, a zab még ropogósabb, a textúra kicsit „müzlis-túrókrémes” lesz.",
    "14) Pihentetés 10–15 percig (opcionális): ha hagyod állni a hűtőben vagy szobahőn, a zab egy kicsit megszívja magát, és az egész desszert-puding jellegűvé válik. Ez uzsonnának, edzés utáni mini „jutalomként” nagyon jól működik.",
    
    // 6) Makró összefoglaló
    "Makró összefoglaló – 1-U – Magas energiatartalmú verzió (kb. értékek):",
    "• Edzésnapos adag (≈165 g túró, ≈18 g zabpehely, ≈11 g mogyoróvaj, 100 g gyümölcs, ≈9 g dió/mandula)\n  ≈ 380 kcal\n  ≈ 27 g fehérje",
    "• Pihenőnapos adag (≈150 g túró, ≈11 g zabpehely, ≈6 g mogyoróvaj, ≈90 g gyümölcs, ≈7 g dió/mandula)\n  ≈ 290 kcal\n  ≈ 23 g fehérje"
  ]
},
{
  id: "2-U-dietas",
  mealId: "2-U-dietas",
  title: "2-U – Diétásabb verzió (whey + bogyós gyümölcs shake)",
  timeMinutes: 5,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Edzésnapos adag: 30 g tejsavófehérje (whey), 80 g bogyós gyümölcs (áfonya / málna / vegyes bogyós mix), kb. 200–250 ml folyadék (inkább víz, opcionálisan egy kevés 1,5%-os tejjel keverve). Ez egy diétás, rostos, magas fehérjés uzsonna, ha aznap máshonnan már jött elég szénhidrát.",
    "Pihenőnapos adag: 30 g tejsavófehérje, 80 g bogyós gyümölcs, kb. 200 ml folyadék, főleg víz (max. egy kevés tej). Mivel ez eleve a „light” verzió, nem muszáj külön csökkenteni a mennyiségeket, így standard pihenőnapi shake-ként is tökéletes.",

    // 1) Folyadék az alap
    "1) Folyadék kimérése: önts kb. 200–250 ml folyadékot a turmixgépbe vagy shakerbe. Edzésnapon mehet 200–250 ml víz, vagy pl. 150–200 ml víz + 50 ml 1,5%-os tej. Pihenőnapon inkább 200 ml víz, maximum egy kevés tej, hogy diétásabb maradjon.",
    "2) Tipp: ha fagyasztott gyümölcsöt használsz és elég erős a turmixod, mehet a folyadékhoz jégszerűen, így hűs, „desszert” állagú shake-et kapsz.",

    // 2) Fehérjepor hozzáadása
    "3) Whey kimérése: mérj ki 30 g fehérjeport (ez általában 1 adagolókanál, gyártótól függően). Vaníliás, joghurtos, bogyós ízű whey nagyon jól megy a gyümölcshöz.",
    "4) Por a folyadékra: szórd a fehérjeport közvetlenül a folyadékra. Shakerben mindig előbb a folyadékot öntsd, utána a port, hogy kevésbé ragadjon az aljára.",

    // 3) Bogyós gyümölcs bele
    "5) Gyümölcs kimérése: mérj ki 80 g bogyós gyümölcsöt (áfonya, málna, szeder, ribizli, esetleg vegyes fagyasztott bogyós mix).",
    "6) Friss vs. fagyasztott: friss gyümölcsöt mosd meg, csepegtesd le, majd dobd a turmixba. Fagyasztott gyüminél közvetlenül mehet a turmixba – így hidegebb, sűrűbb shake-et kapsz. Ha shakerrel dolgozol és nem bírja a nagy darabokat, a gyümölcsöt érdemes előre kicsit felengedni és villával áttörni.",

    // 4) Turmixolás / rázás
    "7) Turmixgép használata: turmixgépben kb. 20–30 másodpercig turmixold közepes–magas fokozaton, amíg a gyümölcs teljesen eloszlik és krémes, homogén állagot kapsz.",
    "8) Shaker használata: ha shakert használsz, zárd le jól a tetejét, majd erősen rázd kb. 20–30 másodpercig. Fagyasztott, darabos gyümölccsel a turmixgép praktikusabb, shakernél inkább felengedett / áttört gyümölcsöt használj.",

    // 5) Állag finomhangolása
    "9) Ha túl sűrű lett: önts hozzá még egy kevés vizet (10–30 ml), rázd/turmixold újra, amíg iható, de még kellemesen sűrű állagot kapsz.",
    "10) Ha túl híg lett: legközelebb indulj kevesebb folyadékkal (pl. 180–200 ml-rel), vagy adj hozzá egy kicsit több gyümölcsöt. Ennél a diétás verziónál a ch-t nem nagyon akarjuk feljebb tolni, ezért inkább a folyadékon állíts.",

    // 6) Fogyasztás / tárolás
    "11) Azonnali fogyasztás: a legideálisabb, ha a shake-et elkészítés után 5–10 percen belül megiszod – ilyenkor a legkrémesebb és a gyümölcs sem süllyed le.",
    "12) Rövid tárolás: ha előre kell elkészítened, tedd a hűtőbe max. 1–2 órára. Ivás előtt rázd fel / keverd át, mert a fehérje és a gyümölcshús kissé leülhet az aljára.",

    // 7) Makró összefoglaló
    "Makró összefoglaló – 2-U – Diétásabb verzió (kb. értékek, vízzel számolva):",
    "• Edzésnapos adag (30 g whey, 80 g bogyós gyümölcs, víz / víz+kevés tej)\n  ≈ 155 kcal\n  ≈ 24–25 g fehérje",
    "• Pihenőnapos adag (ugyanazok a mennyiségek – ez eleve a „light” opció)\n  ≈ 155 kcal\n  ≈ 24–25 g fehérje\n  (Ha több tejet használsz víz helyett, a kalória kicsit feljebb mehet, +20–40 kcal körül.)"
  ]
},
{
  id: "2-U-kaves",
  mealId: "2-U-kaves",
  title: "2-U – Kávés shake (whey + kávé + banán)",
  timeMinutes: 5,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Edzésnapos adag: 30 g whey, 1 közepes banán (~100 g), 1 adag eszpresszó (30–40 ml), kb. 200 ml folyadék (víz vagy víz + kevés 1,5%-os tej). Koffein + gyorsabb ch a banánból → jó kis pre-workout light.",
    "Pihenőnapos adag: 30 g whey, ½ közepes banán (~50 g), 1 adag eszpresszó, kb. 200 ml folyadék (inkább víz, max. kevés tej). Ugyanannyi fehérje, kb. fele annyi banános szénhidrát, diétásabb verzió.",

    // 1) Kávé lefőzése
    "1) Eszpresszó lefőzése: főzz egy 1 adag eszpresszót (30–40 ml).",
    "2) Hűtés: hagyd legalább langyosra hűlni (szobahőmérséklet körülire). Ne forrón öntsd a whey-re, mert csomósodhat, és az íze is fura lesz.",

    // 2) Alap folyadék + kávé
    "3) Folyadék kimérése: önts kb. 200 ml folyadékot a turmixgépbe vagy shakerbe. Edzésnap: mehet víz + egy kevés 1,5%-os tej (pl. 150 ml víz + 50 ml tej) a krémesebb, „latte” érzésért. Pihenőnap: inkább 200 ml víz, max. egy kis tej.",
    "4) Kávé hozzáadása: öntsd a lehűlt eszpresszót a folyadékhoz, és keverd/kavard össze röviden, hogy egyenletesen eloszoljon.",

    // 3) Fehérjepor hozzáadása
    "5) Whey kimérése: mérj ki 30 g tejsavófehérje-port (általában 1 adagolókanál körül). Vaníliás vagy csokis íz különösen jól megy a kávéhoz.",
    "6) Por a folyadékra: szórd a fehérjeport közvetlenül a kávés folyadék tetejére. Shakerben mindig előbb a folyadék, aztán a por legyen, hogy kevésbé tapadjon le az aljára.",

    // 4) Banán hozzáadása
    "7) Banán előkészítése: hámozd meg a banánt. Edzésnapon az egész (~100 g), pihenőnapon a fele (~50 g) kerül a shake-be.",
    "8) Darabolás: törd a banánt 3–4 kisebb darabra kézzel, és dobd a turmixgépbe. (Ha shakert használsz, a banán miatt jobban jársz turmixgéppel – shakerrel inkább banán nélküli verziót készíts.)",

    // 5) Turmixolás
    "9) Turmixgép használata: zárd le a turmixot, majd közepes–magas fokozaton turmixold 20–30 másodpercig, amíg krémes, homogén állagot kapsz, banándarabok nélkül.",
    "10) Shaker használata (csak ha nagyon muszáj): ha mindenáron shakerben csinálnád, a banánt előtte villával törd pépesre, és úgy tedd a shakerbe. Zárd le, majd 30–40 másodpercig erősen rázd. A legjobb eredményt továbbra is turmixgéppel kapod.",

    // 6) Jeges latte / állag finomhangolás
    "11) Jeges latte verzió: ha hűsítő, „iced coffee” jellegű shake-et szeretnél, dobj a turmixba 3–4 jégkockát is, és együtt turmixold. Ettől sűrűbb, hidegebb és frappé-szerű lesz.",
    "12) Állag állítás: ha túl sűrű, adj hozzá még 20–30 ml vizet, és turmixold újra. Ha túl híg, legközelebb indulj kevesebb folyadékkal (pl. 180 ml-rel), vagy használj picit nagyobb banánt – főleg edzésnapon.",

    // 7) Ivás / időzítés
    "13) Fogyasztás edzésnapon: ideális esetben edzés előtt kb. 30–60 perccel idd meg – a koffein beüt, a banánból jövő gyorsabb ch pedig ad egy kis extra energiát a súlyzós / crossfit edzéshez.",
    "14) Fogyasztás pihenőnapon: délutáni „turbó” uzsonnának tökéletes – nem nyom agyon kalóriában, de kapsz egy kis koffein-löketet és egy adag minőségi fehérjét.",

    // 8) Makró összefoglaló
    "Makró összefoglaló – 2-U – Kávés shake (kb. értékek, vízzel számolva):",
    "• Edzésnapos adag (30 g whey, 1 közepes banán ~100 g, 1 adag eszpresszó, víz / víz+kevés tej)\n  ≈ 205 kcal\n  ≈ 25 g fehérje",
    "• Pihenőnapos adag (30 g whey, ½ banán ~50 g, 1 adag eszpresszó, víz / víz+kevés tej)\n  ≈ 160 kcal\n  ≈ 24–25 g fehérje\n  (Ha több tejet használsz víz helyett, a kalória kicsit feljebb mehet, +20–40 kcal körül.)"
  ]
},
{
  id: "2-U-zabos",
  mealId: "2-U-zabos",
  title: "2-U – Zabpelyhes verzió (whey + zab + banán)",
  timeMinutes: 5,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Edzésnapos adag (masszívabb, mini gainer): 30 g whey, 25–30 g zabpehely (ajánlott: 30 g), ½–1 db banán (keményebb edzésnél mehet az egész ~100 g), 220–250 ml folyadék (víz / víz+kevés 1,5%-os tej).",
    "Pihenőnapos adag (visszafogottabb ch): 30 g whey, 15–20 g zabpehely (ajánlott: 20 g), ½ banán (~50 g) vagy akár banán nélkül, 220 ml folyadék (inkább víz, max. kevés tej).",

    // 1) Folyadék az alap
    "1) Folyadék az alap: öntsd a 220–250 ml vizet vagy víz+tej mixet a turmixgépbe. A zab sűrít, ezért ehhez a verzióhoz kicsit több folyadék jól jön, főleg edzésnapon.",
    
    // 2) Zabpehely hozzáadása
    "2) Zab kimérése: mérj ki edzésnapon 25–30 g, pihenőnapon 15–20 g zabpelyhet (vagy finomra őrölt zabot).",
    "3) Elő-turmix (opcionális, de profi húzás): ha nagy szemű a zab és sima shaket akarsz, először csak a folyadék + zab kombót turmixold 10–15 másodpercig, hogy „zabliszt-szerű” alapod legyen. Így sokkal krémesebb lesz a végeredmény.",

    // 3) Fehérje hozzáadása
    "4) Whey hozzáadása: szórj a zabos folyadékra 30 g tejsavófehérje-port. Vaníliás, csokis vagy fahéjas íz nagyon jól passzol a zabhoz.",
    
    // 4) Banán hozzáadása (edzés vs. pihenő)
    "5) Banán előkészítése: hámozd meg a banánt. Edzésnapon – ha nagyobb edzés, crossfit, sok kardió – mehet az egész (~100 g). Ha csak „normál” edzés, elég lehet a ½ banán is. Pihenőnapon maradj ½ banánnál, vagy ch-vágósabb időszakban akár teljesen ki is hagyhatod.",
    "6) Darabolás: a banánt törd 3–4 darabra, és dobd a turmixgépbe a zabos–fehérjés alaphoz.",

    // 5) Turmixolás
    "7) Turmixolás: zárd le a turmixot, és közepes–magas fokozaton turmixold 20–30 másodpercig, amíg a zab teljesen eltűnik darabként, a banán is beleolvad, és sűrű, de iható shake-et kapsz.",
    
    // 6) Állag finomhangolás
    "8) Ha túl sűrű (kb. kanállal kéne enni): önts hozzá még 20–30 ml vizet, és turmixold át újra.",
    "9) Ha túl híg: legközelebb picit több zabot használj (pl. +5 g), vagy hagyd a shaket 2–3 percig állni – a zab amúgy is szívja a folyadékot, és tovább sűrít.",

    // 7) Extra ízesítés
    "10) Extra ízek (opcionális): a tetejére szórhatsz egy csipet fahéjat, vagy keverhetsz a turmixba 2–3 g cukrozatlan kakaóport – kicsi plusz íz, minimális extra kalória.",
    
    // 8) Időzítés
    "11) Edzésnapon: mehet edzés előtt 30–60 perccel (mini „gainer” – gyorsabb ch a banánból, lassabb a zabtól), vagy edzés után, ha jól esik egy krémes, laktató shake.",
    "12) Pihenőnapon: délutáni, laktató uzsonnának ideális – nem üres fehérjeturmix, de a ch vissza van húzva, így nem lő túl a napi kalórián.",

    // 9) Makró összefoglaló (kb. értékek)
    "Makró összefoglaló – 2-U – Zabpelyhes verzió (whey + zab + banán):",
    "• Edzésnapos adag (30 g zab + 1 közepes banán ~100 g, 30 g whey)\n  ≈ 315–320 kcal\n  ≈ 29 g fehérje",
    "• Pihenőnapos adag (20 g zab + ½ banán ~50 g, 30 g whey)\n  ≈ 230–235 kcal\n  ≈ 27 g fehérje\n  (Ha a banánt elhagyod pihenőnapon, még lejjebb megy a ch és a kcal, cserébe extra diétás lesz.)"
  ]
},
{
  id: "3-U-alap",
  mealId: "3-U-alap",
  title: "3-U – Alap verzió (Abonett + cottage + uborka/retek)",
  timeMinutes: 5,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Edzésnapos adag: 3 db teljes kiőrlésű abonett, 120 g cottage cheese, kb. 50–80 g uborka/retek (mehet bőven, kalóriában alig számít).",
    "Pihenőnapos adag: 2 db abonett, 100 g cottage cheese, kb. 70–100 g uborka/retek – több zöldség, kicsit kevesebb ch és kalória.",

    // 1) Zöldség előkészítése
    "1) Zöldség mosása: mosd meg alaposan az uborkát és/vagy a retket folyó víz alatt.",
    "2) Uborka szeletelése: vágd vékony karikákra vagy ferdén szeletekre, hogy jól elférjen az abonettre.",
    "3) Retek szeletelése: vágd nagyon vékony karikákra, így ropogós marad, de nem esik le a cottage tetejéről.",

    // 2) Cottage alap
    "4) Cottage kimérése: edzésnapon mérj ki 120 g, pihenőnapon 100 g cottage cheese-t egy kis tálba.",
    "5) Ízesítés (opcionális): enyhén sózd, borsozd, keverhetsz bele szárított snidlinget vagy apróra vágott újhagymát, ha szereted.",
    "6) Krémesítés: egy kanállal keverd át a cottage-ot, hogy kicsit krémesebb, kenhetőbb állagot kapj (nem baj, ha maradnak túródarabok).",

    // 3) Abonettek megkenése
    "7) Abonett előkészítése: tedd az abonetteket egy tányérra – edzésnapon 3 db-ot, pihenőnapon 2 db-ot.",
    "8) Megkenés: oszd el a cottage-ot az abonettek tetején bő, de egyenletes rétegben. Ez adja az uzsonna fő fehérjeforrását, ne spórolj vele.",

    // 4) Zöldség rá
    "9) Zöldség ráhelyezése: rakd az uborka- és/vagy retkarikákat a cottage tetejére.",
    "10) Elrendezés: teheted szépen sorban szendvics-szerűen, vagy lazábban „szórva” – a lényeg, hogy minden falatba jusson zöldség.",

    // 5) Tálalás és dobozolás
    "11) Azonnali fogyasztás: frissen a legropogósabb – 2–3 perc alatt összerakható, jó gyors, sós uzsonna.",
    "12) Dobozolás (ha vinnéd magaddal): tedd a megkent abonetteket óvatosan ételes dobozba. Ha attól félsz, hogy elázik az abonett, a cottage + zöldség mehet külön kis dobozba, és csak evés előtt kend rá.",

    // 6) Makró összefoglaló (kb. értékek)
    "Makró összefoglaló – 3-U – Alap verzió (Abonett + cottage + uborka/retek):",
    "• Edzésnapos adag (3 abonett + 120 g cottage + kevés zöldség)\n  ≈ 170 kcal\n  ≈ 18,5 g fehérje",
    "• Pihenőnapos adag (2 abonett + 100 g cottage + több zöldség)\n  ≈ 130 kcal\n  ≈ 15 g fehérje"
  ]
},
{
  id: "3-U-edes",
  mealId: "3-U-edes",
  title: "3-U – Édes verzió (cottage + bogyós + méz/édesítő abonettre kenve)",
  timeMinutes: 5,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Edzésnapos adag: 2 db abonett, 120 g cottage cheese, 60–70 g bogyós gyümölcs (áfonya/málna/eper), édesítéshez inkább édesítő; ha mézet használsz, max. 2 tk (≈10 g).",
    "Pihenőnapos adag: 2 db abonett, 100 g cottage cheese, 50–60 g bogyós gyümölcs, édesítéshez inkább édesítő; ha nagyon kell a méz, max. 1 tk (≈5 g).",

    // 1) Gyümölcs előkészítése
    "1) Friss gyümölcs esetén: mosd meg a bogyósokat, csepegtesd le. Epret vágd kisebb darabokra, hogy jól eloszoljon a cottage-ban.",
    "2) Fagyasztott gyümölcs esetén: hagyd 3–5 percig szobahőmérsékleten kicsit felengedni. Ha „jegesebb”, hidegebb állagot szeretnél, mehet félig fagyosan is a cottage-ba.",

    // 2) Cottage édesítése
    "3) Cottage kimérése: edzésnapon 120 g, pihenőnapon 100 g cottage cheese-t tegyél egy kis tálba.",
    "4) Ízesítés: szórhatsz rá egy kis fahéjat (opcionális, de nagyon jól passzol az édes verzióhoz).",
    "5) Édesítés: adj hozzá kalóriamentes édesítőt (eritrit/sztívia) ízlés szerint, vagy ha mézzel dolgozol, edzésnapon max. 2 tk (≈10 g), pihenőnapon max. 1 tk (≈5 g).",
    "6) Keverés: keverd át alaposan, hogy a cottage mindenhol édes/fahéjas legyen, de a szemcsés állag maradjon meg egy kicsit.",

    // 3) Gyümölcs belekeverése
    "7) Gyümölcs hozzáadása: tedd a bogyós gyümölcsöt a cottage-hoz (edzésnapon kb. 60–70 g, pihenőnapon kb. 50–60 g).",
    "8) Finom átforgatás: óvatosan keverd össze, hogy friss gyümölcsnél maradjanak kisebb darabok, fagyasztott gyümölcsnél pedig szépen „befesse” a cottage-ot – ettől lesz színes, desszert-hangulatú.",

    // 4) Abonettek megkenése
    "9) Abonett előkészítése: tedd a 2 db abonettet egy tányérra.",
    "10) Megkenés: kanalazd a gyümölcsös-cottage krémet az abonettek tetejére, és egy kanál hátával egyenletesen oszlasd el rajtuk.",

    // 5) Tálalás, állag
    "11) Azonnali fogyasztás: frissen a legjobb – ropogós az abonett, krémes a teteje, olyan, mint egy édes mini-szendvics/desszert.",
    "12) Ha kicsit állni hagyod: az abonett elkezd puhulni a cottage-tól; ha a ropogós állagot szereted, inkább közvetlenül elkészítés után edd meg.",

    // 6) Makró összefoglaló (kb. értékek)
    "Makró összefoglaló – 3-U – Édes verzió (cottage + bogyós + édesítés, 2 db abonetten):",
    "• Édesítővel (kalóriamentes) – edzésnapos adag (2 abonett + 120 g cottage + ~65 g bogyós)\n  ≈ 180 kcal\n  ≈ 18 g fehérje",
    "• Édesítővel – pihenőnapos adag (2 abonett + 100 g cottage + ~55 g bogyós)\n  ≈ 160 kcal\n  ≈ 15,5 g fehérje",
    "• Ha edzésnapon 10 g mézet is teszel bele: + ≈30 kcal → kb. 210 kcal / ~18 g fehérje",
    "• Ha pihenőnapon 5 g mézet teszel bele: + ≈15 kcal → kb. 175 kcal / ~15,5 g fehérje"
  ]
},
{
  id: "3-U-lazacos",
  mealId: "3-U-lazacos",
  title: "3-U – Lazacos prémium (abonett + cottage + füstölt lazac)",
  timeMinutes: 5,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Edzésnapos adag: 2 db teljes kiőrlésű abonett, 100–120 g cottage cheese (ajánlott középérték: 110 g), 40–50 g füstölt lazac (ajánlott: 45 g), kevés friss citromlé vagy citromszelet tálaláshoz.",
    "Pihenőnapos adag: 2 db abonett, 80–100 g cottage cheese (ajánlott: 90 g), 25–30 g füstölt lazac (ajánlott: 28 g), citrom ugyanúgy – az élmény megmarad, a kalória picit visszább van húzva.",

    // 1) Cottage alap ízesítése
    "1) Cottage kimérése: edzésnapon mérj ki 100–120 g, pihenőnapon 80–100 g cottage cheese-t egy kis tálba (zsírszegény verzió, 0,2–1,5%).",
    "2) Fűszerezés: enyhén borsozd, szórhatsz rá egy csipet szárított kaprot vagy apróra vágott friss kaprot. Sóval óvatosan bánj, mert a füstölt lazac eleve sós.",
    "3) Krémesítés: egy kanállal keverd át a cottage-ot, hogy a fűszerek eloszoljanak, és picit krémesebb, könnyebben kenhető állaga legyen.",

    // 2) Füstölt lazac előkészítése
    "4) Lazac kivétele: vedd ki a füstölt lazacot a csomagolásból, ha sok benne a nedvesség, papírtörlővel finoman itasd le.",
    "5) Szeletelés: vágd vékony csíkokra vagy kisebb falatokra – több kisebb csík jobban „tapad” az abonett tetején, és harapásnál nem csúszik le olyan könnyen.",

    // 3) Abonettek megkenése
    "6) Abonett előkészítése: tedd a 2 db abonettet egy tányérra.",
    "7) Cottage rákenése: oszd el a cottage-ot egyenletesen az abonettek tetején – legyen bő, de ne folyjon le az oldalán. Edzésnapon mehet egy hajszálnyival vastagabb réteg, pihenőnapon kicsit visszafogottabb.",

    // 4) Lazac ráhelyezése
    "8) Lazac elrendezése: rakd a cottage tetejére a lazaccsíkokat vagy -szeleteket. Igazgasd el úgy, hogy minden harapásba jusson lazac, de ne álljon nagyon magasra (különben könnyebben lecsúszik).",

    // 5) Citrom + extra fűszerek
    "9) Citrom: cseppents nagyon kevés friss citromlevet a lazac tetejére, vagy tálalj mellé egy kis citromszeletet, amit evés előtt rá tudsz csavarni.",
    "10) Extra fűszerek (opcionális): mehet a tetejére még egy csipet frissen őrölt bors és pár szál friss kapor vagy petrezselyem – ez még „éttermesebb” érzetet ad.",

    // 6) Tálalás, dobozolás
    "11) Azonnali fogyasztás: frissen a legjobb – ropogós abonett + krémes cottage + szaftos lazac. Inkább „ülős”, nyugisabb uzsonna, amit 2–3 perc alatt el lehet készíteni.",
    "12) Dobozolás tipp: ha magaddal viszed, az abonettet csomagold külön (pl. kis zacskóba), a cottage-ot és lazacot egy kis dobozba tedd, és evés előtt állítsd össze, hogy az abonett ne ázzon el.",

    // 7) Makró összefoglaló (kb. értékek)
    "Makró összefoglaló – 3-U – Lazacos prémium (2 abonetten):",
    "• Edzésnapos adag (2 abonett + ~110 g cottage + ~45 g füstölt lazac)\n  ≈ 220 kcal\n  ≈ 26 g fehérje",
    "• Pihenőnapos adag (2 abonett + ~90 g cottage + ~28 g füstölt lazac)\n  ≈ 170 kcal\n  ≈ 20 g fehérje\n  (Ha mellé teszel még uborkát/retket extra ropogós köretnek, az kalóriában szinte nem számít, de még nagyobb lesz a volumen.)"
  ]
},
{
  id: "4-U-gyors",
  mealId: "4-U-gyors",
  title: "4-U – Gyors alap verzió (joghurt + granola + áfonya)",
  timeMinutes: 3,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Edzésnapos adag: 200 g natúr, zsírszegény joghurt (1,5–2%), 25 g granola, 50 g áfonya vagy más bogyós gyümölcs.",
    "Pihenőnapos adag: 170–180 g joghurt (ajánlott középérték: 175 g), 20 g granola, 50 g áfonya – fehérje rendben marad, a ch és kalória kicsit vissza van húzva.",

    // 1) Joghurt alap
    "1) Joghurt alap: kanalazd a kimért joghurtot egy kisebb tálba vagy fedeles dobozba.",
    "2) Állag beállítása (opcionális): ha nagyon sűrű a joghurt, adj hozzá 1–2 evőkanál vizet vagy egy kevés 1,5%-os tejet, és keverd át, hogy krémesebb, kanállal könnyen keverhető állaga legyen.",

    // 2) Áfonya / bogyós gyümölcs előkészítése
    "3) Friss bogyós gyümölcs: mosd meg gyorsan folyó víz alatt, majd csepegtesd le. Ha nagyobb szemű az áfonya/eper, nyugodtan ketté is vághatod, hogy minden kanálba jusson belőle.",
    "4) Fagyasztott bogyós: ha fagyasztott áfonyát vagy málnát használsz, hagyd 5–10 percig szobahőmérsékleten kicsit felengedni – ha félig fagyosan teszed rá, „joghurt-fagyi” jellegű lesz az uzsonna.",

    // 3) Granola kimérése és rászórása
    "5) Granola kimérése: edzésnapon mérj ki 25 g granolát, pihenőnapon 20 g-ot (konyhai mérleggel vagy kb. 2–3 evőkanál szint).",
    "6) Granola ráhelyezése: szórd a joghurt tetejére egyenletesen, hogy összekeverve minden falatban legyen ropogós rész.",

    // 4) Áfonya a tetejére
    "7) Áfonya/bogyós rászórása: szórd a granola tetejére az 50 g áfonyát vagy bogyós mixet. Kicsit bele is nyomkodhatod a joghurtba, hogy minden kanálba jusson gyümölcs.",

    // 5) Tálalás / dobozolás
    "8) Azonnali fogyasztás: frissen a granola ropogós marad – ez a full „2 perc alatt kész” uzsonna, ha otthon eszed.",
    "9) Dobozolás munkába: tedd a joghurtot alulra, rá a gyümölcsöt, a granolát pedig teheted külön kis zacskóba, és csak evés előtt szórod rá, ha nem szeretnéd, hogy teljesen megpuhuljon. Ha nem zavar a puhább állag, mehet minden egy dobozba is.",

    // 6) Extra ízesítés (opcionális)
    "10) Extra ízek (opcionális): szórhatsz a tetejére egy csipet fahéjat vagy vaníliát, illetve ha nagyon diétás időszakban vagy, édesítőt is keverhetsz a joghurtba (eritrit/sztívia). Méz elvileg mehetne, de ennél a verziónál nem számolunk vele, hogy ne csússzon el a kalória.",

    // 7) Makró összefoglaló (kb. értékek)
    "Makró összefoglaló – 4-U – Gyors alap verzió (joghurt + granola + áfonya):",
    "• Edzésnapos adag (200 g joghurt, 25 g granola, 50 g áfonya)\n  ≈ 260 kcal\n  ≈ 10 g fehérje",
    "• Pihenőnapos adag (≈175 g joghurt, 20 g granola, 50 g áfonya)\n  ≈ 225 kcal\n  ≈ 8,5 g fehérje\n  (Ha a granolát picit visszavágod pihenőnapon, tovább csökken a ch, de a snack laktató marad a joghurt miatt.)"
  ]
},
{
  id: "4-U-proteines",
  mealId: "4-U-proteines",
  title: "4-U – Proteines verzió (joghurt + ½ adag fehérje + granola + áfonya)",
  timeMinutes: 3,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Edzésnapos adag: 180 g natúr, zsírszegény joghurt (1,5–2%), 15 g fehérjepor (≈½ adagolókanál), 20 g granola, 50 g áfonya vagy más bogyós.",
    "Pihenőnapos adag: 160 g natúr joghurt, 15 g fehérjepor, 15 g granola, 40–50 g áfonya (ajánlott középérték: ~45 g) – kevesebb ch/kalória, de a fehérje szintje szinte ugyanaz.",

    // 1) Joghurt + fehérje összekeverése
    "1) Joghurt be a tálba: kanalazd a kimért joghurtot egy kisebb tálba vagy fedeles dobozba.",
    "2) Fehérjepor hozzáadása: szórd a joghurtra a 15 g fehérjeport (vaníliás/csokis íz különösen jól áll neki).",
    "3) Alapos keverés: keverd össze kanállal vagy kis habverővel, amíg csomómentes, krémes állagú nem lesz. Először sűrűbb lehet, ez normális.",
    "4) Állag beállítása (opcionális): ha túl töménynek érzed, adj hozzá 1–2 evőkanál vizet vagy egy kevés 1,5%-os tejet, és keverd tovább, amíg „desszert-joghurt” állagot kapsz.",

    // 2) Áfonya / bogyós előkészítése
    "5) Friss áfonya: mosd meg gyorsan folyó víz alatt, majd csepegtesd le. Ha nagyobb szemű, akár félbe is vághatod, hogy minden falatba jusson.",
    "6) Fagyasztott áfonya: hagyd 5–10 percig szobahőmérsékleten, hogy kicsit felengedjen. Ha félig fagyosan teszed a tetejére, hidegebb, „joghurt-fagyi” jellegű uzsonnát kapsz.",

    // 3) Granola hozzáadása
    "7) Granola kimérése: edzésnapon mérj ki 20 g, pihenőnapon 15 g granolát (kb. 2 kisebb evőkanál).",
    "8) Granola rászórása: szórd a proteines joghurt tetejére egyenletesen, hogy ropogós réteget kapj. Itt már a joghurt+fehérje adja a fehérje nagy részét, a granola inkább ch + ropogás.",

    // 4) Áfonya a tetejére
    "9) Áfonya elosztása: szórd a 40–50 g áfonyát a granola tetejére. Kicsit bele is nyomkodhatod, hogy ne csak a legfelső rétegben legyen gyümölcs.",
    
    // 5) Tálalás / dobozolás
    "10) Azonnali tálalás: kanállal eszed, mint egy réteges desszertet – alul proteines joghurt, középen ropogós granola, felül savanykás édes bogyós.",
    "11) Dobozolás munkába: a joghurt+fehérje mehet alulra, rá a gyümölcs, a granolát akár külön kis zacskóba is teheted, és csak evés előtt szórod rá, ha ropogósan szereted. Ha nem zavar a megpuhulás, nyugodtan mehet minden egy dobozba is.",

    // 6) Extra ízesítés (opcionális)
    "12) Extra ízek (opcionális): szórhatsz a tetejére egy csipet fahéjat vagy vaníliát, illetve ha a fehérje nem elég édes, pici édesítőt (eritrit/sztívia) keverhetsz a joghurtba. Mézet ennél a verziónál nem számolunk, hogy kontroll alatt maradjon a kalória.",

    // 7) Makró összefoglaló (kb. értékek)
    "Makró összefoglaló – 4-U – Proteines verzió (joghurt + ½ adag fehérje + granola + áfonya):",
    "• Edzésnapos adag (180 g joghurt, 20 g granola, 50 g áfonya, 15 g whey)\n  ≈ 285–290 kcal\n  ≈ 20 g fehérje",
    "• Pihenőnapos adag (160 g joghurt, 15 g granola, 40 g áfonya, 15 g whey)\n  ≈ 245–250 kcal\n  ≈ 19 g fehérje\n  (Ha a granolát még lejjebb viszed pihenőnapon, tovább csökken a ch és a kcal, de a fehérje szint marad erős.)"
  ]
},
{
  id: "4-U-smoothie-bowl",
  mealId: "4-U-smoothie-bowl",
  title: "4-U – Smoothie bowl verzió (joghurt + áfonya + granola + gyümölcs + magvak)",
  timeMinutes: 5,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Edzésnapos adag: turmix alap – 180 g natúr, zsírszegény joghurt (1,5–2%), 60–70 g áfonya; topping – 20 g granola, 40–50 g friss gyümölcs (banán/alma/eper), 8–10 g vegyes mag (mandula, dió, tökmag).",
    "Pihenőnapos adag: turmix alap – 160–170 g natúr joghurt, 50–60 g áfonya; topping – 15 g granola, 30–40 g friss gyümölcs, 5–7 g vegyes mag.",
    
    // 1) Turmix alap készítése
    "1) Turmix alap – joghurt + áfonya: tedd a kimért joghurtot a turmixgépbe vagy egy botmixer poharába, add hozzá az áfonyát (edzésnapon 60–70 g, pihenőnapon 50–60 g).",
    "2) Turmixolás: turmixold 20–30 másodpercig közepes–magas fokozaton, amíg teljesen krémes, szép lila színű smoothie-alapot kapsz (ne maradjanak nagy gyümölcsdarabok).",

    // 2) Állag beállítása
    "3) Ha túl sűrű: adj hozzá egy kevés vizet vagy még 1–2 evőkanál joghurtot, majd turmixold át újra, amíg kanalazható, de nem folyós állagot kapsz.",
    "4) Ha túl híg: legközelebb kicsit kevesebb folyadékot használj, vagy tehetsz bele 1–2 teáskanál zabpelyhet és még 10–15 másodpercig turmixolod (csak ha szeretnél extra sűrűbb, „pudingosabb” alapot).",

    // 3) Tálaló tál előkészítése
    "5) Alap tálba öntése: öntsd a krémes joghurt–áfonya mixet egy mélyebb tálba – ez lesz a smoothie bowl alapja, amire a toppingek kerülnek.",

    // 4) Topping – granola
    "6) Granola kimérése: edzésnapon mérj ki 20 g, pihenőnapon 15 g granolát.",
    "7) Granola elrendezése: szórd a smoothie tetejére csíkban, körben, vagy kisebb „szigetekben” – ahogy vizuálisan tetszik, a lényeg, hogy minden kanálba jusson belőle.",

    // 5) Topping – friss gyümölcs
    "8) Gyümölcsválasztás: válassz 1 féle friss gyümölcsöt (banán, alma, eper stb.). Edzésnapon 40–50 g, pihenőnapon 30–40 g körüli mennyiséggel számolj.",
    "9) Gyümölcs felvágása: banánt karikázd fel, almát kockázd kis falatokra, epret szeleteld.",
    "10) Gyümölcs elrendezése: a vágott gyümölcsöt rakd a granola mellé vagy közé – csíkban vagy kis halmokban is szép, így minden falatban lesz gyümölcs is.",

    // 6) Topping – magvak
    "11) Magvak kimérése: edzésnapon mérj ki 8–10 g, pihenőnapon 5–7 g vegyes magot (mandula, dió, tökmag – ízlés szerint vegyítve).",
    "12) Magvak előkészítése: ha szeretnéd, a magvakat durvára vághatod vagy száraz serpenyőben 1–2 percig meg is piríthatod, hogy intenzívebb legyen az ízük (nem kötelező, de plusz „gourmet” élmény).",
    "13) Magvak rászórása: szórd a magokat a smoothie bowl tetejére – mehetnek a granola és a gyümölcs közé, hogy minden kanálba jusson egy kis ropogós textúra is.",

    // 7) Tálalás, fogyasztás
    "14) Tálalás: kanalazva edd, mint egy desszertes müzlis tálat – próbálj úgy kanalazni, hogy minden falatban legyen krémes alap + granola + gyümölcs + mag.",
    "15) Dobozolás (ha vinnéd magaddal): a smoothie alapot tedd zárható dobozba, a granolát és a magvakat külön kis tasakba vagy dobozba készítsd, és csak evés előtt szórd a tetejére, hogy ne ázzon el a ropogós rész.",

    // 8) Makró összefoglaló – kb. értékek
    "Makró összefoglaló – 4-U – Smoothie bowl verzió (joghurt + áfonya turmix + granola + gyümölcs + magvak):",
    "• Edzésnapos adag (180 g joghurt, 65 g áfonya, 20 g granola, 45 g friss gyümölcs, 9 g mag)\n  ≈ 315 kcal\n  ≈ 10,5–11 g fehérje",
    "• Pihenőnapos adag (165 g joghurt, 55 g áfonya, 15 g granola, 35 g friss gyümölcs, 6 g mag)\n  ≈ 255 kcal\n  ≈ 9 g fehérje"
  ]
},
{
  id: "5-U-fitnesz-alap",
  mealId: "5-U-fitnesz-alap",
  title: "5-U – Fitnesz alap (főtt tojás + paprika + uborka)",
  timeMinutes: 10,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Edzésnapos adag: 2 db M-es főtt tojás, 80–100 g piros/vegyes paprika (csíkokra vágva), 80–100 g uborka (hasábokra vágva), só/bors ízlés szerint, opcionálisan 1 tk mustár.",
    "Pihenőnapos adag: 1 db M-es főtt tojás, 100–120 g paprika, 100–120 g uborka, só/bors ízlés szerint, opcionálisan nagyon kevés mustár vagy natúr joghurt mártogatósnak.",

    // 1) Tojás megfőzése
    "1) Tojás előkészítése: tedd a tojást/tojásokat egy kisebb lábasba, és öntsd fel hideg vízzel úgy, hogy bőven ellepje őket.",
    "2) Felforralás: tedd a lábast a tűzre, közepes–magas lángon melegítsd, amíg a víz felforr.",
    "3) Főzés keménytojásnak: a forrástól számítva főzd a tojásokat 9–10 percig, hogy teljesen keményre készüljenek (edzés- és pihenőnapon is ugyanígy).",
    "4) Lehűtés: a főzés végén öntsd le a forró vizet, engedj rá hideg vizet, és hagyd a tojásokat 2–3 percig hűlni, hogy könnyebb legyen megpucolni.",
    "5) Pucolás: óvatosan törd meg a héjat a pulton, húzd le a héjat, majd a kész tojásokat tedd félre egy kis tányéron.",

    // 2) Zöldségek előkészítése
    "6) Paprika mosása: mosd meg alaposan a paprikát, töröld szárazra, vágd félbe, majd szedd ki a magházat és a fehér ereket.",
    "7) Paprika szeletelése: a paprikát vágd hosszú csíkokra vagy kisebb hasábokra, hogy kényelmesen lehessen kézzel enni vagy mártogatni.",
    "8) Uborka mosása: mosd meg az uborkát, ha szeretnéd, részben vagy teljesen meg is hámozhatod (csíkosra hámozva jól néz ki).",
    "9) Uborka felvágása: az uborkát vágd ujjnyi vastag hasábokra/rudacskákra, hogy könnyen fogható legyen.",

    // 3) Tálalás, fűszerezés
    "10) Tojás felszeletelése: a főtt tojásokat vágd félbe vagy cikkekre, és rendezd egy tányér egyik felére.",
    "11) Zöldség elrendezése: a paprikacsíkokat és uborkahasábokat helyezd a tojás mellé, kis „kupacokban” vagy legyező formában – ahogy jól esik.",
    "12) Fűszerezés: szórd meg a tojásokat egy csipet sóval és borssal; ha szereted, tegyél a tányérra 1 teáskanál mustárt vagy egy kis natúr joghurtot mártogatósnak (főleg edzésnapon fér bele jobban).",

    // 4) Fogyasztás, praktikum
    "13) Fogyasztás: kézzel is simán ehető „fitnesz finger food” – tojásfalat + paprika/uborka párosítással. Jó délutáni stabilizáló snack, ha nem akarsz nagyot enni, de kell egy kis fehérje.",
    "14) Dobozolás: ha viszed magaddal, a tojást pucolva vagy héjban is beteheted egy dobozba, a paprikát és uborkát külön rekeszbe készítsd, így ropogós marad.",

    // 5) Makró összefoglaló – kb. értékek
    "Makró összefoglaló – 5-U – Fitnesz alap (főtt tojás + paprika + uborka):",
    "• Edzésnapos adag (2 tojás, ~90 g paprika, ~90 g uborka)\n  ≈ 180 kcal\n  ≈ 13,5 g fehérje",
    "• Pihenőnapos adag (1 tojás, ~110 g paprika, ~110 g uborka)\n  ≈ 120 kcal\n  ≈ 8 g fehérje"
  ]
},
{
  id: "5-U-turokremes-tojas",
  mealId: "5-U-turokremes-tojas",
  title: "5-U – Túrókrémes töltött tojás (tojás + túrókrém + zöldséghasábok)",
  timeMinutes: 12,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Edzésnapos adag: 2 db M-es főtt tojás, 50–60 g zsírszegény túró vagy cottage cheese (ez megy a sárgájával kikeverve a töltelékbe), 80–100 g paprika, 80–100 g uborka, só, bors, pici mustár vagy natúr joghurt a krémhez.",
    "Pihenőnapos adag: 2 db M-es főtt tojás (szigorúbb verzióban 1 egész tojás + 1 csak fehérje), 40–50 g túró/cottage, 90–110 g paprika, 90–110 g uborka, só, bors, kevés mustár vagy joghurt a krémhez.",

    // 1) Tojás megfőzése
    "1) Tojás főzése: tedd a tojásokat egy kisebb lábasba, öntsd fel hideg vízzel úgy, hogy bőven ellepje őket.",
    "2) Felforralás: tedd a lábast a tűzre, forrald fel a vizet közepes–magas lángon.",
    "3) Kemény tojás: a forrástól számítva főzd a tojásokat 9–10 percig, hogy teljesen keményre készüljenek (edzés- és pihenőnapon is ugyanígy).",
    "4) Lehűtés, pucolás: öntsd le a forró vizet, engedj rá hideg vizet, hagyd a tojásokat 2–3 percig hűlni, majd óvatosan megpucolod és félreteszed hűlni.",

    // 2) Tojásfehérje „csónakok” előkészítése
    "5) Felezés: a kihűlt tojásokat hosszában vágd félbe éles késsel.",
    "6) Sárgáják kiemelése: egy kiskanállal óvatosan emeld ki a sárgájákat, és tedd őket egy kisebb tálba; a tojásfehérje-fél darabok (csónakok) maradjanak egészben egy tányéron.",
    "7) Pihenőnapi trükk (opcionális): ha pihenőnapon szigorúbb szeretnél lenni, az egyik tojás sárgáját tedd félre (nem használod fel), így 1 teljes tojás + 1 tojásfehérje lesz a töltelék alapja.",

    // 3) Túrókrém elkészítése
    "8) Túró/cottage kimérése: mérj ki edzésnapon 50–60 g, pihenőnapon 40–50 g zsírszegény túrót vagy cottage cheese-t, és tedd a sárgáják mellé a tálba.",
    "9) Krémesítés: adj hozzá 1–2 teáskanál natúr joghurtot (csak annyit, hogy jól kenhető legyen a krém), egy csipet sót és borsot.",
    "10) Ízesítés: tehetsz bele ½ teáskanál mustárt (opcionális) és egy kevés aprított snidlinget/petrezselymet, ha zöldfűszeresebb ízt szeretnél.",
    "11) Összekeverés: villával törd össze a tojássárgáját a túróval/cottage-dzsel, és keverd addig, amíg egynemű, krémes, kanállal könnyen formázható masszát kapsz.",

    // 4) Tojás megtöltése
    "12) Töltés: a kész túrókrémet kiskanállal oszd el a tojásfehérje csónakokban; nyugodtan halmozhatsz rájuk pici „kupacot”, nem kell teljesen síkba húzni.",
    "13) Extra fancy opció: ha szépen szeretnéd tálalni, a túrókrémet habzsákba (vagy levágott sarkú zacskóba) teszed, és így nyomod a tojásfehérjékbe kis rózsák formájában.",

    // 5) Zöldséghasábok mellé
    "14) Paprika előkészítése: mosd meg a paprikát, vágd félbe, szedd ki a magházat és a fehér ereket, majd vágd hosszú csíkokra/hasábokra.",
    "15) Uborka előkészítése: mosd meg az uborkát, opcionálisan részben vagy teljesen meg is hámozhatod, majd vágd ujjnyi vastag rudakra.",
    "16) Tálalás: egy tányér közepére rendezd a töltött tojásfeleket, köréjük pedig a paprikát és uborkát; így lesz belőle igazi „bodybuilder snack” mártogatós jelleggel.",

    // 6) Fogyasztás, praktikum
    "17) Fogyasztás: eheted úgy, hogy harapsz egy falat zöldséget, majd egy falat töltött tojást, vagy a zöldséghasábokat óvatosan belenyomod a tojásos-túrós krémbe.",
    "18) Dobozolás: ha magaddal viszed, a töltött tojásokat és a zöldséghasábokat külön rekeszben/dobozban tartsd, hogy ne nyomódjanak szét; hűtve 1 napig simán bírják.",

    // 7) Makró összefoglaló – kb. értékek
    "Makró összefoglaló – 5-U – Túrókrémes töltött tojás (tojás + túrókrém + zöldséghasábok):",
    "• Edzésnapos adag (2 tojás, ~55 g túró/cottage, ~90 g paprika, ~90 g uborka)\n  ≈ 230–235 kcal\n  ≈ 19–20 g fehérje",
    "• Pihenőnapos adag (2 tojás, ~45 g túró/cottage, ~100 g paprika, ~100 g uborka)\n  ≈ 225 kcal\n  ≈ 18–19 g fehérje",
    "• Ha pihenőnapon az egyik tojássárgát elhagyod (1 egész + 1 fehérje), akkor még pár tíz kcal-lal alacsonyabb lesz az összkalória, miközben a fehérje gyakorlatilag megmarad."
  ]
},
{
  id: "5-U-wrap",
  mealId: "5-U-wrap",
  title: "5-U – Wrap stílusú uzsonna (tojás + zöldséghasábok + teljes kiőrlésű tortilla)",
  timeMinutes: 12,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Edzésnapos adag: 1 db közepes teljes kiőrlésű tortilla (~40–50 g), 2 db M-es főtt tojás (karikákra vágva), 60–80 g paprika hasábokra vágva, 60–80 g uborka hasábokra vágva, ízesítésnek csipet só, bors, opcionálisan 1 tk mustár vagy 1–2 tk joghurtos szósz.",
    "Pihenőnapos adag: 1 db kisebb teljes kiőrlésű tortilla (~35–40 g), 1 db M-es főtt tojás (karikákra vágva), 70–90 g paprika, 70–90 g uborka hasábokra vágva, só, bors, kevés mustár vagy joghurtos szósz (visszafogottan).",

    // 1) Tojás megfőzése
    "1) Tojás főzése: tedd a tojás(oka)t egy kisebb lábasba, öntsd fel hideg vízzel úgy, hogy bőven ellepje.",
    "2) Forralás: tedd a lábast a tűzre, forrald fel a vizet közepes–magas lángon.",
    "3) Kemény tojás: a forrástól számítva főzd a tojásokat 9–10 percig, hogy teljesen keményre készüljenek.",
    "4) Lehűtés, pucolás: öntsd le a forró vizet, engedj rá hideg vizet, hagyd 2–3 percig hűlni, majd óvatosan hámozd meg a tojásokat.",

    // 2) Tojás karikázása
    "5) Tojás szeletelése: a megfőtt, lehűlt tojásokat vágd 0,5–1 cm vastag karikákra; tedd félre egy kis tányérra, hogy töltéskor kéznél legyenek.",

    // 3) Zöldségek előkészítése
    "6) Paprika előkészítése: mosd meg a paprikát, vágd félbe, szedd ki a magházat és a fehér ereket, majd vágd hosszú, vékony csíkokra/hasábokra, hogy jól illeszkedjenek a wrap belsejébe.",
    "7) Uborka előkészítése: mosd meg az uborkát, opcionálisan részben vagy teljesen hámozd meg, majd vágd ujjnyi vastag, hosszú rudakra (hasábokra).",

    // 4) Tortilla előkészítése
    "8) Tortilla melegítése (opcionális, de ajánlott): a teljes kiőrlésű tortillát tedd egy száraz, előmelegített serpenyőbe, és mindkét oldalát 10–20 másodpercig melegítsd, amíg kicsit puhább és hajlékonyabb lesz. Ha sietsz, használhatod hidegen is, csak óvatosabban tekerd.",
    
    // 5) Szósz / alap réteg
    "9) Alap szósz: a tortilla egyik oldalát vékonyan kend meg 1 tk mustárral, vagy 1–2 tk natúr joghurttal (pici sóval, borssal elkeverve). Ez ízt ad, és segít összefogni a tölteléket, hogy ne csússzon szét.",
    
    // 6) Töltés felépítése
    "10) Tojásréteg: a tortilla közepére, kissé a középpont alá (hogy legyen hely a felhajtásnak) fektess egymás mellé egy sor tojáskarikát. Edzésnapon használd mindkét tojást, pihenőnapon csak 1 tojás karikáit.",
    "11) Zöldségréteg: a tojáskarikákra és melléjük pakold a paprikát és az uborkahasábokat; igyekezz a tölteléket hosszúkás formában tartani, hogy könnyű legyen feltekerni. Ne töltsd túl, mert szétnyílhat a wrap.",

    // 7) Felcsavarás technikája
    "12) Alj felhajtása: a tortilla alsó részét hajtsd fel 2–3 cm-rel a töltelék alá, hogy alulról ne potyogjon ki semmi.",
    "13) Oldalirányú tekerés: ezután az egyik oldalról indulva szorosan tekerd fel a tortillát, mintha egy gyrost vagy burritót csinálnál; közben a tölteléket kézzel kicsit igazíthatod, hogy egyenletes legyen.",
    "14) Rögzítés: ha útközben eszed, tekerd körbe szalvétával vagy félbevágott sütőpapírral; szükség esetén 1 db fogpiszkálóval is fixálhatod (csak ne felejtsd benne!).",

    // 8) Tálalás, szállítás
    "15) Tálalás: eheted egyben kézből, vagy ferdén félbevágva (45°-ban), így „street food” hangulata lesz, és könnyebb harapni.",
    "16) Dobozolás: ha magaddal viszed munkába/edzésre, becsomagolt wrapet tedd egy dobozba vagy alufóliába; hűtőben pár órát simán bír, anélkül, hogy nagyon elázna.",

    // 9) Makró összefoglaló – kb. értékek
    "Makró összefoglaló – 5-U – Wrap stílusú uzsonna (teljes kiőrlésű tortilla + tojás + paprika + uborka):",
    "• Edzésnapos adag (1 közepes tortilla ~45 g, 2 tojás, ~70 g paprika, ~70 g uborka)\n  ≈ 305 kcal\n  ≈ 17 g fehérje",
    "• Pihenőnapos adag (1 kisebb tortilla ~37 g, 1 tojás, ~80 g paprika, ~80 g uborka)\n  ≈ 220 kcal\n  ≈ 10 g fehérje\n  (Itt a kevesebb tortilla + tojás miatt a szénhidrát és zsír visszafogottabb, de a volumen zöldségből megmarad.)"
  ]
},
{
  id: "6-U-zold-smoothie",
  mealId: "6-U-zold-smoothie",
  title: "6-U – Zöld smoothie (alap) (spenót + banán + alma + citromlé + víz)",
  timeMinutes: 5,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Edzésnapos adag (kicsit több ch az edzés mellé): ~40 g friss spenót, 80 g banán, 80–90 g alma (ajánlott: 80 g), ~10 ml citromlé, 200–230 ml víz.",
    "Pihenőnapos adag (visszafogottabb ch, inkább vitamin–hidratálás): ~40 g friss spenót, 60 g banán, 70 g alma, ~10 ml citromlé, ~200 ml víz.",

    // 1) Spenót előkészítése
    "1) Spenót mosása: a friss spenótot (baby spenót a legjobb) tedd szűrőbe, és folyó víz alatt alaposan öblítsd át.",
    "2) Levelek előkészítése: ha nagyobb levelek, tépkedd 2–3 darabba, hogy a turmixgépnek könnyebb dolga legyen. A szárak vékony része maradhat, a nagyon vastag szárakat lecsípheted.",

    // 2) Gyümölcsök előkészítése
    "3) Banán előkészítése: hámozd meg a banánt, vágd 3–4 darabba. Edzésnapon használd a ~80 g-ot (kb. ¾ kisebb vagy ½ nagyobb banán), pihenőnapon elég a ~60 g.",
    "4) Alma előkészítése: mosd meg az almát, vágd negyedekre, vágd ki a magházat. Nem muszáj hámozni, a héj plusz rost – csak ha nagyon zavar, akkor pucold meg. Kockázd fel kb. 1–2 cm-es darabokra.",

    // 3) Turmixpohár betöltése – rétegezés
    "5) Turmixpohár rétegezése: tedd a turmixgépbe vagy botmixer poharába alulra a spenótot (így könnyebben behúzza a kés).",
    "6) Gyümölcs rá: a spenótra tedd a banánt és az almát (az edzés- vagy pihenőnapi mennyiség szerint).",
    "7) Citromlé hozzáadása: önts rá kb. 10 ml citromlevet (1 evőkanál körül) – ez ízt ad, és segít az alma színét is megőrizni.",
    "8) Víz hozzáadása: öntsd fel 200–230 ml vízzel (edzésnapon mehet kicsit több, pihenőnapon elég a 200 ml körüli mennyiség).",

    // 4) Turmixolás
    "9) Első turmixolás: kezdd alacsonyabb fokozaton, hogy a spenót és a gyümölcsök leessenek a késekhez, majd válts közepes–magas fokozatra.",
    "10) Krémesítés: turmixold 30–60 másodpercig, amíg homogén, sima, egyszínű zöld italt kapsz – ne maradjanak nagy levél- vagy gyümölcsdarabok.",
    
    // 5) Állag finomhangolás
    "11) Ha túl sűrű: önts hozzá még 20–30 ml vizet, és turmixold át újra pár másodpercig, hogy iható, de nem vizes állagot kapj.",
    "12) Ha túl híg: legközelebb kicsivel kevesebb vizet használj, vagy növeld picit a gyümölcsmennyiséget (pl. +10 g alma edzésnapon).",

    // 6) Tálalás, fogyasztás
    "13) Tálalás: öntsd egy nagyobb pohárba vagy shakerbe. Ez egy könnyű, frissítő, főleg ch + mikrotápanyag bomba – fehérje szinte nincs benne, de a napi többi étkezésed ezt kompenzálja.",
    "14) Fogyasztási időzítés: edzésnapon mehet délutáni frissítőnek vagy edzés előtt 30–60 perccel egy kis plusz ch-nak; pihenőnapon inkább „vitaminos lötty”, amikor jól esik egy könnyű, nem nehéz uzsonna.",
    "15) Tipp: ha nagyon hidegen szeretnéd, dobhatsz a turmixba 2–3 jégkockát is – ilyenkor használj inkább 200 ml vizet, hogy ne híguljon túl, mire a jég elolvad.",

    // 7) Makró összefoglaló – kb. értékek
    "Makró összefoglaló – 6-U – Zöld smoothie (alap): spenót + banán + alma + citromlé + víz",
    "• Edzésnapos adag (≈40 g spenót, 80 g banán, 80 g alma)\n  ≈ 120 kcal\n  ≈ 2,3 g fehérje",
    "• Pihenőnapos adag (≈40 g spenót, 60 g banán, 70 g alma)\n  ≈ 100 kcal\n  ≈ 2,0 g fehérje\n  (Főleg ch + mikrotápanyag, nagyon könnyű, gyomorkímélő uzsonna – a napi többi magas fehérjés étkezés mellé.)"
  ]
},
{
  id: "6-U-avokados-toast",
  mealId: "6-U-avokados-toast",
  title: "6-U – Avokádós pirítós paradicsommal (avokádókrém + TK pirítós + paradicsom)",
  timeMinutes: 5,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Edzésnapos adag (kicsit combosabb, laktatóbb): 1 szelet teljes kiőrlésű kenyér (~35–40 g, pirítva), 60 g érett avokádó (kb. ½ közepes darab), 60–70 g paradicsom vékony szeletekben, fűszerek: só, bors, opcionálisan fokhagyma-granulátum vagy pár csepp citromlé az avóba.",
    "Pihenőnapos adag (kicsit visszafogottabb zsír + ch): 1 kisebb szelet TK kenyér (~30–35 g) vagy alternatívaként 2 db abonett, 40–50 g avokádó, 70–80 g paradicsom, só, bors, opcionális citromlé/fokhagyma.",

    // 1) Kenyér pirítása
    "1) Kenyér előkészítése: válassz egy szelet teljes kiőrlésű kenyeret (edzésnapon nyugodtan legyen kicsit nagyobb, pihenőnapon inkább kisebb szelet vagy abonett).",
    "2) Pirítás: tedd a kenyeret a kenyérpirítóba, és pirítsd aranybarnára; ha serpenyőben csinálod, egy száraz serpenyőben pirítsd mindkét oldalát 1–1 percig, amíg kívül enyhén ropogós lesz, de nem szárad ki teljesen.",

    // 2) Avokádókrém elkészítése
    "3) Avokádó felvágása: az avokádót vágd körbe a mag körül, csavard szét a két felet. A szükséges mennyiséget (edzésnap ~60 g, pihenőnap 40–50 g) kanalazd ki a héjból egy kis tálba.",
    "4) Pépesítés: villával törd össze az avokádót, amíg krémes, de picit darabos marad – nem baj, ha vannak benne kisebb avódarabok, ettől „kézművesebb” az érzés.",
    "5) Fűszerezés: sózd és borsozd ízlés szerint. Ha szeretnéd, adj hozzá pár csepp citromlevet (ízt ad + lassabban barnul), illetve egy csipet fokhagyma-granulátumot vagy chili pelyhet, ha bírod a fűszeresebb vonalat.",

    // 3) Paradicsom előkészítése
    "6) Paradicsom mosása: mosd meg a paradicsomot, töröld szárazra.",
    "7) Szeletelés: vágd vékony karikákra vagy hosszanti szeletekre, hogy szépen elférjenek a pirítós tetején. Edzésnapon 60–70 g körül, pihenőnapon inkább 70–80 g – a paradicsom volumennel tölt, kalóriában alig számít.",

    // 4) Összeállítás
    "8) Pirítós megkenése: a kész, még langyos pirítóst tedd egy tányérra, és egyenletesen kend meg az avokádókrémmel. Nyugodtan kenheted vastagabban is, de figyelj, hogy a széleknél is legyen krém, ne csak középen.",
    "9) Paradicsom ráhelyezése: a paradicsomszeleteket rendezd el a krém tetején – mehet sorban egymás mellé, enyhén fedésben, vagy lazán „szórva”, ahogy neked jobban tetszik.",
    "10) Végső fűszerezés: ha szükséges, a tetejét még egyszer finoman megsózhatod és borsozhatod. Ha citromot tettél az avóba, ide már nem kell feltétlenül, csak ízlés szerint.",

    // 5) Tálalás, variációk
    "11) Tálalás: azonnal fogyaszd, amíg a pirítós még ropogós. Ha szebben akarod tálalni, vágd a pirítóst átlósan félbe, így két háromszög alakú, „instagram-kompatibilis” szeletet kapsz.",
    "12) Pihenőnapi extrém light verzió: ha még jobban vágnád a ch-t, kenyér helyett 2 abonett-re is kenheted az avokádókrémet, a paradicsom pedig mehet mellé köretnek – így a kalóriák tovább esnek, de a ropogós + krémes élmény marad.",

    // 6) Időzítés
    "13) Időzítés edzésnapon: délutáni uzsonnának tökéletes – egy adag jó zsír + kicsi szénhidrát, ami nem nyom agyon, de ad egy kis stabil energiát edzés előtt.",
    "14) Időzítés pihenőnapon: amikor valami sós, „valódi étel” érzetű, de mégis könnyű uzsonnára vágysz – nem rontja el a napi kalóriakeretet, főleg, ha kisebb szelet kenyeret vagy abonettet használsz.",

    // 7) Makró összefoglaló – kb. értékek
    "Makró összefoglaló – 6-U – Avokádós pirítós paradicsommal:",
    "• Edzésnapos adag (≈40 g TK kenyér, 60 g avokádó, 70 g paradicsom)\n  ≈ 205 kcal\n  ≈ 5,4 g fehérje",
    "• Pihenőnapos adag (≈32 g TK kenyér, 45 g avokádó, 80 g paradicsom)\n  ≈ 165 kcal\n  ≈ 4,5 g fehérje\n  (Főleg jó zsírok + rost + kicsi ch – a fehérjét a nap többi, húsos/túrós/joghurtos étkezése hozza.)"
  ]
},
{
  id: "6-U-proteines-zold-smoothie",
  mealId: "6-U-proteines-zold-smoothie",
  title: "6-U – Proteines zöld smoothie (zöld smoothie alap + ½ adag fehérje)",
  timeMinutes: 5,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Edzésnapos adag (kicsit több gyümölcs, több ch): 40 g friss spenót, 80–90 g banán, 80–90 g alma, 10 ml citromlé, 220–250 ml víz, 15 g natúr vagy vaníliás tejsavófehérje.",
    "Pihenőnapos adag (visszafogottabb ch, ugyanannyi fehérje): 40 g spenót, 60 g banán, 70 g alma, 10 ml citromlé, 200–220 ml víz, 15 g fehérje.",

    // 1) Spenót és gyümölcsök előkészítése
    "1) Spenót mosása: a friss (baby) spenótot mosd át folyó víz alatt. Ha nagyobb levelek, tépkedd kicsit kisebbre, hogy a turmixnak könnyebb dolga legyen.",
    "2) Banán előkészítése: hámozd meg a banánt, és vágd 3–4 darabra. Edzésnapon 80–90 g-ot használj (kb. ¾ kisebb banán vagy ½–¾ nagyobb), pihenőnapon 60 g körül elég.",
    "3) Alma előkészítése: mosd meg az almát, vágd negyedekre, szedd ki a magházat, majd kockázd fel. Edzésnapra 80–90 g, pihenőnapra 70 g körüli mennyiséget célozz. A héjat nem muszáj leszedni, plusz rost.",

    // 2) Turmixgép megtöltése
    "4) Turmixgép rétegezése: a turmixgépbe vagy botmixer poharába tedd alulra a spenótot, rá a banán- és almakockákat.",
    "5) Citromlé hozzáadása: önts rá kb. 10 ml citromlevet (nagyjából 1 evőkanál). Ez frissít az ízen és segít, hogy az alma ne barnuljon meg, ha pár percig áll.",
    "6) Fehérjepor rászórása: szórd a gyümölcsökre a 15 g fehérjeport (½ adagolókanál). Natúr vagy vaníliás whey a legjobb, hogy ne nyomja el teljesen a zöld–gyümis ízt.",
    "7) Víz hozzáadása: öntsd fel vízzel – edzésnapon 220–250 ml, pihenőnapon 200–220 ml. Ha sűrűbbre szereted, indulhatsz kevesebb vízzel is, és később állítod.",

    // 3) Turmixolás
    "8) Turmixolás indul: először alacsonyabb fokozaton indíts, hogy a spenót és a gyümölcsök lejjebb húzódjanak a késekhez, majd válts magasabb fokozatra.",
    "9) Időtartam: turmixold 40–60 másodpercig, amíg teljesen sima, homogén, „zöld latte” jellegű italt kapsz – ne maradjanak nagy spenótdarabok vagy gyümölcsdarabok.",
    
    // 4) Állag és íz finomhangolás
    "10) Állag ellenőrzése: ha túl sűrű (kanállal kellene enni), adj hozzá még 20–30 ml vizet, és turmixold át újra.",
    "11) Ha túl híg: legközelebb kicsivel kevesebb vizet tegyél bele, vagy hagyd 1–2 percet állni – a rostok kicsit sűrítenek rajta.",
    "12) Íz teszt: kóstold meg – a vaníliás fehérje általában elég édességet ad. Ha mégis nagyon „zöld” az íz és száraz időszakban nem vagy, 1–2 csepp édesítővel finomhangolhatsz rajta. Mézet ide már nem nagyon érdemes tenni, pont a „fit” jelleg megy vele feleslegesen fel.",

    // 5) Tálalás, időzítés
    "13) Tálalás: öntsd egy nagyobb pohárba vagy shakerbe, és lehetőleg frissen idd meg – ekkor a legjobb az íze és a vitaminveszteség is minimális.",
    "14) Edzésnapos időzítés: mehet edzés előtt ~45–90 perccel (könnyű, gyomorkímélő, de ad egy kis energialöketet), vagy edzés után, ha valami friss, folyékonyabb uzsonnára vágysz, nem egy nehéz kajára.",
    "15) Pihenőnapos időzítés: délutáni „zöld frissítőnek” tökéletes – nem nehéz, nem dobja meg nagyon a kalóriát, mégis kapsz egy adag rostot, mikrotápanyagot és korrekt mennyiségű fehérjét.",

    // 6) Makró összefoglaló – kb. értékek
    "Makró összefoglaló – 6-U – Proteines zöld smoothie:",
    "• Edzésnapos adag (≈40 g spenót, 80–90 g banán, 80–90 g alma, 10 ml citromlé, 220–250 ml víz, 15 g whey)\n  ≈ 180 kcal\n  ≈ 14,3 g fehérje",
    "• Pihenőnapos adag (≈40 g spenót, 60 g banán, 70 g alma, 10 ml citromlé, 200–220 ml víz, 15 g whey)\n  ≈ 160 kcal\n  ≈ 14,0 g fehérje\n  (Fehérje mindkét napon stabil, csak a gyümölcs–ch mennyiség csökken pihenőnapra.)"
  ]
},
{
  id: "7-U-klasszikus",
  mealId: "7-U-klasszikus",
  title: "7-U – Ropogós klasszikus (rízskeksz + mogyoróvaj + banán)",
  timeMinutes: 5,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Edzésnapos adag (kicsit több energia, edzés / crossfit elé): 2 db rizskeksz (~2 × 10 g), 15 g mogyoróvaj (kb. 1 púpozott evőkanál fele), 60–70 g banán (kb. ½ közepes banán, vékony karikákra vágva).",
    "Pihenőnapos adag (visszafogottabb kalória, de az élmény marad): 1 db rizskeksz (~10 g), 10–12 g mogyoróvaj (kb. 1 lapos evőkanál fele), 40–50 g banán (kb. ⅓–½ banán).",

    // 1) Alapok előkészítése
    "1) Rizskeksz kiválasztása: válassz natúr vagy enyhén sós rizskekszet. Kerüld a csokis / karamellás / extrán ízesített verziókat, hogy a makrók fittek maradjanak.",
    "2) Banán előkészítése: hámozd meg a banánt, és tedd egy vágódeszkára.",

    // 2) Banán szeletelése
    "3) Banán szeletelése: vágd a banánt kb. 0,5–1 cm vastag karikákra. Edzésnapra 60–70 g-ot (kb. ½ közepes banán), pihenőnapra 40–50 g-ot (⅓–½ banán) használj. A kimért mennyiséget tedd félre egy tányérra.",

    // 3) Mogyoróvaj felkenése
    "4) Mogyoróvaj kimérése: mérj ki edzésnapon kb. 15 g, pihenőnapon 10–12 g mogyoróvajat. Ha nincs mérleg, nagyjából: 15 g ≈ 1 púpozott evőkanál fele, 10–12 g ≈ 1 lapos evőkanál fele.",
    "5) Rizskekszek megkenése: tedd a rizskekszeket egy tányérra, majd a kimért mogyoróvajat egyenletes rétegben kend el a tetejükön. Nem baj, ha nem tükörsima – az íz a lényeg, de próbáld úgy eloszlatni, hogy harapásnál mindenhol legyen belőle.",

    // 4) Banán ráhelyezése
    "6) Banánkarikák elrendezése: a mogyoróvajas réteg tetejére rakd rá a banánkarikákat. Célszerű szinte teljesen befedni a rizskekszeket, hogy minden falatban legyen banán is.",
    "7) Finom rányomás: a banánkarikákat kicsit nyomd bele a mogyoróvajba, hogy jobban odatapadjanak, és ne csúszkáljanak evés közben.",

    // 5) Tálalás, csomagolás
    "8) Azonnali tálalás: frissen a legropogósabb – tedd tányérra, és eheted is. Jó délutáni snack edzés előtt, amikor kell egy kis CH+zsír kombó, de nem akarsz nehéz kaját.",
    "9) Csomagolás útra: ha magaddal viszed, számolj azzal, hogy a banán nedvességétől a rizskeksz idővel puhul. Ha ropogósan szereted, érdemes külön vinni a rizskekszet, a mogyoróvajat egy kis dobozban, a banánt pedig egészben, és evés előtt pár perc alatt összerakni.",
    
    // 6) Extra tippek (opcionális)
    "10) Extra ízek (opcionális): szórhatsz a tetejére egy csipet fahéjat, vagy pár szem apróra vágott diót/mandulát – ez +ropogás, +íz, de minimálisan dob a kalórián, főleg ha csak pár gramm.",
    
    // 7) Makró összefoglaló – kb. értékek
    "Makró összefoglaló – 7-U – Ropogós klasszikus (rízskeksz + mogyoróvaj + banán):",
    "• Edzésnapos adag (2 db rizskeksz ~20 g, 15 g mogyoróvaj, ~65 g banán)\n  ≈ 220 kcal\n  ≈ 6 g fehérje",
    "• Pihenőnapos adag (1 db rizskeksz ~10 g, 11–12 g mogyoróvaj, ~45 g banán)\n  ≈ 145 kcal\n  ≈ 4 g fehérje\n  (Élmény megvan, kalória picit lejjebb húzva – pont jó diétásabb napokra.)"
  ]
},
{
  id: "7-U-proteines",
  mealId: "7-U-proteines",
  title: "7-U – Proteines kakaós–vaníliás verzió (rizskeksz + mogyoróvaj + vaníliás whey + banán)",
  timeMinutes: 7,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Edzésnapos adag (desszertes, de edzésbarát): 2 db rizskeksz (~20 g összesen), 12–15 g mogyoróvaj (ajánlott: 14 g), 15 g vaníliás fehérjepor (≈ ½ adagolókanál), 50–60 g banán (kb. ½ közepes banán, karikákra vágva).",
    "Pihenőnapos adag (kicsit visszafogottabb, de még mindig „jutalom” snack): 1–1,5 db rizskeksz (~15 g összesen), 10–12 g mogyoróvaj (ajánlott: 11 g), 10–12 g vaníliás fehérjepor, 40–50 g banán (kb. ⅓–½ banán).",

    // 1) Banán előkészítése
    "1) Banán előkészítése: hámozd meg a banánt, tedd vágódeszkára, és vágd kb. 0,5–1 cm vastag karikákra. Edzésnapra mérj ki 50–60 g-ot, pihenőnapra 40–50 g-ot. A kimért karikákat tedd félre egy tányéron.",

    // 2) Proteines mogyoróvajas krém készítése
    "2) Alap a tálban: tegyél egy kis tálkába edzésnapon 12–15 g, pihenőnapon 10–12 g mogyoróvajat.",
    "3) Fehérjepor hozzáadása: szórd a mogyoróvajra edzésnapon 15 g, pihenőnapon 10–12 g vaníliás fehérjeport.",
    "4) Víz hozzáadása óvatosan: adj hozzá 1 teáskanál vizet (kb. 5 ml), és kezdd el keverni. Ha a krém túl sűrű, morzsás, cseppenként adj hozzá még egy kevés vizet. A cél egy sűrű, kenhető, desszertszerű krém, ami nem folyik, de nem is száraz.",
    "5) Íz finomhangolás (opcionális): ha kakaósabb, „brownie-feelinget” akarsz, keverhetsz bele 2–3 g cukrozatlan kakaóport. Ez minimális kalória plusz, de nagyon dob az ízen.",

    // 3) Rizskekszek előkészítése
    "6) Rizskekszek tálalása: tedd a rizskekszeket egy tányérra (edzésnap: 2 db, pihenőnap: 1–1,5 db – a 0,5 db lehet úgy, hogy az egyiket elfelezed). Használj natúr vagy enyhén sós rizskekszet, ne csokis / karamellás verziót, hogy a makrók fittek maradjanak.",

    // 4) Krém felkenése
    "7) Proteines krém elosztása: a kész kakaós–vaníliás mogyoróvajas krémet kanállal oszd el a rizskekszek tetején. Kend el egyenletesen, hogy minden harapásnál jusson belőle. Ha pihenőnapon 1,5 rizskekszet használsz, vékonyabban kend, hogy a krém mennyisége arányos maradjon.",

    // 5) Banán ráhelyezése
    "8) Banánkarikák rápakolása: a félretett banánkarikákat rakd rá szépen a krém tetejére, szinte teljesen befedve a rizskekszek felületét.",
    "9) Finom rányomás: a banánkarikákat picit nyomd bele a krémbe, hogy jobban odatapadjanak, és ne csúszkáljanak evés közben.",

    // 6) Tálalás / csomagolás
    "10) Azonnali tálalás: frissen a legjobb – tedd tányérra, és eheted is desszertszerű uzsonnaként, vagy edzés előtti „édes energiabomba” snackként.",
    "11) Csomagolás útra: ha magaddal viszed, tedd a kész kekszeket egy dobozba. Számolj vele, hogy a banántól a rizskeksz idővel puhulgat – ha ropogósan szereted, viheted külön is az elemeket (rizskeksz + kis doboz krém + egész banán), és evés előtt 1–2 perc alatt összerakod.",

    // 7) Időzítés
    "12) Edzésnapon: jó választás edzés előtt 45–60 perccel, amikor kell egy kevés gyorsabb ch (banán) + kicsi zsír (mogyoróvaj) + fehérje. Edzés után is mehet, ha éppen valami édesre vágysz, de nem akarsz sütit enni.",
    "13) Pihenőnapon: délutáni „desszert-uzsonna” opció, ami nem lő szét kalóriában, de ad egy kis jutalom-érzést a nap végén.",

    // 8) Makró összefoglaló – kb. értékek
    "Makró összefoglaló – 7-U – Proteines kakaós–vaníliás verzió (rizskeksz + mogyoróvaj + vaníliás whey + banán):",
    "• Edzésnapos adag (2 db rizskeksz ~20 g, 14 g mogyoróvaj, 15 g fehérjepor, ~55 g banán)\n  ≈ 270 kcal\n  ≈ 18 g fehérje",
    "• Pihenőnapos adag (1–1,5 db rizskeksz ~15 g, 11 g mogyoróvaj, 11 g fehérjepor, ~45 g banán)\n  ≈ 205 kcal\n  ≈ 13 g fehérje\n  (Ugyanaz a desszertes élmény, de kicsit visszafogottabb ch + zsír, ezért diétásabb napokra is belefér.)"
  ]
},
{
  id: "7-U-energiabomba",
  mealId: "7-U-energiabomba",
  title: "7-U – Energiabomba verzió (rizskeksz + mogyoróvaj + zabpehely + méz + banán)",
  timeMinutes: 6,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Edzésnapos adag (tipikus „pre-workout snack”): 2 db rizskeksz (~20 g összesen), 15–18 g mogyoróvaj (ajánlott: 16 g), 1 púpozott tk zabpehely (~5 g), 1 tk méz (~6–7 g), 60–70 g banán (karikákban).",
    "Pihenőnapos adag (szolidabb, de még mindig „energiabomba-érzet”): 1 db rizskeksz (~10 g), 10–12 g mogyoróvaj (ajánlott: 11 g), 1 csapott tk zabpehely (~4 g), ½ tk méz (~4 g), 40–50 g banán (karikákban).",

    // 1) Banán előkészítése
    "1) Banán hámozása: hámozd meg a banánt, tedd vágódeszkára.",
    "2) Szeletelés: vágd kb. 0,5–1 cm vastag karikákra. Mérd ki a megfelelő mennyiséget – edzésnapra 60–70 g, pihenőnapra 40–50 g. A kimért karikákat tedd félre egy tányérra.",

    // 2) „Energiabomba” krém készítése (mogyoróvaj + zab + méz)
    "3) Mogyoróvaj kimérése: egy kis tálba kanalazz edzésnapon 16 g, pihenőnapon kb. 11 g mogyoróvajat.",
    "4) Zabpehely hozzáadása: szórj rá edzésnapon egy púpozott teáskanál (kb. 5 g), pihenőnapon egy csapott teáskanál (kb. 4 g) zabpelyhet. A zab ad egy kis plusz lassú szénhidrátot és textúrát.",
    "5) Méz hozzáadása: csorgass rá edzésnapra 1 teáskanál (6–7 g), pihenőnapra kb. ½ teáskanál (3–4 g) mézet. A méz hozza a gyors ch-t és a „desszert” ízt.",
    "6) Keverés: keverd össze alaposan a mogyoróvajat, a zabot és a mézet, amíg egy sűrű, ragacsos, egységes krémet kapsz. A zab kicsit besűríti, a méz „összeragasztja” – igazi energiapack állag lesz.",

    // 3) Rizskekszek előkészítése
    "7) Rizskekszek tálalása: tedd a rizskekszeket egy tányérra (edzésnap: 2 db, pihenőnap: 1 db). Használj natúr vagy enyhén sós rizskekszet, ne cukros/csokis verziót, hogy a makrók fittek maradjanak.",

    // 4) Krém felkenése
    "8) Kenés: kanalazd a zabos–mogyoróvajas–mézes krémet a rizskeksz(ek) tetejére. Oszd el egyenletesen, hogy minden falatban legyen mogyoróvaj + zab + méz. Ha egy kekszre túl soknak érzed, oszd el kettő között (pihenőnapon is megteheted, ha 1,5 db-bal dolgozol).",

    // 5) Banánkarikák rápakolása
    "9) Banánkarikák elhelyezése: a félretett banánkarikákat sorban pakold rá a krém tetejére, lehetőleg úgy, hogy minél nagyobb felületet lefedjenek.",
    "10) Finom rányomás: a karikákat finoman nyomd bele a krémbe, hogy jobban odatapadjanak, és ne csúszkáljanak evés közben.",

    // 6) Tálalás és időzítés
    "11) Azonnali fogyasztás: frissen a legjobb – ropogós rizskeksz + krémes réteg + puha banán. Ha dobozba viszed, számolj vele, hogy a rizskeksz a banántól idővel puhulgat, ezért útra inkább külön csomagolva vidd az elemeket, és evés előtt rakd össze 1–2 perc alatt.",
    "12) Edzés előtti használat: ez a verzió ideális edzés előtt kb. 45–90 perccel. A zab + rizskeksz adja a lassabb ch-t, a méz + banán a gyorsabbat, a mogyoróvaj pedig a zsírt és extra energiát. Figyeld a saját tested – ha túl közel eszed edzéshez, egyeseknél kicsit „ülhet a gyomron”.",
    "13) Pihenőnapon: délutáni „jutalom” snacknek használd – kisebb mennyiséggel is megadja az energiadús, desszertes élményt, miközben kalóriában nem száll el.",

    // 7) Makró összefoglaló – kb. értékek
    "Makró összefoglaló – 7-U – Energiabomba verzió (rizskeksz + mogyoróvaj + zabpehely + méz + banán):",
    "• Edzésnapos adag (2 db rizskeksz ~20 g, 16 g mogyoróvaj, 5 g zabpehely, 7 g méz, ~65 g banán)\n  ≈ 270 kcal\n  ≈ 7 g fehérje",
    "• Pihenőnapos adag (1 db rizskeksz ~10 g, 11 g mogyoróvaj, 4 g zabpehely, 4 g méz, ~45 g banán)\n  ≈ 170 kcal\n  ≈ 4,5–5 g fehérje\n  (Ízben „energiabomba”, makróban már pihenőnap-barát beállítás.)"
  ]
},
{
  id: "1-V-alap",
  mealId: "1-V-alap",
  title: "1-V – Alap verzió (grillezett csirkemell + párolt brokkoli/répa + teljes kiőrlésű kenyér)",
  timeMinutes: 25,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Edzésnapos adag: kb. 160–170 g csirkemell (nyersen, szeletelve), 150–170 g brokkoli, 80–100 g sárgarépa, 1 tk (5 g) olívaolaj a zöldségre vagy serpenyőbe, 1 szelet (~35–40 g) teljes kiőrlésű kenyér.",
    "Pihenőnapos adag: kb. 140–150 g csirkemell, 170–200 g brokkoli, 80–100 g sárgarépa, 1 tk (5 g) olívaolaj, ½–1 kisebb szelet (~20–30 g) teljes kiőrlésű kenyér (ha nagyon kalóriát vágsz, a kenyér el is hagyható).",

    // 1) Csirke előkészítése
    "1) Csirkemell tisztítása: mosd meg gyorsan folyó víz alatt a csirkemellet, majd konyhai papírtörlővel töröld szárazra.",
    "2) Szeletelés: vágd 1–2 vékonyabb szeletre, vagy pillangózd hosszában (kettévágod, majd kihajtod), hogy egyenletesen és gyorsabban átsüljön.",
    "3) Fűszerezés: mindkét oldalát enyhén sózd, borsozd, szórd meg fokhagymaporral, fűszerpaprikával és/vagy olaszos fűszerkeverékkel. Hagyd állni pár percet, míg előkészíted a zöldségeket.",

    // 2) Zöldségek előkészítése
    "4) Brokkoli: mosd meg, majd szedd kisebb rózsákra (ne legyenek túl nagyok, hogy hamar párolódjanak).",
    "5) Répa: hámozd meg, majd vágd vékony karikákra vagy félkarikákra. Minél vékonyabb, annál gyorsabban párolódik – főleg edzés után jó, ha nem kell sokat várni rá.",

    // 3) Zöldség párolása
    "6) Párolás előkészítése: tedd a brokkolit és répát egy lábasba – vagy párolóbetéttel kevés víz fölé, vagy 1–2 ujjnyi enyhén sós vízbe.",
    "7) Főzés/párolás: fedd le, és közepes lángon párold kb. 8–10 percig, amíg roppanós-puha lesz (villával könnyen szúrható, de nem főtt szét).",
    "8) Leszűrés és olaj: ha kész, szűrd le a zöldségeket, tedd vissza a lábasba/tálba, és locsold meg 1 teáskanál (5 g) olívaolajjal. Forgasd át, hogy mindenhol vékonyan bevonja – ez mehet a tányéron a csirkére is, ha úgy jobban esik.",

    // 4) Csirkemell sütése (grill / serpenyő)
    "9) Serpenyő/grill előmelegítése: forrósíts fel egy grillserpenyőt vagy kontaktgrillt. Ha nem teljesen tapadásmentes, fújj bele kevés olajsprayt, vagy kend ki 1–2 csepp olajjal (az 5 g össz-olajból számolva).",
    "10) Csirke sütése: tedd a felforrósított felületre a befűszerezett csirkeszeleteket.",
    "11) Sütési idő: süsd oldalanként kb. 4–5 percig (vastagságtól függően). Akkor jó, ha kívül szép aranybarna, enyhén pirult, belül pedig már nem rózsaszín, de nem is teljesen kiszáradt.",
    "12) Pihentetés: ha kész, vedd le a tűzről, és hagyd 2–3 percet pihenni a deszkán/tányéron – szaftosabb marad, ha nem azonnal szeleteled fel.",

    // 5) Kenyér kezelése (edzés vs. pihenőnap)
    "13) Kenyér szeletelése: vágj le 1 szelet teljes kiőrlésű kenyeret (~35–40 g) edzésnapon, pihenőnapon elég ½–1 kisebb szelet (~20–30 g), célja csak egy kis ch-kísérő.",
    "14) Pirítás (opcionális, de finomabb): kenyérpirítóban vagy száraz serpenyőben pirítsd 1–2 percig, amíg enyhén megpirul és ropogós lesz. Ez jó textúrát ad a sok puha zöldség mellé.",

    // 6) Tálalás – edzésnap vs. pihenőnap fókusz
    "15) Tálalás edzésnapon: a tányér egyik felére tedd a párolt brokkoli–répa keveréket, mellé a 160–170 g-os csirkemellet (egészben vagy felszeletelve), oldalra a teljes kiőrlésű kenyeret. Ez így egy könnyű, mégis fehérjedús esti kaja, főleg ha ebédre már kaptál rizst/ch-t.",
    "16) Tálalás pihenőnapon: növeld picit a zöldség arányát (170–200 g brokkoli), a csirke legyen 140–150 g, a kenyér pedig csak kísérő (vékonyabb szelet vagy akár elhagyva, ha erősen kalóriát vágsz). Itt a hangsúly a fehérjén és a zöldségen van.",
    "17) Dobozolás (meal prep): ha előre készíted, doboz aljára jöhet a zöldség, rá/mellé a szeletelt csirke. A kenyeret külön tartva (zacskó, külön doboz) nem ázik el, így este csak melléteszed, megmelegítés után.",

    // 7) Makró összefoglaló – kb. értékek
    "Makró összefoglaló – 1-V – Alap verzió (grillezett csirkemell + párolt brokkoli/répa + teljes kiőrlésű kenyér):",
    "• Edzésnapos adag (kb. 165 g csirkemell, 160 g brokkoli, 90 g répa, 5 g olívaolaj, 35 g teljes kiőrlésű kenyér)\n  ≈ 420 kcal\n  ≈ 47 g fehérje",
    "• Pihenőnapos adag (kb. 145 g csirkemell, 185 g brokkoli, 90 g répa, 5 g olívaolaj, 25 g teljes kiőrlésű kenyér)\n  ≈ 380 kcal\n  ≈ 42 g fehérje\n  (Ha a kenyeret pihenőnapon teljesen elhagyod, a kalória még lejjebb megy, de a fehérjebázis továbbra is nagyon erős marad.)"
  ]
},
{
  id: "1-V-stirfry",
  mealId: "1-V-stirfry",
  title: "1-V – Csíkokra vágott stir-fry (wokos csirkecsík + zöldség, opcionális kenyér/rizs)",
  timeMinutes: 20,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Edzésnapos adag (kenyér/rizs nélkül): kb. 160–170 g csirkemell (csíkokra vágva), 120–150 g brokkoli, 60–80 g sárgarépa, opcionálisan 30–50 g paprika/cukkini/hagyma, 1 tk (5 g) olaj a wokba, 1–2 tk light szójaszósz, gyömbér/fokhagyma/chili ízlés szerint.",
    "Edzésnap – extra ch opció (ha nagyon keményet edzettél): a fenti adag mellé 1 vékony szelet teljes kiőrlésű kenyér (~25–30 g), VAGY kb. 50–60 g főtt jázmin/barna rizs.",
    "Pihenőnapos adag: kb. 140–150 g csirkemell, 150–180 g brokkoli, 70–90 g sárgarépa, opcionálisan kis plusz paprika/cukkini, 1 tk (5 g) olaj, 1 tk light szójaszósz, fűszerek. Itt inkább hagyd kenyér/rizs nélkül, full csirke + zöldség vacsora.",

    // 1) Csirke előkészítése
    "1) Csirkemell tisztítása: mosd meg gyorsan a csirkemellet, majd konyhai papírtörlővel töröld teljesen szárazra.",
    "2) Csíkozás: vágd vékony csíkokra (kb. ujjnyi vastag), mehet a rosttal párhuzamosan vagy merőlegesen is – a lényeg, hogy vékony, gyorsan átsülő csíkok legyenek.",
    "3) Alap fűszerezés: enyhén sózd, borsozd, szórhatsz rá fokhagymaport, gyömbérport, esetleg kevés curry-t vagy ázsiai fűszerkeveréket. Keverd át, hogy minden csík kapjon a fűszerekből.",

    // 2) Zöldségek előkészítése
    "4) Brokkoli: mosd meg, szedd kisebb rózsákra, hogy gyorsan átsüljön wokban is.",
    "5) Répa: hámozd meg, majd vágd vékony félkarikákra vagy julienne (gyufaszál) csíkokra – így gyorsan puhul, de roppanós marad.",
    "6) Extra zöldségek (opcionális, de ajánlott): paprikát/cukkininit/hagymát vágd vékony csíkokra. Ezek plusz színt, ízt és volument adnak, kalóriában minimális plusz.",

    // 3) Wok / serpenyő előkészítése
    "7) Edény előmelegítése: tegyél fel egy nagyobb serpenyőt vagy wokot közepes-magas lángra, és hagyd jól felforrósodni.",
    "8) Olaj: adj a forró wokba 1 teáskanál (5 g) olajat, vagy fújj bele olajsprayt. A wok akkor jó, ha az olaj enyhén „hullámzik” a felületen.",

    // 4) Csirke pirítása
    "9) Csirkecsíkok sütése: dobd a befűszerezett csirkecsíkokat a forró serpenyőbe.",
    "10) Pirítás: 5–6 percig süsd közepes-magas lángon, folyamatosan kevergetve/forgatva, hogy minden oldalon átsüljön. A cél, hogy kifehéredjen és néhol enyhén megpiruljon a felülete.",
    
    // 5) Zöldségek hozzáadása
    "11) Zöldségek bepakolása: ha a csirke már nagyjából átsült, add hozzá a brokkolit, répát és az esetleges paprikát/cukkininit/hagymát.",
    "12) Wokozás: nagy lángon, folyamatos kevergetés mellett süsd további 3–4 percig. Akkor jó, ha a brokkoli élénk zöld, a répa még kicsit roppanós, de már nem teljesen nyers.",
    
    // 6) Szójaszósz + fűszerek
    "13) Szójaszósz és extra ízek: locsold meg a csirkés-zöldséges keveréket 1–2 tk light szójaszósszal.",
    "14) Extra fűszerezés: mehet még friss vagy szárított gyömbér, fokhagyma, chilipehely, bors ízlés szerint. Keverd át alaposan, és süsd még 1–2 percig, hogy minden falatra jusson az ízes szaftból.",

    // 7) Ch-kezelés – edzésnap vs. pihenőnap
    "15) Edzésnap – plusz kenyér/rizs (opcionális): ha edzésnapon nagyot mentél (súlyzós + crossfit/kardió kombó), a tányérra szedett csirke–zöldség mellé tehetsz:\n   • 1 vékony szelet teljes kiőrlésű kenyeret (~25–30 g), VAGY\n   • 50–60 g főtt jázmin vagy barna rizst.\n   Ezeket nem kell a wokba tenni, egyszerűen csak mellé tálalod.",
    "16) Pihenőnap – ch nélkül: pihenőnapon hagyd el a kenyeret/rizst, csak a csirkés-zöldséges wokot edd. Így este nagyon baráti kalóriával kapsz magas fehérje + sok zöldség kombót.",

    // 8) Tálalás
    "17) Tálalás: szedd a csirkés-zöldséges stir-fry-t egy nagy tányérra. Ha használsz kenyeret/rizst, tedd a tányér egyik oldalára, a wokos cucc a másikra. Ha dobozolod, alulra mehet a zöldség + csirke, külön kis dobozba/ zacskóba a kenyér.",

    // 9) Makró összefoglaló – kb. értékek (kenyér/rizs nélkül)
    "Makró összefoglaló – 1-V – Csíkokra vágott stir-fry (wokos csirke + zöldség, kenyér/rizs nélkül):",
    "• Edzésnapos adag (kb. 165 g csirkemell, 135 g brokkoli, 70 g répa, ~40 g extra zöldség, 5 g olaj)\n  ≈ 330 kcal\n  ≈ 43 g fehérje",
    "• Pihenőnapos adag (kb. 145 g csirkemell, 165 g brokkoli, 80 g répa, ~40 g extra zöldség, 5 g olaj)\n  ≈ 320 kcal\n  ≈ 39–40 g fehérje",
    "Ha edzésnapon mellé eszel 1 kisebb (~30 g) szelet teljes kiőrlésű kenyeret, az + ~70 kcal és + ~2–3 g fehérje; 50–60 g főtt rizs pedig + ~70–80 kcal és + ~1,5–2 g fehérje körül mozog."
  ]
},
{
  id: "1-V-salata",
  mealId: "1-V-salata",
  title: "1-V – Hideg saláta verzió (hideg csirkés-zöldséges saláta + kenyér)",
  timeMinutes: 20,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Edzésnapos adag: kb. 160–170 g megsütött csirkemell (utána felszeletelve), összesen 200–230 g zöldség (párolt/grillezett brokkoli + répa + friss paprika/uborka/saláta vegyesen), 1 ek (8–10 g) olívaolaj az öntethez, 1 szelet teljes kiőrlésű kenyér (~35–40 g – akár pirítva).",
    "Pihenőnapos adag: kb. 140–150 g csirkemell, 220–250 g vegyes zöldség, 2–3 tk (6–8 g) olívaolaj az öntethez, ½–1 kisebb szelet teljes kiőrlésű kenyér (~20–30 g), vagy kenyér nélkül, ha agresszívebben fogynál.",

    // 1) Csirkemell megsütése és hűtése
    "1) Csirkemell előkészítése: mosd meg röviden, töröld szárazra, majd hagyd egy darabban vagy vágd 1–2 nagyobb szeletre. Sózd, borsozd, szórd meg kedvenc fűszereiddel (pl. fokhagymapor, fűszerpaprika, olaszos fűszerkeverék).",
    "2) Sütés: forrósíts fel egy grillserpenyőt vagy kontaktgrillt. Ha nem tapadásmentes, fújj bele kevés olajsprayt vagy kend ki pár csepp olajjal. A csirkét oldalanként kb. 4–5 percig süsd, amíg kívül szépen pirult, belül teljesen átsült (nem rózsaszín).",
    "3) Hűtés és szeletelés: a kész csirkét tedd tányérra, hagyd teljesen kihűlni (szobahőn), majd vágd csíkokra vagy vékony szeletekre. Ez adja a saláta „protein magját”.",

    // 2) Zöldségek előkészítése
    "4) Párolt/grillezett zöldség (brokkoli + répa): ha nincs maradék, gyorsan készíthetsz frisset is. A brokkolit szedd rózsákra, a répát hámozd és vágd vékony karikákra. Enyhén sós víz felett párold 8–10 percig, vagy serpenyőben kevés vízzel/olajspray-vel pirítva-párolva készítsd el, amíg roppanós-puha állagú lesz.",
    "5) Friss zöldségek: paprikát mosd, magházat vedd ki, vágd csíkokra. Uborkát mosd, karikázd vagy kockázd fel. Salátaleveleket mosd meg, csepegtesd le, majd tépd vagy vágd csíkokra.",
    "6) Mennyiségek: edzésnapon összesen kb. 200–230 g zöldséggel számolj (párolt + friss együtt), pihenőnapon inkább 220–250 g-ot célozz, hogy kenyér nélkül is jóllakj.",

    // 3) Öntet elkészítése
    "7) Alap öntet: egy kis tálkában vagy befőttesüvegben keverd össze az olívaolajat (edzésnap: 1 ek ~8–10 g, pihenőnap: 2–3 tk ~6–8 g), 1–2 ek citromlével vagy balzsamecettel.",
    "8) Fűszerezés: adj hozzá csipet sót, borsot, és ha szereted, szárított oregánót, bazsalikomot vagy aprított petrezselymet. Alaposan keverd vagy rázd össze, hogy szép emulziós öntet legyen.",

    // 4) Saláta összeállítása
    "9) Alap a tálban: egy nagy tálba tedd a salátaleveleket, a párolt/grillezett brokkolit-répát és a friss paprikát/uborkát.",
    "10) Csirke hozzáadása: szórd rá a kihűlt, felszeletelt csirkemellet. Cél, hogy minden falatnál legyen egy kis hús + zöldség kombó.",
    "11) Öntet ráöntése: csorgasd az öntetet a salátára, és kanállal vagy kézzel (ha „pro salátás” módon csinálod 😄) óvatosan forgasd át, hogy mindenhol bevonja a vékony olajos-citromos réteg.",

    // 5) Kenyér / crouton-hangulat
    "12) Kenyér pirítása (opcionális, de finom): a teljes kiőrlésű kenyeret (edzésnap: 1 szelet, pihenőnap: ½–1 kisebb szelet) pirítóban vagy száraz serpenyőben pirítsd meg, amíg kissé ropogós lesz.",
    "13) Tálalás kenyérrel: eheted a pirítóst egyben a saláta mellé, vagy vághatod csíkokra/kockákra és a tetejére szórhatod „croutonként”. Pihenőnapon, ha nagyon vágod a kalóriát, a kenyér simán el is hagyható – ilyenkor csak csirke + zöldség + öntet marad.",

    // 6) Dobozolás / mealprep mód
    "14) Mealprep: a kész salátát műanyag / üveg dobozba teheted. Az öntetet akár külön kis üvegben is viheted, és evés előtt öntöd rá, hogy a saláta ne ázzon el. A kenyeret mindig külön csomagold, és csak tálaláskor edd mellé.",

    // 7) Makró összefoglaló – kb. értékek
    "Makró összefoglaló – 1-V – Hideg saláta verzió (hideg csirkés-zöldséges saláta + kenyér):",
    "• Edzésnapos adag (kb. 170 g csirkemell, ~220 g vegyes zöldség, 9 g olívaolaj, 37 g tk. kenyér)\n  ≈ 440 kcal\n  ≈ 47 g fehérje",
    "• Pihenőnapos adag (kb. 145–150 g csirkemell, ~240 g vegyes zöldség, 7 g olívaolaj, 25 g tk. kenyér)\n  ≈ 370 kcal\n  ≈ 41 g fehérje\n  (Ha pihenőnapon elhagyod a kenyeret, még tovább esik a kalória, miközben a fehérje és a salátavolumen nagyon erős marad.)"
  ]
},
{
  id: "2-V-klasszikus",
  mealId: "2-V-klasszikus",
  title: "2-V – Klasszikus tonhalsaláta (tonhal + paradicsom + uborka + lilahagyma + tojás)",
  timeMinutes: 15,
  steps: [
    "Adagolás – edzésnap vs. pihenőnap:",
    "• Edzésnap: 120 g tonhal (vízben, lecsöpögtetve), 2 db M-es tojás (keményre főzve), 120–150 g paradicsom, 100–120 g uborka, 20–30 g lilahagyma, 1 ek (8–10 g) olívaolaj. Opcionálisan: 1 szelet teljes kiőrlésű kenyér (~30–35 g), ha még belefér egy kis plusz ch.",
    "• Pihenőnap: 100 g tonhal, 1 db egész tojás + 1 db tojásfehérje, 150 g paradicsom, 120–150 g uborka, kb. 20 g lilahagyma, 1 tk (5 g) olívaolaj. Kenyér: vagy nincs, vagy max. ½ vékony szelet (~15–20 g), ha nagyon hiányzik egy kis ch.",

    "1) Tojás megfőzése:",
    "– Tedd a tojásokat egy kis lábasba, öntsd fel hideg vízzel úgy, hogy jól ellepje őket.",
    "– Tedd a tűzre, forrald fel, majd forrástól számítva kb. 9–10 percig főzd, hogy keménytojás legyen.",
    "– Öntsd le a forró vizet, engedj rá hideg vizet, hagyd pár percig hűlni, majd hámozd meg őket és tedd félre hűlni.",
    
    "2) Zöldségek előkészítése:",
    "– Paradicsom: mosd meg, majd vágd falatnyi darabokra (kockák vagy nagyobb cikkek, ahogy jobban esik).",
    "– Uborka: mosd meg, ha nagyon vastag a héja, részben vagy teljesen meg is hámozhatod; vágd félkarikákra vagy kockákra.",
    "– Lilahagyma: hámozd meg, és vágd nagyon vékony szeletekre/csíkokra, hogy ne legyen túl domináns az íze, csak kellemesen pikáns háttér.",

    "3) Tonhal előkészítése:",
    "– Nyisd ki a tonhalkonzervet, öntsd le róla a levet (víz).",
    "– A lecsöpögtetett tonhalat tedd egy nagyobb keverőtálba.",
    "– Villával óvatosan törd szét, hogy lazább, falatnyi darabokra essen, de ne pépesítsd teljesen.",

    "4) Saláta összeállítása:",
    "– A tonhalhoz add a felkockázott paradicsomot, az uborkát és a vékonyra vágott lilahagymát.",
    "– Sózd, borsozd ízlés szerint.",
    "– Locsold meg olívaolajjal (edzésnap: kb. 1 ek, pihenőnap: kb. 1 tk).",
    "– Ha szereted a frissebb, savasabb ízt, mehet rá 1–2 tk citromlé is.",
    "– Finoman keverd össze az egészet, hogy a tonhal és a zöldségek jól elkeveredjenek, de a tonhaldarabok maradjanak felismerhetőek, ne pépesítsd szét.",

    "5) Tojás hozzáadása:",
    "– A megfőtt tojásokat vágd karikákra vagy cikkekre.",
    "– Tálaláskor rakd a tojáskarikákat a tonhalsaláta tetejére körben vagy a közepére halmozva.",
    "– Pihenőnapos verziónál ügyelj arra, hogy csak 1 egész tojást + 1 fehérjét használj, ha így tervezted a makrókat.",

    "6) Kenyér (opcionális, főleg edzésnapra):",
    "– Ha edzésnapon jól esne egy kis extra szénhidrát, vágj 1 szelet teljes kiőrlésű kenyeret (~30–35 g), és tálald a saláta mellé.",
    "– Pihenőnapon, ha nagyon szorosra fogod a kalóriát, a kenyeret inkább hagyd el, vagy csak ½ vékony szeletet egyél mellé.",

    "7) Tálalás / dobozolás:",
    "– A kész tonhalsalátát tálald egy nagy tányéron, a tetején a tojáskarikákkal.",
    "– Ha munkába/padba viszed, tedd zárható dobozba; a kenyeret mindig külön csomagold, hogy ne ázzon el.",

    "Makró összefoglaló – 2-V – Klasszikus tonhalsaláta:",
    "• Edzésnapos adag (120 g tonhal, 2 tojás, zöldségek, 1 ek olívaolaj, kenyér nélkül számolva)\n  ≈ 435 kcal\n  ≈ 43 g fehérje\n  ➕ Ha mellé eszel 1 szelet teljes kiőrlésű kenyeret (~30–35 g): + ≈ 70 kcal és + ≈ 3 g fehérje.",
    "• Pihenőnapos adag (100 g tonhal, 1 tojás + 1 fehérje, több zöldség, 1 tk olívaolaj, kenyér nélkül)\n  ≈ 310 kcal\n  ≈ 35 g fehérje\n  ➕ Ha mégis csusszan egy fél vékony szelet kenyér, az kb. + 35 kcal és + 1–2 g fehérje."
  ]
},
{
  id: "2-V-wrap",
  mealId: "2-V-wrap",
  title: "2-V – Fitnesz wrap verzió (tonhalsaláta teljes kiőrlésű tortillában, tojással)",
  timeMinutes: 20,
  steps: [
    "Adagolás – edzésnap vs. pihenőnap:",
    "• Edzésnap: 100–110 g tonhal (vízben, lecsöpögtetve), 1 db M-es tojás (keményre főzve, szeletelve), 1 nagyobb teljes kiőrlésű tortilla (50–60 g, kb. 25 cm), 60–80 g paradicsom, 50–60 g uborka, 30–40 g saláta (jégsaláta / rukkola), öntetnek 1 ek natúr joghurt + mustár/citromlé + max. 1 tk olívaolaj.",
    "• Pihenőnap: 90–100 g tonhal, 1 db tojás (szigorúbb verziónál: 1 tojásfehérje + ½ sárgája), 1 kisebb tortilla (~35–40 g) vagy egy nagyobb tortilla fele, 60–80 g paradicsom, 50–60 g uborka, 30–40 g saláta, öntetnek 1 ek natúr joghurt, olaj nélkül vagy max. 1 tk olívaolaj.",

    "1) Tojás megfőzése:",
    "– Tedd a tojást egy kis lábasba, öntsd fel hideg vízzel, hogy ellepje.",
    "– Forrald fel, majd forrástól számítva kb. 9–10 percig főzd, hogy keménytojás legyen.",
    "– Öntsd le a forró vizet, engedj rá hideg vizet, hagyd pár percig állni, majd hámozd meg.",
    "– A kihűlt tojást vágd vékony karikákra, és tedd félre a töltéshez.",

    "2) Zöldségek előkészítése:",
    "– Paradicsom: mosd meg, vágd kockákra vagy vékony szeletekre.",
    "– Uborka: mosd meg, vágd félkarikákra vagy vékony csíkokra, hogy jól illeszkedjen a wrapbe.",
    "– Saláta (jégsaláta / rukkola): mosd meg, csepegtesd le, vágd vagy tépd csíkokra.",

    "3) Tonhalalap előkészítése:",
    "– A tonhalkonzervet nyisd ki, öntsd le róla a levet, a lecsöpögtetett tonhalat tedd egy tálba.",
    "– Sózd, borsozd enyhén, mehet rá 1–2 tk citromlé az üdítő ízért.",
    "– Ha krémesebben szereted, keverj hozzá 1 ek natúr joghurtot (ezzel kicsit „összefogja” a tölteléket).",
    "– Villával lazán törd össze, hogy falatnyi, de nem pépes darabok legyenek.",

    "4) Joghurtos öntet (ha külön is szeretnél):",
    "– Egy kis tálban keverd össze: 1–2 ek natúr joghurt, 1 tk mustár vagy 1–2 tk citromlé, csipet só, bors.",
    "– Edzésnapon mehet bele max. 1 tk olívaolaj, ha egy kis extra krémességet/zsírt szeretnél.",
    "– Keverd simára – ez mehet a tortilla aljára, a tonhalra vagy a tetejére is.",

    "5) Tortilla előkészítése:",
    "– A teljes kiőrlésű tortillát egy száraz serpenyőben mindkét oldalán 5–10 mp-ig melegítsd, hogy puha, jól tekerhető legyen.",
    "– Alternatíva: mikróban 5–10 mp (de ne tovább, különben gumis lehet).",

    "6) Töltés – rétegezés:",
    "– Tedd a tortillát egy tányérra, a középvonal alatt egy hosszanti sávban fogsz tölteni.",
    "– Ha külön készítettél joghurtos öntetet: a tortilla közepére (hosszában) kenj egy vékony réteget.",
    "– Szórj rá egy csíknyi salátát (jégsaláta/rukkola).",
    "– Erre halmozd a tonhalat, egyenletesen elosztva a „töltelék-sávban”.",
    "– Szórd rá a felkockázott/szeletelt paradicsomot és uborkát.",
    "– A tetejére rakd a tojáskarikákat egymás mellé, hogy minden falatba jusson tojás is.",

    "7) Felcsavarás – wrap formázása:",
    "– A tortilla alját hajtsd fel kb. 2–3 cm-t (ez segít, hogy alul ne folyjon ki a töltelék).",
    "– Ezután az egyik oldalról indulva szorosan feltekered, mintha gyrost vagy burritót csinálnál.",
    "– Ha szeretnéd, ferdén félbevágod → szebb „street food” kinézet + könnyebb kézből enni.",

    "8) Dobozolás / elvitel:",
    "– Ha magaddal viszed, tekerd sütőpapírba vagy folpackba, majd tedd zárható dobozba, hogy ne lapuljon szét.",
    "– Evésig hűtve tárold, mert tonhal + tojás kombó, ne maradjon sokáig meleg helyen.",

    "Makró összefoglaló – 2-V – Fitnesz wrap verzió:",
    "• Edzésnapos adag (≈105 g tonhal, 1 tojás, 1 nagy TK tortilla ~55 g, zöldségek, 1 tk olaj, kevés joghurt)\n  ≈ 430 kcal\n  ≈ 39 g fehérje",
    "• Pihenőnapos adag (≈95 g tonhal, 1 tojás, 1 kisebb TK tortilla ~40 g, zöldségek, 1 tk olaj, kevés joghurt)\n  ≈ 380 kcal\n  ≈ 35 g fehérje\n  (Ha a sárgáját részben elhagyod pihenőnapon, még pár tíz kcal-lal lejjebb csúszik a vacsora.)"
  ]
},
{
  id: "2-V-sutoben-rakott",
  mealId: "2-V-sutoben-rakott",
  title: "2-V – Sütőben rakott verzió (tonhal + zöldség + tojás sütőben)",
  timeMinutes: 30,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Adagolás – edzésnap vs. pihenőnap:",
    "• Edzésnap: 120 g tonhal (vízben, lecsöpögtetve), 2 db egész tojás + 1 db tojásfehérje, ~200 g vegyes zöldség (pl. 70–80 g paradicsom + 120–130 g cukkini/paprika/brokkoli), 20–30 g natúr joghurt vagy light tejföl, 1 ek (8–10 g) olívaolaj (tál kikenésére + kevés a masszába), opcionálisan 10–15 g reszelt light sajt a tetejére.",
    "• Pihenőnap: 100 g tonhal, 1 db egész tojás + 1–2 tojásfehérje, 200–220 g zöldség (nyugodtan domináljon a zöldség), kb. 20 g natúr joghurt, 1 tk (5 g) olívaolaj (tál kikenéséhez), sajt elhagyható vagy max. 5–10 g a tetejére.",

    // 1) Sütő előmelegítése
    "1) Sütő előmelegítése: melegítsd elő a sütőt 180 °C-ra (alsó–felső sütés). Mire mindent előkészítesz, pont bemelegszik.",

    // 2) Zöldség előkészítése
    "2) Zöldségek felvágása: válassz 2–3 féle zöldséget (pl. paradicsom, paprika, cukkini, brokkoli).",
    "– Paradicsom: mosd meg, vágd kisebb kockákra (ne legyen túl sok, hogy ne áztassa el az egészet).",
    "– Paprika: magház ki, csíkokra vagy kockákra vágva.",
    "– Cukkini: mosás után kis kockákra vágva.",
    "– Brokkoli: apró rózsákra vágva, hogy gyorsan átsüljön.",
    "Cél: minden zöldség falatnyi méretű legyen, hogy egyenletesen süljön.",

    // 3) Tojásos alap összekeverése
    "3) Tojásos alap készítése: üsd a tojásokat egy nagyobb tálba.",
    "– Edzésnap: 2 db egész tojás + 1 tojásfehérje.",
    "– Pihenőnap: 1 db egész tojás + 1–2 tojásfehérje (diétásabb verzió).",
    "Villával vagy habverővel verd össze, míg homogén nem lesz.",
    "Sózd, borsozd, mehet bele 1–2 csipet oregánó/bazsalikom, kevés fokhagymapor, ha szereted.",
    "Keverj hozzá 20–30 g (pihenőnapon kb. 20 g) natúr joghurtot vagy light tejfölt – ettől krémesebb, „quiche-szerű” lesz a textúra.",

    // 4) Tonhal + zöldség belekeverése
    "4) Tonhal és zöldség beleforgatása:",
    "– A lecsöpögtetett tonhalat morzsold a tojásos–joghurtos alapba (villával lazán szétszedve).",
    "– Add hozzá az összes felvágott zöldséget.",
    "– Óvatosan, de alaposan keverd át, hogy a tonhal és a zöldség mindenhol eloszoljon.",
    
    // 5) Tál előkészítése
    "5) Tál előkészítése: fogj egy kisebb tűzálló tálat / kis jénait / szufflé formát – ez lesz az egyadagos „mini tepsid”.",
    "– Kend ki vékonyan olívaolajjal (edzésnap: az 1 ek-ból, pihenőnap: 1 tk elég).",
    "– Öntsd bele az egész tonhalas–zöldséges–tojásos masszát, egyengesd el a tetejét kanállal vagy spatulával.",
    "– Ha használsz sajtot, szórd a tetejére a 5–15 g reszelt light sajtot (edzésnapon mehet kicsit több, pihenőnapon inkább kevesebb vagy nulla).",

    // 6) Sütés
    "6) Sütés 180 °C-on: tedd a tálat az előmelegített sütőbe.",
    "– Süsd kb. 15–20 percig, amíg a közepe megszilárdul, és a teteje kicsit megpirul (különösen, ha raktál rá sajtot).",
    "– Ha bizonytalan vagy, egy fogpiszkálót vagy kést szúrj a közepébe: ha tisztán jön ki, nincs rajta folyós tojás, akkor kész.",

    // 7) Pihentetés + tálalás
    "7) Rövid pihentetés: vedd ki a sütőből, hagyd állni 5 percig (kicsit „összeáll”, könnyebb szeletelni, nem esik szét).",
    "8) Tálalás: spatulával vágj belőle egy szeletet – pont úgy, mint egy frittatából vagy rakott zöldségből.",
    "– Eheted magában, vagy mellé pakolhatsz friss salátát (plusz uborka, paradicsom, zöld levelesek), ha még több volument szeretnél kevés kalóriával.",
    "– Dobozolni is lehet: hagyd kihűlni, majd légmentes dobozba tedd – másnapra is jó kis fehérjedús vacsi/ebéd.",

    // 8) Edzésnap vs. pihenőnap logika
    "9) Edzésnap vs. pihenőnap logika:",
    "– Edzésnapon: több tonhal, több egész tojás és kicsit több olaj + sajt → magasabb fehérje, normális zsír, kulturált mennyiségű kalória egy estére is vállalható egytálban.",
    "– Pihenőnapon: picit kevesebb tonhal és sárgája, ugyanannyi vagy több zöldség, kevesebb olaj és sajt → marad a magas fehérje, de lejjebb csúszik a zsír és a teljes kcal.",

    // 9) Makró összefoglaló
    "Makró összefoglaló – 2-V – Sütőben rakott verzió (tonhal + zöldség + tojás sütőben):",
    "• Edzésnapos adag (120 g tonhal, 2 tojás + 1 fehérje, ~200 g zöldség, 1 ek olaj, kevés joghurt + sajt)\n  ≈ 480 kcal\n  ≈ 51 g fehérje",
    "• Pihenőnapos adag (100 g tonhal, 1 tojás + 2 fehérje, ~210 g zöldség, 1 tk olaj, kevés joghurt + nagyon kevés sajt)\n  ≈ 330 kcal\n  ≈ 41 g fehérje\n  (Ha pihenőnapon még jobban visszafogod a sajtot, a kalória tovább csökken, a fehérje alig változik.)"
  ]
},
{
  id: "3-V-kremes",
  mealId: "3-V-kremes",
  title: "3-V – Puha, krémes rántotta (tojás + avokádó + kenyér)",
  timeMinutes: 10,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Adagolás – edzésnap vs. pihenőnap:",
    "• Edzésnap: 3 db M-es tojás, 1 tk (5 g) olaj vagy kis vaj a sütéshez, 50 g avokádó (kb. 1/4–1/3 közepes darab), 1 szelet (~30–35 g) teljes kiőrlésű kenyér, só, bors, snidling/metélőhagyma ízlés szerint.",
    "• Pihenőnap: 2 db egész tojás + 1 db tojásfehérje, kb. 1/2 tk olaj vagy csak olajspray, 40 g avokádó, 1 kisebb/½–1 vékony szelet (~20–25 g) teljes kiőrlésű kenyér. Fehérje marad magas, de kicsit visszább vesszük a zsírt és a ch-t.",

    // 1) Tojások előkészítése
    "1) Tojások előkészítése: üsd a tojásokat egy közepes tálba (pihenőnapon a fehérjét külön üsd, és csak a fehérjét tedd hozzá).",
    "2) Fűszerezés: adj hozzá egy csipet sót és frissen őrölt borsot. Ha szeretnéd, mehet bele 1–2 evőkanál víz vagy tej – ettől még krémesebb, lágyabb lesz a rántotta.",
    "3) Felverés: villával vagy kis habverővel alaposan keverd össze, amíg teljesen egynemű, levegősebb állagú tojásmasszát kapsz.",

    // 2) Serpenyő előkészítése
    "4) Serpenyő felmelegítése: tegyél fel egy tapadásmentes serpenyőt alacsony lángra.",
    "5) Zsiradék: add hozzá az edzésnapra számolt 1 tk olajat/kis vajat, pihenőnapon pedig kb. fél teáskanálnyit vagy csak olajspray-t fújj bele. Várd meg, míg átmelegszik, de ne füstöljön – csak enyhén forrósodjon fel.",

    // 3) Rántotta sütése – francia stílus
    "6) Tojásmassza beöntése: öntsd a tojásos keveréket a serpenyőbe alacsony lángon.",
    "7) Lassú sütés, folyamatos keverés: spatulával vagy fa kanállal lassan keverd, húzd középre a megszilárduló részeket, és döntsd meg a serpenyőt, hogy a folyékony tojás kifusson a helyükre.",
    "8) A cél: ne legyenek nagy, száraz „rántottadarabok”, hanem lágy, krémes, picit nedves, francia stílusú rántotta. Végig maradjon alacsony a láng – ez a titok.",

    // 4) Mikor jó a rántotta?
    "9) Állag ellenőrzése: akkor jó, amikor a tojás már nem folyós, de még krémes, picit remegős – nem száraz, nem porlad.",
    "10) Lehúzás a tűzről: ilyen állapotban azonnal vedd le a tűzről, mert a serpenyő maradékhője még egy picit tovább sűríti. Ha bent hagyod a tűzön, gyorsan túlsül és kiszárad.",

    // 5) Avokádó és kenyér
    "11) Avokádó előkészítése: vágd félbe az avokádót, vedd ki a magot, kanalazd ki a szükséges mennyiséget (edzésnap ~50 g, pihenőnap ~40 g).",
    "12) Szeletelés: az avokádót szeleteld vagy kockázd fel, ahogy jobban szereted tálalni.",
    "13) Kenyér: vágd le az adott napra számolt teljes kiőrlésű kenyérszeletet. Ha szereted ropogósan, pirítsd meg kenyérpirítóban vagy száraz serpenyőben 1–1 percig oldalanként.",

    // 6) Tálalás
    "14) Tálalás: a puha, krémes rántottát csúsztasd tányérra.",
    "15) Avokádó és kenyér elrendezése: tedd mellé (vagy a tetejére) az avokádószeleteket/kockákat, a kenyeret pedig a tányér szélére – akár felkockázva/hasítva, hogy „tunkolós” hangulata legyen.",
    "16) Extra fűszerezés: szórhatsz a tetejére friss metélőhagymát/snidlingszálakat, kevés extra borsot, vagy pár csepp citromlevet az avokádóra (íz + nem barnul olyan gyorsan).",

    // 7) Edzésnap vs. pihenőnap logika
    "17) Edzésnap logika: 3 tojás + 1 tk olaj + egy szelet kenyér + egy kis avokádó → jó fehérjebomba, mellé visszafogott, de azért jelen lévő ch és zsírok. Esti edzés után is belefér, ha a napi keretben gondolkodsz.",
    "18) Pihenőnap logika: 2 tojás + 1 fehérje, kevesebb zsiradék, kevesebb avokádó és kisebb/vékonyabb kenyérszelet → fehérje marad rendben, zsír és ch finoman visszább húzva, esti, „nem bepunnyadós” vacsorának.",

    // 8) Makró összefoglaló
    "Makró összefoglaló – 3-V – Puha, krémes rántotta (tojás + avokádó + kenyér):",
    "• Edzésnapos adag (3 tojás, 1 tk olaj, 50 g avokádó, ~35 g teljes kiőrlésű kenyér)\n  ≈ 420 kcal\n  ≈ 23 g fehérje",
    "• Pihenőnapos adag (2 tojás + 1 fehérje, ~1/2 tk olaj, 40 g avokádó, ~25 g kenyér)\n  ≈ 300 kcal\n  ≈ 19 g fehérje"
  ]
},
{
  id: "3-V-zoldseges",
  mealId: "3-V-zoldseges",
  title: "3-V – Zöldséges rántotta (tojás + paprika + hagyma + spenót + avokádó + kenyér)",
  timeMinutes: 12,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Adagolás – edzésnap vs. pihenőnap:",
    "• Edzésnap: 3 db M-es tojás, 1 tk (5 g) olaj vagy olajspray, ~50 g paprika, 20–25 g vörös- vagy lilahagyma, 40–50 g spenót (friss vagy fagyasztott), 40–50 g avokádó, 1 szelet (~30–35 g) teljes kiőrlésű kenyér.",
    "• Pihenőnap: 2 db egész tojás + 1 db tojásfehérje, max. 1/2 tk olaj vagy csak olajspray, ~60 g paprika, ~20 g hagyma, 50–60 g spenót, 30–40 g avokádó, 1 kisebb/½–1 vékony szelet (~20–25 g) teljes kiőrlésű kenyér. Több zöldség, picit kevesebb zsír + ch → esti, könnyebb verzió.",

    // 1) Zöldségek előkészítése
    "1) Paprika előkészítése: mosd meg, magházat vágd ki, majd vágd kis kockákra vagy keskeny csíkokra, hogy gyorsan átsüljön a serpenyőben.",
    "2) Hagyma előkészítése: hámozd meg a vörös- vagy lilahagymát, majd vágd vékony szeletekre vagy finom kockákra (így ízesít, de nem lesz túl durva az íze).",
    "3) Spenót előkészítése: friss spenótnál mosd át, csöpögtesd le, nagyobb leveleket vágd kicsit kisebbre. Fagyasztott spenótnál engedd fel, és nyomd ki belőle a felesleges vizet, hogy ne áztassa el a rántottát.",

    // 2) Tojás előkészítése
    "4) Tojások felverése: üsd a tojásokat egy közepes tálba (pihenőnapon az extra fehérjét külön üsd, majd csak a fehérjét add hozzá).",
    "5) Fűszerezés: adj hozzá egy csipet sót, frissen őrölt borsot, igény szerint kevés fokhagymaport vagy szárított zöldfűszert (pl. petrezselyem, snidling).",
    "6) Keverés: villával vagy kis habverővel verd fel a tojásokat, hogy egynemű, enyhén habosított tojásmasszát kapj.",

    // 3) Zöldségek pirítása
    "7) Serpenyő előmelegítése: tegyél fel egy tapadásmentes serpenyőt közepes lángra.",
    "8) Olaj hozzáadása: edzésnapon tegyél bele 1 tk olajat vagy fújd ki olajspray-vel; pihenőnapon elég 1/2 tk vagy pár fújás spray.",
    "9) Hagyma pirítása: először add hozzá a hagymát, és pirítsd 1–2 percig, amíg üvegesedni kezd, enyhén illatozni fog.",
    "10) Paprika pirítása: add hozzá a paprikát, és pirítsd további 3–4 percig, időnként átkeverve, hogy kicsit puhuljon, de maradjon enyhén roppanós.",
    "11) Spenót hozzáadása: végül dobd rá a spenótot. Frissnél 1–2 perc elég, míg összeesik; fagyasztottnál addig süsd, míg teljesen átmelegszik és eloszlik a zöldségek között.",

    // 4) Tojás ráöntése, rántotta készítése
    "12) Zöldségek elrendezése: egyengesd el a zöldségeket a serpenyőben, hogy nagyjából mindenhol egyenletes legyen a réteg.",
    "13) Tojás ráöntése: öntsd a felvert tojásmasszát a zöldségekre. Tartsd közepes lángon – ne legyen túl nagy a hő, hogy ne száradjon ki.",
    "14) Sütési mód: kevergetheted, mint a klasszikus rántottát (így zöldséges „szemcsés” rántottát kapsz), vagy hagyhatod inkább omlett-szerűen megszilárdulni, és a végén nagyobb darabokra törni/ütni.",
    "15) Készre sütés: addig süsd, amíg a tojás teljesen átsül, de még enyhén szaftos; ha nagyon száraznak látod, vedd lebb a lángot és hamarabb húzd le a tűzről.",

    // 5) Avokádó és kenyér
    "16) Avokádó előkészítése: vágd félbe az avokádót, vedd ki a magot, kanalazd ki a szükséges mennyiséget (edzésnapon kb. 40–50 g, pihenőnapon 30–40 g). Szeleteld vagy kockázd fel, ízlés szerint.",
    "17) Kenyér: vágd le az adott napra számolt teljes kiőrlésű kenyérszeletet (edzésnapon ~30–35 g, pihenőnapon ~20–25 g). Ha szereted, pirítsd meg kenyérpirítóban vagy száraz serpenyőben 1–1 percig oldalanként, hogy ropogós legyen.",

    // 6) Tálalás
    "18) Tálalás: csúsztasd a zöldséges rántottát a tányérra – lehet egy nagy kupacban, vagy kettévágva/kettéosztva.",
    "19) Avokádó és kenyér mellé: tedd mellé az avokádószeleteket/kockákat, a kenyeret pedig a tányér szélére. Ha szeretnéd, az avokádót akár a rántotta tetejére is pakolhatod.",
    "20) Extra fűszerezés: szórd meg a tetejét friss borssal, igény szerint csipet chilipehellyel vagy snidlinggel – ez plusz ízt és színt ad.",

    // 7) Edzésnap vs. pihenőnap logika
    "21) Edzésnap logika: 3 tojás + normál zsiradék + 1 szelet kenyér + avokádó → combosabb energia és zsír, jó fehérjebomba, estére is vállalható, ha a napi edzés és mozgás mellett számolod a keretet.",
    "22) Pihenőnap logika: 2 tojás + 1 fehérje, kevesebb olaj, kicsit több zöldség, kevesebb avokádó és kisebb kenyérszelet → ugyan még mindig magas fehérje, de a zsír és ch finoman visszafogva, esti, könnyebb vacsorának.",

    // 8) Makró összefoglaló
    "Makró összefoglaló – 3-V – Zöldséges rántotta (tojás + paprika + hagyma + spenót + avokádó + kenyér):",
    "• Edzésnapos adag (3 tojás, 1 tk olaj, ~100–120 g zöldség, 50 g avokádó, ~35 g teljes kiőrlésű kenyér)\n  ≈ 455 kcal\n  ≈ 26 g fehérje",
    "• Pihenőnapos adag (2 tojás + 1 fehérje, 1/2 tk olaj, kicsit több zöldség, ~35 g avokádó, ~25 g kenyér)\n  ≈ 335 kcal\n  ≈ 22 g fehérje"
  ]
},
{
  id: "3-V-lazacos",
  mealId: "3-V-lazacos",
  title: "3-V – Füstölt lazacos prémium (rántotta + füstölt lazac + avokádó + kenyér)",
  timeMinutes: 10,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Adagolás – edzésnap vs. pihenőnap:",
    "• Edzésnap: 2 db M-es tojás + 1 db tojásfehérje, 1 tk (5 g) olaj vagy vaj (vagy olajspray), 40–50 g füstölt lazac, 40–50 g avokádó, 1 szelet (~30–35 g) teljes kiőrlésű kenyér, pár csepp citromlé, frissen őrölt bors, kapor ízlés szerint.",
    "• Pihenőnap: 2 db M-es tojás (vagy 1 egész + 1–2 fehérje, ha nagyon figyeled a zsírt), max. 1/2 tk olaj vagy csak olajspray, 25–30 g füstölt lazac, 30–40 g avokádó, 1 kisebb / 1/2–1 vékony szelet (~20–25 g) teljes kiőrlésű kenyér, ugyanúgy citromlé + bors + kapor opcionálisan.",

    // 1) Tojás előkészítése
    "1) Tojások tálba ütése: üsd egy közepes tálba az egész tojásokat. Edzésnapon add hozzá a plusz tojásfehérjét is (sárgája nélkül), pihenőnapon dönthetsz úgy, hogy csak az egyik tojás sárgáját használod.",
    "2) Fűszerezés: adj hozzá egy csipet sót és borsot – óvatosan sózz, mert a füstölt lazac eleve sós lesz –, igény esetén mehet bele egy csipet kapor vagy snidling már a tojásba is.",
    "3) Felverés: villával vagy kis habverővel verd fel a tojásokat, míg homogén, enyhén habos masszát kapsz.",

    // 2) Rántotta elkészítése
    "4) Serpenyő előkészítése: tegyél fel egy tapadásmentes serpenyőt közepes–alacsony lángra.",
    "5) Zsiradék: edzésnapon adj hozzá kb. 1 tk olajat vagy egy kis darab vajat (vagy használd olajspray-t bővebben), pihenőnapon elég 1/2 tk vagy néhány fújás olajspray.",
    "6) Tojás sütése: amikor a zsiradék átmelegedett, öntsd bele a felvert tojást. Tartsd a lángot közepes–alacsony fokozaton, és lassan, spatulával kevergesd, húzogasd a masszát, hogy laza, puha, krémes állagú rántottát kapj, ne száradjon ki.",
    "7) Mikor kész? Amikor a tojás már nem folyós, de még enyhén szaftos és krémes, vedd le a tűzről – a maradékhő kicsit még így is húzni fogja.",

    // 3) Lazac + avokádó előkészítése
    "8) Füstölt lazac: vedd ki a csomagolásból a szükséges mennyiséget (edzésnap 40–50 g, pihenőnap 25–30 g). Vágd vékony csíkokra vagy falatnyi darabokra, hogy jól lehessen adagolni a tányérra.",
    "9) Avokádó: vágd félbe az avokádót, vedd ki a magot, kanalazd ki a szükséges mennyiséget (edzésnap 40–50 g, pihenőnap 30–40 g), majd szeleteld vagy kockázd fel. Ha szeretnéd, enyhén megsózhatod, borsozhatod.",
    "10) Citrom és fűszerek: készíts elő egy kis citromszeletet vagy 1–2 tk citromlevet, és ha van, egy csipet friss vagy szárított kaprot a tálaláshoz.",

    // 4) Kenyér
    "11) Kenyér pirítása: vágd le a teljes kiőrlésű kenyeret az adott napra számolt mennyiségben (edzésnap ~30–35 g, pihenőnap ~20–25 g).",
    "12) Pirítás (opcionális, de prémium érzés): tedd kenyérpirítóba vagy száraz serpenyőbe 1–1 percre oldalanként, amíg kissé ropogós, aranybarna nem lesz.",

    // 5) Tálalás – „prémium” módon
    "13) Rántotta tálalása: a kész, krémes rántottát csúsztasd a tányér közepére – egy nagyobb kupacban vagy lazán elsimítva.",
    "14) Lazac elrendezése: a rántotta tetejére és/vagy mellé rendezd el a füstölt lazac csíkokat. Nem kell túlpakolni egy helyre, jobb, ha körbe „szegélyezi” a rántottát.",
    "15) Avokádó hozzáadása: az avokádószeleteket tedd a tányér szélére vagy részben a rántotta mellé/tetejére, hogy minden falathoz jusson belőle.",
    "16) Citrom + fűszerek: csöpögtess a lazacra és az avokádóra kevés citromlevet, szórd meg frissen őrölt borssal, és ha szereted, egy csipet kaporral – ettől lesz igazán „lazacos prémium” a hangulat.",
    "17) Kenyér a tányér szélén: tedd a pirított kenyérszeletet a tányér szélére, hogy tudj belőle tépni/harapni a falatok között.",

    // 6) Edzésnap vs. pihenőnap logika
    "18) Edzésnap logika: 2 tojás + 1 fehérje, teljes szelet kenyér, normál adag lazac és avokádó → erős fehérjebomba, jó minőségű zsírokkal, kontrollált, de nem túl alacsony szénhidráttal – tökéletes egy edzéses nap végére.",
    "19) Pihenőnap logika: kicsit kevesebb zsiradék a serpenyőben, visszafogottabb lazac + avokádó + kisebb kenyérszelet → fehérje marad jó szinten, de a kalória és zsír lejjebb megy, így jobban illeszkedik egy pihenős esti keretbe.",

    // 7) Makró összefoglaló
    "Makró összefoglaló – 3-V – Füstölt lazacos prémium (rántotta + füstölt lazac + avokádó + kenyér):",
    "• Edzésnapos adag (2 tojás + 1 fehérje, 1 tk olaj, ~45 g füstölt lazac, 50 g avokádó, ~35 g teljes kiőrlésű kenyér)\n  ≈ 445 kcal\n  ≈ 30 g fehérje",
    "• Pihenőnapos adag (2 tojás, 1/2 tk olaj, ~28 g füstölt lazac, ~35 g avokádó, ~25 g teljes kiőrlésű kenyér)\n  ≈ 325–330 kcal\n  ≈ 21 g fehérje"
  ]
},
{
  id: "4-V-klasszikus",
  mealId: "4-V-klasszikus",
  title: "4-V – Pulykamell csíkok – Klasszikus (serpenyős pulyka + párolt zöldbab & répa)",
  timeMinutes: 20,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Adagolás – edzésnap vs. pihenőnap:",
    "• Edzésnap: 150 g pulykamell (nyersen, csíkokra vágva), 200 g zöldbab, 80–100 g répa, összesen kb. 5 g olívaolaj (≈ 1 tk – fele mehet a húshoz, fele a zöldséghez), só, bors, fokhagyma, oregánó/majoránna ízlés szerint.",
    "• Pihenőnap: 130–140 g pulykamell, 220–230 g zöldbab, 80–100 g répa, ~3–4 g olívaolaj (kb. 1/2–3/4 tk), ugyanazok a fűszerek – több zöldség, kicsit kevesebb hús és zsiradék.",

    // 1) Zöldségek előkészítése
    "1) Répa előkészítése: a répát hámozd meg, majd vágd vékony karikákra vagy ujjnyi hasábokra – a lényeg, hogy gyorsan megpuhuljon, de ne legyen túl vékony, hogy ne főjön szét.",
    "2) Zöldbab előkészítése: ha fagyasztott zöldbabot használsz, nem kell felengedni, mehet egyenesen a lábasba. Ha friss, mosd meg, vágd le a végeit, és ha nagyon hosszú, vágd félbe/harmadolva.",

    // 2) Zöldbab & répa párolása
    "3) Zöldségek edénybe tétele: tedd a répát és a zöldbabot egy közepes lábasba.",
    "4) Víz hozzáadása: önts alá 1–2 ujjnyi vizet (ne lepje el teljesen, ez párolás, nem főzelék 😄).",
    "5) Fűszerezés: sózd enyhén a vizet/zöldséget.",
    "6) Párolás: fedd le a lábast, és közepes lángon párold kb. 8–10 percig, amíg a répa és a zöldbab puha, de még enyhén roppanós marad. (Ha nagyon puhán szereted, mehet +2 perc, de figyelj, ne főzd szét.)",
    "7) Víz leöntése: ha elkészült, öntsd le a felesleges vizet, és tedd félre a zöldséget fedő alatt, hogy melegen maradjon.",

    // 3) Pulykacsíkok előkészítése
    "8) Pulykamell előkészítése: a pulykamellet mosd meg, majd papírtörlővel töröld szárazra – így szebben fog pirulni.",
    "9) Csíkozás: vágd a pulykát ujjnyi vastag csíkokra. Igyekezz nagyjából egyforma méretűre vágni, hogy egyszerre süljenek.",
    "10) Fűszerezés: sózd, borsozd, szórj rá egy csipet fokhagymaport, oregánót vagy majoránnát – amit szeretsz. Finoman forgasd át, hogy minden csík kapjon a fűszerekből.",

    // 4) Pulyka sütése serpenyőben
    "11) Serpenyő előmelegítése: tegyél fel egy tapadásmentes serpenyőt közepes–magas lángra.",
    "12) Olaj hozzáadása: edzésnapon kb. 1/2 tk, pihenőnapon kb. 1/3 tk olajat adj a serpenyőbe (a maradék mehet majd a zöldségre), vagy használj olajspray-t vékony rétegben.",
    "13) Pulykacsíkok sütése: amikor a serpenyő és az olaj átmelegedett, tedd bele a pulykacsíkokat egy rétegben. Ne zsúfold túl – ha kell, süsd két részletben.",
    "14) Pirítás: süsd a pulykát kb. 5–7 percig, időnként átforgatva. Akkor jó, ha kívül enyhén pirult, belül pedig már nem rózsaszín. Ha bizonytalan vagy, vágj el egy csíkot a legvastagabb résznél.",

    // 5) Zöldség „finish”
    "15) Zöldség befejezése: a leöntött, meleg zöldbabot és répát visszateheted a lábasba vagy egy nagyobb tálba.",
    "16) Olaj a zöldségre: csorgasd rá a maradék olívaolajat (edzésnapnál kb. 1/2 tk, pihenőnapnál kb. 1/3–1/2 tk), sózd–borsozd, és óvatosan forgasd át, hogy mindenhol kapjon egy kis fényt/ízt.",

    // 6) Tálalás
    "17) Tálalás: tedd a tányérra a nagy adag párolt zöldbabot és répát, mellé vagy tetejére halmozd a pirult pulykacsíkokat.",
    "18) Extra fűszerezés: a végén még mehet rá egy kevés frissen őrölt bors vagy egy csipet oregánó – semmi fancy, csak „clean” fit vacsi.",

    // 7) Edzésnap vs. pihenőnap logika
    "19) Edzésnap logika: kicsit több pulyka, kevesebb zöldbab, normál olajmennyiség → erős fehérje, normális volumen, este minimális ch (főleg a répából).",
    "20) Pihenőnap logika: picit kevesebb hús, több zöldbab, kevesebb olaj → kalória lejjebb, rost és volumen feljebb, fehérje továbbra is elég magas – baráti esti recompos-kaja.",

    // 8) Makró összefoglaló
    "Makró összefoglaló – 4-V – Pulykamell csíkok – Klasszikus:",
    "• Edzésnapos adag (≈150 g pulykamell, 200 g zöldbab, 90 g répa, ~5 g olaj)\n  ≈ 310 kcal\n  ≈ 40 g fehérje",
    "• Pihenőnapos adag (≈135 g pulykamell, 220 g zöldbab, 90 g répa, ~3,5 g olaj)\n  ≈ 285–290 kcal\n  ≈ 36 g fehérje"
  ]
},
{
  id: "4-V-wok",
  mealId: "4-V-wok",
  title: "4-V – Pulykamell csíkok – Zöldséges wok (pulyka + zöldbab + répa, szójaszósszal)",
  timeMinutes: 20,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Adagolás – edzésnap vs. pihenőnap:",
    "• Edzésnap: 150 g pulykamell (csíkokra vágva), 180–200 g zöldbab, 80–100 g répa, ~5 g olaj a wokhoz, 1–2 tk light szójaszósz, fokhagyma/gyömbér/borsozás opcionálisan.",
    "• Pihenőnap: 130 g pulykamell, 200–220 g zöldbab, 80–90 g répa, ~3–4 g olaj, 1 tk light szójaszósz – több zöldség, picit kevesebb hús és zsír.",

    // 1) Alap előkészítés
    "1) Pulyka csíkozása: a pulykamellet mosd meg, töröld szárazra (jobban pirul), majd vágd vékony csíkokra. Próbáld egyforma vastagra vágni, hogy egyszerre süljenek.",
    "2) Répa előkészítése: hámozd meg a répát, vágd vékony csíkokra/julienne-re vagy félkarikákra. A lényeg, hogy wokban gyorsan átpuhuljon, de maradjon kicsit roppanós.",
    "3) Zöldbab előkészítése: ha fagyasztott, nem kell előfőzni, mehet majd közvetlenül a wokba. Ha friss, mosd meg, vágd le a végeit, és ha hosszú, darabold el.",

    // 2) Gyors „pác” a pulykának (opcionális, de finomabb lesz)
    "4) Gyors pác (opcionális, de +1 íz): egy kis tálban keverd össze: 1 tk light szójaszószt, egy csipet fokhagymaport vagy 1/2 gerezd reszelt fokhagymát, és egy csipet gyömbérport vagy kevés friss reszelt gyömbért.",
    "5) Pulyka bepácolása: forgasd bele a pulykacsíkokat a pácba, hagyd állni 5–10 percet. (Ha nincs időd, ez a lépés kihagyható, de sokat dob az ízen.)",

    // 3) Wok / serpenyő felmelegítése
    "6) Wok előmelegítése: forrósíts fel egy wokot vagy nagy serpenyőt magas lángon. A woknál fontos, hogy tényleg legyen forró, különben inkább fő, mint pirul.",
    "7) Olaj hozzáadása: edzésnapon összesen kb. 5 g (1 tk) olajat használj, pihenőnapon 3–4 g-ot. Ennek egy részét most add a wokhoz (kb. 1/2–2/3-át), a maradék mehet a zöldségekhez később, ha szükséges.",

    // 4) Pulyka pirítása
    "8) Pulyka pirítása: tedd a pulykacsíkokat a forró wokba egy rétegben. Nagy lángon 2–3 percig pirítsd őket, időnként megkeverve, de ne folyamatosan „túrkálva”, hogy legyen ideje kérget kapni.",
    "9) Állapot ellenőrzése: amikor a pulyka nagy része kifehéredett és a széleken pirul, szedd ki egy tányérra, tedd félre. A zöldségek majd ugyanebben a wokban mennek tovább.",

    // 5) Zöldségek wokolása
    "10) Zöldségek a wokban: a forró wokba (a maradék olajra) dobd rá a répát és a zöldbabot.",
    "11) Wok hőfok: tartsd magas lángon, és folyamatosan kevergetve süsd 4–6 percig – cél: élénk színű, enyhén pirult, de még roppanós zöldségek.",
    "12) Fűszerezés a zöldséghez: mehet rá 1 tk light szójaszósz (edzésnapon mehet +1 tk, ha jobban szereted sósan), egy kevés fokhagyma/gyömbér, esetleg csipet chili, ha bírod a csípőset.",

    // 6) Összeforgatás a hússal
    "13) Pulyka vissza a wokba: tedd vissza a félretett pulykacsíkokat a zöldségek mellé.",
    "14) Összepirítás: keverd össze alaposan, és nagy lángon még 1–2 percig pirítsd együtt, hogy az ízek összeérjenek, a szójaszósz enyhén bevonja a húst és a zöldségeket.",
    "15) Kóstolás: kóstold meg – ha kell, egy kevés plusz szójaszósz mehet rá (só helyett). Vigyázz, könnyű túlsózni, mert a szójaszósz önmagában sós.",

    // 7) Tálalás
    "16) Tálalás: az elkészült pulykás–zöldbabos–répás wokot szedd ki egy mély tányérba vagy nagyobb tálba. Ez egy komplett „egyserpenyős” vacsora: hús + zöldség egyben.",
    "17) Edzésnap logika: kicsit több pulyka, kicsit kevesebb, de még mindig nagy adag zöldség, normál olajmennyiség → kb. 310 kcal, magas fehérje, esti light wok.",
    "18) Pihenőnap logika: kevesebb pulyka, több zöldbab, kevesebb olaj → kb. 280 kcal, de még mindig masszív fehérje + nagy térfogat, alacsony ch- és zsírterheléssel.",

    // 8) Makró összefoglaló
    "Makró összefoglaló – 4-V – Pulykamell csíkok – Zöldséges wok:",
    "• Edzésnapos adag (≈150 g pulykamell, 190 g zöldbab, 90 g répa, ~5 g olaj, kevés szójaszósz)\n  ≈ 310 kcal\n  ≈ 40 g fehérje",
    "• Pihenőnapos adag (≈130 g pulykamell, 210 g zöldbab, ~85 g répa, ~4 g olaj)\n  ≈ 280 kcal\n  ≈ 35 g fehérje"
  ]
},
{
  id: "4-V-kremes-joghurtos",
  mealId: "4-V-kremes-joghurtos",
  title: "4-V – Pulykamell csíkok – Krémes joghurtos (pulyka + joghurt/cottage + zöldbab & répa)",
  timeMinutes: 25,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Adagolás – edzésnap vs. pihenőnap:",
    "• Edzésnap: 150 g pulykamell (csíkokra vágva), 180–200 g zöldbab, 80–100 g répa, 4–5 g olívaolaj, 70–80 g natúr joghurt vagy zsírszegény cottage cheese.",
    "• Pihenőnap: 130–140 g pulykamell, 200–220 g zöldbab, 80–90 g répa, 3–4 g olívaolaj, 50–60 g natúr joghurt / cottage – kicsit kevesebb hús és zsír, több zöldség.",

    // 1) Zöldbab & répa párolása
    "1) Répa előkészítése: hámozd meg a répát, vágd vékony karikákra vagy kis hasábokra (hogy gyorsan átpuhuljon, de maradjon kicsit roppanós).",
    "2) Zöldbab előkészítése: friss zöldbabnál mosd meg, vágd le a végeit; fagyasztott zöldbabot használhatsz fagyosan is.",
    "3) Párolás: tedd a zöldbabot és répát egy lábasba, önts alá 1–2 ujjnyi vizet, enyhén sózd meg, fedd le, és párold kb. 8–10 percig. Akkor jó, ha puha, de még enyhén roppanós. Ha kész, szűrd le, tartsd melegen (fedő alatt).",

    // 2) Pulykacsíkok előkészítése
    "4) Pulykamell csíkozása: a pulykamellet mosd meg, töröld szárazra, majd vágd ujjnyi csíkokra. A papírtörlős szárítás segít, hogy szépen piruljon, ne főjön.",
    "5) Fűszerezés: sózd, borsozd, szórhatsz rá fokhagymaport, oregánót, majoránnát vagy borsot ízlés szerint. Ha szereted a friss ízt, egy kevés citromhéj-reszelék is mehet bele.",

    // 3) Pulykacsíkok sütése
    "6) Serpenyő előmelegítése: forrósíts fel egy tapadásmentes serpenyőt közepes–magas lángon.",
    "7) Olaj hozzáadása: edzésnapon használd a 4–5 g olívaolajat, pihenőnapon kb. 3–4 g-ot – mehet közvetlenül a serpenyőbe vagy olajspray formájában.",
    "8) Pulyka sütése: tedd a pulykacsíkokat a forró serpenyőbe egy rétegben. Süsd 5–7 percig, időnként átforgatva, amíg a külseje enyhén pirult, belül már nem rózsaszín. Ha bizonytalan vagy, vágj el egy csíkot ellenőrzésképp.",

    // 4) Krémesítés joghurttal / cottage cheese-zel
    "9) Hő csökkentése: amikor a pulyka kész, vedd le a lángot alacsonyra, vagy húzd félre a serpenyőt a tűzről, hogy ne legyen túl forró (különben a joghurt könnyebben kicsapódik).",
    "10) Joghurt / cottage előkészítése: mérd ki a natúr joghurtot vagy zsírszegény cottage cheese-t. Cottage esetén előtte egy kis tálban keverd át, hogy krémesebb, egyneműbb legyen.",
    "11) Krémesítés: add a joghurtot/cottage-ot a pulykához a serpenyőben.",
    "12) Fűszerezés a krémhez: mehet rá frissen őrölt bors, egy kevés fokhagymapor vagy zúzott fokhagyma, ízlés szerint pár csepp citromlé és/vagy kapor (nagyon passzol a joghurtos szószhoz).",
    "13) Gyors átkeverés: óvatosan forgasd át a pulykacsíkokat a joghurtos/cottage-os krémben, hogy minden darabot bevonjon. Csak 30–60 másodpercig melegítsd még, ne forrald, hogy a joghurt ne csapódjon ki és szép, selymes maradjon.",

    // 5) Tálalás
    "14) Tálalás: tálra vagy mély tányérra először szedd ki a párolt zöldbabot és répát.",
    "15) Pulyka rá/ mellé: a tetejére vagy mellé halmozd a krémes joghurtos/cottage-os pulykacsíkokat. Szórd meg friss petrezselyemmel vagy kaporral, ha van kéznél – jól néz ki és ízben is sokat dob rajta.",
    "16) Edzésnap logika: kicsit több pulyka + több joghurt/cottage, normál olajmennyiség → extra fehérje, krémes érzet, de esti, könnyen emészthető kaja.",
    "17) Pihenőnap logika: kicsivel kevesebb hús és joghurt/cottage, kicsit több zöldbab, visszafogottabb olaj → kalória lejjebb, de telítettség és fehérje még mindig rendben.",

    // 6) Makró összefoglaló
    "Makró összefoglaló – 4-V – Pulykamell csíkok – Krémes joghurtos:",
    "• Edzésnapos adag (≈150 g pulykamell, 190–200 g zöldbab, 90 g répa, ~4,5 g olaj, ~75 g joghurt)\n  ≈ 345–350 kcal\n  ≈ 42 g fehérje",
    "• Pihenőnapos adag (≈135 g pulykamell, 210 g zöldbab, ~85 g répa, ~3,5 g olaj, ~55 g joghurt)\n  ≈ 310–315 kcal\n  ≈ 38 g fehérje"
  ]
},
{
  id: "5-V-klasszikus",
  mealId: "5-V-klasszikus",
  title: "5-V – Túrókrém – klasszikus (túró + méz + fahéj + teljes kiőrlésű pirítós)",
  timeMinutes: 10,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Adagolás – edzésnap vs. pihenőnap:",
    "• Edzésnap: 200 g zsírszegény túró, 5 g méz (~1 tk vékony csíkban), fahéj bőven, 1 szelet teljes kiőrlésű kenyér (~35–40 g, pirítva).",
    "• Pihenőnap: 180 g zsírszegény túró, 3–5 g méz (ha szigorú vagy, inkább 3 g), fahéj bőven, 1 kisebb szelet tk. kenyér (~30–35 g) VAGY 2 db abonett/puffasztott szelet alternatívának.",

    // 1) Túró előkészítése
    "1) Túró tálba tétele: mérd ki az adott napi mennyiséget (edzésnap 200 g, pihenőnap 180 g), és tedd egy közepes tálba.",
    "2) Állag igazítása (ha nagyon száraz): ha a túró morzsás, száraz, adj hozzá 1–2 evőkanál vizet vagy 1 evőkanál natúr joghurtot, és kezdd el keverni, hogy krémesebb, kanállal könnyen keverhető állagot kapj.",

    // 2) Édesítés + fűszerezés
    "3) Méz hozzáadása: csorgasd a túró tetejére a kimért mézet (edzésnap kb. 5 g, pihenőnap inkább 3–4 g). Elég egy vékony csík – nem kell „úsznia” benne.",
    "4) Fahéj: szórj a tetejére bőven őrölt fahéjat (kalóriát alig dob, viszont desszert-feelinget ad).",
    "5) Krémesre keverés: villával vagy kanállal keverd össze alaposan a túrót a mézzel és fahéjjal, amíg egységes, krémes, enyhén édes masszát kapsz. Ha még mindig túl tömör, adhatsz hozzá egy kevés extra vizet vagy joghurtot.",

    // 3) Kenyér / alap elkészítése
    "6) Kenyér mérése: vágj le 1 szelet tk. kenyeret (edzésnap ~35–40 g, pihenőnap ~30–35 g, vagy helyette 2 db abonett).",
    "7) Pirítás: a szelet(ek)et tedd kenyérpirítóba, vagy száraz serpenyőben pirítsd mindkét oldalát kb. 1–1 percig, amíg kicsit ropogós, aranybarna lesz. (Abonettet nem kell pirítani.)",

    // 4) Tálalás
    "8) Tálalás – „kenős” verzió: a kész túrókrémet tedd egy tálba, mellé a pirítós(oka)t. Evéskor kenj a kenyérre bőségesen a túrókrémből, falatonként.",
    "9) Tálalás – „mártogatós” verzió: a túrókrémet középre teszed egy kis tálban, a kenyérszeletet/abonettet csíkokra vágod, és ebbe mártogatod, mintha édes mártogatós lenne.",
    "10) Edzésnap logika: kicsit több túró + stabil kenyérszelet → több fehérje + enyhe ch este, de még mindig könnyű, nem „üt agyon”.",
    "11) Pihenőnap logika: picit kevesebb túró, visszafogottabb méz és kisebb kenyér/abonett → kalória lejjebb, fehérje még mindig szép magas.",

    // 5) Makró összefoglaló
    "Makró összefoglaló – 5-V – Túrókrém – klasszikus:",
    "• Edzésnapos adag (≈200 g túró, 5 g méz, ~38 g tk. kenyér)\n  ≈ 270 kcal\n  ≈ 27 g fehérje",
    "• Pihenőnapos adag (≈180 g túró, ~4 g méz, ~32 g tk. kenyér)\n  ≈ 235–240 kcal\n  ≈ 24 g fehérje"
  ]
},
{
  id: "5-V-proteines",
  mealId: "5-V-proteines",
  title: "5-V – Túrókrém – proteines vaníliás (túró + ½ adag whey + pirítós / abonett)",
  timeMinutes: 10,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Adagolás – edzésnap vs. pihenőnap:",
    "• Edzésnap: 180–190 g zsírszegény túró, 15 g vaníliás tejsavófehérje (½ adagolókanál), 1–2 ek víz/joghurt a lazításhoz, 1 szelet teljes kiőrlésű kenyér (~35–40 g, pirítva) VAGY 3 db abonett.",
    "• Pihenőnap: 170–180 g zsírszegény túró, 15 g vaníliás whey, 1–2 ek víz/joghurt, 1 vékonyabb szelet tk. kenyér (~30–35 g) VAGY 2 db abonett.",

    // 1) Túró + fehérje összekeverése
    "1) Túró tálba tétele: mérd ki az adott napi túrómennyiséget (edzésnap ~185 g, pihenőnap ~175 g) egy közepes tálba.",
    "2) Fehérjepor hozzáadása: szórd a túró tetejére a 15 g vaníliás tejsavófehérje-port (½ adagolókanál).",
    "3) Alap keverés: kezdd el összedolgozni a túrót és a fehérjét – elsőre sűrű, csomós, „tapadós” lesz, ez teljesen normális.",
    "4) Lazítás vízzel/joghurttal: adj hozzá 1–2 evőkanál vizet vagy natúr joghurtot, és keverd tovább. Fokozatosan adagold a folyadékot, hogy ne hígítsd túl – a cél egy sűrű, krémes, pudingszerű állag.",

    // 2) Íz finomhangolás
    "5) Íz finomhangolás (opcionális): kóstold meg a krémet.",
    "   – Ha nem elég édes: a vaníliás whey általában elég, de ha diétakompatibilis plusz édes ízt szeretnél, mehet 1–2 csepp édesítő.",
    "   – Ha túl sűrű: adj hozzá még egy kevés vizet/joghurtot, és keverd simára.",
    "   – Ha túl híg lett: legközelebb kevesebb folyadékot adj hozzá, most pedig hagyd 2–3 percig állni (a túró kicsit „beszívja”).",

    // 3) Pirítós / abonett elkészítése
    "6) Kenyér/abonett előkészítése – edzésnap:",
    "   – Vágj le 1 szelet teljes kiőrlésű kenyeret (~35–40 g).",
    "   – Tedd kenyérpirítóba, vagy száraz serpenyőben pirítsd oldalanként kb. 1 percig, amíg enyhén ropogós, aranybarna lesz.",
    "   – Ha inkább ropogós snacket ennél, használhatsz 3 db abonettet is kenyér helyett (ilyenkor azokat nem kell pirítani).",
    "7) Kenyér/abonett előkészítése – pihenőnap:",
    "   – 1 vékonyabb szelet tk. kenyér (~30–35 g) vagy 2 db abonett.",
    "   – A kenyeret itt is megpiríthatod, hogy jobb legyen a textúra, az abonett mehet natúran.",

    // 4) Tálalás
    "8) Tálalás – „desszertes” verzió: a vaníliás túrókrémet kanalazd egy tálba.",
    "   – Mellé rakd a pirítóst/abonettet.",
    "   – Eheted úgy, hogy rákened a krémet a kenyérre/abonett-re, vagy külön kanalazod a túrót, és mellé harapsz a kenyérből.",
    "9) Tálalás – „mártogatós” verzió: vágd a pirítóst csíkokra/háromszögekre, tedd köré a tányérra, a közepére a túrót. Innen mártsd bele a kenyér/abonett darabokat, mint egy high-protein mártogatósba.",

    // 5) Időzítés + logika
    "10) Edzésnap logika: túró + whey együtt → nagyon erős fehérje (kb. 38 g körül), kevés, kontrollált ch a kenyérből. Esti, izomépítés-barát vacsi, ami nem nehezít el.",
    "11) Pihenőnap logika: picit kisebb túrómennyiség és visszafogottabb kenyér/abonett adag → kalória lejjebb, a fehérjebevitel még mindig magas, jó recompos-üzemmódhoz.",

    // 6) Makró összefoglaló
    "Makró összefoglaló – 5-V – Túrókrém – proteines vaníliás:",
    "• Edzésnapos adag (≈185 g túró, 15 g whey, ~38 g tk. kenyér)\n  ≈ 300 kcal\n  ≈ 38 g fehérje",
    "• Pihenőnapos adag (≈175 g túró, 15 g whey, ~32 g tk. kenyér)\n  ≈ 280 kcal\n  ≈ 36 g fehérje"
  ]
},
{
  id: "5-V-kapros-uborkas",
  mealId: "5-V-kapros-uborkas",
  title: "5-V – Túrókrém – sós kapros-uborkás (túró + uborka + kapor + kevés olívaolaj + pirítós)",
  timeMinutes: 10,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Adagolás – edzésnap vs. pihenőnap:",
    "• Edzésnap: 200 g zsírszegény túró, 70–80 g apró kockákra vágott uborka, só + bors ízlés szerint, bő kapor, 3–5 g olívaolaj (max. 1 tk – akár el is hagyható), 1 szelet teljes kiőrlésű kenyér ~35–40 g (pirítva).",
    "• Pihenőnap: 180 g zsírszegény túró, 80–100 g uborka, só + bors + kapor ugyanúgy, 0–3 g olívaolaj (pár csepp max.), 1 kisebb szelet tk. kenyér ~30–35 g VAGY 2 db abonett/puffasztott szelet.",

    // 1) Uborka előkészítése
    "1) Uborka előkészítése:",
    "– Mosd meg az uborkát.",
    "– Ha vastag a héja vagy érzékeny rá a gyomrod, hámozhatod részben vagy teljesen.",
    "– Vágd fel apró kockákra (kb. 0,5×0,5 cm), hogy jól eloszoljon a túrókrémben és minden falatba jusson.",

    // 2) Túrókrém alap
    "2) Túrókrém alap összerakása:",
    "– Tedd a kimért túrót egy közepes tálba (edzésnap ~200 g, pihenőnap ~180 g).",
    "– Add hozzá az uborkakockákat.",
    "– Szórd rá a kaprot: frisset aprítva, szárítottat bőkezűen (ettől lesz igazán „kapros-körözöttes” feeling).",
    "– Sózd, borsozd ízlés szerint (a kapor miatt mehet kicsit több is, de ne legyen túl sós).",

    // 3) Olívaolaj (opcionális)
    "3) Olívaolaj hozzáadása (opcionális):",
    "– Ha szeretnél egy kis extra krémességet és ízt: csorgass rá nagyon kevés olívaolajat.",
    "   • Edzésnap: max. 1 teáskanál (3–5 g).",
    "   • Pihenőnap: 0–3 g, akár csak pár csepp, vagy teljesen el is hagyhatod.",
    "– Kalóriafogós mód: ha nagyon figyeled a zsírbevitelt, az olajat simán kihagyhatod – a túró + uborka + kapor önmagában is jól működik.",

    // 4) Összekeverés
    "4) Alapos összekeverés:",
    "– Egy kanállal vagy villával keverd át az egészet.",
    "– A cél: a kapor, uborka, só, bors és az olívaolaj (ha használtál) mindenhol egyenletesen eloszoljon.",
    "– Az eredmény egy sós, kapros, uborkás túrókrém lesz, kicsit „körözöttes” hangulattal.",

    // 5) Pirítós / abonett
    "5) Pirítós / abonett elkészítése:",
    "– Vágj le 1 szelet teljes kiőrlésű kenyeret (edzésnap ~35–40 g, pihenőnap ~30–35 g).",
    "– Tedd kenyérpirítóba, vagy száraz serpenyőben pirítsd 1–1 percig oldalanként, amíg aranybarna és enyhén ropogós lesz.",
    "– Ha abonettet/puffasztott szeletet választasz (pihenőnapon opció): azt nem kell pirítani, csak tedd a tányérra (2 db).",

    // 6) Tálalás
    "6) Tálalás:",
    "– A kapros-uborkás túrókrémet kanalazd egy tálba.",
    "– Mellé tedd a pirítóst vagy az abonetteket.",
    "– Eheted úgy, hogy:",
    "   • rákened a krémet a pirítósra/abonettre, mint egy körözöttet, vagy",
    "   • külön kanalazod a túrót, és mellé harapsz egy falat kenyeret/abonettet.",
    "– Ha szépen akarod tálalni: a kenyérszeletet vágd csíkokra vagy háromszögekre, és rakd körbe a túrós tálat „mártogatós” stílusban.",

    // 7) Időzítés + logika
    "7) Időzítés + logika a napodhoz:",
    "– Esti vacsiként nagyon baráti: magas fehérje (túró), alacsony-mérsékelt zsír (olaj mennyiségét te szabályozod), kevés ch (csak a kenyér/abonett).",
    "– Edzésnap: az olívaolaj és a kicsit több kenyér ad egy minimális extra energiát, de még így is könnyű vacsi.",
    "– Pihenőnap: a túró mennyisége kicsit kisebb, a kenyér/adag mérete visszafogottabb, a zöldség (uborka) több → jól laksz, de a kalória kontrollált marad.",

    // 8) Makró összefoglaló
    "Makró összefoglaló – 5-V – Túrókrém – sós kapros-uborkás:",
    "• Edzésnapos adag (≈200 g túró, ~4 g olívaolaj, ~38 g tk. kenyér)\n  ≈ 290 kcal\n  ≈ 27 g fehérje",
    "• Pihenőnapos adag (≈180 g túró, ~2 g olívaolaj, ~32 g tk. kenyér)\n  ≈ 240–245 kcal\n  ≈ 24 g fehérje"
  ]
},
{
  id: "6-V-tepsis-lazac-burgonyaval",
  mealId: "6-V-tepsis-lazac-burgonyaval",
  title: "6-V – Lazac – Tepsis egyben a burgonyával (lazac + krumpli egy tepsiben, spenót külön párolva)",
  timeMinutes: 35,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Adagolás – edzésnap vs. pihenőnap:",
    "• Edzésnap: lazacfilé 140–150 g (nyersen), burgonya 180–200 g (nyersen, hámozva, cikkekre/karikákra vágva), spenót 180–200 g (friss vagy fagyasztott, párolva), olívaolaj összesen ~5 g (kb. 1 tk) a krumplira/tepsibe.",
    "• Pihenőnap: lazacfilé 130–140 g, burgonya 130–150 g, spenót 200–220 g, olívaolaj ~3–4 g.",
    "→ Edzésnap: kicsit több krumpli + olaj → több energia. Pihenőnap: visszavett krumpli/olaj, több spenót → kevesebb kcal, ugyanannyi jóllakottság.",

    // 1) Sütő előmelegítése
    "1) Sütő előmelegítése:",
    "– Melegítsd elő a sütőt 180 °C-ra (alsó–felső sütés).",
    "– Amíg melegszik, előkészíted a krumplit és a lazacot.",

    // 2) Burgonya előkészítése
    "2) Burgonya előkészítése:",
    "– Hámozd meg a kimért mennyiségű burgonyát (edzésnap: 180–200 g, pihenőnap: 130–150 g).",
    "– Vágd kb. 0,5–1 cm vastag szeletekre vagy cikkekre (mint a steakburgonya).",
    "– Tedd egy tálba, locsold meg a napi olívaolaj-adag nagy részével (edzésnap ~1 tk, pihenőnap kicsit kevesebb).",
    "– Sózd, borsozd, szórhatsz rá rozmaringot/kakukkfüvet is, majd forgasd át, hogy mindenhol bevonja az olaj + fűszer.",

    // 3) Tepsi előkészítése
    "3) Tepsi előkészítése:",
    "– Bélelj ki egy tepsit sütőpapírral (nem ragad le, kevesebb mosogatás).",
    "– A fűszeres burgonyacikkeket/szeleteket terítsd el egy rétegben a sütőpapíron.",
    "– Ha maradt egy kevés olaj a tál alján, rácsorgathatod a tetejére.",

    // 4) Lazac előkészítése
    "4) Lazac előkészítése:",
    "– A lazacfilét itasd szárazra papírtörlővel.",
    "– Ha bőrös, maradhat rajta: sütéskor a bőrös fele legyen lefelé.",
    "– Sózd, borsozd finoman (ne vidd túlzásba, mert a citrom is ad ízt).",
    "– Mehet rá:",
    "   • pár csepp citromlé,",
    "   • kevés fokhagymapor vagy zúzott fokhagyma,",
    "   • pici fűszerpaprika vagy hal fűszerkeverék, ha szereted.",
    "– Ha nagyon minimál zsírt akarsz, plusz olajat már nem muszáj a tetejére tenni, a hal zsírja dolgozik helyetted.",

    // 5) Tepsiben elrendezés
    "5) Tepsiben elrendezés:",
    "– A fűszeres burgonyaágy tetejére (vagy mellé, ha nagy a tepsi) fektesd rá a lazacfilét.",
    "– Ügyelj, hogy a lazac körül legyen kis hely, hogy a levegő tudjon járni körülötte és szépen süljön.",

    // 6) Sütés
    "6) Sütés:",
    "– Tedd a tepsit a 180 °C-ra előmelegített sütőbe.",
    "– Süsd kb. 18–22 percig:",
    "   • a burgonya legyen puha (villa könnyen belemegy),",
    "   • a lazac húsa ne legyen nyers, de ne is száradjon ki – villával megnyomva szépen lamellákra essen szét.",
    "– Ha a krumpli nagyon lassan puhul és a lazac már majdnem kész, a lazacot kiemelheted egy kistányérra 2–3 percre, amíg a krumplit még visszarakod a sütőbe.",

    // 7) Spenót elkészítése közben
    "7) Spenót elkészítése (amíg a tepsi sül):",
    "Friss spenót esetén:",
    "– Mosd át, csöpögtesd le.",
    "– Egy serpenyőben melegíts kevés vizet vagy max. 1 tk olajat (már benne van a napi keretben).",
    "– Dobd rá a spenótot, sózd-borsozd.",
    "– Fedd le, és 2–4 percig párold, amíg összeesik, de élénk zöld marad.",
    "",
    "Fagyasztott spenót esetén:",
    "– Tedd egy kis lábasba, önts alá kevés vizet.",
    "– Közepes lángon olvaszd ki, majd párold röviden.",
    "– A végén sózd, borsozd — ha szeretnéd, egy pici fokhagymaport is adhatsz hozzá.",

    // 8) Tálalás
    "8) Tálalás:",
    "– Tányérra szedsz egy adag sült burgonyát.",
    "– Mellé teszed a lazacfilét (vagy félbevágott darabját).",
    "– A tányérra külön „halomként” mehet a párolt spenót.",
    "– A lazacra tálaláskor még csorgathatsz egy kis friss citromlevet, nagyon feldobja az ízt.",
    "– Edzésnap: ez így pont jó „jó zsír + kulturált krumpli + zöldség” kombó.",
    "– Pihenőnap: ugyanaz az élmény, kicsit kevesebb krumplival/olajjal és több spenóttal – baráti esti makrókkal.",

    // 9) Makró összefoglaló
    "Makró összefoglaló – 6-V – Lazac – Tepsis egyben a burgonyával:",
    "• Edzésnapos adag (≈145 g lazac, 190 g burgonya, 190 g spenót, 5 g olaj)\n  ≈ 520–530 kcal\n  ≈ 38 g fehérje",
    "• Pihenőnapos adag (≈135 g lazac, 140 g burgonya, 210 g spenót, ~3–4 g olaj)\n  ≈ 455–460 kcal\n  ≈ 36 g fehérje"
  ]
},
{
  id: "6-V-citromos-kapros-lazac",
  mealId: "6-V-citromos-kapros-lazac",
  title: "6-V – Lazac – Citromos-kapros verzió (citromos–kapros lazac + krumpli + spenót)",
  timeMinutes: 35,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Adagolás – edzésnap vs. pihenőnap:",
    "• Edzésnap: lazac 140–150 g, burgonya 170–190 g, spenót 180–200 g, olaj összesen ~5 g (3–4 g a lazachoz, +1–2 g, ha a krumplit is serpenyőben/tepsiben forgatod).",
    "• Pihenőnap: lazac 130–140 g, burgonya 130–150 g, spenót 200–220 g, olaj összesen ~3 g (vékonyan a serpenyőben/tepsiben).",
    "→ Edzésnap: kicsit több krumpli + olaj → több energia. Pihenőnap: visszább húzott krumpli/olaj, több spenót → kevesebb kcal, ugyanannyi jóllakottság.",

    // 1) Burgonya köret – két opció
    "1) Burgonya köret elkészítése (két opció):",

    "1/a) Főtt burgonya:",
    "– Hámozd meg a kimért mennyiségű burgonyát (edzésnap: 170–190 g, pihenőnap: 130–150 g).",
    "– Vágd kockákra vagy kb. 0,5–1 cm-es karikákra.",
    "– Tedd sós vízbe, majd forrald fel.",
    "– Forrástól számítva kb. 12–15 perc alatt megpuhul (villa könnyen beleszalad).",
    "– Szűrd le, hagyd kicsit lecsöpögni/száradni, tálalásig félretolhatod melegen.",

    "1/b) Sütőben sült burgonya (ropogósabb):",
    "– Hámozd meg a burgonyát, vágd cikkekre vagy kockákra.",
    "– Tedd egy tálba, locsold meg a napi olaj-adag egy részével (edzésnapon mehet 2–3 g, pihenőnapon kevesebb).",
    "– Sózd, borsozd, ha akarod, szórj rá rozmaringot vagy kakukkfüvet.",
    "– Forgasd át, hogy minden darabot bevonjon.",
    "– Sütőpapíros tepsin 200 °C-on kb. 20–25 percig süsd, amíg kívül enyhén pirult, belül puha lesz.",

    // 2) Lazac – citromos-kapros
    "2) Lazac elkészítése (serpenyőben, opcionálisan sütőben befejezve):",
    "– A lazacfilét itasd szárazra papírtörlővel.",
    "– Sózd, borsozd óvatosan (citrom + kapor is ad ízt).",
    "– Locsold meg bőségesen citromlével, majd szórd meg kaporral (frisset aprítva, szárítottat bőkezűbben).",
    "– Melegíts fel egy tapadásmentes serpenyőt 3–4 g olajjal (pihenőnapon ehhez igazítod a ~3 g össz-olajat).",
    "– Ha bőrös a lazac: először bőrrel lefelé tedd a serpenyőbe.",
    "– Süsd közepes lángon:",
    "   • bőrös oldalt kb. 4–5 percig,",
    "   • majd fordítsd meg, a másik oldalt még 3–4 percig.",
    "– Ha inkább sütőben fejeznéd be: serpenyőben mindkét oldalon csak 2–3 percet kapjon, utána 180 °C-os sütőben még 5–8 percig süsd, amíg a belseje átsül, de még szaftos marad.",
    "– Akkor jó, ha villával megnyomva szépen lamellákra esik, nem nyers, de nem is száraz.",

    // 3) Spenót
    "3) Spenót elkészítése:",
    "Friss spenót esetén:",
    "– Mosd át, csöpögtesd le.",
    "– Egy serpenyőben melegíts egy kevés vizet vagy a maradék pici olajat (figyelve a napi 3–5 g keretre).",
    "– Dobd rá a spenótot, sózd, borsozd.",
    "– Fedd le, és 2–4 percig párold, amíg összeesik, de szép élénk zöld marad.",
    "",
    "Fagyasztott spenót esetén:",
    "– Tedd egy kisebb lábasba, önts alá kevés vizet.",
    "– Közepes lángon olvaszd ki, majd röviden párold.",
    "– A végén sózd, borsozd, opcionálisan egy csipet fokhagymaport is adhatsz hozzá.",

    // 4) Tálalás
    "4) Tálalás:",
    "– Tányérra szedsz egy adag burgonyát (főtt vagy sült, ahogy készítetted).",
    "– Mellé jön egy nagy kupac spenót (edzésnap: 180–200 g, pihenőnap: 200–220 g).",
    "– A köret mellé vagy a tetejére teszed a citromos–kapros lazacfilét.",
    "– Tálaláskor mehet még a halra:",
    "   • extra friss citromlé,",
    "   • pár szál friss kapor vagy plusz szárított kapor.",
    "– Edzésnap: ez így egy tiszta fehérje + jó zsír + kulturált krumpli + zöld combo.",
    "– Pihenőnap: ugyanez az ízvilág, kicsit soványabb makrókkal (kevesebb krumpli és olaj, több spenót).",

    // 5) Makró összefoglaló
    "Makró összefoglaló – 6-V – Lazac – Citromos-kapros verzió:",
    "• Edzésnapos adag (≈145 g lazac, 180 g burgonya, 190 g spenót, ~5 g olaj)\n  ≈ 515–520 kcal\n  ≈ 38 g fehérje",
    "• Pihenőnapos adag (≈135 g lazac, 140 g burgonya, 210 g spenót, ~3 g olaj)\n  ≈ 450–455 kcal\n  ≈ 36 g fehérje"
  ]
},
{
  id: "6-V-rakott-lazac-spenot-burgonya",
  mealId: "6-V-rakott-lazac-spenot-burgonya",
  title: "6-V – Rakott lazac–spenót–burgonya tál (alul krumpli, közé spenót, tetején lazac – sütőben összesütve)",
  timeMinutes: 40,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Adagolás – edzésnap vs. pihenőnap:",
    "• Edzésnap: lazac 140–150 g, burgonya 170–190 g, spenót 180–200 g, olaj ~5 g.",
    "• Pihenőnap: lazac 130–140 g, burgonya 130–150 g, spenót 200–220 g, olaj ~3–4 g.",
    "→ Edzésnap: kicsit több krumpli + olaj → több energia. Pihenőnap: kicsit kevesebb krumpli/olaj, több spenót → kevesebb kcal, ugyanakkora jóllakottság.",

    // 1) Sütő előmelegítése
    "1) Sütő előmelegítése:",
    "– Melegítsd elő a sütőt 180 °C-ra (alsó–felső sütés).",

    // 2) Burgonya réteg
    "2) Burgonya réteg elkészítése:",
    "– Hámozd meg a kimért mennyiségű burgonyát (edzésnap: 170–190 g, pihenőnap: 130–150 g).",
    "– Vágd vékonyabb szeletekre (kb. 0,4–0,5 cm), hogy biztosan átsüljön a tepsiben.",
    "– Egy kisebb tepsit vagy jénait vékonyan kend ki az olaj egy részével, vagy fújd ki olajspray-vel.",
    "– Az aljára egyenletesen terítsd szét a burgonyaszeleteket, kicsit egymásra csúsztatva, mintha cserepek lennének.",
    "– Enyhén sózd, borsozd (ne nagyon túlsózd, a lazac is kap majd ízt).",

    // 3) Spenót réteg
    "3) Spenót réteg:",
    "Ha friss spenótot használsz:",
    "– Mosd át, csöpögtesd le.",
    "– Egy serpenyőben pici vízzel vagy minimális olajjal fonnyaszd meg 2–3 perc alatt.",
    "– Sózd, borsozd enyhén.",
    "",
    "Ha fagyasztott spenót:",
    "– Olvaszd ki egy kis lábasban kevés vízzel.",
    "– Nyomkodd ki a felesleges vizet (fontos, hogy ne áztassa el a rakottat).",
    "– Sózd, borsozd enyhén.",
    "",
    "→ A kész spenótot egyenletes rétegben terítsd a fűszerezett burgonya tetejére.",

    // 4) Lazac előkészítése
    "4) Lazac előkészítése:",
    "– A lazacfilét itasd szárazra papírtörlővel.",
    "– Vágd falatnyi kockákra vagy csíkokra (így könnyebben, egyenletesebben sül át a rakott tetején).",
    "– Sózd, borsozd.",
    "– Locsold meg egy kevés citromlével.",
    "– Szórd meg kaporral (friss aprítva vagy szárított), opcionálisan egy kevés fokhagymaporral is ízesítheted.",

    // 5) Lazac réteg
    "5) Lazac réteg rápakolása:",
    "– A fűszerezett lazackockákat egyenletesen szórd a spenót tetejére.",
    "– Nem baj, ha nem tökéletesen egy réteg, sütés közben az egész egy szép, szaftos egytálétellé fog „összeházasodni”.",

    // 6) Sütés
    "6) Sütés:",
    "– Ha szeretnéd szaftosabban: fedd le a jénait / tepsit alufóliával.",
    "– Tedd be a 180 °C-ra előmelegített sütőbe.",
    "– Süsd kb. 15 percig fólia alatt, hogy a krumpli elinduljon puhulni és a lazac átgőzölődjön.",
    "– 15 perc után vedd le a fóliát.",
    "– Süsd további 5–10 percig, amíg:",
    "   • a krumpli puha (villával könnyen átszúrható),",
    "   • a lazac teljesen átsült,",
    "   • a teteje picit pirult, színt kapott.",
    "– Ha úgy érzed, a krumpli még kissé kemény, adj neki +5 percet fólia nélkül vagy visszafedve, ahogy jobban tetszik.",

    // 7) Pihentetés & tálalás
    "7) Pihentetés és tálalás:",
    "– A kész rakottat vedd ki a sütőből, és pihentesd 3–5 percig, hogy kicsit összeálljon.",
    "– Kanállal vagy lapátkanállal szedd ki „kockákban” vagy nagyobb adagokban – ez egy tipikus kanállal szedhető, komfortos egytálétel.",
    "– Dobozoláshoz ideális: másnap is jól melegíthető, szóval tökéletes meal prep vacsi.",

    // 8) Makró összefoglaló
    "Makró összefoglaló – 6-V – Rakott lazac–spenót–burgonya tál:",
    "• Edzésnapos adag (≈145 g lazac, 180 g burgonya, 190 g spenót, ~5 g olaj)\n  ≈ 515–520 kcal\n  ≈ 38 g fehérje",
    "• Pihenőnapos adag (≈135 g lazac, 140 g burgonya, 210 g spenót, ~3–4 g olaj)\n  ≈ 455–460 kcal\n  ≈ 36 g fehérje"
  ]
},
{
  id: "7-V-salata",
  mealId: "7-V-salata",
  title: "7-V – Saláta verzió (cottage cheese + csirkemellsonka + sok zöldség)",
  timeMinutes: 10,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Adagolás – edzésnap vs. pihenőnap:",
    "• Edzésnap: 200 g cottage cheese, 60 g csirkemellsonka, 200 g vegyes zöldség (uborka + paprika + paradicsom), ~5 g (1 tk) olívaolaj.",
    "• Pihenőnap: 200 g cottage cheese, 50 g csirkemellsonka, 220–250 g zöldség, ~3 g olívaolaj (kb. ½ tk).",
    "→ Edzésnap: kicsit több sonka + olaj, pihenőnap: több zöldség, picit kevesebb zsír, de volume brutál mindkét napon.",

    // 1) Zöldségek előkészítése
    "1) Zöldségek előkészítése:",
    "– Mosd meg az uborkát, paprikát, paradicsomot (vagy amit használsz).",
    "– Uborka: vágd félkarikákra vagy kis kockákra.",
    "– Paprika: csíkokra vagy kockákra.",
    "– Paradicsom: cikkekre vagy kockákra.",
    "Cél: falatnyi darabok, hogy minden kanálra jusson mindenből.",

    // 2) Sonka felvágása
    "2) Csirkemellsonka felvágása:",
    "– A csirkemellsonka szeleteket tedd egymásra.",
    "– Vágd vékony csíkokra vagy kisebb kockákra – ahogy jobban esik salátában.",
    "Edzésnap: ~60 g, pihenőnap: ~50 g menjen a tálba.",

    // 3) Alap salátatál összeállítása
    "3) Alap salátatál összeállítása:",
    "– Egy nagy keverőtálba tedd bele az összes felvágott zöldséget.",
    "– Sózd, borsozd óvatosan (a sonka is sós lehet).",
    "– Locsold meg az adagolásnak megfelelő olívaolajjal:",
    "   • Edzésnap: kb. 1 tk (~5 g).",
    "   • Pihenőnap: kb. ½ tk (~3 g).",
    "– Ha szereted: mehet rá citromlé és oregánó/petrezselyem, hogy legyen egy kis mediterrán hangulat.",

    // 4) Cottage cheese és sonka hozzáadása
    "4) Cottage cheese és sonka hozzáadása:",
    "– Add a tálba a cottage cheese-t (200 g).",
    "   • Ha krémesebben szereted, kicsit át is keverheted egy külön tálban, majd úgy teszed rá.",
    "– Szórd rá a sonkacsíkokat/kockákat.",
    "– Megszórhatod még friss snidlinggel, petrezselyemmel, ha van.",

    // 5) Keverés / tálalás
    "5) Keverés / tálalás:",
    "Opció A – full vegyes saláta:",
    "– Mindent óvatosan összeforgatsz, hogy a cottage, sonka és zöldségek mindenhol eloszoljanak.",
    "– Tányérra szeded egy nagy kupacban – ez a klasszikus „fehérjebomba saláta tál”.",
    "Opció B – rétegezve, látványosabban:",
    "– Alulra megy a zöldség, rá kupacokban a cottage cheese, tetejére a sonka.",
    "– Evés közben kevered, így jobban látszanak a rétegek, „instakompatibilis”.",

    // 6) Makró összefoglaló
    "Makró összefoglaló – 7-V – Saláta verzió:",
    "• Edzésnapos adag (≈200 g cottage, 60 g csirkemellsonka, 200 g zöldség, 1 tk olívaolaj)\n  ≈ 340 kcal\n  ≈ 36 g fehérje",
    "• Pihenőnapos adag (≈200 g cottage, 50 g sonka, 220–250 g zöldség, ½–1 tk olívaolaj)\n  ≈ 320 kcal\n  ≈ 34 g fehérje"
  ]
},
{
  id: "7-V-wrap",
  mealId: "7-V-wrap",
  title: "7-V – Szendvics verzió (TK kenyér + cottage + sonka + zöldség)",
  timeMinutes: 10,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Adagolás – edzésnap vs. pihenőnap:",
    "• Edzésnap: 2 szelet teljes kiőrlésű kenyér (≈70 g összesen), 90–100 g cottage cheese, 60 g csirkemellsonka, 60–80 g vegyes zöldség.",
    "• Pihenőnap: 1 szelet TK kenyér (≈35–40 g, open sandwich), 120 g cottage cheese, 50 g csirkemellsonka, 60–80 g zöldség.",
    "→ Edzésnap: több kenyér + kicsit több sonka. Pihenőnap: kevesebb kenyér, több cottage, így a fehérje magas marad, a ch picit lejjebb megy.",

    // 1) Kenyér előkészítése
    "1) Kenyér előkészítése:",
    "– Mérd ki a szükséges mennyiségű teljes kiőrlésű kenyeret (edzésnap: 2 szelet, pihenőnap: 1 szelet).",
    "– Ha jobban szereted pirítva: pirítóban vagy száraz serpenyőben pirítsd aranybarnára mindkét oldalát.",
    "– A pirítás plusz ízt + ropogós textúrát ad, vacsorára is komfortosabb.",

    // 2) Zöldségek
    "2) Zöldségek előkészítése:",
    "– Paradicsom: mosd meg, szeleteld vékony karikákra vagy cikkekre.",
    "– Uborka: mosd meg, karikázd vagy hosszában szeleteld (szendvicsbe jól illeszkedő formára).",
    "– Paprika: mosd meg, magházat vedd ki, vágd vékony csíkokra.",
    "– Ha akarsz plusz salátalevelet (rukola, jégsaláta), azt is mosd meg, csöpögtesd le.",

    // 3) Cottage cheese réteg
    "3) Cottage cheese réteg:",
    "– A kenyérszeletek egyik oldalára kenj egyenletes rétegben cottage cheese-t:",
    "   • Edzésnap: 90–100 g-ot ossz el a 2 szelet között.",
    "   • Pihenőnap: 120 g mehet az egyetlen szeletre – vastagabb, fehérjedús alapréteg lesz.",
    "– Enyhén sózd, borsozd (figyelve arra, hogy a sonka is sós lehet).",
    "– Ha szeretnéd, mehet rá egy csipet szárított oregánó vagy snidling.",

    // 4) Sonka és zöldségek pakolása
    "4) Csirkemellsonka és zöldségek pakolása:",
    "– A cottage cheese-es kenyérre fektesd rá a csirkemellsonka szeleteket:",
    "   • Edzésnap: kb. 60 g (3–4 vékony szelet).",
    "   • Pihenőnap: kb. 50 g.",
    "– A sonkára pakold a zöldségeket: paradicsom, uborka, paprika csíkok.",
    "– Nyugodtan halmozd meg zöldséggel, főleg pihenőnapon (akár a szendvics mellé is tehetsz plusz zöldséget a tányérra).",

    // 5) Összeállítás – két szeletes vs. open sandwich
    "5) Összeállítás:",
    "Edzésnap (2 szeletes szendvics):",
    "– A másik megkent / üres szeletet ráteheted a feltétes szeletre.",
    "– Finoman nyomd össze, hogy a zöldségek ne potyogjanak.",
    "– Félbevághatod átlósan, hogy könnyebb legyen enni / dobozolni.",
    "",
    "Pihenőnap (open sandwich):",
    "– 1 szelet kenyér marad „nyitva”: alul kenyér, rajta cottage + sonka + zöldség.",
    "– A maradék cottage-ból és zöldségből csinálhatsz mellé kis „saláta kupacot” tányérra.",

    // 6) Csomagolás (ha viszed)
    "6) Csomagolás, ha viszed magaddal:",
    "– A kész szendvicset (vagy open sandwich-et) tedd egy dobozba.",
    "– Ha nagyon sok zöldséget teszel bele, érdemes a paradicsomot külön vinni, hogy ne áztassa el a kenyeret.",
    "– Szendvicset félbevágva könnyebb dobozolni és enni is.",

    // 7) Makró összefoglaló
    "Makró összefoglaló – 2️⃣ 7-V – Szendvics verzió:",
    "• Edzésnapos adag (≈70 g TK kenyér, 95 g cottage, 60 g sonka, 60–80 g zöldség)\n  ≈ 335 kcal\n  ≈ 29–30 g fehérje",
    "• Pihenőnapos adag (≈35–40 g TK kenyér, 120 g cottage, 50 g sonka, 60–80 g zöldség)\n  ≈ 270 kcal\n  ≈ 27 g fehérje"
  ]
},
{
  id: "7-V-salatas",
  mealId: "7-V-salatas",
  title: "7-V – Rakott hidegtál verzió (zöldségágy + cottage halmok + sonkacsíkok)",
  timeMinutes: 10,
  steps: [
    // 0) Adagolás – edzésnap vs. pihenőnap
    "Adagolás – edzésnap vs. pihenőnap:",
    "• Edzésnap: 200 g cottage cheese, 60 g csirkemellsonka (csíkokra vágva), 200 g vegyes zöldség, 4–5 g olívaolaj, opcionálisan 1 kisebb szelet TK kenyér (~25–30 g).",
    "• Pihenőnap: 200 g cottage cheese, 50 g csirkemellsonka, 220–250 g zöldség, ~3 g olívaolaj, kenyér vagy nincs, vagy max. ½ kis szelet (~15–20 g).",
    "→ Edzésnap: kicsit több sonka + olaj + ha kell, kis kenyér. Pihenőnap: több zöldség, picit kevesebb zsír/szilárd ch.",

    // 1) Zöldségágy készítése
    "1) Zöldségágy készítése:",
    "– Mosd meg az összes zöldséget (uborka, paprika, paradicsom, retek stb.).",
    "– Vágd fel:",
    "   • uborka: félkarikára vagy kockára,",
    "   • paprika: csíkokra vagy kockára,",
    "   • paradicsom: kockára vagy cikkekre,",
    "   • retek: vékony karikákra.",
    "– Egy nagy lapos tál aljára terítsd szét őket egyenletesen – ez lesz a „zöldségágy”.",
    "– Enyhén sózd, borsozd.",
    "– Locsold meg vékonyan olívaolajjal:",
    "   • Edzésnap: kb. 4–5 g (1 tk),",
    "   • Pihenőnap: kb. 3 g (fél tk körül).",
    "– Ha szereted, mehet rá pár csepp citromlé is (friss, savanykás íz).",

    // 2) Cottage cheese halmok
    "2) Cottage cheese „halmok” rápakolása:",
    "– Mérd ki a 200 g cottage cheese-t.",
    "– Kanállal adagold a zöldségek tetejére kis kupacokban:",
    "   nem kell elsimítani, maradjon rusztikus, „rakott hidegtál” hangulat.",
    "– Eloszthatod 4–6 kisebb halomra, hogy minden falatnál legyen cottage + zöldség + sonka.",

    // 3) Sonkacsíkok előkészítése
    "3) Sonkacsíkok előkészítése:",
    "– A csirkemellsonka szeleteket vágd hosszú csíkokra vagy kisebb „csónakokra”.",
    "– Mennyiség:",
    "   • Edzésnap: 60 g,",
    "   • Pihenőnap: 50 g.",
    "– Kóstold meg a sonkát: ha nagyon sós, a salátarészt sózd visszafogottabban.",

    // 4) Rakott hidegtál összeállítása
    "4) Rakott hidegtál összeállítása:",
    "– Szórd a sonkacsíkokat a cottage cheese halmok tetejére és közéjük, mintha „feltét” lenne.",
    "– Cél: minden kanálnyi részen legyen zöldség + cottage + sonka kombináció.",
    "– Szórd meg friss vagy szárított zöldfűszerekkel:",
    "   • kapor,",
    "   • petrezselyem,",
    "   • snidling – amihez épp kedved van.",

    // 5) Kenyér (opcionális)
    "5) Kenyér (opcionális, főleg edzésnapra):",
    "– Edzésnap: 1 kisebb szelet TK kenyér (~25–30 g) simán belefér mellé.",
    "– Pihenőnap: vagy elhagyod, vagy max. ½ kis szelet (~15–20 g), ha nagyon kívánod a kenyeret.",
    "– Piríthatod kenyérpirítóban vagy száraz serpenyőben, aztán:",
    "   • eheted külön a tál mellé, vagy",
    "   • tunkolhatod vele a cottage–zöldség–sonka kombót.",

    // 6) Hűtés / tálalás
    "6) Hűtés / tálalás:",
    "– Ha van időd, tedd be a hűtőbe 20–30 percre: jól lehűl, még frissebb lesz az egész.",
    "– Tálaláskor egyszerűen kanállal szedsz a tálból a tányérodra, minden falatban lesz:",
    "   roppanós zöldség + krémes cottage + sós sonka.",
    "– Vacsorára nagyon könnyű a gyomornak, de volumene nagy, jól laksz tőle.",

    // 7) Makró összefoglaló – csak erre a verzióra
    "Makró összefoglaló – 3️⃣ 7-V – Rakott hidegtál verzió:",
    "• Edzésnapos adag (≈200 g cottage, 60 g sonka, 200 g zöldség, ~1 tk olaj, + ~30 g TK kenyér):\n  ≈ 415 kcal\n  ≈ 39 g fehérje",
    "• Pihenőnapos adag (≈200 g cottage, 50 g sonka, 220–250 g zöldség, kevés olaj, + max. ~20 g kenyér):\n  ≈ 370 kcal\n  ≈ 36 g fehérje"
  ]
},

];
export default COOKING_INSTRUCTIONS;
