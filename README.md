# Étrend

Expo + TypeScript alapú étrend- és edzéssegítő app.

## Fő funkciók

- Saját étrend edzésnapra és pihenőnapra
- Makróösszesítés
- Top 25 / top ételszűrés
- Kiegészítő-terv light / heavy ciklushoz
- Bevásárlókocsi
- Elkészítési és következő-lépés kvízek
- Edzésnaptár és progresszió alapok

## Indítás

```bash
npm install
npx expo start
```

## Fejlesztés

Az app az Expo Router fájl-alapú útvonalkezelését használja. A fő képernyők az `app/` mappában vannak, a domain-adatok és segédlogika pedig a `types/` és `constants/` mappákban.
