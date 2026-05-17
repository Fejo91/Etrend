export type IngredientUnit =
  | "g"
  | "ml"
  | "db"
  | "szelet"
  | "tk"
  | "ek"
  | "adag";

export type MealIngredientAmount = {
  name: string;
  amount: number;
  unit: IngredientUnit;
  kitchenAmount?: string;
  note?: string;
};

export type MealIngredientPlan = {
  mealVariantId: string;
  displayName?: string;
  slot?: "Reggeli" | "Tízórai" | "Ebéd" | "Uzsonna" | "Vacsora";
  rank?: number;
  workout: MealIngredientAmount[];
  rest: MealIngredientAmount[];
  audit?: {
    status: "PASS" | "NEEDS_REVIEW";
    notes: string[];
    optionalSuggestion?: string;
  };
};

export const TOP_MEAL_INGREDIENT_PLANS: MealIngredientPlan[] = [
  {
    mealVariantId: "5-R-gyors-alap",
    displayName: "Gyors alapverzió",
    slot: "Reggeli",
    rank: 1,
    workout: [
      {
        name: "Görög joghurt (2%)",
        amount: 200,
        unit: "g",
        kitchenAmount: "kb. 1 kisebb doboz vagy kb. 8–10 evőkanál",
        note: "Alap fehérjeforrás, krémes joghurtos alap.",
      },
      {
        name: "Zabpehely",
        amount: 30,
        unit: "g",
        kitchenAmount: "kb. 3 evőkanál",
        note: "Edzésnapon több lassabb szénhidrátot ad.",
      },
      {
        name: "Bogyós gyümölcs",
        amount: 70,
        unit: "g",
        kitchenAmount: "kb. 1 kisebb marék vagy kb. fél bögre",
        note: "Áfonya, málna vagy eper.",
      },
      {
        name: "Méz",
        amount: 10,
        unit: "g",
        kitchenAmount: "kb. 1,5–2 teáskanál",
        note: "Vékonyan a tetejére csorgatva.",
      },
    ],
    rest: [
      {
        name: "Görög joghurt (2%)",
        amount: 180,
        unit: "g",
        kitchenAmount: "kb. 3/4–1 kisebb doboz vagy kb. 7–9 evőkanál",
        note: "Fehérjebázis, pihenőnapon mérsékelten csökkentve.",
      },
      {
        name: "Zabpehely",
        amount: 20,
        unit: "g",
        kitchenAmount: "kb. 2 evőkanál",
        note: "Csökkentett pihenőnapi szénhidrát.",
      },
      {
        name: "Bogyós gyümölcs",
        amount: 60,
        unit: "g",
        kitchenAmount:
          "kb. 1 kisebb marék alatti mennyiség vagy kb. 1/3–1/2 bögre",
        note: "Kisebb pihenőnapi gyümölcsadag.",
      },
      {
        name: "Méz",
        amount: 5,
        unit: "g",
        kitchenAmount: "kb. 1 teáskanál",
        note: "Csökkentett pihenőnapi édesítés.",
      },
    ],
    audit: {
      status: "PASS",
      notes: [
        "Az edzésnapos adag logikusan több zabot, gyümölcsöt és mézet tartalmaz, ezért több hasznos szénhidrátot ad.",
        "A pihenőnapi csökkentés főként a szénhidrátforrásokon és az édesítésen történik.",
        "A fehérje mérsékelten csökken, de nem esik vissza problémásan.",
        "A megadott makrók és a hozzávalóarányok összhangban vannak.",
      ],
      optionalSuggestion:
        "Ha pihenőnapon fontosabb a teltségérzet és a fehérje, a görög joghurt opcionálisan 200 g-ra emelhető, miközben a zab és a méz marad csökkentve.",
    },
  },
  {
    mealVariantId: "3-R-klasszikus",
    displayName: "Cottage cheese – klasszikus",
    slot: "Reggeli",
    rank: 2,
    workout: [
      {
        name: "Zsírszegény cottage cheese",
        amount: 220,
        unit: "g",
        kitchenAmount: "kb. 1 nagyobb adag / kb. 10–12 evőkanál",
        note: "Fő fehérjeforrás, ez adja az étel alapját.",
      },
      {
        name: "Paradicsom",
        amount: 110,
        unit: "g",
        kitchenAmount: "kb. 1 közepes paradicsom",
        note: "Friss, lédús zöldség a cottage mellé.",
      },
      {
        name: "Uborka",
        amount: 90,
        unit: "g",
        kitchenAmount: "kb. 1/3–1/2 kígyóuborka",
        note: "Ropogós, alacsony kalóriás zöldség.",
      },
      {
        name: "Puffasztott rizs vagy abonett",
        amount: 3,
        unit: "szelet",
        kitchenAmount: "3 szelet",
        note: "Edzésnapon több ropogós szénhidrátforrás.",
      },
      {
        name: "Snidling vagy újhagyma",
        amount: 1,
        unit: "adag",
        kitchenAmount: "kb. 1 kis szórás / 1 vékony újhagyma zöldje",
        note: "Ízesítő, elhagyható, de sokat javít az ízen.",
      },
      {
        name: "Só és bors",
        amount: 1,
        unit: "adag",
        kitchenAmount: "ízlés szerint",
        note: "Alap fűszerezés.",
      },
    ],
    rest: [
      {
        name: "Zsírszegény cottage cheese",
        amount: 200,
        unit: "g",
        kitchenAmount: "kb. 1 normál adag / kb. 9–10 evőkanál",
        note: "Pihenőnapon is megmarad erős fehérjebázisnak.",
      },
      {
        name: "Paradicsom",
        amount: 100,
        unit: "g",
        kitchenAmount: "kb. 1 kisebb-közepes paradicsom",
        note: "Friss zöldség, minimális kalóriával.",
      },
      {
        name: "Uborka",
        amount: 110,
        unit: "g",
        kitchenAmount: "kb. 1/2 kígyóuborka alatt",
        note: "Pihenőnapon is bőven maradhat zöldségből.",
      },
      {
        name: "Puffasztott rizs vagy abonett",
        amount: 2,
        unit: "szelet",
        kitchenAmount: "2 szelet",
        note: "Csökkentett pihenőnapi ropogós szénhidrátforrás.",
      },
      {
        name: "Snidling vagy újhagyma",
        amount: 1,
        unit: "adag",
        kitchenAmount: "kb. 1 kis szórás / kevés újhagyma",
        note: "Ízesítő, elhagyható.",
      },
      {
        name: "Só és bors",
        amount: 1,
        unit: "adag",
        kitchenAmount: "ízlés szerint",
        note: "Alap fűszerezés.",
      },
    ],
    audit: {
      status: "PASS",
      notes: [
        "Az edzésnapos adag logikusan több ropogós szénhidrátforrást tartalmaz a 3 szelet puffasztott rizs vagy abonett miatt.",
        "A pihenőnapi adag főleg a szeletszám csökkentésével vesz vissza a szénhidrátból.",
        "A cottage cheese mennyisége pihenőnapon is elég magas marad, ezért a fehérjebázis nem esik vissza jelentősen.",
        "A zöldségmennyiség pihenőnapon is bőséges, ami jó teltségérzetet ad alacsony kalória mellett.",
      ],
      optionalSuggestion:
        "Ha pihenőnapon nagyon éhes maradsz, a zöldség mennyisége szabadon emelhető, miközben a puffasztott rizs vagy abonett maradhat 2 szelet.",
    },
  },
  {
    mealVariantId: "1-R-overnight",
    displayName: "Overnight oats (hideg zabkása)",
    slot: "Reggeli",
    rank: 3,
    workout: [
      {
        name: "Zabpehely",
        amount: 70,
        unit: "g",
        kitchenAmount: "kb. 7 evőkanál",
        note: "Edzésnapon magasabb lassabb szénhidrátalap.",
      },
      {
        name: "Tej",
        amount: 200,
        unit: "ml",
        kitchenAmount: "kb. 1 kisebb pohár",
        note: "A zab áztatásához és krémesítéséhez.",
      },
      {
        name: "Whey fehérje",
        amount: 30,
        unit: "g",
        kitchenAmount: "kb. 1 adagolókanál",
        note: "Stabil fehérjebázis, edzésnapon is 30 g marad.",
      },
      {
        name: "Banán",
        amount: 100,
        unit: "g",
        kitchenAmount: "kb. 1 közepes banán",
        note: "Edzésnapon teljes banán ad extra szénhidrátot és édességet.",
      },
      {
        name: "Fahéj",
        amount: 1,
        unit: "adag",
        kitchenAmount: "kb. 1 kis szórás",
        note: "Ízesítő, kalóriában elhanyagolható.",
      },
    ],
    rest: [
      {
        name: "Zabpehely",
        amount: 50,
        unit: "g",
        kitchenAmount: "kb. 5 evőkanál",
        note: "Pihenőnapon csökkentett, de még laktató zabmennyiség.",
      },
      {
        name: "Tej",
        amount: 180,
        unit: "ml",
        kitchenAmount: "kb. 3/4 kisebb pohár",
        note: "Kicsit visszafogottabb folyadékmennyiség az alacsonyabb zabhoz.",
      },
      {
        name: "Whey fehérje",
        amount: 30,
        unit: "g",
        kitchenAmount: "kb. 1 adagolókanál",
        note: "Pihenőnapon is megmarad a fehérjebázis.",
      },
      {
        name: "Banán",
        amount: 50,
        unit: "g",
        kitchenAmount: "kb. 1/2 közepes banán",
        note: "Pihenőnapon csökkentett gyorsabb szénhidrátforrás.",
      },
      {
        name: "Fahéj",
        amount: 1,
        unit: "adag",
        kitchenAmount: "kb. 1 kis szórás",
        note: "Ízesítő, elhagyható.",
      },
    ],
    audit: {
      status: "PASS",
      notes: [
        "Az edzésnapos adag logikusan több zabot és teljes banánt tartalmaz, ezért több energiát és szénhidrátot ad.",
        "A pihenőnapi adag főleg a zab és a banán csökkentésével vesz vissza a kalóriából és szénhidrátból.",
        "A whey fehérje mindkét napon 30 g marad, ezért a fehérjebázis stabil.",
        "Az adagok jól illenek az overnight oats logikához: este áztatott zab, reggel fehérjével és banánnal kiegészítve.",
      ],
      optionalSuggestion:
        "Ha pihenőnapon túl sűrű lenne az állag, kevés extra vízzel vagy tejjel lazítható, de az alap adaglogikán nem szükséges változtatni.",
    },
  },
  {
    mealVariantId: "1-R-mikros",
    displayName: "Mikrós gyors zabkása",
    slot: "Reggeli",
    rank: 4,
    workout: [
      {
        name: "Zabpehely",
        amount: 67.5,
        unit: "g",
        kitchenAmount: "kb. 6,5–7 evőkanál",
        note: "Edzésnapos középérték a 65–70 g-os tartományból.",
      },
      {
        name: "Tej",
        amount: 200,
        unit: "ml",
        kitchenAmount: "kb. 1 kisebb pohár",
        note: "A zab mikrós főzéséhez és krémesítéséhez.",
      },
      {
        name: "Whey fehérje",
        amount: 30,
        unit: "g",
        kitchenAmount: "kb. 1 adagolókanál",
        note: "A mikrózás után érdemes hozzákeverni, hogy ne csomósodjon túl.",
      },
      {
        name: "Fahéj",
        amount: 1,
        unit: "adag",
        kitchenAmount: "kb. 1 kis szórás",
        note: "Ízesítő, kalóriában elhanyagolható.",
      },
    ],
    rest: [
      {
        name: "Zabpehely",
        amount: 50,
        unit: "g",
        kitchenAmount: "kb. 5 evőkanál",
        note: "Pihenőnapon visszafogottabb, de még laktató zabmennyiség.",
      },
      {
        name: "Tej",
        amount: 170,
        unit: "ml",
        kitchenAmount: "kb. 3/4 kisebb pohár",
        note: "A kisebb zabmennyiséghez igazított folyadék.",
      },
      {
        name: "Whey fehérje",
        amount: 30,
        unit: "g",
        kitchenAmount: "kb. 1 adagolókanál",
        note: "Pihenőnapon is stabil fehérjebázis.",
      },
      {
        name: "Fahéj",
        amount: 1,
        unit: "adag",
        kitchenAmount: "kb. 1 kis szórás",
        note: "Ízesítő, elhagyható.",
      },
    ],
    audit: {
      status: "PASS",
      notes: [
        "Az edzésnapos adag logikusan magasabb zabmennyiséget tartalmaz, ezért több lassabb szénhidrátot ad.",
        "A pihenőnapi adag főleg a zab és kisebb részben a tej csökkentésével vesz vissza a kalóriából és szénhidrátból.",
        "A whey fehérje mindkét napon 30 g marad, ezért a fehérjebázis stabil.",
        "A banán opcionális, ezért nem kerül az alap hozzávalólistába, mert a megadott makrókat jelentősen megváltoztatná.",
      ],
      optionalSuggestion:
        "Ha edzésnapon több energiára van szükség, opcionálisan hozzáadható banán, de ezt külön extra szénhidrátként érdemes kezelni.",
    },
  },
  {
    mealVariantId: "6-R-alap",
    displayName: "Túrókrém – Alap verzió",
    slot: "Reggeli",
    rank: 5,
    workout: [
      {
        name: "Zsírszegény túró",
        amount: 180,
        unit: "g",
        kitchenAmount: "kb. 1 normál túróadag / kb. 8–10 evőkanál",
        note: "Fő fehérjebázis, ebből készül a túrókrém alapja.",
      },
      {
        name: "Whey fehérje",
        amount: 20,
        unit: "g",
        kitchenAmount: "kb. 2/3 adagolókanál",
        note: "Edzésnapon magasabb fehérjekiegészítés a túró mellé.",
      },
      {
        name: "Fahéj",
        amount: 1,
        unit: "adag",
        kitchenAmount: "bővebb szórás ízlés szerint",
        note: "Ízesítő, kalóriában elhanyagolható.",
      },
      {
        name: "Víz vagy natúr joghurt",
        amount: 1,
        unit: "adag",
        kitchenAmount: "kb. 1–2 evőkanál, ha kell",
        note: "Csak krémesítéshez kell, az állag alapján adagold.",
      },
      {
        name: "Teljes kiőrlésű pirítós",
        amount: 1,
        unit: "szelet",
        kitchenAmount: "1 szelet, kb. 35–40 g",
        note: "Edzésnapon hasznos, mérsékelt szénhidrátforrás a túrókrém mellé.",
      },
    ],
    rest: [
      {
        name: "Zsírszegény túró",
        amount: 165,
        unit: "g",
        kitchenAmount: "kb. 1 kisebb-normál túróadag / kb. 7–9 evőkanál",
        note: "Pihenőnapos középérték a 160–170 g-os tartományból.",
      },
      {
        name: "Whey fehérje",
        amount: 15,
        unit: "g",
        kitchenAmount: "kb. 1/2 adagolókanál",
        note: "Pihenőnapon visszafogottabb, de még erős fehérjekiegészítés.",
      },
      {
        name: "Fahéj",
        amount: 1,
        unit: "adag",
        kitchenAmount: "kb. 1 kis szórás ízlés szerint",
        note: "Ízesítő, elhagyható.",
      },
      {
        name: "Víz vagy natúr joghurt",
        amount: 1,
        unit: "adag",
        kitchenAmount: "kb. 1 evőkanál, ha kell",
        note: "Csak akkor kell, ha a túrókrém túl sűrű.",
      },
      {
        name: "Teljes kiőrlésű kenyér vagy abonett",
        amount: 1,
        unit: "adag",
        kitchenAmount: "1 kisebb szelet kenyér, kb. 30–35 g, vagy 2 db abonett",
        note: "Csökkentett pihenőnapi szénhidrátforrás.",
      },
    ],
    audit: {
      status: "PASS",
      notes: [
        "Az edzésnapos adag erős fehérjebázist ad a túró és a whey kombinációjával.",
        "A pihenőnapi adag logikusan csökkenti a túrót és a whey-t, de a fehérjebázis továbbra is magas marad.",
        "A szénhidrátforrás pihenőnapon kisebb kenyérszeletre vagy 2 abonettre csökken, ami jól illik a pihenőnapi visszafogáshoz.",
        "A víz vagy natúr joghurt csak állagjavító, ezért nem fő tápanyagként, hanem krémesítési segítségként szerepel.",
      ],
      optionalSuggestion:
        "Ha pihenőnapon is nagyobb teltségérzet kell, a túró maradhat 180 g körül, miközben a kenyér vagy abonett mennyisége továbbra is csökkentett marad.",
    },
  },
  {
    mealVariantId: "1-T-klasszikus",
    displayName: "Klasszikus cottage tízórai",
    slot: "Tízórai",
    rank: 1,

    workout: [
      {
        name: "Zsírszegény cottage cheese",
        amount: 200,
        unit: "g",
        kitchenAmount: "kb. 1 normál doboz / kb. 9–10 evőkanál",
        note: "Fő fehérjeforrás, ez adja a tízórai alapját.",
      },
      {
        name: "Paprika",
        amount: 100,
        unit: "g",
        kitchenAmount: "kb. 1 közepes paprika",
        note: "Ropogós, friss zöldség a cottage mellé.",
      },
      {
        name: "Uborka",
        amount: 110,
        unit: "g",
        kitchenAmount: "kb. 1/2 kígyóuborka alatt",
        note: "Alacsony kalóriás, laktató zöldség.",
      },
      {
        name: "Teljes kiőrlésű kenyér",
        amount: 70,
        unit: "g",
        kitchenAmount: "kb. 2 vékony szelet",
        note: "Edzésnapon nagyobb szénhidrátforrás a cottage mellé.",
      },
    ],

    rest: [
      {
        name: "Zsírszegény cottage cheese",
        amount: 150,
        unit: "g",
        kitchenAmount: "kb. 3/4 normál doboz / kb. 7–8 evőkanál",
        note: "Pihenőnapon csökkentett, de még értelmes fehérjebázis.",
      },
      {
        name: "Paprika",
        amount: 100,
        unit: "g",
        kitchenAmount: "kb. 1 közepes paprika",
        note: "A zöldségmennyiség pihenőnapon is maradhat bőséges.",
      },
      {
        name: "Uborka",
        amount: 130,
        unit: "g",
        kitchenAmount: "kb. 1/2 kígyóuborka",
        note: "Pihenőnapon több zöldség segíti a teltségérzetet kevés kalóriával.",
      },
      {
        name: "Teljes kiőrlésű kenyér",
        amount: 35,
        unit: "g",
        kitchenAmount: "kb. 1 vékony szelet",
        note: "Csökkentett pihenőnapi szénhidrátforrás.",
      },
    ],

    audit: {
      status: "PASS",
      notes: [
        "Az edzésnapos adag logikusan több cottage cheese-t és több teljes kiőrlésű kenyeret tartalmaz.",
        "A pihenőnapi adag főleg a kenyér csökkentésével vesz vissza a szénhidrátból.",
        "A pihenőnapos cottage mennyiség alacsonyabb, de 150 g még elfogadható tízórai fehérjebázisnak.",
        "A zöldségmennyiség pihenőnapon is bőséges, ami jó teltségérzetet ad kevés kalóriával.",
      ],
      optionalSuggestion:
        "Ha pihenőnapon kevésnek érződik a fehérje vagy a teltségérzet, a cottage cheese emelhető 180–200 g körülre, miközben a kenyér maradhat 35 g.",
    },
  },
  {
    mealVariantId: "5-T-kremes-dio",
    displayName: "Görög joghurt dióval – krémes verzió",
    slot: "Tízórai",
    rank: 2,

    workout: [
      {
        name: "Görög joghurt (2%)",
        amount: 180,
        unit: "g",
        kitchenAmount: "kb. 3/4–1 kisebb doboz vagy kb. 7–9 evőkanál",
        note: "Krémes, magas fehérjetartalmú alap a tízóraihoz.",
      },
      {
        name: "Dió",
        amount: 12,
        unit: "g",
        kitchenAmount: "kb. 5–6 fél dió",
        note: "Durvára vágva kerüljön a joghurt tetejére, főleg egészséges zsírt és ropogós textúrát ad.",
      },
    ],

    rest: [
      {
        name: "Görög joghurt (2%)",
        amount: 160,
        unit: "g",
        kitchenAmount: "kb. 2/3–3/4 kisebb doboz vagy kb. 6–8 evőkanál",
        note: "Pihenőnapon csökkentett, de még jó fehérjebázis.",
      },
      {
        name: "Dió",
        amount: 9,
        unit: "g",
        kitchenAmount: "kb. 3–4 fél dió",
        note: "Pihenőnapos középérték a 8–10 g-os tartományból.",
      },
    ],

    audit: {
      status: "PASS",
      notes: [
        "Az edzésnapos adag egyszerű, jól kontrollálható fehérje + zsír tízórai.",
        "A pihenőnapi adag logikusan csökkenti a joghurtot és a diót is, így kevesebb kalóriát és zsírt ad.",
        "A dió mennyisége kicsi, de elég ahhoz, hogy ropogós textúrát és teltebb ízt adjon.",
        "Az étel szénhidrátban alacsony, ezért inkább stabil, könnyű tízórai, nem edzés előtti nagy energialöket.",
      ],
      optionalSuggestion:
        "Ha edzésnapon több szénhidrátra van szükség, ehhez az ételhez külön gyümölcs adható, de az már extra kiegészítésként kezelendő, nem az alap verzió része.",
    },
  },
  {
    mealVariantId: "4-T-klasszikus",
    displayName: "Klasszikus kefires zabos banán",
    slot: "Tízórai",
    rank: 3,

    workout: [
      {
        name: "Kefir (1,5–2%)",
        amount: 200,
        unit: "ml",
        kitchenAmount: "kb. 1 kisebb pohár",
        note: "Savanykás, könnyen iható/kanalazható alap, a zabot is lágyítja.",
      },
      {
        name: "Zabpehely",
        amount: 25,
        unit: "g",
        kitchenAmount: "kb. 2,5 evőkanál",
        note: "Edzésnapon mérsékelt lassabb szénhidrátforrás.",
      },
      {
        name: "Banán",
        amount: 80,
        unit: "g",
        kitchenAmount: "kb. 3/4 közepes banán",
        note: "Banánkarikákra vágva ad természetes édességet és gyorsabb szénhidrátot.",
      },
      {
        name: "Fahéj",
        amount: 1,
        unit: "adag",
        kitchenAmount: "kb. 1 kis szórás",
        note: "Ízesítő, kalóriában elhanyagolható.",
      },
    ],

    rest: [
      {
        name: "Kefir (1,5–2%)",
        amount: 200,
        unit: "ml",
        kitchenAmount: "kb. 1 kisebb pohár",
        note: "Pihenőnapon is marad az alap mennyiség, könnyű tejtermékes bázisként.",
      },
      {
        name: "Zabpehely",
        amount: 20,
        unit: "g",
        kitchenAmount: "kb. 2 evőkanál",
        note: "Csökkentett pihenőnapi zabmennyiség.",
      },
      {
        name: "Banán",
        amount: 50,
        unit: "g",
        kitchenAmount: "kb. 1/2 kisebb banán",
        note: "Pihenőnapon kisebb banánadag a visszafogottabb szénhidrát miatt.",
      },
      {
        name: "Fahéj",
        amount: 1,
        unit: "adag",
        kitchenAmount: "kb. 1 kis szórás",
        note: "Ízesítő, elhagyható.",
      },
    ],

    audit: {
      status: "PASS",
      notes: [
        "Az edzésnapos adag logikusan több zabot és banánt tartalmaz, ezért több szénhidrátot és energiát ad.",
        "A pihenőnapi adag a zab és a banán csökkentésével vesz vissza a kalóriából és szénhidrátból.",
        "A kefir mennyisége mindkét napon 200 ml marad, így az étel alapja stabil és egyszerűen adagolható.",
        "Ez az étel inkább könnyű, szénhidrátosabb tízórai, nem kifejezetten magas fehérjetartalmú opció.",
      ],
      optionalSuggestion:
        "Ha ennél a tízórai opciónál magasabb fehérje lenne a cél, külön fehérjeforrással egészíthető ki, de az már extra kiegészítésként kezelendő, nem az alap verzió része.",
    },
  },
  {
    mealVariantId: "6-T-superfood",
    displayName: "Superfood verzió",
    slot: "Tízórai",
    rank: 4,

    workout: [
      {
        name: "Puffasztott rizsszelet",
        amount: 2,
        unit: "db",
        kitchenAmount: "2 db rizsszelet",
        note: "Ropogós alap, erre kerül a mogyoróvaj, banán és chia.",
      },
      {
        name: "Mogyoróvaj",
        amount: 17,
        unit: "g",
        kitchenAmount: "kb. 2 vékony kenés, 8–9 g/szelet",
        note: "Edzésnapos középérték a 16–18 g-os tartományból.",
      },
      {
        name: "Banán",
        amount: 65,
        unit: "g",
        kitchenAmount: "kb. 2/3 közepes banán",
        note: "Karikázva kerüljön a mogyoróvajas rizsszeletek tetejére.",
      },
      {
        name: "Chia mag",
        amount: 4,
        unit: "g",
        kitchenAmount: "kb. 1 kávéskanál",
        note: "A tetejére szórva ad rostot és superfood jellegű kiegészítést.",
      },
    ],

    rest: [
      {
        name: "Puffasztott rizsszelet",
        amount: 2,
        unit: "db",
        kitchenAmount: "2 db rizsszelet",
        note: "Pihenőnapon is marad az alap, hogy az étel szerkezete megmaradjon.",
      },
      {
        name: "Mogyoróvaj",
        amount: 12,
        unit: "g",
        kitchenAmount: "kb. 2 nagyon vékony kenés, 6 g/szelet",
        note: "Csökkentett pihenőnapi mennyiség.",
      },
      {
        name: "Banán",
        amount: 50,
        unit: "g",
        kitchenAmount: "kb. 1/2 kisebb banán",
        note: "Pihenőnapon kisebb banánadag a visszafogottabb szénhidrát miatt.",
      },
      {
        name: "Chia mag",
        amount: 3.5,
        unit: "g",
        kitchenAmount: "kb. 1/2–1 kávéskanál",
        note: "Pihenőnapos középérték a 3–4 g-os tartományból.",
      },
    ],

    audit: {
      status: "PASS",
      notes: [
        "Az edzésnapos adag gyors, ropogós energiaforrás rizsszelettel, banánnal és mogyoróvajjal.",
        "A pihenőnapi adag logikusan a mogyoróvajat és a banánt csökkenti, így kevesebb kalóriát és szénhidrátot ad.",
        "A 2 rizsszelet mindkét napon megmarad, ezért az étel formája és fogyaszthatósága stabil.",
        "Ez az étel nem magas fehérjetartalmú tízórai, inkább gyors energialöket jó zsírral és mérsékelt szénhidráttal.",
      ],
      optionalSuggestion:
        "Ha magasabb fehérjetartalmú tízórai kell, ezt az ételt külön fehérjeforrással lehet kiegészíteni, de az már extra kiegészítésként kezelendő, nem az alap superfood verzió része.",
    },
  },
  {
    mealVariantId: "3-T-bento",
    displayName: "Pulykás bento box zöldségekkel",
    slot: "Tízórai",
    rank: 5,

    workout: [
      {
        name: "Pulykasonka",
        amount: 75,
        unit: "g",
        kitchenAmount: "kb. 4–5 vékony szelet, kockákra vágva",
        note: "Edzésnapos középérték a 70–80 g-os tartományból, ez adja a fő fehérjeforrást.",
      },
      {
        name: "Sárgarépa",
        amount: 55,
        unit: "g",
        kitchenAmount: "kb. 1 kisebb répa fele hasábokra vágva",
        note: "Ropogós zöldségelem a bento rekeszbe.",
      },
      {
        name: "Uborka",
        amount: 55,
        unit: "g",
        kitchenAmount: "kb. 1/4 kígyóuborka hasábokra vágva",
        note: "Friss, alacsony kalóriás zöldségelem.",
      },
      {
        name: "Paprika",
        amount: 55,
        unit: "g",
        kitchenAmount: "kb. 1/2 kisebb paprika csíkokra vágva",
        note: "Ropogós, édesebb zöldségelem a bento boxba.",
      },
      {
        name: "Teljes kiőrlésű kenyér",
        amount: 32.5,
        unit: "g",
        kitchenAmount: "kb. 1 kisebb-vékony szelet",
        note: "Külön rekeszben, edzésnapon mérsékelt szénhidrátforrásként.",
      },
    ],

    rest: [
      {
        name: "Pulykasonka",
        amount: 58,
        unit: "g",
        kitchenAmount: "kb. 3–4 vékony szelet, kockákra vágva",
        note: "Pihenőnapos középérték az 55–60 g-os tartományból.",
      },
      {
        name: "Sárgarépa",
        amount: 60,
        unit: "g",
        kitchenAmount: "kb. 1 kisebb répa fele-kétharmada hasábokra vágva",
        note: "Pihenőnapon is bőséges zöldség a teltségérzethez.",
      },
      {
        name: "Uborka",
        amount: 60,
        unit: "g",
        kitchenAmount: "kb. 1/4–1/3 kígyóuborka hasábokra vágva",
        note: "Friss, alacsony kalóriás zöldségelem.",
      },
      {
        name: "Paprika",
        amount: 55,
        unit: "g",
        kitchenAmount: "kb. 1/2 kisebb paprika csíkokra vágva",
        note: "Ropogós zöldség, pihenőnapon is maradhat bőségesen.",
      },
      {
        name: "Teljes kiőrlésű kenyér",
        amount: 22.5,
        unit: "g",
        kitchenAmount: "kb. 1/2–1 kisebb vékony szelet",
        note: "Csökkentett pihenőnapi szénhidrátforrás külön rekeszben.",
      },
    ],

    audit: {
      status: "PASS",
      notes: [
        "Az edzésnapos adag logikusan több pulykasonkát és több teljes kiőrlésű kenyeret tartalmaz.",
        "A pihenőnapi adag főleg a pulykasonkát és a kenyér mennyiségét csökkenti, miközben a zöldség bőséges marad.",
        "A zöldségmennyiség külön bontása praktikusabbá teszi a hozzávaló-adag nézetet, mint egyetlen vegyes zöldség sor.",
        "Ez az étel jól működik hideg, rekeszes tízórai formában, mert a fehérje, zöldség és kenyér külön tartható.",
      ],
      optionalSuggestion:
        "Ha pihenőnapon nagyobb teltségérzet kell, a zöldségmennyiség tovább emelhető, miközben a kenyér maradhat csökkentett mennyiségben.",
    },
  },
  {
    mealVariantId: "1-E-alap",
    displayName: "Grillezett csirkemell barna rizzsel",
    slot: "Ebéd",
    rank: 1,

    workout: [
      {
        name: "Csirkemell",
        amount: 175,
        unit: "g",
        kitchenAmount: "kb. 1 nagyobb csirkemellfilé adag",
        note: "Fő fehérjeforrás, grillezve vagy serpenyőben sütve.",
      },
      {
        name: "Barna rizs",
        amount: 72.5,
        unit: "g",
        kitchenAmount: "kb. 5 evőkanál nyers rizs",
        note: "Nyersen mérendő edzésnapos szénhidrátforrás.",
      },
      {
        name: "Brokkoli",
        amount: 120,
        unit: "g",
        kitchenAmount: "kb. 2 nagyobb marék brokkolirózsa",
        note: "Edzésnapon normál zöldségadag a rizs és csirke mellé.",
      },
      {
        name: "Sárgarépa",
        amount: 80,
        unit: "g",
        kitchenAmount: "kb. 1 közepes répa",
        note: "Édesebb, ropogósabb zöldségelem a brokkoli mellé.",
      },
      {
        name: "Olívaolaj",
        amount: 1,
        unit: "ek",
        kitchenAmount: "1 evőkanál",
        note: "Sütéshez vagy a kész ételre locsolva, ez adja a fő zsiradékot.",
      },
    ],

    rest: [
      {
        name: "Csirkemell",
        amount: 155,
        unit: "g",
        kitchenAmount: "kb. 1 közepes csirkemellfilé adag",
        note: "Pihenőnapon kissé csökkentett, de erős fehérjebázis.",
      },
      {
        name: "Barna rizs",
        amount: 52.5,
        unit: "g",
        kitchenAmount: "kb. 3,5 evőkanál nyers rizs",
        note: "Nyersen mérendő, csökkentett pihenőnapi szénhidrátforrás.",
      },
      {
        name: "Brokkoli",
        amount: 160,
        unit: "g",
        kitchenAmount: "kb. 3 nagyobb marék brokkolirózsa",
        note: "Pihenőnapon emelt zöldségmennyiség a teltségérzet miatt.",
      },
      {
        name: "Sárgarépa",
        amount: 100,
        unit: "g",
        kitchenAmount: "kb. 1 nagyobb répa",
        note: "Pihenőnapon is bőséges zöldségadag a rizs csökkentése mellett.",
      },
      {
        name: "Olívaolaj",
        amount: 1,
        unit: "tk",
        kitchenAmount: "1 teáskanál",
        note: "Csökkentett pihenőnapi zsiradék.",
      },
    ],

    audit: {
      status: "PASS",
      notes: [
        "Az edzésnapos adag logikusan több barna rizst és több olívaolajat tartalmaz, ezért több energiát ad.",
        "A pihenőnapi adag főleg a rizst és az olívaolajat csökkenti, miközben a csirkemell továbbra is erős fehérjebázis marad.",
        "A pihenőnapos zöldségmennyiség magasabb, ami jól ellensúlyozza a kisebb rizsadagot és segíti a teltségérzetet.",
        "A barna rizst nyersen kell mérni, mert a főtt mennyiség vízfelvételtől függően jelentősen változhat.",
      ],
      optionalSuggestion:
        "Ha pihenőnapon is nagyobb ételvolumen kell, a brokkoli és a répa tovább emelhető, miközben a rizs és az olívaolaj maradhat csökkentett mennyiségben.",
    },
  },
  {
    mealVariantId: "2-E-suto",
    displayName: "Sütőben egyben sült pulyka édesburgonyával",
    slot: "Ebéd",
    rank: 2,

    workout: [
      {
        name: "Pulykamell",
        amount: 175,
        unit: "g",
        kitchenAmount: "kb. 1 nagyobb pulykamell adag",
        note: "Fő fehérjeforrás, kockázva vagy csíkokra vágva mehet a tepsibe.",
      },
      {
        name: "Édesburgonya",
        amount: 210,
        unit: "g",
        kitchenAmount: "kb. 1 közepes-nagyobb édesburgonya",
        note: "Edzésnapos fő szénhidrátforrás, hasábokra vagy kockákra vágva.",
      },
      {
        name: "Zöldbab",
        amount: 150,
        unit: "g",
        kitchenAmount: "kb. 2 nagyobb marék",
        note: "Zöldségköret, jól süthető együtt a pulykával és édesburgonyával.",
      },
      {
        name: "Olívaolaj",
        amount: 1,
        unit: "ek",
        kitchenAmount: "1 evőkanál",
        note: "A tepsis sütéshez és a zsiradékbevitelhez.",
      },
    ],

    rest: [
      {
        name: "Pulykamell",
        amount: 155,
        unit: "g",
        kitchenAmount: "kb. 1 közepes pulykamell adag",
        note: "Pihenőnapon kissé csökkentett, de erős fehérjebázis.",
      },
      {
        name: "Édesburgonya",
        amount: 150,
        unit: "g",
        kitchenAmount: "kb. 1 kisebb-közepes édesburgonya",
        note: "Csökkentett pihenőnapi szénhidrátforrás.",
      },
      {
        name: "Zöldbab",
        amount: 185,
        unit: "g",
        kitchenAmount: "kb. 3 nagyobb marék",
        note: "Pihenőnapon emelt zöldségmennyiség a nagyobb ételvolumenhez.",
      },
      {
        name: "Olívaolaj",
        amount: 1,
        unit: "tk",
        kitchenAmount: "1 teáskanál",
        note: "Csökkentett pihenőnapi zsiradék a tepsis sütéshez.",
      },
    ],

    audit: {
      status: "PASS",
      notes: [
        "Az edzésnapos adag logikusan több édesburgonyát és több olívaolajat tartalmaz, ezért több energiát ad.",
        "A pihenőnapi adag főleg az édesburgonyát és az olívaolajat csökkenti, miközben a pulykamell továbbra is erős fehérjebázis marad.",
        "A pihenőnapos zöldbabmennyiség magasabb, ami jól növeli az étel térfogatát alacsonyabb kalória mellett.",
        "A tepsis elkészítés praktikus, mert a pulyka, az édesburgonya és a zöldbab egyben elkészíthető.",
      ],
      optionalSuggestion:
        "Ha pihenőnapon nagyobb teltségérzet kell, a zöldbab tovább emelhető, miközben az édesburgonya és az olívaolaj maradhat csökkentett mennyiségben.",
    },
  },
  {
    mealVariantId: "3-E-suto-egyben",
    displayName: "Tepsis lazac, édesburgonya, zöldség",
    slot: "Ebéd",
    rank: 3,

    workout: [
      {
        name: "Lazacfilé",
        amount: 155,
        unit: "g",
        kitchenAmount: "kb. 1 közepes lazacfilé",
        note: "Edzésnapos középérték a 150–160 g-os tartományból, ez adja a fő fehérje- és zsírforrást.",
      },
      {
        name: "Édesburgonya",
        amount: 200,
        unit: "g",
        kitchenAmount: "kb. 1 közepes édesburgonya",
        note: "Edzésnapos fő szénhidrátforrás, kockázva vagy hasábokra vágva.",
      },
      {
        name: "Brokkoli",
        amount: 60,
        unit: "g",
        kitchenAmount: "kb. 1 nagyobb marék brokkolirózsa",
        note: "A zöldségmix egyik fő eleme.",
      },
      {
        name: "Sárgarépa",
        amount: 50,
        unit: "g",
        kitchenAmount: "kb. 1 kisebb répa fele",
        note: "Édesebb zöldségelem, jól illik az édesburgonyához.",
      },
      {
        name: "Cukkini",
        amount: 60,
        unit: "g",
        kitchenAmount: "kb. 1/4 közepes cukkini",
        note: "Lágyabb, könnyű zöldségelem a tepsis mixben.",
      },
      {
        name: "Lilahagyma",
        amount: 30,
        unit: "g",
        kitchenAmount: "kb. 1/4 kisebb lilahagyma",
        note: "Ízt és szaftosságot ad a tepsis zöldségmixnek.",
      },
      {
        name: "Olívaolaj",
        amount: 9,
        unit: "g",
        kitchenAmount: "kb. 2 teáskanál",
        note: "Edzésnapos középérték a 8–10 g-os tartományból.",
      },
      {
        name: "Citrom, fokhagyma, oregánó",
        amount: 1,
        unit: "adag",
        kitchenAmount: "ízlés szerint",
        note: "Fűszerezés a lazachoz és a zöldségekhez.",
      },
    ],

    rest: [
      {
        name: "Lazacfilé",
        amount: 135,
        unit: "g",
        kitchenAmount: "kb. 1 kisebb-közepes lazacfilé",
        note: "Pihenőnapos középérték a 130–140 g-os tartományból.",
      },
      {
        name: "Édesburgonya",
        amount: 150,
        unit: "g",
        kitchenAmount: "kb. 1 kisebb-közepes édesburgonya",
        note: "Csökkentett pihenőnapi szénhidrátforrás.",
      },
      {
        name: "Brokkoli",
        amount: 70,
        unit: "g",
        kitchenAmount: "kb. 1 nagyobb marék brokkolirózsa",
        note: "Pihenőnapon emelt zöldségmennyiség része.",
      },
      {
        name: "Sárgarépa",
        amount: 55,
        unit: "g",
        kitchenAmount: "kb. 1 kisebb répa fele",
        note: "Ropogósabb, édesebb zöldségelem.",
      },
      {
        name: "Cukkini",
        amount: 65,
        unit: "g",
        kitchenAmount: "kb. 1/4 közepes cukkini",
        note: "Könnyű zöldségelem, jól növeli az étel térfogatát.",
      },
      {
        name: "Lilahagyma",
        amount: 30,
        unit: "g",
        kitchenAmount: "kb. 1/4 kisebb lilahagyma",
        note: "Ízesítő zöldségelem, pihenőnapon is maradhat.",
      },
      {
        name: "Olívaolaj",
        amount: 5.5,
        unit: "g",
        kitchenAmount: "kb. 1 teáskanál",
        note: "Pihenőnapos középérték az 5–6 g-os tartományból.",
      },
      {
        name: "Citrom, fokhagyma, oregánó",
        amount: 1,
        unit: "adag",
        kitchenAmount: "ízlés szerint",
        note: "Ugyanaz a fűszerezés, mint edzésnapon.",
      },
    ],

    audit: {
      status: "PASS",
      notes: [
        "Az edzésnapos adag logikusan több lazacot, édesburgonyát és olívaolajat tartalmaz, ezért energiadúsabb.",
        "A pihenőnapi adag az édesburgonyát és az olívaolajat csökkenti, miközben a zöldségmennyiség nő.",
        "A lazac zsírosabb fehérjeforrás, ezért az olívaolaj mennyiségének pihenőnapi csökkentése különösen jó döntés.",
        "A zöldségmix külön bontása praktikusabbá teszi a hozzávaló-adag nézetet, mint egyetlen zöldségmix sor.",
        "A tepsis elkészítés logikus, mert a lazac, az édesburgonya és a zöldségek egyben elkészíthetők.",
      ],
      optionalSuggestion:
        "Ha pihenőnapon nagyobb ételvolumen kell, a brokkoli, cukkini vagy répa tovább emelhető, miközben az édesburgonya és az olívaolaj maradhat csökkentett mennyiségben.",
    },
  },
  {
    mealVariantId: "5-E-alap",
    displayName: "Alap tonhalsaláta",
    slot: "Ebéd",
    rank: 4,

    workout: [
      {
        name: "Tonhal konzerv vízben, lecsepegtetve",
        amount: 120,
        unit: "g",
        kitchenAmount: "kb. 1 normál konzerv lecsepegtetve",
        note: "Fő fehérjeforrás, vízben eltett tonhalból számolva.",
      },
      {
        name: "Főtt tojás",
        amount: 2,
        unit: "db",
        kitchenAmount: "2 db M-es tojás",
        note: "Edzésnapon plusz fehérjét és zsírt ad a salátához.",
      },
      {
        name: "Paradicsom",
        amount: 80,
        unit: "g",
        kitchenAmount: "kb. 1 kisebb paradicsom",
        note: "Lédús zöldségelem a salátatálba.",
      },
      {
        name: "Uborka",
        amount: 80,
        unit: "g",
        kitchenAmount: "kb. 1/3 kígyóuborka",
        note: "Friss, ropogós, alacsony kalóriás zöldség.",
      },
      {
        name: "Paprika",
        amount: 60,
        unit: "g",
        kitchenAmount: "kb. 1/2 kisebb paprika",
        note: "Ropogós, édesebb zöldségelem.",
      },
      {
        name: "Jégsaláta vagy rukkola",
        amount: 40,
        unit: "g",
        kitchenAmount: "kb. 1–2 nagy marék",
        note: "Nagy térfogatot ad kevés kalóriával.",
      },
      {
        name: "Lilahagyma",
        amount: 15,
        unit: "g",
        kitchenAmount: "kb. 1–2 vékony szelet",
        note: "Ízesítő zöldségelem, kevés is elég belőle.",
      },
      {
        name: "Olívaolaj",
        amount: 8,
        unit: "g",
        kitchenAmount: "kb. 1 lapos evőkanál",
        note: "Edzésnapos salátaöntet zsiradéka.",
      },
      {
        name: "Citromlé, só, bors, petrezselyem",
        amount: 1,
        unit: "adag",
        kitchenAmount: "ízlés szerint",
        note: "Könnyű citromos-fűszeres öntet a tonhalsalátához.",
      },
    ],

    rest: [
      {
        name: "Tonhal konzerv vízben, lecsepegtetve",
        amount: 120,
        unit: "g",
        kitchenAmount: "kb. 1 normál konzerv lecsepegtetve",
        note: "Pihenőnapon is marad a fő fehérjebázis.",
      },
      {
        name: "Főtt tojás",
        amount: 1,
        unit: "db",
        kitchenAmount: "1 db M-es tojás",
        note: "Pihenőnapon csökkentett tojásmennyiség a zsír és kalória visszafogásához.",
      },
      {
        name: "Paradicsom",
        amount: 80,
        unit: "g",
        kitchenAmount: "kb. 1 kisebb paradicsom",
        note: "Friss, lédús zöldségelem.",
      },
      {
        name: "Uborka",
        amount: 90,
        unit: "g",
        kitchenAmount: "kb. 1/3–1/2 kígyóuborka",
        note: "Pihenőnapon is bőséges, alacsony kalóriás zöldség.",
      },
      {
        name: "Paprika",
        amount: 60,
        unit: "g",
        kitchenAmount: "kb. 1/2 kisebb paprika",
        note: "Ropogós zöldségelem a salátába.",
      },
      {
        name: "Jégsaláta vagy rukkola",
        amount: 35,
        unit: "g",
        kitchenAmount: "kb. 1 nagy marék",
        note: "Könnyű salátaalap, növeli az étel térfogatát.",
      },
      {
        name: "Lilahagyma",
        amount: 15,
        unit: "g",
        kitchenAmount: "kb. 1–2 vékony szelet",
        note: "Ízesítő zöldségelem.",
      },
      {
        name: "Olívaolaj",
        amount: 5,
        unit: "g",
        kitchenAmount: "kb. 1 teáskanál",
        note: "Csökkentett pihenőnapi salátaöntet zsiradék.",
      },
      {
        name: "Citromlé, só, bors, petrezselyem",
        amount: 1,
        unit: "adag",
        kitchenAmount: "ízlés szerint",
        note: "Ugyanaz a könnyű öntet, mint edzésnapon.",
      },
    ],

    audit: {
      status: "PASS",
      notes: [
        "Az edzésnapos adag két tojást és több olívaolajat tartalmaz, ezért magasabb a zsír- és kalóriatartalma.",
        "A pihenőnapi adag megtartja a 120 g tonhalat, így a fehérjebázis erős marad.",
        "Pihenőnapon a tojás és az olívaolaj csökkentése jól visszaveszi a kalóriát és a zsírt.",
        "A zöldségmennyiség mindkét napon bőséges, ezért a saláta nagy térfogatú marad rizs vagy más köret nélkül.",
        "A vegyes zöldség külön bontása praktikusabbá teszi a hozzávaló-adag nézetet, mint egyetlen vegyes zöldség sor.",
      ],
      optionalSuggestion:
        "Ha pihenőnapon nagyobb ételvolumen kell, az uborka, jégsaláta vagy rukkola tovább emelhető, miközben a tojás és az olívaolaj maradhat csökkentett mennyiségben.",
    },
  },
  {
    mealVariantId: "6-E-klasszikus",
    displayName: "Klasszikus grillezett csirkemell",
    slot: "Ebéd",
    rank: 5,

    workout: [
      {
        name: "Csirkemell",
        amount: 180,
        unit: "g",
        kitchenAmount: "kb. 1 nagyobb csirkemellfilé adag",
        note: "Nyersen mérendő fő fehérjeforrás, grillezve vagy serpenyőben sütve.",
      },
      {
        name: "Basmati rizs",
        amount: 70,
        unit: "g",
        kitchenAmount: "kb. 5 evőkanál száraz rizs",
        note: "Szárazon mérendő edzésnapos fő szénhidrátforrás.",
      },
      {
        name: "Zöldborsó",
        amount: 100,
        unit: "g",
        kitchenAmount: "kb. 1 nagyobb marék",
        note: "A borsó-répa zöldségköret fele.",
      },
      {
        name: "Sárgarépa",
        amount: 100,
        unit: "g",
        kitchenAmount: "kb. 1 nagyobb répa",
        note: "A borsó-répa zöldségköret másik fele.",
      },
      {
        name: "Olívaolaj vagy kókuszolaj",
        amount: 5,
        unit: "g",
        kitchenAmount: "kb. 1 teáskanál",
        note: "Sütéshez használt edzésnapos zsiradék.",
      },
    ],

    rest: [
      {
        name: "Csirkemell",
        amount: 170,
        unit: "g",
        kitchenAmount: "kb. 1 közepes-nagyobb csirkemellfilé adag",
        note: "Pihenőnapon is erős, szinte változatlan fehérjebázis.",
      },
      {
        name: "Basmati rizs",
        amount: 50,
        unit: "g",
        kitchenAmount: "kb. 3,5 evőkanál száraz rizs",
        note: "Csökkentett pihenőnapi szénhidrátforrás, szárazon mérve.",
      },
      {
        name: "Zöldborsó",
        amount: 120,
        unit: "g",
        kitchenAmount: "kb. 1–1,5 nagyobb marék",
        note: "Pihenőnapon emelt zöldségmennyiség része.",
      },
      {
        name: "Sárgarépa",
        amount: 120,
        unit: "g",
        kitchenAmount: "kb. 1 nagyobb répa vagy 2 kisebb répa",
        note: "Pihenőnapon több zöldség a kisebb rizsadag mellé.",
      },
      {
        name: "Olívaolaj vagy kókuszolaj",
        amount: 3.5,
        unit: "g",
        kitchenAmount: "kb. 1 kisebb teáskanál",
        note: "Csökkentett pihenőnapi zsiradék a serpenyőben.",
      },
    ],

    audit: {
      status: "PASS",
      notes: [
        "Az edzésnapos adag klasszikus csirke-rizs-zöldség felépítésű, magas fehérjével és erős szénhidrátbázissal.",
        "A pihenőnapi adag logikusan a rizst és az olajat csökkenti, miközben a csirkemell mennyisége szinte változatlan marad.",
        "A pihenőnapos zöldségmennyiség magasabb, ami jól növeli az étel térfogatát a kisebb rizsadag mellett.",
        "A basmati rizst szárazon kell mérni, mert főzés után a tömege vízfelvételtől függően jelentősen változhat.",
        "Ez az ebéd jó, tiszta fitnesz alapétel: könnyen ismételhető, jól mérhető és jól illik edzésnap/pihenőnap bontásba.",
      ],
      optionalSuggestion:
        "Ha pihenőnapon nagyobb teltségérzet kell, a répa vagy a borsó tovább emelhető, miközben a rizs és az olaj maradhat csökkentett mennyiségben.",
    },
  },
  {
    mealVariantId: "2-U-dietas",
    displayName: "Diétás bogyós fehérjeshake",
    slot: "Uzsonna",
    rank: 1,

    workout: [
      {
        name: "Whey fehérje",
        amount: 30,
        unit: "g",
        kitchenAmount: "kb. 1 adagolókanál",
        note: "Fő fehérjeforrás, ez adja a shake alapját.",
      },
      {
        name: "Bogyós gyümölcs",
        amount: 80,
        unit: "g",
        kitchenAmount: "kb. 1 kisebb marék vagy kb. 1/2 bögre",
        note: "Áfonya vagy málna, alacsonyabb kalóriás gyümölcsös rész.",
      },
      {
        name: "Víz vagy víz + kevés tej",
        amount: 225,
        unit: "ml",
        kitchenAmount: "kb. 1 nagyobb pohár",
        note: "Edzésnapos középérték a 200–250 ml-es tartományból.",
      },
    ],

    rest: [
      {
        name: "Whey fehérje",
        amount: 30,
        unit: "g",
        kitchenAmount: "kb. 1 adagolókanál",
        note: "Pihenőnapon is megmarad a stabil fehérjebázis.",
      },
      {
        name: "Bogyós gyümölcs",
        amount: 80,
        unit: "g",
        kitchenAmount: "kb. 1 kisebb marék vagy kb. 1/2 bögre",
        note: "Standard pihenőnapi gyümölcsmennyiség a shake-ben.",
      },
      {
        name: "Víz",
        amount: 200,
        unit: "ml",
        kitchenAmount: "kb. 1 pohár",
        note: "Standard diétás pihenőnapi folyadékalap.",
      },
    ],

    audit: {
      status: "PASS",
      notes: [
        "Az edzésnapos és pihenőnapos adag azonos makróval szerepel, ami ennél a diétás shake-nél elfogadható.",
        "A 30 g whey mindkét napon stabil, magas fehérjebázist ad alacsony kalória mellett.",
        "A 80 g bogyós gyümölcs jó kompromisszum: ad ízt és rostot, de nem viszi magasra a szénhidrátot.",
        "Ez az uzsonna inkább könnyű, diétás fehérjepótlás, nem nagy energiatartalmú étkezés.",
      ],
      optionalSuggestion:
        "Ha edzésnapon krémesebb vagy laktatóbb shake kell, a víz egy része kevés tejjel kiváltható, de ezt extra kalóriaként érdemes kezelni.",
    },
  },

];
