# AppTesti

Tämä repo sisältää kaksi projekti-esimerkkiä: **Expo** (`ExpoTesti`) ja **Ionic + Capacitor** (`IonicTesti`). Alla on ohjeet, kuinka ne asennetaan ja käynnistetään paikallisesti.

---

## Yleiset vaatimukset ✅
- Node.js (suositus LTS-versio, esim. 18+)
- npm tai yarn
- Android-emulaattori (Android Studio) jos ajat Androidilla
- macOS + Xcode, jos haluat ajaa iOS-sovellusta laitteella/simulaattorilla

---

## Expo (`ExpoTesti`) 🔧
1. Siirry projektihakemistoon:

   ```bash
   cd ExpoTesti
   ```

2. Asenna riippuvuudet:

   ```bash
   npm install
   # tai
   yarn
   ```

3. Käynnistä kehityspalvelin:

   ```bash
   npm run start
   # tai käynnistä suoraan tietylle alustalle
   npm run android   # avaa Android-emulaattorin tai Expo Go
   npm run ios       # (macOS) avaa iOS-simulaattorin
   npm run web       # aja webbiversio selaimessa
   ```

Vinkit:
- Käytä Expo Go -sovellusta fyysisellä laitteella skannaamalla QR-koodi tai käytä emulaattoria.
- Jos tarvitset `expo-cli` globaalisti, voit asentaa sen: `npm i -g expo-cli` (usein riittää, että käytät npm-skriptejä).

---

## Ionic + Capacitor (`IonicTesti`) ⚙️
1. Siirry projektihakemistoon:

   ```bash
   cd IonicTesti
   ```

2. Asenna riippuvuudet:

   ```bash
   npm install
   # tai
   yarn
   ```

3. Kehityspalvelin (web):

   ```bash
   npm run dev
   ```

   Avaa selaimessa: http://localhost:5173 (oletus Vite-portti)

4. Rakentaminen ja ajaminen natiivisti (Android/iOS):

   - Ensimmäisellä kerralla lisää tarvittava alusta (esim. Android):

     ```bash
     npm run build     # rakenna web-assetit
     npx cap add android
     npx cap sync android
     npx cap open android   # avaa Android-projekti Android Studiossa
     ```

   - iOS (macOS):

     ```bash
     npm run build
     npx cap add ios
     npx cap sync ios
     npx cap open ios       # avaa Xcode-projekti
     ```

   Huom: kun teet muutoksia web-koodiin, suorita `npm run build` ja `npx cap sync` jotta päivitykset siirtyvät natiiviprojektiin.

5. Muita hyödyllisiä komentoja:

   ```bash
   npm run build     # luo tuotantoversion
   npm run preview   # esikatsele tuotantobuildia paikallisesti
   npm run test.e2e  # aja Cypress e2e -testit
   npm run test.unit # aja yksikkötestit
   ```

Vinkit:
- Varmista, että Android Studio ja tarvittavat SDK:t on asennettu ja ympäristömuuttujat (esim. ANDROID_HOME) ovat kunnossa.
- iOS-kehitykseen tarvitset macOS:n ja Xcode:n.

---

Jos haluat, voin vielä lisätä lyhyen vianetsintä-osion tai esimerkkikomentosarjoja emulaattoreiden käyttöönottoon. Kerro, haluatko lisäyksiä! ✅