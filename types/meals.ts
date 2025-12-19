import type { Meal } from "./nutrition"; // ha ugyanabban a mappában van
// ---- 1–3. NAPI ÉTELEK ----
const MEALS: Meal[] = [
  // 1. NAPI REGGELI – 1-R
  {
    id: "1-R-overnight",
    mealId: "1-R",
    name: "Overnight oats (hideg zabkása)",
    timeOfDay: "Reggeli - 1. nap",
    slot: "Reggeli",
    day: 1,
    styles: ["quick"],
    workout: {
      kcal: 560,
      protein: 40,
      carbs: 84,
      fat: 10,
      portion:
        "Edzésnap: 70 g zab + 200 ml tej + 30 g whey + 1 közepes banán (~100 g).",
    },
    rest: {
      kcal: 430,
      protein: 36,
      carbs: 58,
      fat: 8,
      portion:
        "Pihenőnap: 50 g zab + 180 ml tej + 30 g whey + ½ közepes banán (~50 g).",
    },
  },
  {
    id: "1-R-mikros",
    mealId: "1-R",
    name: "Mikrós gyors zabkása",
    timeOfDay: "Reggeli – 1. nap",
    slot: "Reggeli",
    day: 1,
    workout: {
      kcal: 460,
      protein: 39,
      carbs: 59,
      fat: 10,
      portion:
        "Edzésnap: 65–70 g zab (~67,5 g) + 200 ml tej + 30 g whey (banán opcionális).",
    },
    rest: {
      kcal: 380,
      protein: 35,
      carbs: 46,
      fat: 8,
      portion:
        "Pihenőnap: 50 g zab + 170 ml tej + 30 g whey (banán opcionális).",
    },
  },
  {
    id: "1-R-baked",
    mealId: "1-R",
    name: "Sütőben sült zabkása (baked oats)",
    timeOfDay: "Reggeli - 1. nap",
    slot: "Reggeli",
    day: 1,
    styles: ["oven"],
    workout: {
      kcal: 570,
      protein: 43,
      carbs: 74,
      fat: 13,
      portion:
        "Edzésnap: 60 g zab + 150 ml tej + 30 g whey + 1 tojás + 1 közepes banán.",
    },
    rest: {
      kcal: 460,
      protein: 36,
      carbs: 55,
      fat: 12,
      portion:
        "Pihenőnap: 50 g zab + 120 ml tej + 25 g whey + 1 tojás + ~½ banán.",
    },
  },

  // 2. NAPI REGGELI – 2-R
  {
    id: "2-R-muffin",
    mealId: "2-R",
    name: "Tojás muffin",
    timeOfDay: "Reggeli – 2. nap",
    slot: "Reggeli",
    day: 2,
    workout: {
      kcal: 300,
      protein: 24,
      carbs: 6,
      fat: 20,
      portion:
        "Edzésnap: 3 egész tojás + 1 fehérje + 70–80 g zöldség muffin formában sütve (180 °C, 15–20 perc).",
    },
    rest: {
      kcal: 225,
      protein: 18,
      carbs: 6,
      fat: 15,
      portion:
        "Pihenőnap: 2 egész tojás + 1 fehérje + 70–80 g zöldség muffin formában sütve.",
    },
  },
  {
    id: "2-R-wrap",
    mealId: "2-R",
    name: "Omlettes reggeli wrap",
    timeOfDay: "Reggeli – 2. nap",
    slot: "Reggeli",
    day: 2,
    workout: {
      kcal: 395,
      protein: 21,
      carbs: 37,
      fat: 18,
      portion:
        "Edzésnap: 2 tojás + 2 fehérje + 60–70 g zöldség, 1 nagy tk. tortillába tekerve.",
    },
    rest: {
      kcal: 335,
      protein: 18,
      carbs: 33,
      fat: 14,
      portion:
        "Pihenőnap: 2 tojás + 1 fehérje + 60–70 g zöldség, kisebb vagy fél tortillában.",
    },
  },
  {
    id: "2-R-mikro",
    mealId: "2-R",
    name: "Mikróban omlett (bögreomlett)",
    timeOfDay: "Reggeli – 2. nap",
    slot: "Reggeli",
    day: 2,
    workout: {
      kcal: 255,
      protein: 24,
      carbs: 5,
      fat: 15,
      portion:
        "Edzésnap: 3 tojás + 1 fehérje + 60–80 g zöldség mikrózható bögrében, 2–3 perc alatt.",
    },
    rest: {
      kcal: 185,
      protein: 18,
      carbs: 5,
      fat: 10,
      portion:
        "Pihenőnap: 2 tojás + 1 fehérje + 60–80 g zöldség mikróban sütve, kenyér nélkül.",
    },
  },

  // 3. NAPI REGGELI – 3-R
  {
    id: "3-R-klasszikus",
    mealId: "3-R",
    name: "Cottage cheese – klasszikus",
    timeOfDay: "Reggeli – 3. nap",
    slot: "Reggeli",
    day: 3,
    workout: {
      kcal: 290,
      protein: 30,
      carbs: 32,
      fat: 5,
      portion:
        "Edzésnap: ~220 g zsírszegény cottage cheese + 100–120 g paradicsom + 80–100 g uborka + 3 szelet puffasztott rizs/abonett, sóval, borssal, snidlinggel/újhagymával.",
    },
    rest: {
      kcal: 250,
      protein: 27,
      carbs: 26,
      fat: 5,
      portion:
        "Pihenőnap: ~200 g cottage cheese + ~100 g paradicsom + 100–120 g uborka (lehet több zöldség) + 2 szelet puffasztott rizs/abonett.",
    },
  },
  {
    id: "3-R-edes",
    mealId: "3-R",
    name: "Édes cottage cheese bogyós gyümölccsel",
    timeOfDay: "Reggeli – 3. nap",
    slot: "Reggeli",
    day: 3,
    workout: {
      kcal: 300,
      protein: 28,
      carbs: 38,
      fat: 4,
      portion:
        "Edzésnap: ~200–220 g cottage cheese + 80–100 g bogyós gyümölcs + fahéj + édesítőszer vagy max. 1–2 tk méz + 2–3 szelet puffasztott rizs/kukoricaszelet.",
    },
    rest: {
      kcal: 245,
      protein: 25,
      carbs: 29,
      fat: 4,
      portion:
        "Pihenőnap: ~180–200 g cottage cheese + 60–80 g bogyós gyümölcs + fahéj + inkább édesítő (ha méz, max. 1 tk) + 1–2 szelet puffasztott rizs/kukoricaszelet.",
    },
  },
  {
    id: "3-R-bruschetta",
    mealId: "3-R",
    name: "Cottage bruschetta puffasztott szeleteken",
    timeOfDay: "Reggeli – 3. nap",
    slot: "Reggeli",
    day: 3,
    workout: {
      kcal: 300,
      protein: 29,
      carbs: 34,
      fat: 5,
      portion:
        "Edzésnap: ~200–220 g cottage cheese + 100–120 g paradicsom + 3–4 szelet puffasztott rizs/abonett + friss/szárított bazsalikom, só, bors.",
    },
    rest: {
      kcal: 230,
      protein: 25,
      carbs: 24,
      fat: 4,
      portion:
        "Pihenőnap: ~180–200 g cottage cheese + ~100 g paradicsom + 2–3 szelet puffasztott rizs/abonett + bazsalikom, só, bors.",
    },
  },
  // 4. NAPI REGGELI – 4-R
  {
    id: "4-R-zabos",
    mealId: "4-R",
    name: "Zabos boost shake",
    timeOfDay: "Reggeli – 4. nap",
    slot: "Reggeli",
    day: 4,
    workout: {
      kcal: 400,
      protein: 30,
      carbs: 44,
      fat: 11,
      portion:
        "Edzésnap: 250 ml cukormentes mandulatej + 30 g fehérjepor + 1 közepes alma (~140 g) + 30 g zabpehely + 10 g mandula, mindent együtt turmixolva egy sűrű, laktató shake-nek.",
    },
    rest: {
      kcal: 325,
      protein: 28,
      carbs: 32,
      fat: 9,
      portion:
        "Pihenőnap: 220 ml mandulatej + 30 g fehérje + ~100 g alma + 20 g zabpehely + 8 g mandula, kicsit visszafogottabb, de még mindig laktató reggeli shake-ként turmixolva.",
    },
  },
  {
    id: "4-R-zold-smoothie",
    mealId: "4-R",
    name: "Zöld smoothie verzió",
    timeOfDay: "Reggeli – 4. nap",
    slot: "Reggeli",
    day: 4,
    workout: {
      kcal: 320,
      protein: 29,
      carbs: 28,
      fat: 12,
      portion:
        "Edzésnap: 250 ml cukormentes mandulatej + 30 g fehérjepor + 1 közepes alma (~140 g) + 1 marék (~30 g) spenót vagy fodros kel; turmixolva, a tetején kb. 15 g mandulával megszórva.",
    },
    rest: {
      kcal: 265,
      protein: 27,
      carbs: 21,
      fat: 9,
      portion:
        "Pihenőnap: 220 ml mandulatej + 30 g fehérje + ~100 g alma + 1 marék (30–35 g) spenót/fodros kel, a tetején 10 g mandulával – könnyebb, zöldebb napindító.",
    },
  },
  {
    id: "4-R-muzlis-tal",
    mealId: "4-R",
    name: "Müzlis tál (smoothie bowl)",
    timeOfDay: "Reggeli – 4. nap",
    slot: "Reggeli",
    day: 4,
    workout: {
      kcal: 385,
      protein: 30,
      carbs: 40,
      fat: 13,
      portion:
        "Edzésnap: 220 ml mandulatej + 30 g fehérjepor + ~140 g alma (egy része a turmixban, a maradék kockázva a tetején) + 20 g zabpehely és 15 g mandula toppingként, kanalazható ‚müzlis tál’ formában.",
    },
    rest: {
      kcal: 315,
      protein: 28,
      carbs: 29,
      fat: 10,
      portion:
        "Pihenőnap: 200 ml mandulatej + 30 g fehérje + ~100 g alma + 15 g zabpehely + 10 g mandula a tetején, sűrűbb smoothie bowl-ként tálalva.",
    },
  },
  // 5. NAPI REGGELI – 5-R
  {
    id: "5-R-gyors-alap",
    mealId: "5-R",
    name: "Gyors alapverzió",
    timeOfDay: "Reggeli – 5. nap",
    slot: "Reggeli",
    day: 5,
    workout: {
      kcal: 320,
      protein: 22,
      carbs: 44,
      fat: 6,
      portion:
        "Edzésnap: ~200 g 2%-os görög joghurt + 30 g zabpehely + 70 g bogyós gyümölcs (áfonya/málna/eper) + 10 g méz vékonyan a tetejére csorgatva. Gyors, ‘clean’ joghurtos-zabos reggeli.",
    },
    rest: {
      kcal: 250,
      protein: 19,
      carbs: 32,
      fat: 5,
      portion:
        "Pihenőnap: ~180 g görög joghurt + 20 g zabpehely + 60 g bogyós gyümölcs + 5 g méz. Kevesebb zab és méz, kicsit karcsúsított, de még mindig laktató reggeli.",
    },
  },
  {
    id: "5-R-high-protein",
    mealId: "5-R",
    name: "Magas fehérjetartalmú változat",
    timeOfDay: "Reggeli – 5. nap",
    slot: "Reggeli",
    day: 5,
    workout: {
      kcal: 365,
      protein: 40,
      carbs: 35,
      fat: 7,
      portion:
        "Edzésnap: ~180 g görög joghurt + 1 adag (25–30 g) vaníliás whey a joghurtba keverve + 25 g zabpehely + 60 g bogyós gyümölcs + 5 g méz a tetején. Nagyon magas fehérje, normális lassú ch – súlyzós/crossfit napokra ideális.",
    },
    rest: {
      kcal: 325,
      protein: 38,
      carbs: 30,
      fat: 6,
      portion:
        "Pihenőnap: ~160 g görög joghurt + 1 adag (≈25 g) whey + 20 g zab + 50 g bogyós + 5 g méz vagy édesítő. Fehérje marad brutál magas, ch és kcal picit visszább húzva.",
    },
  },
  {
    id: "5-R-kremes-desszert",
    mealId: "5-R",
    name: "Krémes „desszert” verzió",
    timeOfDay: "Reggeli – 5. nap",
    slot: "Reggeli",
    day: 5,
    workout: {
      kcal: 290,
      protein: 20,
      carbs: 40,
      fat: 6,
      portion:
        "Edzésnap: ~180 g görög joghurt 20–30 ml vízzel/tejjel krémesre keverve, pohárban rétegezve 25 g zabpehellyel és összesen 70 g bogyós gyümölccsel (fele rétegnek, fele a tetejére), a végén 10 g méz csorgatva. Mutatós, desszertes, de makróban még mindig fit.",
    },
    rest: {
      kcal: 235,
      protein: 17,
      carbs: 30,
      fat: 5,
      portion:
        "Pihenőnap: ~160 g görög joghurt + 20 ml víz/tej krémesítéshez + 20 g zab + 60 g bogyós gyümölcs rétegezve pohárban, a tetején kb. 5 g méz. Diéta-kompatibilis, desszertes érzetű reggeli.",
    },
  },
  // 6. NAPI REGGELI – 6-R
  {
    id: "6-R-alap",
    mealId: "6-R",
    name: "Túrókrém – Alap verzió",
    timeOfDay: "Reggeli – 6. nap",
    slot: "Reggeli",
    day: 6,
    workout: {
      kcal: 300,
      protein: 39,
      carbs: 27,
      fat: 4,
      portion:
        "Edzésnap: ~180 g zsírszegény túró + 20 g vaníliás/natúr whey + bőven fahéj, ha kell 1–2 ek víz/joghurt a krémesítéshez, mellé 1 szelet (35–40 g) teljes kiőrlésű pirítós. Magas fehérje, kevés, de hasznos CH reggelre.",
    },
    rest: {
      kcal: 260,
      protein: 33,
      carbs: 23,
      fat: 4,
      portion:
        "Pihenőnap: ~160–170 g zsírszegény túró + 15 g whey + fahéj, ha kell 1 ek víz/joghurt, mellé 1 kisebb szelet (30–35 g) tk. kenyér vagy 2 db abonett. Fehérje marad magas, kalória picit lejjebb.",
    },
  },
  {
    id: "6-R-gyumolcsos",
    mealId: "6-R",
    name: "Túrókrém – Gyümölcsös verzió",
    timeOfDay: "Reggeli – 6. nap",
    slot: "Reggeli",
    day: 6,
    workout: {
      kcal: 330,
      protein: 38,
      carbs: 35,
      fat: 4,
      portion:
        "Edzésnap: ~180 g zsírszegény túró + 15–20 g whey + ~60–70 g bogyós gyümölcs vagy apróra vágott alma + fahéj ízlés szerint, mellé 1 szelet (35–40 g) teljes kiőrlésű pirítós. Kicsit több CH (gyümölcs + kenyér), ami reggel edzéses napon jól jön.",
    },
    rest: {
      kcal: 270,
      protein: 31,
      carbs: 28,
      fat: 4,
      portion:
        "Pihenőnap: ~160 g túró + 10–15 g whey + ~50–60 g gyümölcs (bogyós vagy alma) + opcionális fahéj, mellé 1 vékonyabb szelet (30–35 g) tk. kenyér vagy 2 db abonett. Rost + fehérje rendben, CH egy fokkal visszafogva.",
    },
  },
  {
    id: "6-R-korozott",
    mealId: "6-R",
    name: "Túrókrém – Sós körözött klasszikus",
    timeOfDay: "Reggeli – 6. nap",
    slot: "Reggeli",
    day: 6,
    workout: {
      kcal: 250,
      protein: 27,
      carbs: 24,
      fat: 5,
      portion:
        "Edzésnap: ~200 g zsírszegény túró + 10–15 g finomra vágott vörös- vagy lilahagyma + 1–2 tk pirospaprika + csipet–½ tk őrölt kömény + só, bors, ha kell 1 ek natúr joghurt a krémesítéshez, mellé 1 szelet (35–40 g) teljes kiőrlésű pirítós. Klasszikus magyar körözött fit verzióban, erős fehérjével.",
    },
    rest: {
      kcal: 220,
      protein: 24,
      carbs: 22,
      fat: 4,
      portion:
        "Pihenőnap: ~180 g túró + ugyanannyi hagyma és fűszer (paprika, kömény, só, bors) + ha kell kevés joghurt, mellé 1 kisebb szelet (30–35 g) tk. kenyér vagy 2 db abonett. Kicsit kevesebb CH és kcal, de még mindig laktató, fehérjedús körözött.",
    },
  },
  // 7. NAPI REGGELI – 7-R
  {
    id: "7-R-alap-rantotta",
    mealId: "7-R",
    name: "Alap rántotta",
    timeOfDay: "Reggeli – 7. nap",
    slot: "Reggeli",
    day: 7,
    workout: {
      kcal: 440,
      protein: 23,
      carbs: 24,
      fat: 28,
      portion:
        "Edzésnap: 3 db M-es tojás kevés (3–4 g) olajon rántottának sütve + 60 g avokádó szeletelve + 1 szelet (35–40 g) teljes kiőrlésű kenyér. Klasszikus, stabil fehérjedús reggeli.",
    },
    rest: {
      kcal: 390,
      protein: 22,
      carbs: 22,
      fat: 24,
      portion:
        "Pihenőnap: 3 db M-es tojás rántottaként ~3 g olajon + 40–50 g avokádó + 1 kisebb szelet (30–35 g) teljes kiőrlésű kenyér. Kicsit visszafogottabb ch + zsír, telítettség marad.",
    },
  },
  {
    id: "7-R-avokado-toast",
    mealId: "7-R",
    name: "Avokádó toast verzió",
    timeOfDay: "Reggeli – 7. nap",
    slot: "Reggeli",
    day: 7,
    workout: {
      kcal: 455,
      protein: 23,
      carbs: 26,
      fat: 29,
      portion:
        "Edzésnap: 3 db M-es tojásból rántotta ~3–4 g olajon + 1 szelet (35–40 g) pirított teljes kiőrlésű kenyérre kent ~70 g avokádó (villával pépesítve, só, bors, citromlé), a rántotta mellé vagy a toast tetejére téve – full „brunch” hangulat.",
    },
    rest: {
      kcal: 400,
      protein: 22,
      carbs: 24,
      fat: 24,
      portion:
        "Pihenőnap: 3 db M-es tojás rántottaként ~3 g olajon + 1 szelet (30–35 g) TK pirítósra kent ~50 g avokádókrém (avokádó, só, bors, citromlé). Ugyanaz az élmény, picit karcsúbb makrókkal.",
    },
  },
  {
    id: "7-R-wrap",
    mealId: "7-R",
    name: "Wrap verzió",
    timeOfDay: "Reggeli – 7. nap",
    slot: "Reggeli",
    day: 7,
    workout: {
      kcal: 470,
      protein: 24,
      carbs: 33,
      fat: 27,
      portion:
        "Edzésnap: 3 db M-es tojásból rántotta ~3–4 g olajon + 50–60 g avokádó (szeletelve vagy krémnek) + 1 db ~50 g teljes kiőrlésű tortilla + 40–50 g apróra vágott zöldség (paprika, paradicsom, uborka) – mindez feltekerve hordozható reggeli wrappé.",
    },
    rest: {
      kcal: 430,
      protein: 23,
      carbs: 28,
      fat: 25,
      portion:
        "Pihenőnap: 3 db M-es tojás rántotta ~3 g olajon + 40–50 g avokádó + 1 db vékonyabb (~40–45 g) teljes kiőrlésű tortilla + ~50 g zöldség a wrapben. Kicsit lejjebb húzott ch és zsír, fehérje marad erős.",
    },
  },

  // 1. NAPI TÍZORAI – 1-T
  {
    id: "1-T-klasszikus",
    mealId: "1-T",
    name: "Klasszikus cottage + zöldség + kenyér",
    timeOfDay: "Tízorai – 1. nap",
    slot: "Tízorai",
    day: 1,
    workout: {
      kcal: 365,
      protein: 32,
      carbs: 42,
      fat: 5,
      portion:
        "Edzésnap: 200 g cottage + 1 paprika + ~110 g uborka + 2 vékony szelet tk. kenyér.",
    },
    rest: {
      kcal: 255,
      protein: 23,
      carbs: 29,
      fat: 3,
      portion:
        "Pihenőnap: 150 g cottage + 1 paprika + ~130 g uborka + 1 szelet tk. kenyér.",
    },
  },
  {
    id: "1-T-dip",
    mealId: "1-T",
    name: "Krémes cottage dip zöldségekkel",
    timeOfDay: "Tízorai – 1. nap",
    slot: "Tízorai",
    day: 1,
    workout: {
      kcal: 245,
      protein: 27,
      carbs: 24,
      fat: 3,
      portion:
        "Edzésnap: 200 g cottage + 1–2 ek joghurt + paprika, uborka, répa hasábokkal.",
    },
    rest: {
      kcal: 195,
      protein: 20,
      carbs: 20,
      fat: 2.5,
      portion:
        "Pihenőnap: 150 g cottage + kevés joghurt + kb. 200–220 g paprika/ubi/répa.",
    },
  },
  {
    id: "1-T-wrap",
    mealId: "1-T",
    name: "Cottage wrap teljes kiőrlésű tortillában",
    timeOfDay: "Tízorai – 1. nap",
    slot: "Tízorai",
    day: 1,
    workout: {
      kcal: 330,
      protein: 26,
      carbs: 39,
      fat: 6,
      portion:
        "Edzésnap: 1 nagy tk. tortilla + ~165 g cottage + paprika, uborka, saláta.",
    },
    rest: {
      kcal: 265,
      protein: 21,
      carbs: 31,
      fat: 5,
      portion:
        "Pihenőnap: 1 kisebb tortilla vagy fél nagy + ~140 g cottage + sok zöldség.",
    },
  },

  // 2. NAPI TÍZORAI – 2-T
  {
    id: "2-T-tojaskrem",
    mealId: "2-T",
    name: "Tojáskrémes rizsszelet",
    timeOfDay: "Tízorai – 2. nap",
    slot: "Tízorai",
    day: 2,
    workout: {
      kcal: 240,
      protein: 16,
      carbs: 20,
      fat: 10,
      portion:
        "Edzésnap: 2 főtt tojás + ~25 g natúr joghurt + 3 szelet puffasztott rizs, snidlinggel.",
    },
    rest: {
      kcal: 155,
      protein: 12,
      carbs: 14,
      fat: 7,
      portion:
        "Pihenőnap: 1 tojás + 1 tojásfehérje + ~20 g joghurt + 2 szelet puffasztott rizs.",
    },
  },
  {
    id: "2-T-avokado",
    mealId: "2-T",
    name: "Avokádós tojáskrém rizsszeleten",
    timeOfDay: "Tízorai – 2. nap",
    slot: "Tízorai",
    day: 2,
    workout: {
      kcal: 315,
      protein: 16,
      carbs: 20,
      fat: 19,
      portion:
        "Edzésnap: 2 főtt tojás + ~½ avokádó (~55 g) + 3 szelet puffasztott rizs.",
    },
    rest: {
      kcal: 185,
      protein: 9,
      carbs: 16,
      fat: 11,
      portion:
        "Pihenőnap: 1 tojás + ~⅓ avokádó (~37 g) + 2 szelet puffasztott rizs.",
    },
  },
  {
    id: "2-T-szendvics",
    mealId: "2-T",
    name: "Puffasztott rizs szendvics tojással és almával",
    timeOfDay: "Tízorai – 2. nap",
    slot: "Tízorai",
    day: 2,
    workout: {
      kcal: 290,
      protein: 16,
      carbs: 35,
      fat: 10,
      portion:
        "Edzésnap: 4 szelet puffasztott rizs + 2 főtt tojás + ~½ alma (vékony szeletek).",
    },
    rest: {
      kcal: 170,
      protein: 9,
      carbs: 24,
      fat: 5,
      portion:
        "Pihenőnap: 3 szelet puffasztott rizs + 1 főtt tojás + pár vékony almaszelet.",
    },
  },

  // 3. NAPI TÍZORAI – 3-T
  {
    id: "3-T-tekercses",
    mealId: "3-T",
    name: "Pulykasonkás zöldségtekercsek + kenyér",
    timeOfDay: "Tízorai – 3. nap",
    slot: "Tízorai",
    day: 3,
    workout: {
      kcal: 200,
      protein: 20,
      carbs: 21,
      fat: 4,
      portion:
        "Edzésnap: 70–80 g pulykasonka (4–5 szelet) + 120–150 g zöldség (répa, uborka, paprika hasábokra vágva) sonkába tekerve + 1 szelet tk. kenyér (~30–35 g).",
    },
    rest: {
      kcal: 165,
      protein: 17,
      carbs: 17,
      fat: 3,
      portion:
        "Pihenőnap: ~60 g pulykasonka (3–4 szelet) + 130–160 g zöldség (mehet több zöldség) + ½–1 kisebb szelet tk. kenyér (~20–30 g).",
    },
  },
  {
    id: "3-T-melegszendvics",
    mealId: "3-T",
    name: "Pulykás cottage melegszendvics",
    timeOfDay: "Tízorai – 3. nap",
    slot: "Tízorai",
    day: 3,
    workout: {
      kcal: 220,
      protein: 23,
      carbs: 18,
      fat: 6,
      portion:
        "Edzésnap: 1 nagyobb szelet tk. kenyér (~35–40 g) + 60–70 g pulykasonka + 40–50 g cottage cheese + 60–80 g zöldség (paradicsom, paprika/uborka) sütve melegszendvicsnek.",
    },
    rest: {
      kcal: 180,
      protein: 20,
      carbs: 15,
      fat: 4,
      portion:
        "Pihenőnap: 1 kisebb szelet tk. kenyér (~30 g) + 50–60 g pulykasonka + 30–40 g cottage + 70–90 g zöldség, sütve melegszendvicsnek.",
    },
  },
  {
    id: "3-T-bento",
    mealId: "3-T",
    name: "Pulykás bento box zöldségekkel",
    timeOfDay: "Tízorai – 3. nap",
    slot: "Tízorai",
    day: 3,
    workout: {
      kcal: 205,
      protein: 20,
      carbs: 22,
      fat: 4,
      portion:
        "Edzésnap: 70–80 g pulykasonka kockákra vágva + 150–180 g zöldség (répa, uborka, paprika) rekeszekben + 1 szelet tk. kenyér (~30–35 g) külön.",
    },
    rest: {
      kcal: 160,
      protein: 17,
      carbs: 16,
      fat: 3,
      portion:
        "Pihenőnap: 55–60 g pulykasonka + 160–190 g zöldség + ½–1 kisebb szelet tk. kenyér (~20–25 g) külön rekeszben.",
    },
  },
  // 4. NAPI TÍZORAI – 4-T
  {
    id: "4-T-klasszikus",
    mealId: "4-T",
    name: "Klasszikus kefires zabos banán",
    timeOfDay: "Tízorai – 4. nap",
    slot: "Tízorai",
    day: 4,
    workout: {
      kcal: 285,
      protein: 10,
      carbs: 45,
      fat: 8,
      portion:
        "Edzésnap: 200 ml 1,5–2%-os kefir + 25 g zabpehely + ~80 g banánkarika (kb. 3/4 közepes banán) + fahéj.",
    },
    rest: {
      kcal: 240,
      protein: 9,
      carbs: 34,
      fat: 8,
      portion:
        "Pihenőnap: 200 ml kefir + 20 g zabpehely + ~50 g banán (kb. 1/2 kisebb banán) + fahéj.",
    },
  },
  {
    id: "4-T-extra-feherjes",
    mealId: "4-T",
    name: "Extra fehérjés kefires zabos banán",
    timeOfDay: "Tízorai – 4. nap",
    slot: "Tízorai",
    day: 4,
    workout: {
      kcal: 335,
      protein: 22,
      carbs: 45,
      fat: 9,
      portion:
        "Edzésnap: 200 ml kefir + 25 g zabpehely + 15 g vaníliás whey (~1/2 adagolókanál) + ~70 g banán, opcionálisan fahéjjal.",
    },
    rest: {
      kcal: 300,
      protein: 21,
      carbs: 35,
      fat: 9,
      portion:
        "Pihenőnap: 200 ml kefir + 20 g zabpehely + 15 g whey + ~50 g banán, fahéjjal ízesítve.",
    },
  },
  {
    id: "4-T-turmix",
    mealId: "4-T",
    name: "Kefires zabos banán turmix",
    timeOfDay: "Tízorai – 4. nap",
    slot: "Tízorai",
    day: 4,
    workout: {
      kcal: 300,
      protein: 10,
      carbs: 48,
      fat: 8,
      portion:
        "Edzésnap: 200 ml kefir + 25–30 g zabpehely + ~100 g banán turmixolva, sűrű, iható smoothie-ként.",
    },
    rest: {
      kcal: 260,
      protein: 9,
      carbs: 38,
      fat: 8,
      portion:
        "Pihenőnap: 180–200 ml kefir + 20 g zabpehely + ~70 g banán turmixolva, kicsit visszafogottabb ch-val.",
    },
  },
  // 5. NAPI TÍZORAI – 5-T
  {
    id: "5-T-kremes-dio",
    mealId: "5-T",
    name: "Görög joghurt dióval – krémes verzió",
    timeOfDay: "Tízorai – 5. nap",
    slot: "Tízorai",
    day: 5,
    workout: {
      kcal: 190,
      protein: 20,
      carbs: 8,
      fat: 8,
      portion:
        "Edzésnap: ~180 g 2%-os görög joghurt krémesre keverve + 12 g durvára vágott dió (kb. 5–6 fél dió). Minimalista, ‘clean’ fehérje+zsír tízórai, ami stabilan tart, de nem nehéz.",
    },
    rest: {
      kcal: 155,
      protein: 17,
      carbs: 7,
      fat: 6,
      portion:
        "Pihenőnap: ~160 g görög joghurt + 8–10 g dió (3–4 fél dió). Kicsit kevesebb zsír/kalória, de még mindig szép fehérjeadaggal.",
    },
  },
  {
    id: "5-T-korte-fahejas-mezes",
    mealId: "5-T",
    name: "Görög joghurt körtével – fahéjas–mézes csavar",
    timeOfDay: "Tízorai – 5. nap",
    slot: "Tízorai",
    day: 5,
    workout: {
      kcal: 230,
      protein: 19,
      carbs: 22,
      fat: 7,
      portion:
        "Edzésnap: ~170 g görög joghurt + 80–90 g körte (kb. 1/2 közepes) vékony szeletekre vágva, fahéjjal megszórva + 5 g méz (1 tk) átforgatva, a tetején ~10 g durvára vágott dió/mandula. Kicsit több ch (körte+méz), edzéses napra nagyon jó energialöket.",
    },
    rest: {
      kcal: 195,
      protein: 17,
      carbs: 19,
      fat: 5,
      portion:
        "Pihenőnap: ~160 g görög joghurt + 60–70 g körte + 5 g méz (vagy édesítő) + 6–8 g dió/mandula. A gyümölcs és mag mennyiségén finomított, de még mindig ‘almás pite’-feelingű, fehérjés snack.",
    },
  },
  {
    id: "5-T-muzlis-tal",
    mealId: "5-T",
    name: "Görög joghurt müzlis tálként",
    timeOfDay: "Tízorai – 5. nap",
    slot: "Tízorai",
    day: 5,
    workout: {
      kcal: 300,
      protein: 21,
      carbs: 32,
      fat: 10,
      portion:
        "Edzésnap: ~170 g görög joghurt tálban + 70–80 g kockázott körte + 10–12 g aprított dió/mandula + 15–20 g zabpehely vagy granola a tetején. Ez a leglaktatóbb 5-T: jó fehérje, normális ch, ropogós, ‘mini reggeli’ tízórai.",
    },
    rest: {
      kcal: 245,
      protein: 19,
      carbs: 26,
      fat: 7,
      portion:
        "Pihenőnap: ~160 g görög joghurt + 60 g körte + 8–10 g dió/mandula + 10–15 g zab/granola. Kicsit karcsúsítottabb szénhidrátban és zsírban, de az élmény és a laktatóság megmarad.",
    },
  },
  // 6. NAPI TÍZORAI – 6-T
  {
    id: "6-T-superfood",
    mealId: "6-T",
    name: "Superfood verzió",
    timeOfDay: "Tízorai – 6. nap",
    slot: "Tízorai",
    day: 6,
    workout: {
      kcal: 250,
      protein: 7,
      carbs: 33,
      fat: 10,
      portion:
        "Edzésnap: 2 db puffasztott rizsszelet, összesen ~16–18 g mogyoróvaj (kb. 8–9 g/szelet), ~60–70 g banán karikázva a tetejére, + 1 kk (~4 g) chia mag megszórva. Gyors, ropogós energialöket jó zsírral és ch-val, nem túl nagy adagban.",
    },
    rest: {
      kcal: 205,
      protein: 6,
      carbs: 27,
      fat: 8,
      portion:
        "Pihenőnap: 2 db rizsszelet, összesen ~12 g mogyoróvaj (kb. 6 g/szelet), ~50 g banán, ½–1 kk (3–4 g) chia mag. A mogyoróvajat és a banánt picit visszavesszük, kalória lejjebb, jóllakottság megmarad.",
    },
  },
  {
    id: "6-T-fahejas-mezes",
    mealId: "6-T",
    name: "Fahéjas–mézes verzió",
    timeOfDay: "Tízorai – 6. nap",
    slot: "Tízorai",
    day: 6,
    workout: {
      kcal: 245,
      protein: 6,
      carbs: 35,
      fat: 9,
      portion:
        "Edzésnap: 2 db rizsszelet, ~16–18 g mogyoróvaj összesen, ~60–70 g banán karikázva, bőven fahéjjal megszórva, majd ~5 g (1 tk) mézzel vékonyan megcsorgatva. Desszertesebb tízórai, kicsit több gyors ch-val (banán + méz).",
    },
    rest: {
      kcal: 200,
      protein: 5,
      carbs: 29,
      fat: 7,
      portion:
        "Pihenőnap: 2 db rizsszelet, ~12 g mogyoróvaj, ~50–60 g banán, bőven fahéj, ~3 g (½ tk) méz csak vékony csíkban. Ugyanaz az élmény, de kevesebb zsír + cukor.",
    },
  },
  {
    id: "6-T-cottage-boost",
    mealId: "6-T",
    name: "Cottage cheese boost verzió",
    timeOfDay: "Tízorai – 6. nap",
    slot: "Tízorai",
    day: 6,
    workout: {
      kcal: 250,
      protein: 10,
      carbs: 32,
      fat: 9,
      portion:
        "Edzésnap: 2 db rizsszelet, összesen ~40 g cottage cheese (kb. 20 g/szelet vékony rétegben), erre ~14–16 g mogyoróvaj (7–8 g/szelet), a tetejére ~60–70 g banán karikázva. Só–édes kontraszt, több fehérje a cottage miatt – edzésnapra nagyon jó „engine fuel”.",
    },
    rest: {
      kcal: 210,
      protein: 8,
      carbs: 29,
      fat: 7,
      portion:
        "Pihenőnap: 2 db rizsszelet, ~30–35 g cottage cheese, ~10–12 g mogyoróvaj, ~50–60 g banán. A mogyoróvajat és a banánt picit visszavesszük, de a cottage-ból jön az extra fehérje.",
    },
  },
  // 7. NAPI TÍZORAI – 7-U
  {
    id: "7-T-alap",
    mealId: "7-T",
    name: "Alap avokádós pirítós",
    timeOfDay: "Tízorai – 7. nap",
    slot: "Tízorai",
    day: 7,
    workout: {
      kcal: 245,
      protein: 10,
      carbs: 20,
      fat: 11,
      portion:
        "Edzésnap: 1 szelet (~35–40 g) teljes kiőrlésű kenyér pirítva + 50–60 g avokádó villával krémesre törve (só, bors, opcionálisan citromlé, chili) a kenyérre kenve + 1 db M-es keménytojás szeletelve mellé vagy a tetejére. Könnyű, de stabil, zsírosabb–fehérjésebb tízórai.",
    },
    rest: {
      kcal: 215,
      protein: 10,
      carbs: 18,
      fat: 11,
      portion:
        "Pihenőnap: 1 szelet (~30–35 g) teljes kiőrlésű kenyér pirítva + 40–50 g avokádókrém (só, bors, kevés citromlé) a pirítósra kenve + 1 db M-es főtt tojás szeletelve. Kicsit karcsúsított adag, de fehérjében stabil, jó telítő tízórai.",
    },
  },
  {
    id: "7-T-mediterran",
    mealId: "7-T",
    name: "Mediterrán avokádós pirítós",
    timeOfDay: "Tízorai – 7. nap",
    slot: "Tízorai",
    day: 7,
    workout: {
      kcal: 270,
      protein: 11,
      carbs: 23,
      fat: 15,
      portion:
        "Edzésnap: 1 szelet (~35–40 g) teljes kiőrlésű kenyér pirítva + 50–60 g avokádó pépesítve + ~35–40 g apróra vágott paradicsom + 8–10 g olívabogyó karikázva, só, bors, oregánó (opcionálisan kevés citromlé) – mindezt mediterrán avokádókrémként a pirítósra kenve + 1 db M-es főtt tojás szeletelve. Intenzívebb, szaftosabb ízvilág, picit több zsír az olívabogyó miatt.",
    },
    rest: {
      kcal: 235,
      protein: 10,
      carbs: 21,
      fat: 13,
      portion:
        "Pihenőnap: 1 szelet (~30–35 g) TK kenyér pirítva + 40–50 g avokádó + ~35–40 g paradicsom + 5–8 g olívabogyó, só, bors, oregánó, kevés citromlé avókrémnek összekeverve a kenyér tetejére + 1 db M-es főtt tojás. Az olívabogyón és az avón kicsit visszavett zsírmennyiség, de a mediterrán feeling marad.",
    },
  },
  {
    id: "7-T-wrap",
    mealId: "7-T",
    name: "Avokádós tojásos wrap / pita",
    timeOfDay: "Tízorai – 7. nap",
    slot: "Tízorai",
    day: 7,
    workout: {
      kcal: 300,
      protein: 12,
      carbs: 28,
      fat: 16,
      portion:
        "Edzésnap: 1 db ~45–50 g teljes kiőrlésű tortilla vagy pita átmelegítve + 45–55 g avokádó krémesre törve (só, bors, citromlé) a belsejébe kenve + 1 db M-es főtt tojás karikákra vágva + 30–40 g apróra vágott zöldség (pl. paradicsom, paprika, uborka). Szorosan feltekerve / megtöltve, kézből ehető, hordozható tízórai.",
    },
    rest: {
      kcal: 250,
      protein: 11,
      carbs: 23,
      fat: 12,
      portion:
        "Pihenőnap: 1 db vékonyabb (~35–40 g) TK tortilla vagy kisebb pita + 35–45 g avokádókrém (só, bors, kevés citromlé) + 1 db M-es főtt tojás + 40–50 g zöldség (paradicsom, paprika, uborka). Kicsit visszafogottabb tortilla- és avó-mennyiség, több zöldség – lightabb, de laktató wrap/pita.",
    },
  },

  // 1. NAPI EBÉD – 1-E
  {
    id: "1-E-alap",
    mealId: "1-E",
    name: "Grillezett csirkemell barna rizzsel",
    timeOfDay: "Ebéd – 1. nap",
    slot: "Ebéd",
    day: 1,
    workout: {
      kcal: 620,
      protein: 51,
      carbs: 65,
      fat: 17,
      portion:
        "Edzésnap: ~175 g csirkemell + 72,5 g barna rizs (nyersen) + brokkoli, répa, 1 ek olívaolaj.",
    },
    rest: {
      kcal: 505,
      protein: 46,
      carbs: 50,
      fat: 13,
      portion:
        "Pihenőnap: ~155 g csirkemell + 52,5 g barna rizs + több zöldség, 1 tk olívaolaj.",
    },
  },
  {
    id: "1-E-curry",
    mealId: "1-E",
    name: "Csirkecurry barna rizzsel",
    timeOfDay: "Ebéd – 1. nap",
    slot: "Ebéd",
    day: 1,
    workout: {
      kcal: 600,
      protein: 51,
      carbs: 60,
      fat: 17,
      portion:
        "Edzésnap: ~175 g csirke + 72,5 g barna rizs + brokkoli, répa, light kókusztejes curry.",
    },
    rest: {
      kcal: 510,
      protein: 45,
      carbs: 50,
      fat: 14,
      portion:
        "Pihenőnap: ~155 g csirke + 52,5 g barna rizs + több zöldség, light kókusztejes curry.",
    },
  },
  {
    id: "1-E-salata",
    mealId: "1-E",
    name: "Hideg rizses–csirkés saláta",
    timeOfDay: "Ebéd – 1. nap",
    slot: "Ebéd",
    day: 1,
    workout: {
      kcal: 580,
      protein: 49,
      carbs: 55,
      fat: 18,
      portion:
        "Edzésnap: ~170 g csirke + 67,5 g barna rizs + sok vegyes zöldség + 1 ek olívaolaj, hideg salátaként.",
    },
    rest: {
      kcal: 485,
      protein: 44,
      carbs: 45,
      fat: 14,
      portion:
        "Pihenőnap: ~155 g csirke + 50 g barna rizs + még több zöldség + 2–3 tk olívaolaj.",
    },
  },

  // 2. NAPI EBÉD – 2-E
  {
    id: "2-E-suto",
    mealId: "2-E",
    name: "Sütőben egyben sült pulyka édesburgonyával",
    timeOfDay: "Ebéd – 2. nap",
    slot: "Ebéd",
    day: 2,
    workout: {
      kcal: 510,
      protein: 48,
      carbs: 53,
      fat: 13,
      portion:
        "Edzésnap: ~175 g pulykamell + ~210 g édesburgonya + 150 g zöldbab, 1 ek olívaolajjal, egy tepsiben sütve.",
    },
    rest: {
      kcal: 400,
      protein: 43,
      carbs: 43,
      fat: 7,
      portion:
        "Pihenőnap: ~155 g pulykamell + ~150 g édesburgonya + 185 g zöldbab, 1 tk olívaolajjal, tepsiben sütve.",
    },
  },
  {
    id: "2-E-wok",
    mealId: "2-E",
    name: "Wokos pulykacsíkok zöldbabbal",
    timeOfDay: "Ebéd – 2. nap",
    slot: "Ebéd",
    day: 2,
    workout: {
      kcal: 490,
      protein: 47,
      carbs: 49,
      fat: 13,
      portion:
        "Edzésnap: ~170 g pulykacsík + ~190 g édesburgonya + 150 g zöldbab, 1 ek olajjal, light szójaszósszal wokban pirítva.",
    },
    rest: {
      kcal: 395,
      protein: 43,
      carbs: 41,
      fat: 7,
      portion:
        "Pihenőnap: ~155 g pulyka + ~140 g édesburgonya + 185 g zöldbab, 1 tk olajjal, ázsiai fűszerezéssel wokban.",
    },
  },
  {
    id: "2-E-hidegtal",
    mealId: "2-E",
    name: "Pulykás édesburgonyás meal prep hidegtál",
    timeOfDay: "Ebéd – 2. nap",
    slot: "Ebéd",
    day: 2,
    workout: {
      kcal: 500,
      protein: 48,
      carbs: 49,
      fat: 13,
      portion:
        "Edzésnap: ~175 g pulyka + ~190 g édesburgonya + ~160 g zöldbab + saláta, 1 ek olívaolajos–citromos öntettel, hidegen dobozolva.",
    },
    rest: {
      kcal: 410,
      protein: 43,
      carbs: 41,
      fat: 9,
      portion:
        "Pihenőnap: ~155 g pulyka + ~140 g édesburgonya + 185 g zöldbab + extra saláta, 2–3 tk olívaolajos öntettel.",
    },
  },
  // 3. NAPI EBÉD – 3-E
  {
    id: "3-E-alap",
    mealId: "3-E",
    name: "Lazac – alap verzió (serpenyő + sütő édesburgonya)",
    timeOfDay: "Ebéd – 3. nap",
    slot: "Ebéd",
    day: 3,
    workout: {
      kcal: 630,
      protein: 38,
      carbs: 50,
      fat: 30,
      portion:
        "Edzésnap: ~150–160 g lazacfilé serpenyőben sütve + 200–220 g édesburgonya sütőben (200 °C, 20–25 perc, fűszerekkel) + 180–200 g serpenyőben pirított zöldség (brokkoli, cukkini, paprika, répa) összesen ~8–10 g olívaolajjal.",
    },
    rest: {
      kcal: 520,
      protein: 34,
      carbs: 44,
      fat: 23,
      portion:
        "Pihenőnap: ~130–140 g lazac + 150–170 g édesburgonya + 200–220 g zöldség, összesen ~5–6 g olívaolajjal, kicsit több zöldséggel, kicsit kevesebb édesburgonyával.",
    },
  },
  {
    id: "3-E-suto-egyben",
    mealId: "3-E",
    name: "Sütőben egyben – tepsis lazac, édesburgonya, zöldség",
    timeOfDay: "Ebéd – 3. nap",
    slot: "Ebéd",
    day: 3,
    workout: {
      kcal: 620,
      protein: 38,
      carbs: 52,
      fat: 29,
      portion:
        "Edzésnap: ~150–160 g lazacfilé + 190–210 g édesburgonya + ~200 g zöldségmix (brokkoli, répa, cukkini, lilahagyma), mindez egy tepsiben 200 °C-on 20–25 percig sütve, összesen ~8–10 g olívaolajjal, citrommal, fokhagymával, oregánóval.",
    },
    rest: {
      kcal: 515,
      protein: 34,
      carbs: 45,
      fat: 22,
      portion:
        "Pihenőnap: ~130–140 g lazac + 140–160 g édesburgonya + ~220 g zöldség, ~5–6 g olívaolajjal, ugyanazzal a fűszerezéssel – több zöldség, kevesebb ch és zsír.",
    },
  },
  {
    id: "3-E-azsiai-bowl",
    mealId: "3-E",
    name: "Ázsiai bowl – szezámmagos lazac, édesburgonya, wok zöldség",
    timeOfDay: "Ebéd – 3. nap",
    slot: "Ebéd",
    day: 3,
    workout: {
      kcal: 630,
      protein: 38,
      carbs: 50,
      fat: 31,
      portion:
        "Edzésnap: ~150 g lazacfilé szezámmagos kéreggel (~5 g szezámmag) + 180–200 g édesburgonya (főzve vagy sütve „alapnak”) + 180–200 g wokban pirított zöldség (répa, kaliforniai paprika, cukkini, brokkoli, hagyma) ~8–10 g olajjal, 1–2 tk light szójaszósszal, gyömbérrel, fokhagymával.",
    },
    rest: {
      kcal: 530,
      protein: 34,
      carbs: 45,
      fat: 24,
      portion:
        "Pihenőnap: ~130–140 g lazac + 140–160 g édesburgonya + 200–220 g wok zöldség, ~5–6 g olajjal, ~3–4 g szezámmaggal és 1 tk light szójaszósszal – lazább ch és zsír, de ugyanúgy magas fehérje.",
    },
  },
  // 4. NAPI EBÉD – 4-E
  {
    id: "4-E-alap",
    mealId: "4-E",
    name: "Marhahús bulgurral, karfiollal és gombával",
    timeOfDay: "Ebéd – 4. nap",
    slot: "Ebéd",
    day: 4,
    workout: {
      kcal: 635,
      protein: 45,
      carbs: 62,
      fat: 23,
      portion:
        "Edzésnap: ~150 g sovány marhahús + 70 g bulgur (szárazon) + 200 g karfiol + 100 g gomba + ~5–7 g olívaolaj (részben a húshoz, részben a zöldséghez).",
    },
    rest: {
      kcal: 540,
      protein: 41,
      carbs: 49,
      fat: 20,
      portion:
        "Pihenőnap: ~135 g marhahús + 50 g bulgur + 230 g karfiol + 120 g gomba + ~4–5 g olívaolaj, a zöldség mennyiségét bátran felhúzva.",
    },
  },
  {
    id: "4-E-azsiai",
    mealId: "4-E",
    name: "Ázsiai marhahús bulgurral",
    timeOfDay: "Ebéd – 4. nap",
    slot: "Ebéd",
    day: 4,
    workout: {
      kcal: 620,
      protein: 45,
      carbs: 65,
      fat: 20,
      portion:
        "Edzésnap: ~150 g marhahús csíkokra vágva + 65–70 g bulgur + 180–200 g karfiol + 80–100 g gomba, ~5 g olajjal, light szójaszósszal, fokhagymával és gyömbérrel wokban pirítva.",
    },
    rest: {
      kcal: 520,
      protein: 40,
      carbs: 54,
      fat: 16,
      portion:
        "Pihenőnap: ~130 g marhahús + 50 g bulgur + 200–220 g karfiol + 100–120 g gomba + ~4 g olaj, 1 tk light szójaszósszal, sok ropogós zöldséggel.",
    },
  },
  {
    id: "4-E-rakott",
    mealId: "4-E",
    name: "Rakott marhahús bulgurral, karfiollal és gombával",
    timeOfDay: "Ebéd – 4. nap",
    slot: "Ebéd",
    day: 4,
    workout: {
      kcal: 655,
      protein: 48,
      carbs: 64,
      fat: 23,
      portion:
        "Edzésnap: ~150 g darált marhahús + 70 g bulgur + 180–200 g előfőzött karfiol + 100 g pirított gomba + ~5–7 g olaj + ~10 g light reszelt sajt a tetején, tepsiben 10–15 percig összesütve.",
    },
    rest: {
      kcal: 550,
      protein: 43,
      carbs: 54,
      fat: 18,
      portion:
        "Pihenőnap: ~135 g marhahús + 50 g bulgur + 200–230 g karfiol + 115 g gomba + ~4–5 g olaj, max. 5–7 g light sajttal a tetején, jól dobozolható rakott egytálételként.",
    },
  },
  // 5. NAPI EBÉD – 5-E
  {
    id: "5-E-alap",
    mealId: "5-E",
    name: "Alap tonhalsaláta",
    timeOfDay: "Ebéd – 5. nap",
    slot: "Ebéd",
    day: 5,
    workout: {
      kcal: 440,
      protein: 47,
      carbs: 18,
      fat: 20,
      portion:
        "Edzésnap: ~120 g tonhal (konzerv, vízben, lecsepegtetve) + 2 db M-es főtt tojás + 250–300 g vegyes zöldség (pl. paradicsom, uborka, paprika, jégsaláta/rukkola, kevés lilahagyma) + ~8 g olívaolaj (kb. 1 lapos ek) citromlével, sóval, borssal, petrezselyemmel elkeverve. Nagy, fehérjedús salátatál rizs nélkül.",
    },
    rest: {
      kcal: 340,
      protein: 41,
      carbs: 19,
      fat: 11,
      portion:
        "Pihenőnap: ~120 g tonhal + 1 db főtt tojás + 260–300 g vegyes zöldség + ~5 g olívaolaj (kb. 1 tk), citromlé–só–bors–petrezselyem öntettel. Kevesebb zsír és tojás, de ugyanannyi tonhal → fehérje marad magas, kalória lejjebb.",
    },
  },
  {
    id: "5-E-avokados",
    mealId: "5-E",
    name: "Avokádós tonhalsaláta",
    timeOfDay: "Ebéd – 5. nap",
    slot: "Ebéd",
    day: 5,
    workout: {
      kcal: 435,
      protein: 42,
      carbs: 24,
      fat: 19,
      portion:
        "Edzésnap: ~120 g tonhal (vízben) + ~70 g avokádó (kb. 1/2 közepes) kockázva/krémesítve + 1 db főtt tojás + 220–250 g vegyes zöldség (paradicsom, uborka, paprika, saláta) + ~4–5 g olívaolaj citromlével, sóval, borssal. Krémesebb, jó zsíros, laktatóbb saláta-bowl.",
    },
    rest: {
      kcal: 390,
      protein: 42,
      carbs: 20,
      fat: 16,
      portion: "Pihenőnap: ~120 g tonhal + ~50 g avokádó + 1 db főtt tojás + 230–260 g vegyes zöldség + ~3 g olívaolaj citromlével. A zsírt (avokádó + olaj) picit visszahúzva, fehérje ugyanúgy erős, esti kalória kímélve.",
    },
  },
  {
    id: "5-E-bulgur-bowl",
    mealId: "5-E",
    name: "Tonhalas bulgur/quinoa tál",
    timeOfDay: "Ebéd – 5. nap",
    slot: "Ebéd",
    day: 5,
    workout: {
      kcal: 555,
      protein: 48,
      carbs: 59,
      fat: 14,
      portion:
        "Edzésnap: ~60–70 g bulgur vagy quinoa szárazon megfőzve (alap a tál alján) + ~120 g lecsepegtetett tonhal + 1 db főtt tojás + 200–220 g zöldség (pl. paradicsom, uborka, paprika, kevés kukorica) + ~6 g olívaolaj–citromlé öntet. Ez a leglaktatóbb, ‘bowl’ jellegű, normális szénhidrátos edzésnapi ebéd.",
    },
    rest: {
      kcal: 470,
      protein: 46,
      carbs: 50,
      fat: 10,
      portion:
        "Pihenőnap: ~40–50 g bulgur/quinoa szárazon + ~120 g tonhal + 1 db főtt tojás + 220–250 g zöldség + ~4 g olívaolaj–citrom öntet. Kevesebb bulgur/quinoa és egy kicsit kevesebb olaj → ch és zsír lejjebb, fehérje még mindig 40+ g.",
    },
  },
  // 6. NAPI EBÉD – 6-E
  {
    id: "6-E-klasszikus",
    mealId: "6-E",
    name: "Klasszikus grillezett csirkemell",
    timeOfDay: "Ebéd – 6. nap",
    slot: "Ebéd",
    day: 6,
    workout: {
      kcal: 610,
      protein: 52,
      carbs: 79,
      fat: 10,
      portion:
        "Edzésnap: ~180 g csirkemell (nyersen), 70 g száraz basmati rizs, 200 g borsó + répa (kb. fele-fele), ~5 g olíva- vagy kókuszolaj a sütéshez. Klasszikus tiszta csirke–rizs–zöldség fitnesz ebéd, sok fehérjével és normális ch-val.",
    },
    rest: {
      kcal: 530,
      protein: 50,
      carbs: 67,
      fat: 8,
      portion:
        "Pihenőnap: ~170 g csirkemell, 50 g száraz basmati rizs, 230–250 g borsó + répa, ~3–4 g olaj a serpenyőben. Kevesebb rizs + olaj, több zöldség, fehérje szinte ugyanannyi → recompos-barát verzió.",
    },
  },
  {
    id: "6-E-azsiai-wok",
    mealId: "6-E",
    name: "Ázsiai wok csirkemell verzió",
    timeOfDay: "Ebéd – 6. nap",
    slot: "Ebéd",
    day: 6,
    workout: {
      kcal: 600,
      protein: 52,
      carbs: 75,
      fat: 11,
      portion:
        "Edzésnap: ~180 g csirkemell csíkokra vágva, 60–65 g száraz basmati rizs, ~200–220 g zöldség (zöldborsó + répa, opcionálisan kis hagyma/paprika), ~6 g olaj a wokhoz, 1–2 ek szójaszósz, fokhagyma/gyömbér ízesítésnek. Egyserpenyős ázsiai hangulatú csirkés–rizses wok, tiszta, de ízes.",
    },
    rest: {
      kcal: 525,
      protein: 48,
      carbs: 65,
      fat: 8,
      portion:
        "Pihenőnap: ~160–170 g csirkemell, 45–50 g száraz rizs, ~220–250 g zöldség, ~4 g olaj, 1–2 ek szójaszósszal (light). Szénhidrát és zsír kicsit lejjebb, zöldség feljebb, fehérje még mindig erős.",
    },
  },
  {
    id: "6-E-rakott",
    mealId: "6-E",
    name: "Rakott csirke–rizs–zöldség tál",
    timeOfDay: "Ebéd – 6. nap",
    slot: "Ebéd",
    day: 6,
    workout: {
      kcal: 610,
      protein: 52,
      carbs: 79,
      fat: 10,
      portion:
        "Edzésnap: ~180 g csirkemell csíkokra vágva és elősütve, 70 g száraz basmati rizs (megfőzve alulra terítve), 200 g párolt borsó + répa a középső rétegnek, ~5 g olaj (csirke elősütés + tepsi vékony kenése). Rétegezett, sütőben összesütött, nagyon jól dobozolható egytál ebéd.",
    },
    rest: {
      kcal: 550,
      protein: 50,
      carbs: 71,
      fat: 8,
      portion:
        "Pihenőnap: ~170 g csirkemell, 55 g száraz basmati rizs, 220–240 g borsó + répa, ~3–4 g olaj. Ugyanaz a rakott struktúra, de egy fokkal kevesebb rizs + olaj, több zöldség → kalória lejjebb, telítettség megmarad.",
    },
  },
  // 7. NAPI EBÉD – 7-E
  {
    id: "7-E-klasszikus",
    mealId: "7-E",
    name: "Pulykafasírt – Klasszikus verzió",
    timeOfDay: "Ebéd – 7. nap",
    slot: "Ebéd",
    day: 7,
    workout: {
      kcal: 640,
      protein: 59,
      carbs: 67,
      fat: 15,
      portion:
        "Edzésnap: ~180 g darált pulykamell fasírtmasszának (½–1 tojás + 10–12 g zabliszt) + 60–65 g köles (szárazon) köretnek + 200–220 g vegyes zöldség (répa, borsó, zöldbab, brokkoli). A fasírtokat sütőben (180 °C, ~18–22 perc, félidőben forgatva) vagy kevés olajon serpenyőben sütöd, kölessel és párolt zöldséggel tálalva.",
    },
    rest: {
      kcal: 540,
      protein: 53,
      carbs: 53,
      fat: 13,
      portion:
        "Pihenőnap: ~160–170 g darált pulykamell (½–1 tojás + 8–10 g zabliszt) + 50 g köles (szárazon) + 220–250 g vegyes zöldség. Ugyanúgy pulykafasírt formában sütve, kicsit kevesebb kölessel és több zöldséggel – kalória lejjebb, fehérje még mindig erős.",
    },
  },
  {
    id: "7-E-egytal",
    mealId: "7-E",
    name: "Pulykafasírt – Sütőben rakott egytál",
    timeOfDay: "Ebéd – 7. nap",
    slot: "Ebéd",
    day: 7,
    workout: {
      kcal: 640,
      protein: 59,
      carbs: 67,
      fat: 15,
      portion:
        "Edzésnap: tepsi aljára 60–65 g száraz kölesből főzött alap (villával fellazítva), rá 200–220 g előpárolt vegyes zöldség (répa, borsó, zöldbab, brokkoli), a tetejére ~180 g darált pulykából formázott fasírtgolyók (½–1 tojás + 10–12 g zabliszt). Vékonyan kiolajozott tepsiben 180 °C-on kb. 20 percig összesütöd – full meal prep egytál.",
    },
    rest: {
      kcal: 540,
      protein: 53,
      carbs: 53,
      fat: 13,
      portion:
        "Pihenőnap: alul 50 g száraz kölesből főzött réteg, rá 220–250 g zöldség, tetején 160–170 g pulykafasírt-golyó (kevesebb hús + 8–10 g zabliszt). Ugyanúgy 180 °C-on összesütöd; nagyon jól dobozolható, kicsit visszafogottabb ch-zsír makrókkal.",
    },
  },
  {
    id: "7-E-azsiai",
    mealId: "7-E",
    name: "Ázsiai ihletésű pulykafasírt",
    timeOfDay: "Ebéd – 7. nap",
    slot: "Ebéd",
    day: 7,
    workout: {
      kcal: 630,
      protein: 59,
      carbs: 64,
      fat: 15,
      portion:
        "Edzésnap: ~180 g darált pulykamellből gyömbéres–szójás fasírtmassza (½–1 tojás + 10–12 g zabliszt + 1 ek light szójaszósz + 1–2 tk reszelt friss gyömbér), gombócokra formázva és sütőben/serpenyőben sütve. Mellé 60–65 g köles (szárazon) köretnek és 200–220 g wokban pirított zöldség (répa, paprika, hagyma, zöldbab, brokkoli) ~4–5 g olajjal, a végén 1–2 ek szójaszósszal átforgatva.",
    },
    rest: {
      kcal: 560,
      protein: 55,
      carbs: 55,
      fat: 13,
      portion:
        "Pihenőnap: ~160–170 g gyömbéres–szójás pulykafasírt (½–1 tojás + 8–10 g zabliszt + 2–3 tk szójaszósszal) + 50 g köles (szárazon) + 220–250 g wokzöldség kevesebb olajjal (~3–4 g). Ízben ugyanolyan ázsiai, de kicsit karcsúsított szénhidrát- és zsírmennyiséggel.",
    },
  },

  // 1. NAPI UZSONNA – 1-U
  {
    id: "1-U-alap",
    mealId: "1-U",
    name: "Alap túró–gyümölcsös pohárkrém",
    timeOfDay: "Uzsonna – 1. nap",
    slot: "Uzsonna",
    day: 1,
    workout: {
      kcal: 280,
      protein: 24,
      carbs: 26,
      fat: 9,
      portion:
        "Edzésnap: ~175 g zsírszegény túró + ~100 g gyümölcs + 10 g dió/mandula + kevés méz.",
    },
    rest: {
      kcal: 225,
      protein: 20,
      carbs: 20,
      fat: 7,
      portion:
        "Pihenőnap: 150 g túró + ~90 g gyümölcs + 5–7 g dió/mandula, kevés vagy nulla méz.",
    },
  },
  {
    id: "1-U-feherjes",
    mealId: "1-U",
    name: "Fehérjés túró–gyümölcs pohár",
    timeOfDay: "Uzsonna – 1. nap",
    slot: "Uzsonna",
    day: 1,
    workout: {
      kcal: 295,
      protein: 30,
      carbs: 24,
      fat: 9,
      portion:
        "Edzésnap: ~165 g túró + 10 g fehérjepor + ~100 g gyümölcs + 10 g dió/mandula, minimális mézzel.",
    },
    rest: {
      kcal: 250,
      protein: 28,
      carbs: 20,
      fat: 7,
      portion:
        "Pihenőnap: 150 g túró + 10 g fehérje + ~90 g gyümölcs + 5–7 g mag, méz nélkül vagy minimálisan.",
    },
  },
  {
    id: "1-U-energiadus",
    mealId: "1-U",
    name: "Magas energiatartalmú túrós pohár",
    timeOfDay: "Uzsonna – 1. nap",
    slot: "Uzsonna",
    day: 1,
    workout: {
      kcal: 380,
      protein: 27,
      carbs: 35,
      fat: 14,
      portion:
        "Edzésnap: ~165 g túró + 15–20 g zab + 10–12 g mogyoróvaj + ~100 g gyümölcs + 8–10 g mag.",
    },
    rest: {
      kcal: 290,
      protein: 23,
      carbs: 24,
      fat: 11,
      portion:
        "Pihenőnap: 150 g túró + ~10–12 g zab + 5–8 g mogyoróvaj + ~90 g gyümölcs + 5–8 g mag.",
    },
  },

  // 2. NAPI UZSONNA – 2-U
  {
    id: "2-U-dietas",
    mealId: "2-U",
    name: "Diétás bogyós fehérjeshake",
    timeOfDay: "Uzsonna – 2. nap",
    slot: "Uzsonna",
    day: 2,
    workout: {
      kcal: 155,
      protein: 25,
      carbs: 10,
      fat: 2,
      portion:
        "Edzésnap: 30 g whey + 80 g bogyós gyümölcs (áfonya/málna) + 200–250 ml víz / víz+kevés tej.",
    },
    rest: {
      kcal: 155,
      protein: 25,
      carbs: 10,
      fat: 2,
      portion:
        "Pihenőnap: 30 g whey + 80 g bogyós gyümölcs + ~200 ml víz (ez a standard diétás uzsi).",
    },
  },
  {
    id: "2-U-kaves",
    mealId: "2-U",
    name: "Kávés fehérjeshake (pre-workout light)",
    timeOfDay: "Uzsonna – 2. nap",
    slot: "Uzsonna",
    day: 2,
    workout: {
      kcal: 205,
      protein: 25,
      carbs: 25,
      fat: 2,
      portion:
        "Edzésnap: 30 g whey + 1 közepes banán (~100 g) + 1 adag eszpresszó + ~200 ml víz/tej mix.",
    },
    rest: {
      kcal: 160,
      protein: 24,
      carbs: 14,
      fat: 2,
      portion:
        "Pihenőnap: 30 g whey + ½ banán (~50 g) + 1 adag eszpresszó + ~200 ml víz/tej.",
    },
  },
  {
    id: "2-U-zabos",
    mealId: "2-U",
    name: "Zabpelyhes fehérjeshake (mini gainer)",
    timeOfDay: "Uzsonna – 2. nap",
    slot: "Uzsonna",
    day: 2,
    workout: {
      kcal: 320,
      protein: 29,
      carbs: 40,
      fat: 5,
      portion:
        "Edzésnap: 30 g whey + 30 g zabpehely + 1 közepes banán (~100 g) + 220–250 ml folyadék.",
    },
    rest: {
      kcal: 235,
      protein: 27,
      carbs: 25,
      fat: 3,
      portion:
        "Pihenőnap: 30 g whey + 20 g zabpehely + ½ banán (~50 g) + ~220 ml folyadék.",
    },
  },
  // 3. NAPI UZSONNA – 3-U
  {
    id: "3-U-alap",
    mealId: "3-U",
    name: "Abonett cottage cheese-szel és zöldséggel (alap)",
    timeOfDay: "Uzsonna – 3. nap",
    slot: "Uzsonna",
    day: 3,
    workout: {
      kcal: 170,
      protein: 18,
      carbs: 20,
      fat: 2,
      portion:
        "Edzésnap: 3 db teljes kiőrlésű abonett + 120 g zsírszegény cottage cheese + 50–80 g uborka/retkek, enyhén sózva-borsozva.",
    },
    rest: {
      kcal: 130,
      protein: 15,
      carbs: 13,
      fat: 2,
      portion:
        "Pihenőnap: 2 db abonett + 100 g cottage cheese + 70–100 g uborka/retkek – zöldségből mehet bőven, kalóriában alig számít.",
    },
  },
  {
    id: "3-U-edes",
    mealId: "3-U",
    name: "Édes cottage–abonett bogyós gyümölccsel",
    timeOfDay: "Uzsonna – 3. nap",
    slot: "Uzsonna",
    day: 3,
    workout: {
      kcal: 180,
      protein: 18,
      carbs: 18,
      fat: 4,
      portion:
        "Edzésnap: 2 db abonett + 120 g cottage cheese + 60–70 g bogyós gyümölcs (áfonya/málna/eper) + fahéj + édesítő (ha méz: max. 2 tk, ilyenkor kb. +30 kcal).",
    },
    rest: {
      kcal: 160,
      protein: 16,
      carbs: 15,
      fat: 4,
      portion:
        "Pihenőnap: 2 db abonett + 100 g cottage cheese + 50–60 g bogyós gyümölcs + fahéj + inkább édesítő; ha nagyon kell a méz, max. 1 tk (~5 g).",
    },
  },
  {
    id: "3-U-lazacos",
    mealId: "3-U",
    name: "Lazacos prémium abonett",
    timeOfDay: "Uzsonna – 3. nap",
    slot: "Uzsonna",
    day: 3,
    workout: {
      kcal: 220,
      protein: 26,
      carbs: 11,
      fat: 8,
      portion:
        "Edzésnap: 2 db abonett + 100–120 g cottage cheese + 40–50 g füstölt lazac csíkokban + pár csepp citromlé / citromszelet a tetejére, kaporral vagy borssal fűszerezve.",
    },
    rest: {
      kcal: 170,
      protein: 20,
      carbs: 9,
      fat: 6,
      portion:
        "Pihenőnap: 2 db abonett + 80–100 g cottage cheese + 25–30 g füstölt lazac, citrommal és kevés kaporral – kicsit visszafogottabb zsír/kalória, de még mindig prémium snack.",
    },
  },
  // 4. NAPI UZSONNA – 4-U
  {
    id: "4-U-gyors",
    mealId: "4-U",
    name: "Joghurt granolával és áfonyával",
    timeOfDay: "Uzsonna – 4. nap",
    slot: "Uzsonna",
    day: 4,
    workout: {
      kcal: 260,
      protein: 10,
      carbs: 40,
      fat: 7,
      portion:
        "Edzésnap: ~200 g natúr, zsírszegény joghurt + 25 g granola + 50 g áfonya (vagy más bogyós gyümölcs).",
    },
    rest: {
      kcal: 225,
      protein: 8.5,
      carbs: 34,
      fat: 6,
      portion:
        "Pihenőnap: ~175 g joghurt + 20 g granola + 50 g áfonya – fehérje rendben, kicsit kevesebb ch/kalória.",
    },
  },
  {
    id: "4-U-proteines",
    mealId: "4-U",
    name: "Proteines joghurt granolával és áfonyával",
    timeOfDay: "Uzsonna – 4. nap",
    slot: "Uzsonna",
    day: 4,
    workout: {
      kcal: 290,
      protein: 20,
      carbs: 34,
      fat: 8,
      portion:
        "Edzésnap: ~180 g natúr joghurt + 15 g vaníliás whey (½ adag) + 20 g granola + 50 g áfonya. Jó fehérjés, edzésbarát uzsonna.",
    },
    rest: {
      kcal: 250,
      protein: 19,
      carbs: 28,
      fat: 7,
      portion:
        "Pihenőnap: ~160 g joghurt + 15 g whey + 15 g granola + 40–50 g áfonya – kevesebb granola, de a fehérje ugyanúgy erős.",
    },
  },
  {
    id: "4-U-smoothie-bowl",
    mealId: "4-U",
    name: "Smoothie bowl joghurtból, áfonyával és granolával",
    timeOfDay: "Uzsonna – 4. nap",
    slot: "Uzsonna",
    day: 4,
    workout: {
      kcal: 315,
      protein: 11,
      carbs: 39,
      fat: 13,
      portion:
        "Edzésnap: ~180 g natúr joghurt + 60–70 g áfonya turmixolva, a tetején 20 g granola + 40–50 g friss gyümölcs (alma/banán/eper) + 8–10 g mag (mandula, dió, tökmag).",
    },
    rest: {
      kcal: 255,
      protein: 9,
      carbs: 35,
      fat: 9,
      portion:
        "Pihenőnap: ~165 g joghurt + 50–60 g áfonya turmixolva, a tetején 15 g granola + 30–40 g friss gyümölcs + 5–7 g mag – kicsit visszafogottabb, de még mindig jóllakat.",
    },
  },
  // 5. NAPI UZSONNA – 5-U
  {
    id: "5-U-fitnesz-alap",
    mealId: "5-U",
    name: "Fitnesz alap",
    timeOfDay: "Uzsonna – 5. nap",
    slot: "Uzsonna",
    day: 5,
    workout: {
      kcal: 180,
      protein: 14,
      carbs: 8,
      fat: 9,
      portion:
        "Edzésnap: 2 db M-es főtt tojás + 80–100 g piros/vegyes paprika hasábokra vágva + 80–100 g uborka hasábokra vágva. Só, bors ízlés szerint, opcionálisan 1 tk mustár vagy kevés natúr joghurtos mártogatós. Nagyon „tiszta” fehérje + zöldség, minimális zsír és ch, délutáni stabilizáló snacknek.",
    },
    rest: {
      kcal: 120,
      protein: 8,
      carbs: 10,
      fat: 5,
      portion:
        "Pihenőnap: 1 db M-es főtt tojás + 100–120 g paprika + 100–120 g uborka hasábakra vágva. Itt kicsit visszavesszük a tojássárgája zsírját, cserébe még több ropogós zöldség – kalória lejjebb, telítettség megmarad.",
    },
  },
  {
    id: "5-U-turokremes-tojas",
    mealId: "5-U",
    name: "Túrókrémes töltött tojás",
    timeOfDay: "Uzsonna – 5. nap",
    slot: "Uzsonna",
    day: 5,
    workout: {
      kcal: 235,
      protein: 20,
      carbs: 10,
      fat: 12,
      portion:
        "Edzésnap: 2 db M-es főtt tojás hosszában félbevágva, a sárgája 50–60 g zsírszegény túróval vagy cottage cheese-zel (és ha kell, kevés natúr joghurttal) krémesre keverve, sóval, borssal, pici mustárral ízesítve, visszatöltve a tojásfehérjébe + 80–100 g paprika és 80–100 g uborka hasábakra vágva. Nagyon fehérjedús, klasszikus „bodybuilder” uzsonna.",
    },
    rest: {
      kcal: 225,
      protein: 19,
      carbs: 11,
      fat: 11,
      portion:
        "Pihenőnap: 2 db főtt tojás (ha szigorúbb akarsz lenni, 1 egész + 1 fehérje is lehet) + 40–50 g túró/cottage a sárgával kikeverve tölteléknek + 90–110 g paprika és 90–110 g uborka hasábakra vágva. Fehérje magas, zsír és kalória kicsit visszább húzva – recompos-barát uzsonna.",
    },
  },
  {
    id: "5-U-wrap",
    mealId: "5-U",
    name: "Wrap stílusú uzsonna",
    timeOfDay: "Uzsonna – 5. nap",
    slot: "Uzsonna",
    day: 5,
    workout: {
      kcal: 305,
      protein: 17,
      carbs: 32,
      fat: 11,
      portion:
        "Edzésnap: 1 db közepes (40–50 g) teljes kiőrlésű tortilla, belül 2 db M-es főtt tojás karikákra vágva + 60–80 g paprika és 60–80 g uborka vékony csíkokra vágva. A tortilla belseje vékonyan megkenve 1 tk mustárral vagy natúr joghurtos szósszal, majd szorosan feltekerve. Útra is ideális, kézből ehető fehérjés wrap, kicsivel több ch-val edzésnapra.",
    },
    rest: {
      kcal: 220,
      protein: 10,
      carbs: 26,
      fat: 8,
      portion:
        "Pihenőnap: 1 db kisebb (35–40 g) teljes kiőrlésű tortilla + 1 db M-es főtt tojás karikákra vágva + 70–90 g paprika és 70–90 g uborka csíkokra vágva, vékonyan megkenve mustárral/joghurttal, szorosan feltekerve. Kevesebb tojás és tortilla → kevesebb ch és zsír, a zöldségvolumen marad, így kalóriában barátságosabb.",
    },
  },
  // 6. NAPI UZSONNA – 6-U
  {
    id: "6-U-zold-smoothie",
    mealId: "6-U",
    name: "Zöld smoothie (alap)",
    timeOfDay: "Uzsonna – 6. nap",
    slot: "Uzsonna",
    day: 6,
    workout: {
      kcal: 120,
      protein: 2,
      carbs: 32,
      fat: 1,
      portion:
        "Edzésnap: ~40 g friss spenót, ~80 g banán, ~80 g alma, ~10 ml citromlé, 200–230 ml víz turmixolva. Könnyű, frissítő, főleg ch- és mikrotápanyag-forrás, ha a fehérjét máshonnan már bőven hozod.",
    },
    rest: {
      kcal: 100,
      protein: 2,
      carbs: 26,
      fat: 1,
      portion:
        "Pihenőnap: ~40 g spenót, ~60 g banán, ~70 g alma, ~10 ml citromlé, ~200 ml víz. Kicsit kevesebb gyümölcs → kevesebb ch, nagyon könnyű, vitaminos, hidratáló uzsonna.",
    },
  },
  {
    id: "6-U-avokados-toast",
    mealId: "6-U",
    name: "Avokádós pirítós paradicsommal",
    timeOfDay: "Uzsonna – 6. nap",
    slot: "Uzsonna",
    day: 6,
    workout: {
      kcal: 205,
      protein: 5,
      carbs: 26,
      fat: 10,
      portion:
        "Edzésnap: 1 szelet (~35–40 g) teljes kiőrlésű pirítós, ~60 g érett avokádó villával pépesítve, ~70 g vékonyra szeletelt paradicsom, só, bors, opcionálisan citromlé/fokhagymapor. Józsíros, rostos, könnyű, de laktató uzsonna.",
    },
    rest: {
      kcal: 165,
      protein: 5,
      carbs: 22,
      fat: 8,
      portion:
        "Pihenőnap: 1 kisebb szelet (~30–35 g) TK kenyér vagy 2 abonett, ~40–50 g avokádó, ~80 g paradicsom. Zsír és ch picit visszafogva, nagyobb zöldségvolumen, kulturált kalória.",
    },
  },
  {
    id: "6-U-proteines-zold-smoothie",
    mealId: "6-U",
    name: "Proteines zöld smoothie",
    timeOfDay: "Uzsonna – 6. nap",
    slot: "Uzsonna",
    day: 6,
    workout: {
      kcal: 180,
      protein: 14,
      carbs: 33,
      fat: 2,
      portion:
        "Edzésnap: zöld smoothie alap (~40 g spenót, ~80–90 g banán, ~80–90 g alma, ~10 ml citromlé, 220–250 ml víz) kiegészítve ~15 g natúr vagy vaníliás whey-vel. Könnyen emészthető, iszogatós fehérjés uzsonna edzős délutánra.",
    },
    rest: {
      kcal: 160,
      protein: 14,
      carbs: 27,
      fat: 2,
      portion:
        "Pihenőnap: ugyanúgy ~15 g fehérje, de kicsit kevesebb gyümölcs (~60 g banán, ~70 g alma). Ugyanannyi fehérje, kevesebb ch és kalória – lightabb verzióra hangolva.",
    },
  },
  // 7. NAPI UZSONNA – 7-U
  {
    id: "7-U-klasszikus",
    mealId: "7-U",
    name: "Ropogós klasszikus",
    timeOfDay: "Uzsonna – 7. nap",
    slot: "Uzsonna",
    day: 7,
    workout: {
      kcal: 220,
      protein: 6,
      carbs: 33,
      fat: 8,
      portion:
        "Edzésnap: 2 db rizskeksz (~20 g összesen) + 15 g mogyoróvaj + ~60–70 g banán (kb. ½ közepes) karikákra vágva a tetején. Jó kis közepes CH + zsír kombó, délutáni edzés / crossfit elé baráti.",
    },
    rest: {
      kcal: 145,
      protein: 4,
      carbs: 22,
      fat: 5,
      portion:
        "Pihenőnap: 1 db rizskeksz (~10 g) + 10–12 g mogyoróvaj + ~40–50 g banán (kb. ⅓–½ közepes) karikákban. Az élmény megmarad, de a kalória picit lejjebb megy.",
    },
  },
  {
    id: "7-U-proteines",
    mealId: "7-U",
    name: "Proteines kakaós–vaníliás verzió",
    timeOfDay: "Uzsonna – 7. nap",
    slot: "Uzsonna",
    day: 7,
    workout: {
      kcal: 270,
      protein: 18,
      carbs: 32,
      fat: 9,
      portion:
        "Edzésnap: 2 db rizskeksz (~20 g) + 12–15 g mogyoróvaj + 15 g vaníliás fehérjepor (½ adagkanál) 1–2 tk vízzel krémesre keverve, a tetején ~50–60 g banánkarika. Fehérjedús, édességpótló krémes snack.",
    },
    rest: {
      kcal: 205,
      protein: 13,
      carbs: 24,
      fat: 7,
      portion:
        "Pihenőnap: 1–1,5 db rizskeksz (~15 g) + 10–12 g mogyoróvaj + 10–12 g fehérjepor + ~40–50 g banánkarika. Ugyanaz a „desszertes” élmény, kicsit szolidabb makrókkal.",
    },
  },
  {
    id: "7-U-energiabomba",
    mealId: "7-U",
    name: "Energiabomba verzió",
    timeOfDay: "Uzsonna – 7. nap",
    slot: "Uzsonna",
    day: 7,
    workout: {
      kcal: 270,
      protein: 7,
      carbs: 39,
      fat: 9,
      portion:
        "Edzésnap: 2 db rizskeksz (~20 g) + 15–18 g mogyoróvaj + 1 púpozott tk zabpehely (~5 g) + 1 tk méz (~6–7 g) a krémbe keverve, a tetején ~60–70 g banánkarika. Lassabb (zab, rizs) és gyorsabb (méz, banán) CH + zsír → tökéletes pre-workout snack edzés előtt 45–90 perccel.",
    },
    rest: {
      kcal: 170,
      protein: 5,
      carbs: 24,
      fat: 6,
      portion:
        "Pihenőnap: 1 db rizskeksz (~10 g) + 10–12 g mogyoróvaj + 1 csapott tk zabpehely (~3–4 g) + ½ tk méz (~3–4 g) + ~40–50 g banánkarika. Ízben még mindig „energiabomba”, de kalóriában pihenőnap-kompatibilis.",
    },
  },

  // 1. NAPI VACSORA – 1-V
  {
    id: "1-V-alap",
    mealId: "1-V",
    name: "Grillezett csirke + párolt brokkoli/répa + kenyér",
    timeOfDay: "Vacsora – 1. nap",
    slot: "Vacsora",
    day: 1,
    workout: {
      kcal: 420,
      protein: 47,
      carbs: 35,
      fat: 10,
      portion:
        "Edzésnap: ~165 g csirkemell + ~160 g brokkoli + ~90 g répa + 1 tk olívaolaj + 1 szelet tk. kenyér (~35 g).",
    },
    rest: {
      kcal: 380,
      protein: 42,
      carbs: 32,
      fat: 9,
      portion:
        "Pihenőnap: ~145 g csirkemell + ~185 g brokkoli + ~90 g répa + 1 tk olívaolaj + ½–1 kisebb szelet tk. kenyér (~25 g).",
    },
  },
  {
    id: "1-V-stirfry",
    mealId: "1-V",
    name: "Csíkokra vágott stir-fry (wokos csirke + zöldség)",
    timeOfDay: "Vacsora – 1. nap",
    slot: "Vacsora",
    day: 1,
    workout: {
      kcal: 330,
      protein: 43,
      carbs: 19,
      fat: 9,
      portion:
        "Edzésnap: ~165 g csirkecsík + ~135 g brokkoli + ~70 g répa + extra paprika/cukkini + 1 tk olaj, szójaszósszal.",
    },
    rest: {
      kcal: 320,
      protein: 40,
      carbs: 21,
      fat: 9,
      portion:
        "Pihenőnap: ~145 g csirkecsík + ~165 g brokkoli + ~80 g répa + extra zöldség, 1 tk olaj, kenyér/rizs nélkül.",
    },
  },
  {
    id: "1-V-salata",
    mealId: "1-V",
    name: "Hideg csirkés-zöldséges saláta + kenyér",
    timeOfDay: "Vacsora – 1. nap",
    slot: "Vacsora",
    day: 1,
    workout: {
      kcal: 440,
      protein: 47,
      carbs: 31,
      fat: 13,
      portion:
        "Edzésnap: ~170 g csirke + ~220 g vegyes zöldség + 1 ek olívaolaj + 1 szelet tk. kenyér (~37 g), hideg salátaként.",
    },
    rest: {
      kcal: 370,
      protein: 41,
      carbs: 27,
      fat: 10,
      portion:
        "Pihenőnap: ~145–150 g csirke + ~240 g vegyes zöldség + 2–3 tk olívaolaj + ½–1 kisebb szelet tk. kenyér (~25 g).",
    },
  },

  // 2. NAPI VACSORA – 2-V
  {
    id: "2-V-klasszikus",
    mealId: "2-V",
    name: "Klasszikus tonhalsaláta",
    timeOfDay: "Vacsora – 2. nap",
    slot: "Vacsora",
    day: 2,
    workout: {
      kcal: 435,
      protein: 43,
      carbs: 14,
      fat: 23,
      portion:
        "Edzésnap: ~120 g tonhal + 2 főtt tojás + paradicsom (~120–150 g) + uborka (~100–120 g) + kevés lilahagyma + 1 ek olívaolaj. Opcionálisan: 1 szelet tk. kenyér (~30–35 g).",
    },
    rest: {
      kcal: 310,
      protein: 35,
      carbs: 15,
      fat: 12,
      portion:
        "Pihenőnap: ~100 g tonhal + 1 tojás + 1 fehérje + több paradicsom (150 g) + uborka (120–150 g) + kevés lilahagyma + 1 tk olívaolaj. Kenyér nélkül, vagy max. ½ vékony szelet tk. kenyér.",
    },
  },
  {
    id: "2-V-wrap",
    mealId: "2-V",
    name: "Fitnesz tonhal wrap",
    timeOfDay: "Vacsora – 2. nap",
    slot: "Vacsora",
    day: 2,
    workout: {
      kcal: 430,
      protein: 39,
      carbs: 40,
      fat: 12,
      portion:
        "Edzésnap: ~100–110 g tonhal + 1 főtt tojás szeletelve + 1 nagy tk. tortilla (~50–60 g) + paradicsom (60–80 g) + uborka (50–60 g) + 30–40 g saláta + 1 ek natúr joghurtos-mustáros öntet + max. 1 tk olívaolaj.",
    },
    rest: {
      kcal: 380,
      protein: 35,
      carbs: 31,
      fat: 13,
      portion:
        "Pihenőnap: ~90–100 g tonhal + 1 tojás (vagy 1 tojás + ½ sárgája) + 1 kisebb tk. tortilla (~35–40 g) vagy egy nagy fele + ugyanannyi zöldség + joghurtos öntet, olaj nélkül vagy max. 1 tk olívaolaj.",
    },
  },
  {
    id: "2-V-sutoben-rakott",
    mealId: "2-V",
    name: "Sütőben rakott tonhalas egytál (gratin/frittata)",
    timeOfDay: "Vacsora – 2. nap",
    slot: "Vacsora",
    day: 2,
    workout: {
      kcal: 480,
      protein: 51,
      carbs: 17,
      fat: 23,
      portion:
        "Edzésnap: ~120 g tonhal + 2 tojás + 1 tojásfehérje + ~200 g zöldség + 20–30 g natúr joghurt + 1 ek olívaolaj + 10–15 g reszelt light sajt, 180 °C-on 15–20 percig sütve.",
    },
    rest: {
      kcal: 330,
      protein: 41,
      carbs: 15,
      fat: 12,
      portion:
        "Pihenőnap: ~100 g tonhal + 1 tojás + 1–2 tojásfehérje + ~210 g zöldség + 20 g natúr joghurt + 1 tk olívaolaj, sajt nélkül vagy kevéssel.",
    },
  },
  // 3. NAPI VACSORA – 3-V
  {
    id: "3-V-kremes",
    mealId: "3-V",
    name: "Puha, krémes rántotta avokádóval",
    timeOfDay: "Vacsora – 3. nap",
    slot: "Vacsora",
    day: 3,
    workout: {
      kcal: 420,
      protein: 23,
      carbs: 20,
      fat: 24,
      portion:
        "Edzésnap: 3 db M-es tojás + 1 tk (5 g) olaj/vaj a sütéshez + 50 g avokádó (kb. 1/4–1/3 db) + 1 szelet (~30–35 g) teljes kiőrlésű kenyér. Francia stílusú, alacsony lángon, folyamatos keveréssel készített krémes rántotta, avokádóval és kenyérrel tálalva.",
    },
    rest: {
      kcal: 300,
      protein: 19,
      carbs: 15,
      fat: 17,
      portion:
        "Pihenőnap: 2 db tojás + 1 tojásfehérje + kb. 1/2 tk olaj vagy csak olajspray + 40 g avokádó + 1 kisebb/½ szelet (~20–25 g) tk. kenyér. Fehérje marad magas, de a zsír és ch picit visszabb véve estére.",
    },
  },
  {
    id: "3-V-zoldseges",
    mealId: "3-V",
    name: "Zöldséges rántotta avokádóval",
    timeOfDay: "Vacsora – 3. nap",
    slot: "Vacsora",
    day: 3,
    workout: {
      kcal: 455,
      protein: 26,
      carbs: 25,
      fat: 26,
      portion:
        "Edzésnap: 3 db tojás + 1 tk (5 g) olaj + kb. 50 g paprika + 20–25 g hagyma + 40–50 g spenót (friss/fagyasztott) + 40–50 g avokádó + 1 szelet (~30–35 g) teljes kiőrlésű kenyér. A hagyma/paprika/spenót kerül először a serpenyőbe, megpirítod, majd rá a felvert tojás, avokádó és kenyér mellé tálalva.",
    },
    rest: {
      kcal: 335,
      protein: 22,
      carbs: 22,
      fat: 18,
      portion:
        "Pihenőnap: 2 tojás + 1 fehérje + max. 1/2 tk olaj vagy csak spray + 60 g paprika + 20 g hagyma + 50–60 g spenót + 30–40 g avokádó + 1 kisebb/½ szelet (~20–25 g) tk. kenyér. Több zöldség, picit visszafogottabb zsír és ch, estére ideális.",
    },
  },
  {
    id: "3-V-lazacos",
    mealId: "3-V",
    name: "Füstölt lazacos prémium rántotta",
    timeOfDay: "Vacsora – 3. nap",
    slot: "Vacsora",
    day: 3,
    workout: {
      kcal: 445,
      protein: 30,
      carbs: 20,
      fat: 25,
      portion:
        "Edzésnap: 2 db tojás + 1 tojásfehérje + 1 tk (5 g) olaj/vaj + 40–50 g füstölt lazac csíkokra vágva + 40–50 g avokádó + 1 szelet (~30–35 g) teljes kiőrlésű tk. kenyér. A rántotta külön sül, mellé/tetejére megy a lazac és avokádó, citromlével, kaporral/borssal megszórva.",
    },
    rest: {
      kcal: 330,
      protein: 21,
      carbs: 16,
      fat: 19,
      portion:
        "Pihenőnap: 2 tojás (vagy 1 egész + 1–2 fehérje) + max. 1/2 tk olaj/spray + 25–30 g füstölt lazac + 30–40 g avokádó + 1 kisebb/½ szelet (~20–25 g) tk. kenyér. Ugyanaz a prémium élmény, picit visszafogottabb zsírral és kalóriával.",
    },
  },
  // 4. NAPI VACSORA – 4-V
  {
    id: "4-V-klasszikus",
    mealId: "4-V",
    name: "Pulykamell csíkok – Klasszikus",
    timeOfDay: "Vacsora – 4. nap",
    slot: "Vacsora",
    day: 4,
    workout: {
      kcal: 310,
      protein: 40,
      carbs: 22,
      fat: 7,
      portion:
        "Edzésnap: ~150 g pulykamell csíkokra vágva + 200 g zöldbab + 80–100 g répa párolva, ~5 g olívaolajjal (fele a húshoz, fele a zöldséghez), sóval, borssal, fokhagymával ízesítve.",
    },
    rest: {
      kcal: 288,
      protein: 36,
      carbs: 23,
      fat: 6,
      portion:
        "Pihenőnap: ~130–140 g pulykamell + 220–230 g zöldbab + 80–100 g répa, ~3–4 g olívaolajjal, nagy zöldségvolumen, kicsit kevesebb zsír.",
    },
  },

  {
    id: "4-V-wok",
    mealId: "4-V",
    name: "Pulykamell csíkok – Zöldséges wok",
    timeOfDay: "Vacsora – 4. nap",
    slot: "Vacsora",
    day: 4,
    workout: {
      kcal: 310,
      protein: 40,
      carbs: 22,
      fat: 7,
      portion:
        "Edzésnap: ~150 g pulykamell csíkokra vágva + 180–200 g zöldbab + 80–100 g répa wokban pirítva ~5 g olajjal, 1–2 tk light szójaszósszal, fokhagymával és gyömbérrel ázsiai stílusban.",
    },
    rest: {
      kcal: 280,
      protein: 35,
      carbs: 23,
      fat: 5,
      portion:
        "Pihenőnap: ~130 g pulykamell + 200–220 g zöldbab + 80–90 g répa, ~3–4 g olajjal, 1 tk light szójaszósszal – hús picit visszavéve, zöldség felhúzva.",
    },
  },
  {
    id: "4-V-kremes-joghurtos",
    mealId: "4-V",
    name: "Pulykamell csíkok – Krémes joghurtos",
    timeOfDay: "Vacsora – 4. nap",
    slot: "Vacsora",
    day: 4,
    workout: {
      kcal: 350,
      protein: 42,
      carbs: 26,
      fat: 9,
      portion:
        "Edzésnap: ~150 g pulykamell serpenyőben sütve, a végén 70–80 g natúr joghurttal vagy zsírszegény cottage cheese-zel gyorsan összeforgatva, mellé 180–200 g párolt zöldbab + 80–100 g répa, ~4–5 g olívaolajjal.",
    },
    rest: {
      kcal: 312,
      protein: 38,
      carbs: 26,
      fat: 6,
      portion:
        "Pihenőnap: ~130–140 g pulykamell + 200–220 g zöldbab + 80–90 g répa, a húshoz 50–60 g joghurt/cottage, ~3–4 g olívaolaj – krémes, de még mindig könnyű esti vacsora.",
    },
  },
  // 5. NAPI VACSORA – 5-V
  {
    id: "5-V-klasszikus",
    mealId: "5-V",
    name: "Túrókrém – klasszikus",
    timeOfDay: "Vacsora – 5. nap",
    slot: "Vacsora",
    day: 5,
    workout: {
      kcal: 270,
      protein: 27,
      carbs: 29,
      fat: 3,
      portion:
        "Edzésnap: ~200 g zsírszegény túró + 5 g méz (~1 tk) + sok fahéj, mellé 1 szelet (35–40 g) teljes kiőrlésű pirítós pirítva. Könnyű, de laktató édes túrós vacsora.",
    },
    rest: {
      kcal: 240,
      protein: 24,
      carbs: 25,
      fat: 3,
      portion:
        "Pihenőnap: ~180 g zsírszegény túró + 3–5 g méz + sok fahéj + 1 kisebb szelet (30–35 g) teljes kiőrlésű pirítós vagy 2 db abonett/puffasztott szelet. Kicsit karcsúsított, de a fehérje marad magas.",
    },
  },
  {
    id: "5-V-proteines",
    mealId: "5-V",
    name: "Túrókrém – proteines vaníliás",
    timeOfDay: "Vacsora – 5. nap",
    slot: "Vacsora",
    day: 5,
    workout: {
      kcal: 300,
      protein: 38,
      carbs: 26,
      fat: 4,
      portion:
        "Edzésnap: ~180–190 g zsírszegény túró + 15 g vaníliás whey (½ adag) 1–2 ek vízzel/joghurttal krémesre keverve, mellé 1 szelet (35–40 g) teljes kiőrlésű pirítós vagy 3 db abonett. Brutál fehérjedús, esti „fit desszert”.",
    },
    rest: {
      kcal: 280,
      protein: 36,
      carbs: 23,
      fat: 3,
      portion:
        "Pihenőnap: ~170–180 g túró + 15 g vaníliás whey, 1–2 ek vízzel/joghurttal lazítva, mellé 1 vékonyabb szelet (30–35 g) teljes kiőrlésű kenyér vagy 2 db abonett. Fehérje marad nagyon erős, ch és kcal picit visszafogva.",
    },
  },
  {
    id: "5-V-kapros-uborkas",
    mealId: "5-V",
    name: "Túrókrém – sós kapros-uborkás",
    timeOfDay: "Vacsora – 5. nap",
    slot: "Vacsora",
    day: 5,
    workout: {
      kcal: 295,
      protein: 27,
      carbs: 28,
      fat: 7,
      portion:
        "Edzésnap: ~200 g zsírszegény túró + 70–80 g apró kockákra vágott uborka + sok kapor, só, bors + max. 1 tk (3–5 g) olívaolaj, mellé 1 szelet (35–40 g) teljes kiőrlésű pirítós. Sós, „körözöttes” jellegű, nagyon jó esti fehérjeforrás.",
    },
    rest: {
      kcal: 245,
      protein: 24,
      carbs: 25,
      fat: 5,
      portion:
        "Pihenőnap: ~180 g túró + 80–100 g uborka + kapor, só, bors, olívaolaj max. pár csepp (0–3 g), mellé 1 kisebb szelet (30–35 g) teljes kiőrlésű kenyér vagy 2 db abonett/puffasztott szelet. Kevesebb zsír és ch, több zöldség – kalóriabarát esti opció.",
    },
  },
  // 6. NAPI VACSORA – 6-V
  {
    id: "6-V-tepsis-lazac-burgonyaval",
    mealId: "6-V",
    name: "Lazac – Tepsis egyben a burgonyával",
    timeOfDay: "Vacsora – 6. nap",
    slot: "Vacsora",
    day: 6,
    workout: {
      kcal: 525,
      protein: 38,
      carbs: 39,
      fat: 24,
      portion:
        "Edzésnap: ~140–150 g lazacfilé (bőrrel vagy anélkül) + ~180–200 g burgonya 0,5–1 cm-es szeletekre/cikkekre vágva, egy tepsiben 180 °C-on 18–22 percig sütve, összesen ~5 g olívaolajjal. Mellé ~180–200 g párolt spenót (friss vagy fagyasztott), só, bors, fokhagyma, citrom ízlés szerint.",
    },
    rest: {
      kcal: 460,
      protein: 36,
      carbs: 31,
      fat: 21,
      portion:
        "Pihenőnap: ~130–140 g lazacfilé + ~130–150 g burgonya tepsiben sütve 180 °C-on, ~200–220 g párolt spenót, összesen ~3–4 g olívaolaj. Kicsit kevesebb krumpli és olaj, több spenót, így kalóriában karcsúbb, de laktató vacsora.",
    },
  },
  {
    id: "6-V-citromos-kapros-lazac",
    mealId: "6-V",
    name: "Lazac – Citromos-kapros verzió",
    timeOfDay: "Vacsora – 6. nap",
    slot: "Vacsora",
    day: 6,
    workout: {
      kcal: 520,
      protein: 38,
      carbs: 37,
      fat: 23,
      portion:
        "Edzésnap: ~140–150 g lazacfilé citromlével meglocsolva, kaporral megszórva, serpenyőben vagy sütőben sütve ~3–4 g olívaolajjal; mellé ~170–190 g főtt vagy sütőben sült burgonya köretnek és ~180–200 g párolt spenót. Skandináv hangulatú, tiszta, fehérjedús vacsora.",
    },
    rest: {
      kcal: 450,
      protein: 36,
      carbs: 30,
      fat: 20,
      portion:
        "Pihenőnap: ~130–140 g citromos–kapros lazac + ~130–150 g főtt/sült burgonya + ~200–220 g párolt spenót, összesen kb. 3 g olívaolajjal. Ugyanaz az ízvilág, de visszafogottabb krumpli és zsír pihenős estére.",
    },
  },
  {
    id: "6-V-rakott-lazac-spenot-burgonya",
    mealId: "6-V",
    name: "Rakott lazac–spenót–burgonya tál",
    timeOfDay: "Vacsora – 6. nap",
    slot: "Vacsora",
    day: 6,
    workout: {
      kcal: 520,
      protein: 38,
      carbs: 37,
      fat: 23,
      portion:
        "Edzésnap: ~140–150 g lazacfilé falatnyi csíkokra/kockákra vágva, ~170–190 g vékony szeletekre vágott burgonya az aljára, ~180–200 g előpárolt vagy jól kinyomkodott spenót a középső rétegnek, a tetején fűszerezett lazac, 180 °C-on kb. 20 percig sütve, összesen ~5 g olívaolajjal. Kanállal szedhető, meal prep-barát egytálétel.",
    },
    rest: {
      kcal: 458,
      protein: 36,
      carbs: 31,
      fat: 21,
      portion:
        "Pihenőnap: ~130–140 g lazac + ~130–150 g burgonya + ~200–220 g spenót, ugyanígy rétegezve és 180 °C-on átsütve, ~3–4 g olívaolajjal. Kisebb krumpli- és olajadag, több zöld – karcsúbb, de még mindig laktató rakott vacsora.",
    },
  },
  // 7. NAPI VACSORA – 7-V
  {
    id: "7-V-salata",
    mealId: "7-V",
    name: "Salátás cottage cheese tál",
    timeOfDay: "Vacsora – 7. nap",
    slot: "Vacsora",
    day: 7,
    workout: {
      kcal: 340,
      protein: 36,
      carbs: 24,
      fat: 11,
      portion:
        "Edzésnap: ~180–200 g zsírszegény cottage cheese + 50–60 g csirkemellsonka csíkokra vágva + 1 db M-es főtt tojás szeletelve + 150–180 g vegyes zöldség (paradicsom, uborka, paprika, retek), 1 tk olívaolajjal meglocsolva, opcionálisan 1 kisebb szelet (~30 g) teljes kiőrlésű kenyérrel.",
    },
    rest: {
      kcal: 320,
      protein: 34,
      carbs: 20,
      fat: 9,
      portion:
        "Pihenőnap: ~170–180 g cottage cheese + 40–50 g csirkemellsonka + 1 db M-es főtt tojás + 180–200 g vegyes zöldség, az olaj csak pár csepp vagy olajspray, kenyér max. ½ vékony szelet vagy elhagyható.",
    },
  },
  {
    id: "7-V-wrap",
    mealId: "7-V",
    name: "Cottage cheese-es sonkás wrap",
    timeOfDay: "Vacsora – 7. nap",
    slot: "Vacsora",
    day: 7,
    workout: {
      kcal: 335,
      protein: 30,
      carbs: 38,
      fat: 6,
      portion:
        "Edzésnap: 1 db ~50 g teljes kiőrlésű tortilla + ~150 g cottage cheese + 40–50 g csirkemellsonka csíkokra vágva + 80–100 g aprított zöldség (paradicsom, paprika, uborka, saláta), 1 ek natúr joghurtos-mustáros öntettel, extra olaj nélkül, szorosan feltekerve.",
    },
    rest: {
      kcal: 270,
      protein: 27,
      carbs: 24,
      fat: 5,
      portion:
        "Pihenőnap: 1 db kisebb (~40 g) teljes kiőrlésű tortilla vagy ½ nagy + ~130 g cottage cheese + 40 g csirkemellsonka + sok zöldség, light natúr joghurtos öntettel, olaj nélkül.",
    },
  },
  {
    id: "7-V-salatas",
    mealId: "7-V",
    name: "Salátás cottage cheese–sonka tál",
    timeOfDay: "Vacsora – 7. nap",
    slot: "Vacsora",
    day: 7,
    workout: {
      kcal: 415,
      protein: 39,
      carbs: 30,
      fat: 12,
      portion:
        "Edzésnap: nagy tál: ~200 g cottage cheese „kupacokban” a tetején + 60 g csirkemellsonka csíkokra vágva + 220–250 g vegyes saláta (jégsaláta/rukkola, paradicsom, uborka, paprika, retek) + 1 ek (~8–10 g) olívaolajos–citromos öntet, mellé 1 kisebb szelet (~30–35 g) teljes kiőrlésű kenyér.",
    },
    rest: {
      kcal: 370,
      protein: 36,
      carbs: 27,
      fat: 10,
      portion:
        "Pihenőnap: ~180–190 g cottage cheese + 50 g csirkemellsonka + 230–260 g vegyes saláta, az öntethez max. 1 tk olívaolaj citromlével, sóval, borssal, a kenyér pedig max. ½ szelet (~20 g) vagy abonett / puffasztott szelet.",
    },
  },
];
export default MEALS;
