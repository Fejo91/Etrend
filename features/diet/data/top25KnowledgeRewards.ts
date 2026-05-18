/**
 * Knowledge rewards for the Top25 "Mi jön ezután?" quiz.
 * Lookup key: `${mealId}:${correctNextStep}`
 *
 * These rewards are shown AFTER a correct answer — never before.
 * Covered meals (Top5 reggeli):
 *   5-R-gyors-alap  (5 rewards)
 *   1-R-overnight   (7 rewards)
 *   1-R-mikros      (5 rewards)
 *   3-R-klasszikus  (5 rewards)
 *   6-R-alap        (5 rewards)
 */

export type Top25KnowledgeRewardCategory =
  | "kitchen_logic"
  | "common_mistake"
  | "fitness_logic"
  | "memory_trick";

export type Top25KnowledgeReward = {
  title: string;
  body: string;
  category: Top25KnowledgeRewardCategory;
};

/**
 * Maps `${mealId}:${correctNextStep}` to a knowledge reward.
 */
export const TOP25_KNOWLEDGE_REWARDS: Record<string, Top25KnowledgeReward> = {

  // ─── 5-R-gyors-alap ───────────────────────────────────────────────────────
  // quizSteps: joghurt → zab → bogyós → keverés → méz → állni hagyás

  "5-R-gyors-alap:Szórd rá a zabpelyhet.": {
    category: "kitchen_logic",
    title: "Miért a zab jön az alap után?",
    body: "A görög joghurt adja a krémes fehérjebázist, a zab pedig a lassabb szénhidrátot. Ha korán belekerül, pár perc alatt kicsit megszívja magát, és egységesebb lesz az állag.",
  },
  "5-R-gyors-alap:Add hozzá a bogyós gyümölcsöket.": {
    category: "kitchen_logic",
    title: "Miért a gyümölcs jön a joghurtos-zabos alap után?",
    body: "A bogyós gyümölcsöt érdemes a joghurtos-zabos alap után hozzáadni, hogy ne törjön teljesen szét. Az óvatos keverés segít, hogy az íze eloszoljon, de maradjon friss gyümölcsös állaga is.",
  },
  "5-R-gyors-alap:Keverd össze óvatosan a joghurtot, zabot és gyümölcsöt.": {
    category: "kitchen_logic",
    title: "Miért érdemes összekeverni a joghurtot és a zabot?",
    body: "Így a zab nem száraz rétegként ül a tetején, hanem egyenletesen eloszlik a joghurtban. Ettől kanalazhatóbb és krémesebb lesz a reggeli.",
  },
  "5-R-gyors-alap:Csorgasd a tetejére a mézet.": {
    category: "fitness_logic",
    title: "Miért csak kevés méz kell?",
    body: "A méz itt nem fő szénhidrátforrás, hanem finomhangoló édesítés. A bogyós gyümölcs már önmagában is ad természetes édességet, ezért kevés méz is elég.",
  },
  "5-R-gyors-alap:Hagyd pár percig állni, hogy a zab kissé megpuhuljon.": {
    category: "memory_trick",
    title: "Hogyan jegyezd meg a sorrendet?",
    body: "Gondolj erre a sorrendre: alap → zab → gyümölcs → keverés → édesítés → állni hagyás. Így könnyebb megjegyezni, mit mi után érdemes hozzáadni.",
  },

  // ─── 1-R-overnight ────────────────────────────────────────────────────────
  // quizSteps: zab kimér → folyadék+fahéj → kever → hűtőbe → reggel kivesz →
  //            fehérje → banán → állag beállít

  "1-R-overnight:Öntsd rá a folyadékot, majd szórd bele a fahéjat.": {
    category: "kitchen_logic",
    title: "Miért a folyadék és fahéj jön a zabra?",
    body: "A zab csak akkor szívja magát meg teljesen, ha a folyadék rögtön körülveszi az összes pelyhét. A fahéj az áztatás során be is ivódik a zabba, nem csak a tetején marad.",
  },
  "1-R-overnight:Keverd össze alaposan, hogy minden zabpelyhet érjen a folyadék.": {
    category: "common_mistake",
    title: "Miért kell tényleg megkeverni?",
    body: "Ha nem kevered össze, a zab teteje puhul meg, az alja száraz marad. Ez a lépés garantálja az egyenletes, krémes állagot reggel.",
  },
  "1-R-overnight:Zárd le a dobozt vagy üveget, és tedd a hűtőbe egy éjszakára.": {
    category: "kitchen_logic",
    title: "Miért kell lezárni és hűtőbe tenni?",
    body: "A fedő megakadályozza, hogy a felszín kiszáradjon vagy idegen szagokat vegyen fel. A hideg lassú folyamat közben a zab textúrája krémesebb lesz, mint szobahőmérsékleten.",
  },
  "1-R-overnight:Reggel vedd ki a hűtőből, keverd át, és ellenőrizd az állagát.": {
    category: "memory_trick",
    title: "Hogyan jegyezd meg a kétfázisos sorrendet?",
    body: "Este: zab + folyadék + keverés + hűtő. Reggel: ellenőrzés + fehérje + gyümölcs + állag. Gondolj rá úgy: este előkészítés, reggel befejezés.",
  },
  "1-R-overnight:Add hozzá a fehérjeport, majd keverd simára.": {
    category: "fitness_logic",
    title: "Miért reggel kerül bele a fehérjepor?",
    body: "Az éjszakai áztatás befolyásolhatja a fehérjepor állagát és ízét. Reggel adva frissebb ízt és simább textúrát kapsz, mint ha este kevernéd bele.",
  },
  "1-R-overnight:Karikázd fel a banánt, majd add a zabos alaphoz.": {
    category: "fitness_logic",
    title: "Miért a banán jön a fehérje után?",
    body: "A banán természetes gyors szénhidrátot ad, ami reggel és edzés előtt jól használható energiaforrás. A fehérje + zab + banán kombó teltséget és energiát ad egyszerre.",
  },
  "1-R-overnight:Állítsd be az állagát kevés tejjel vagy vízzel, ha szükséges.": {
    category: "kitchen_logic",
    title: "Miért az állag beállítása az utolsó lépés?",
    body: "Minden összetevő hozzáadása után tudod megítélni a végleges állagot. Egy kortytal az utolsó lépésben pontosan olyanná varázsolhatod, amilyet szeretsz.",
  },

  // ─── 1-R-mikros ───────────────────────────────────────────────────────────
  // quizSteps: zab kimér → folyadék+kever → mikróz szakaszokban →
  //            kivesz+sűrűsödni hagy → fehérje → állag beállít

  "1-R-mikros:Öntsd rá a folyadékot, majd keverd át.": {
    category: "kitchen_logic",
    title: "Miért kell azonnal átkevert a folyadék?",
    body: "Ha szárazon rakod be a zabot, a mikróban egyenetlenül sül meg. A folyadék és a keverés garantálja az egységes, nem csomós végeredményt.",
  },
  "1-R-mikros:Mikrózd rövid szakaszokban, közben időnként állítsd meg és keverd át.": {
    category: "common_mistake",
    title: "Miért nem szabad egyszerre mikrózni?",
    body: "Ha egyszerre mikrózod, a közepe nyers, a széle kiszárad és kifut. A rövid szakaszok és a közbeni keverés egységes, krémes zabot eredményez.",
  },
  "1-R-mikros:Vedd ki, majd hagyd 1–2 percig sűrűsödni és hűlni.": {
    category: "kitchen_logic",
    title: "Miért kell várni a fehérje előtt?",
    body: "A forrón adott fehérjepor csomós maradhat. Az 1–2 perc pihenő közben a zab tovább sűrűsödik saját gőzétől — nem megy el az idő feleslegesen.",
  },
  "1-R-mikros:Add hozzá a fehérjeport, majd keverd csomómentesre.": {
    category: "fitness_logic",
    title: "Miért nem mehet forróba a fehérjepor?",
    body: "A túl forró zabban a fehérjepor könnyebben csomósodik és kellemetlenebb állagú lehet. Kicsit hűlt alapba keverve simább, krémesebb végeredményt kapsz.",
  },
  "1-R-mikros:Állítsd be az állagát kevés vízzel vagy tejjel, ha szükséges.": {
    category: "kitchen_logic",
    title: "Miért az állag beállítása az utolsó lépés?",
    body: "Minden összetevő hozzáadása után tudod megítélni a végleges állagot. Egy kortytal az utolsó lépésben pontosan olyanná varázsolhatod, amilyet szeretsz.",
  },

  // ─── 3-R-klasszikus ───────────────────────────────────────────────────────
  // quizSteps: mosás → vágás → cottage kimér → ízesít+kever → összeállít → puffasztott rizs

  "3-R-klasszikus:Vágd fel a paradicsomot és az uborkát falatnyi darabokra.": {
    category: "kitchen_logic",
    title: "Miért fontos megmosás után vágni?",
    body: "Ha előbb vágod fel, az esetleges szennyeződések a vágott felületen maradnak. Egészben mosva, aztán vágva az összes nyersanyag tisztán kerül a tányérra.",
  },
  "3-R-klasszikus:Mérd ki a cottage cheese-t egy tálba.": {
    category: "memory_trick",
    title: "Hogyan jegyezd meg a 3-R sorrendet?",
    body: "Gondolj rá úgy: először a zöldségek (mosás → vágás), aztán a cottage, végül összerakás. Zöldség-előkészítés → fehérjealap → kombináció.",
  },
  "3-R-klasszikus:Sózd, borsozd, majd keverd át a cottage cheese-t snidlinggel vagy újhagymával, ha használsz.": {
    category: "kitchen_logic",
    title: "Miért kell átkevert, fűszerezett cottage alap?",
    body: "A cottage cheese fűszerezve, majd átforgatva egyenletesen veszi fel a sót és zöldfűszert. Ha csak a tetejére szórsz, minden falat más ízű lesz.",
  },
  "3-R-klasszikus:Állítsd össze a cottage cheese-t és a felvágott zöldségeket egy tányéron vagy tálban.": {
    category: "kitchen_logic",
    title: "Miért előbb a cottage-ot ízesíted, aztán rakod össze?",
    body: "A cottage cheese-t érdemes külön ízesíteni, mert így egyenletesebb lesz az alap. A zöldségek utána frissebbek maradnak, és jobb lesz a kontraszt.",
  },
  "3-R-klasszikus:Tedd mellé a puffasztott rizst vagy abonettet.": {
    category: "fitness_logic",
    title: "Miért külön a puffasztott rizs?",
    body: "A puffasztott rizs mellé tálalva végig ropogós marad. Ha korán összekeverik a cottage-zöldség alappal, gyorsan megpuhul és elveszti a textúráját.",
  },

  // ─── 6-R-alap ─────────────────────────────────────────────────────────────
  // quizSteps: túró kimér → fehérjepor → fahéj → folyadék → krémes állag → pirítós+tálal

  "6-R-alap:Add hozzá a fehérjeport.": {
    category: "fitness_logic",
    title: "Miért kerül fehérjepor a túróba?",
    body: "A túró már önmagában jó fehérjeforrás, de a whey hozzáadásával nemcsak a fehérjetartalom nő, hanem a kész krém könnyebb, krémesebb állagú lesz, mint tiszta túróból.",
  },
  "6-R-alap:Szórd meg fahéjjal.": {
    category: "kitchen_logic",
    title: "Miért a keverés előtt jön a fahéj?",
    body: "Ha a fahéjt a keverés előtt szórod rá, egyenletesen beledolgozódik a krémbe. Utólag, felülről szórva csak a tetején marad, nem hatja át az egész állagot.",
  },
  "6-R-alap:Adj hozzá kevés vizet vagy joghurtot a krémesítéshez.": {
    category: "common_mistake",
    title: "Mi a leggyakoribb hiba itt?",
    body: "Sokan egyszerre töltenek hozzá túl sok folyadékot. Mindig csak 1–2 evőkanálanként adj hozzá, keverd el teljesen, és csak aztán döntsd el, kell-e még. Így nem lesz folyós a végeredmény.",
  },
  "6-R-alap:Keverd krémes állagúra a túrós keveréket.": {
    category: "kitchen_logic",
    title: "Mit jelent pontosan a krémes állag?",
    body: "Az ideális túrókrém kenhető, de nem folyós; kanállal emelhető, de nem morzsálódó. Ha a kanál nyomán megmarad a mélyedés, tökéletes az állag.",
  },
  "6-R-alap:Készítsd elő mellé a teljes kiőrlésű pirítóst vagy abonettet, majd tálald.": {
    category: "fitness_logic",
    title: "Miért teljes kiőrlésű a pirítós?",
    body: "A teljes kiőrlésű kenyér általában laktatóbb, és kedvezőbb választás lehet, mint a sima fehér kenyér. A fehérjedús túrókrémmel együtt stabilabb, tartósabb reggelit ad.",
  },

  // ─── 1-T-klasszikus ───────────────────────────────────────────────────────
  // quizSteps: cottage → mosás → vágás → fűszerezés → összerakás → kenyér/abonett

  "1-T-klasszikus:Mosd meg a paprikát és az uborkát.": {
    category: "kitchen_logic",
    title: "Miért mosd meg korán a zöldségeket?",
    body: "A tiszta zöldség adja a snack friss, ropogós alapját. Ha előbb megmosod, a vágás és a tálalás is rendezettebb lesz.",
  },
  "1-T-klasszikus:Vágd fel a paprikát és az uborkát falatnyi darabokra.": {
    category: "common_mistake",
    title: "Miért falatnyi darabokra vágd?",
    body: "A kisebb darabok könnyebben mártogathatók és kényelmesebben ehetők. Így a cottage mellé is jobban illenek.",
  },
  "1-T-klasszikus:Sózd, borsozd, majd keverd át a cottage cheese-t.": {
    category: "kitchen_logic",
    title: "Miért a cottage-ot ízesíted előbb?",
    body: "Ha az alap már ízesített, minden falat egyenletesebb lesz. A zöldség frissességet, a kenyér vagy abonett pedig ropogós kísérőt ad mellé.",
  },
  "1-T-klasszikus:Tedd a zöldségeket a cottage cheese mellé vagy keverd hozzá.": {
    category: "kitchen_logic",
    title: "Miért a zöldség a következő lépés?",
    body: "A zöldség akkor marad a legfrissebb, ha csak ezután kerül az alaphoz. Így megmarad a roppanósság és a kontraszt.",
  },
  "1-T-klasszikus:Készítsd elő mellé a teljes kiőrlésű kenyeret vagy abonettet, majd tálald.": {
    category: "fitness_logic",
    title: "Miért a kenyér jön a végén?",
    body: "A kenyér a ropogós kísérő, ezért érdemes a legvégén mellé tenni. Így kevésbé ázik el, és sokkal kényelmesebb lesz enni.",
  },

  // ─── 5-T-kremes-dio ───────────────────────────────────────────────────────
  // quizSteps: joghurt → krémesítés → dió → tetejére → óvatos keverés → tálalás

  "5-T-kremes-dio:Keverd át a joghurtot, hogy krémesebb állagú legyen.": {
    category: "kitchen_logic",
    title: "Miért krémesítsd a joghurtot?",
    body: "A simább alap jobban összefogja a diót, és kanalazhatóbb lesz az egész. Ettől desszertesebb, de még mindig könnyű tízórai marad.",
  },
  "5-T-kremes-dio:Vágd durvább darabokra a diót.": {
    category: "common_mistake",
    title: "Miért ne őröld porrá a diót?",
    body: "A nagyobb darabok adják a ropogósságot és a teltségérzetet. Ha teljesen finomra töröd, eltűnik a textúra.",
  },
  "5-T-kremes-dio:Szórd a diót a joghurt tetejére.": {
    category: "kitchen_logic",
    title: "Miért a tetejére kerüljön a dió?",
    body: "Felül marad a ropogós réteg, és minden kanálba jut egy kis textúra. Így nem áztatja el az egész tálat.",
  },
  "5-T-kremes-dio:Keverd össze óvatosan, hogy a dió egyenletesen eloszoljon.": {
    category: "common_mistake",
    title: "Miért csak óvatosan keverd?",
    body: "Elég, ha a dió szépen eloszlik; ha túl sokat kevered, könnyebben elveszti a ropogós érzetét. A cél: krémes alap és ropogós dió egyszerre.",
  },
  "5-T-kremes-dio:Tálald azonnal, vagy tedd rövid időre hűtőbe, ha hidegebben szeretnéd enni.": {
    category: "memory_trick",
    title: "Miért jó rögtön tálalni?",
    body: "Frissen a legkrémesebb, a dió pedig a legropogósabb. Rövid hűtés csak akkor kell, ha hidegebben szereted.",
  },

  // ─── 4-T-klasszikus ───────────────────────────────────────────────────────
  // quizSteps: kefir → zab → áll → banán → hozzáad → fahéj → tálal

  "4-T-klasszikus:Szórd bele a kimért zabpelyhet.": {
    category: "kitchen_logic",
    title: "Miért a zab jön a kefir után?",
    body: "A zab a kefires alapot sűríti, és ettől lesz laktatóbb a tízórai. Ha először kerül bele, könnyebben elkeveredik.",
  },
  "4-T-klasszikus:Keverd össze, hogy minden zabpelyhet érjen a kefir.": {
    category: "common_mistake",
    title: "Miért fontos a jó elkeverés?",
    body: "Az egyenletes keverés segít, hogy ne maradjanak száraz zabpelyhek. Így minden falatból ugyanaz a krémes, kefires íz jön.",
  },
  "4-T-klasszikus:Hagyd röviden állni, hogy a zab kissé megszívja magát.": {
    category: "kitchen_logic",
    title: "Miért jó pár perc pihenő?",
    body: "A zab ilyenkor megszívja magát, és a textúra kellemesebbé válik. Ha sietsz, azonnal is eheted, csak ropogósabb marad.",
  },
  "4-T-klasszikus:Hámozd meg és vágd fel a banánt.": {
    category: "memory_trick",
    title: "Miért a banán csak ezután jön?",
    body: "Így a banán friss marad, és nem puhul túl a keverés alatt. A tetején vagy a végén hozzáadva jobban megmarad az állaga.",
  },
  "4-T-klasszikus:Add a banánt a kefires-zabos alaphoz.": {
    category: "fitness_logic",
    title: "Miért a banán a végső lendület?",
    body: "A banán természetes édességet és puhább állagot ad a kefires-zabos alaphoz. A végén hozzáadva frissebb marad, és nem törik teljesen szét.",
  },
  "4-T-klasszikus:Szórd meg fahéjjal.": {
    category: "kitchen_logic",
    title: "Miért a fahéj a lezárás?",
    body: "A fahéj a végén ül meg a legszebben a tetején, és gyorsan összefogja az ízeket. Egy kis plusz illat, nagyobb desszertérzet.",
  },
  "4-T-klasszikus:Tálald a kefires-zabos banános tízórait.": {
    category: "memory_trick",
    title: "Miért elég egyszerűen tálalni?",
    body: "Ez a tízórai pont attól jó, hogy gyors és tiszta. Nem kell túlbonyolítani: kanalazd vagy vidd magaddal, kész.",
  },

  // ─── 6-T-superfood ───────────────────────────────────────────────────────
  // quizSteps: rizsszelet → mogyoróvaj → banán → chia → tálalás

  "6-T-superfood:Mérd ki a mogyoróvajat, és kend el egyenletesen a rizsszeleteken.": {
    category: "kitchen_logic",
    title: "Miért a mogyoróvaj az alap?",
    body: "A mogyoróvaj adja a tapadást és a teltséget, erre ülhet rá szépen a banán. Így nem csúszik szét a topping.",
  },
  "6-T-superfood:Hámozd meg és karikázd fel a banánt.": {
    category: "kitchen_logic",
    title: "Miért most szeleteld a banánt?",
    body: "A karikák egyenletesen oszlanak el, és minden falatba jut belőlük. Így frissebb is marad az állaga.",
  },
  "6-T-superfood:Rendezd el a banánkarikákat a mogyoróvajas rizsszeleteken.": {
    category: "common_mistake",
    title: "Miért így rakd rá a banánt?",
    body: "Az elosztott karikák stabilabban ülnek a rizsszeleten, és nem billentik fel. Ettől könnyebb kézbe venni és enni.",
  },
  "6-T-superfood:Szórd meg a tetejét chia maggal.": {
    category: "fitness_logic",
    title: "Miért jön a chia a végén?",
    body: "A chia a végén szórva nem ázik be teljesen, és egyenletes extra textúrát ad. Kevés is elég belőle, mert könnyen dominánssá válhat.",
  },
  "6-T-superfood:Tálald a mogyoróvajas-banános rizsszeleteket.": {
    category: "kitchen_logic",
    title: "Miért rögtön tálald?",
    body: "A rizsszelet akkor a legjobb, amikor még ropogós. Minél tovább áll, annál könnyebben puhul és törik.",
  },

  // ─── 3-T-bento ────────────────────────────────────────────────────────────
  // quizSteps: doboz → sonka darabol → mosás → vágás → kenyér → rekeszek → tálalás

  "3-T-bento:Rakd egymásra a pulykasonka-szeleteket, és vágd fel őket falatnyi darabokra.": {
    category: "kitchen_logic",
    title: "Miért a sonka darabolása az első?",
    body: "A falatnyi sonka könnyebben rendezhető rekeszekbe, és gyorsabban lesz belőle snack-kész komponens. Így nem kell evés közben csipkedni a nagy szeleteket.",
  },
  "3-T-bento:Mosd meg a répát, az uborkát és a paprikát.": {
    category: "kitchen_logic",
    title: "Miért a mosással indul a bento?",
    body: "A bento lényege a tiszta, külön komponensekre bontott snack. A megmosott zöldség így marad friss és ropogós.",
  },
  "3-T-bento:Vágd fel a répát, az uborkát és a paprikát hasábokra.": {
    category: "common_mistake",
    title: "Miért hasábokra vágd?",
    body: "A hasábok könnyen kézbe vehetők, és jól illenek a bento logikához. Így nem lesz szétesős a doboz.",
  },
  "3-T-bento:Készítsd elő külön a teljes kiőrlésű kenyeret.": {
    category: "kitchen_logic",
    title: "Miért legyen külön a kenyér?",
    body: "A kenyér külön tárolva nem ázik el a zöldségek levétől. Ettől marad élvezetesebb és hordozhatóbb.",
  },
  "3-T-bento:Rendezd el külön részekbe a pulykasonkát, a zöldségeket és a kenyeret.": {
    category: "memory_trick",
    title: "Miért jó a külön rekeszes tálalás?",
    body: "A külön komponensek megőrzik a saját állagukat: a sonka puha marad, a zöldség ropogós, a kenyér pedig tiszta és száraz.",
  },
  "3-T-bento:Tálald vagy zárd le a bento dobozt.": {
    category: "kitchen_logic",
    title: "Miért jó azonnal lezárni?",
    body: "Ha nem eszed meg rögtön, a dobozban minden komponens megmarad külön és rendezett marad. Pont ez a bento egyik előnye.",
  },

  // ─── 1-E-alap ────────────────────────────────────────────────────────────
  // quizSteps: rizs → rizs pihen → zöldség mos/vág → zöldség párol → csirke előkészít → csirke süt → pihentet/szeletel → tálalás

  "1-E-alap:Mérd ki a barna rizst, majd öblítsd át folyó víz alatt.": {
    category: "kitchen_logic",
    title: "Miért az öblítéssel kezdj?",
    body: "Az öblítés eltávolítja a felesleges keményítőt, így a rizs főzés után pergősebb lesz. Ezzel indul az alap, mielőtt főzni kezdenéd.",
  },

  "1-E-alap:Tedd fel főni a barna rizst sós vízben, majd pihentesd lefedve.": {
    category: "kitchen_logic",
    title: "Miért legyen a rizs előbb megfőzve?",
    body: "A rizs akkor lesz pergő és jól tálalható, ha előbb fő meg és utána pihen. Így a köret tartja a formáját, nem esik szét.",
  },
  "1-E-alap:Mosd meg a brokkolit és a sárgarépát, majd darabold fel őket.": {
    category: "kitchen_logic",
    title: "Miért a zöldség-előkészítés jön ezután?",
    body: "A brokkoli és a répa így egyszerre lesz készen a pároláshoz. Az előkészített zöldség gyorsabban és egyenletesebben sül.",
  },
  "1-E-alap:Párold roppanós-puhára a brokkolit és a sárgarépát.": {
    category: "common_mistake",
    title: "Miért ne főzd szét a zöldséget?",
    body: "A túl puhára főtt zöldség elveszíti a tartását. A roppanós-puha állag jobb textúrát és frissebb érzetet ad az ebédnek.",
  },
  "1-E-alap:Tisztítsd meg és fűszerezd be a csirkemellet mindkét oldalon.": {
    category: "kitchen_logic",
    title: "Miért a csirke előkészítése következik?",
    body: "Ha a csirkét előbb előkészíted, azonnal mehet a sütőbe vagy a serpenyőbe. Így egyenletesebben sül, és kevésbé szárad ki.",
  },
  "1-E-alap:Süsd meg a csirkemellet grillserpenyőben vagy kontaktgrillen.": {
    category: "fitness_logic",
    title: "Miért pont grillen süsd?",
    body: "A grillserpenyő vagy kontaktgrill gyorsan szép pirult felületet ad a húsnak. Ha nem sütöd túl, a csirkemell egyszerű, tiszta fehérjealap marad meal prephez.",
  },
  "1-E-alap:Pihentesd a csirkét röviden, majd szeleteld fel.": {
    category: "memory_trick",
    title: "Miért kell rövid pihentetés?",
    body: "A pihentetés után a szaft nem folyik ki, amikor szeleteled. Ettől lesz a csirke puhább és szebben tálalható.",
  },
  "1-E-alap:Tálald együtt a barna rizst, a párolt brokkolit-répát és a szeletelt csirkemellet.": {
    category: "fitness_logic",
    title: "Miért jó együtt tálalni?",
    body: "Így egy komplett, könnyen dobozolható ebédet kapsz: külön nem kell variálni semmit, mégis minden falat kiegyensúlyozott lesz.",
  },

  // ─── 2-E-suto ─────────────────────────────────────────────────────────────
  // quizSteps: sütő előmelegít → csirke tisztít/fűszerez → édesburgonya hámoz/darabol/fűszerez →
  //            tepsibe rendez → zöldbab előkészít → első sütés után forgat/ad zöldbabot → készre süt → tálalás

  "2-E-suto:Melegítsd elő a sütőt, és készíts elő egy sütőpapíros tepsit.": {
    category: "kitchen_logic",
    title: "Miért az előmelegítéssel kezdd?",
    body: "Az előmelegített sütő egyenletesebb hőt ad, így a hús és a köret egyszerre készül el rendesen. A tepsi előkészítése pedig gyorsítja a munkát.",
  },
  "2-E-suto:Tisztítsd meg és fűszerezd be a pulykamellet.": {
    category: "kitchen_logic",
    title: "Miért a hús jön először?",
    body: "Ha a pulyka már befűszerezve vár, a sütésnél rögtön kész alapot kapsz. Ez segít, hogy a hús ne maradjon íztelen vagy száraz.",
  },
  "2-E-suto:Hámozd meg, darabold fel és fűszerezd be az édesburgonyát.": {
    category: "common_mistake",
    title: "Miért darabold egyforma méretre?",
    body: "Az egyformára vágott édesburgonya egyszerre puhul meg, így nem lesz egyik darab nyers, a másik széteső. Az egységes méret a sütős ételeknél kulcs.",
  },
  "2-E-suto:Rendezd tepsibe a pulykamellet és az édesburgonyát, majd indítsd az első sütést.": {
    category: "kitchen_logic",
    title: "Miért menjen egyszerre a hús és a köret?",
    body: "Így a tepsiben összeérnek az ízek, és nem kell külön figyelni két edényre. Egy jól szervezett tepsi mindig egyszerűbb meal prep.",
  },
  "2-E-suto:Készítsd elő a zöldbabot, és fűszerezd enyhén.": {
    category: "kitchen_logic",
    title: "Miért csak enyhén fűszerezd a zöldbabot?",
    body: "A zöldbab akkor marad friss és tiszta ízű, ha nem viszed túlzásba a fűszerezést. Így jobban illik a sült húshoz és az édesburgonyához.",
  },
  "2-E-suto:Az első sütés után forgasd át az édesburgonyát, majd add a tepsibe a zöldbabot.": {
    category: "common_mistake",
    title: "Miért csak később jöjjön a zöldbab?",
    body: "A zöldbab gyorsabban puhul, ezért ha korábban kerülne be, könnyen túlsülne. A későbbi hozzáadás segít, hogy roppanós maradjon.",
  },
  "2-E-suto:Süsd készre az egészet, amíg a pulykamell teljesen átsül.": {
    category: "fitness_logic",
    title: "Miért fontos a teljes átsülés?",
    body: "A pulykának teljesen át kell sülnie, de nem érdemes túlsütni, mert könnyen kiszárad. Akkor jó, ha biztonságosan átsült, de még nem lett száraz.",
  },
  "2-E-suto:Tálald együtt a sült pulykamellet, édesburgonyát és zöldbabot.": {
    category: "memory_trick",
    title: "Miért jó a végső egyben tálalás?",
    body: "Így a tepsiből egyből ebéd lesz, külön macera nélkül. A sütős menü szépen elkészül, és meal prepnek is tökéletes.",
  },

  // ─── 3-E-suto-egyben ──────────────────────────────────────────────────────
  // quizSteps: tepsi előkészít → édesburgonya hámoz/darabol → brokkoli/répa/cukkini/lilahagyma előkészít →
  //            fűszerez/olajoz → lazac tisztít/fűszerez → tepsibe rétegez → készre süt → tálalás

  "3-E-suto-egyben:Melegítsd elő a sütőt, és béleld ki a tepsit sütőpapírral.": {
    category: "kitchen_logic",
    title: "Miért a sütő és a tepsi előkészítése az első?",
    body: "Ha a sütő már meleg, rögtön mehet a tepsi, és nem áll le a folyamat. A sütőpapír pedig megkönnyíti a tepsis sütést és a tisztítást.",
  },

  "3-E-suto-egyben:Hámozd meg és darabold fel az édesburgonyát.": {
    category: "kitchen_logic",
    title: "Miért az édesburgonya jön először?",
    body: "Az édesburgonya az alap köret, ezért érdemes először vele kezdeni. Ha azonos méretű darabokra vágod, egyenletesen sül meg a tepsiben.",
  },
  "3-E-suto-egyben:Készítsd elő a brokkolit, répát, cukkinit és lilahagymát.": {
    category: "common_mistake",
    title: "Miért legyen minden zöldség külön előkészítve?",
    body: "A különböző zöldségek más sebességgel puhulnak, ezért jobb, ha előre rendben vannak. Így nem lesz egyik nyers, a másik túlpuhult.",
  },
  "3-E-suto-egyben:Fűszerezd és olajozd be az édesburgonya-zöldség keveréket.": {
    category: "kitchen_logic",
    title: "Miért az olaj és a fűszer most jön?",
    body: "Ha a fűszerek és az olaj előbb kerülnek rá, a tepsiben szebb, egyenletesebb pirulást kapsz. Ettől lesz az egésznek jobb sült íze.",
  },
  "3-E-suto-egyben:Tisztítsd meg és fűszerezd be a lazacfilét.": {
    category: "fitness_logic",
    title: "Miért a lazacot külön kezeld?",
    body: "A lazac érzékenyebb, mint a zöldségek, ezért külön figyelmet érdemel. Így marad szaftos, és nem veszti el a jó állagát.",
  },
  "3-E-suto-egyben:Terítsd tepsibe az édesburgonya-zöldség keveréket, majd helyezd rá a lazacot.": {
    category: "kitchen_logic",
    title: "Miért a lazac a tetejére kerüljön?",
    body: "A tetején a hal szépen átsül, miközben az alatta lévő zöldségek és az édesburgonya is megkapják a saját idejüket. Ez a tepsis sorrend logikája.",
  },
  "3-E-suto-egyben:Süsd készre az egészet, amíg a lazac átsül és az édesburgonya megpuhul.": {
    category: "common_mistake",
    title: "Miért ne siesd el a sütést?",
    body: "Itt az időzítés a lényeg: a lazac ne maradjon nyers, de ne is száradjon ki, az édesburgonya pedig puhuljon meg. Ezért érdemes a sütés végén állagot ellenőrizni.",
  },
  "3-E-suto-egyben:Tálald a sült lazacot az édesburgonyás-zöldséges körettel.": {
    category: "memory_trick",
    title: "Miért jó egyben tálalni?",
    body: "A tepsiből egyből kész ebéd lesz, és nem kell külön komponensekkel bajlódni. Ettől lesz a fogás egyszerű, mégis teljes értékű.",
  },

  // ─── 5-E-alap ─────────────────────────────────────────────────────────────
  // quizSteps: tojás → zöldség vág → tonhal lecsepegtet/fellazít → öntet → összevon → öntet rá → tálal

  "5-E-alap:Főzd keményre a tojásokat, majd hűtsd le és szeleteld fel őket.": {
    category: "kitchen_logic",
    title: "Miért a tojás az első lépés?",
    body: "A tojásnak idő kell, ezért érdemes vele kezdeni. Mire a saláta kész, a tojás már pont jó lesz a tálaláshoz.",
  },
  "5-E-alap:Vágd fel a paradicsomot, uborkát, paprikát, lilahagymát és a salátát.": {
    category: "common_mistake",
    title: "Miért a zöldségeket külön vágd fel?",
    body: "A külön felaprított zöldség frissebb és rendezettebb marad. Így könnyebb a salátát összerakni, és kevésbé ázik el.",
  },
  "5-E-alap:Csepegtesd le a tonhalat, majd lazítsd fel villával.": {
    category: "kitchen_logic",
    title: "Miért kell a tonhalat először lecsöpögtetni?",
    body: "A felesleges lé nélkül a saláta nem lesz vizes. A fellazított tonhal jobban eloszlik a zöldségek között.",
  },
  "5-E-alap:Keverd ki az öntetet olívaolajjal, citromlével, sóval és borssal.": {
    category: "fitness_logic",
    title: "Miért külön öntettel dolgozz?",
    body: "Az öntet így minden falatot átjár, de nem nehezíti el a salátát. A friss, savas íz jól kiemeli a tonhalat.",
  },
  "5-E-alap:Forgasd össze a felvágott zöldségeket a tonhallal.": {
    category: "kitchen_logic",
    title: "Miért most jön az összeforgatás?",
    body: "Ha a tonhal és a zöldség előbb összeér, egységesebb lesz az alap. Az öntet később így sokkal jobban oszlik el.",
  },
  "5-E-alap:Öntsd rá az öntetet, majd keverd át a salátát.": {
    category: "common_mistake",
    title: "Miért ne öntsd rá túl korán?",
    body: "Ha az öntet túl sokáig áll a zöldségen, eláztatja a friss hozzávalókat. A végén hozzáadva marad a roppanós textúra.",
  },
  "5-E-alap:Tálald a tonhalsalátát a szeletelt főtt tojással.": {
    category: "memory_trick",
    title: "Miért a tojás a záró elem?",
    body: "A tojás a tetején szépen látszik, és rendben összefogja a salátát. Egyszerű, tiszta végső réteg egy fehérjedús ebédhez.",
  },

  // ─── 6-E-klasszikus ───────────────────────────────────────────────────────
  // quizSteps: rizs öblít → rizs főz → zöldség párol → csirke tisztít/fűszerez → serpenyő hevítsd/süsd → pihentet/szeletel → tálalás

  "6-E-klasszikus:Mérd ki és öblítsd át a basmati rizst.": {
    category: "kitchen_logic",
    title: "Miért legyen a rizs tisztán előkészítve?",
    body: "Az öblített rizs kevésbé ragad össze, és szebben lesz pergős a főzés után. Ezzel kezdődik a jó köret alapja.",
  },
  "6-E-klasszikus:Főzd meg a basmati rizst, majd pihentesd lefedve.": {
    category: "common_mistake",
    title: "Miért kell a rizst pihentetni?",
    body: "A pihenőidő segít, hogy a rizs ne legyen nedves vagy ragacsos. Ettől lesz könnyebb és rendezettebb a köret.",
  },
  "6-E-klasszikus:Párold roppanós-puhára a borsó-répa keveréket.": {
    category: "kitchen_logic",
    title: "Miért maradjon a zöldség kissé roppanós?",
    body: "A borsó és a répa akkor a legjobb, ha van tartásuk. Így a tányér nem lesz túlfőtt, a zöldség pedig frissebb marad.",
  },
  "6-E-klasszikus:Tisztítsd meg és fűszerezd be a csirkemellet.": {
    category: "fitness_logic",
    title: "Miért a csirkével indul a fehérjés rész?",
    body: "A jól előkészített csirke adja az ebéd stabil fehérjealapját. Ha itt jó a fűszerezés, az egész tál íze erősebb lesz.",
  },
  "6-E-klasszikus:Hevítsd fel a serpenyőt, majd süsd meg a csirkemellet mindkét oldalon.": {
    category: "common_mistake",
    title: "Miért legyen forró a serpenyő?",
    body: "A forró serpenyő segít, hogy a csirke kérget kapjon, de ne ázzon meg a saját levében. Így marad szaftosabb a hús.",
  },
  "6-E-klasszikus:Pihentesd röviden a csirkét, majd szeleteld fel.": {
    category: "memory_trick",
    title: "Miért ne szeleteld azonnal?",
    body: "A rövid pihentetés segít, hogy szeleteléskor kevesebb lé folyjon ki a húsból. Így szebb szeleteket kapsz, és kevésbé szárad ki a tányéron.",
  },
  "6-E-klasszikus:Tálald együtt a basmati rizst, a párolt borsó-répát és a szeletelt csirkemellet.": {
    category: "fitness_logic",
    title: "Miért ez a klasszikus ebéd logikája?",
    body: "Egy tiszta, jól előkészíthető tányér: rizs, zöldség és csirke külön, mégis együtt működik. Pont erre jó a meal prep.",
  },
};

export function getKnowledgeReward(
  mealId: string,
  correctNextStep: string
): Top25KnowledgeReward | undefined {
  return TOP25_KNOWLEDGE_REWARDS[`${mealId}:${correctNextStep}`];
}

export const CATEGORY_LABELS: Record<Top25KnowledgeRewardCategory, string> = {
  kitchen_logic: "Konyhai logika",
  common_mistake: "Gyakori hiba",
  fitness_logic: "Fitnesz-logika",
  memory_trick: "Memória-trükk",
};
