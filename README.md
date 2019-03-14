npm install -g ionic
ionic start
>sample
cd sample
npm install
npm start
ionic serve || ionic serve -l
ionic build --help
ionic build --prod

## Android Dev

1. Capacitor
ionic capacitor add android
ionic build --prod
ionic capacitor copy android
ionic capacitor run android --prod --release
ionic capacitor run android || npx cap open android


2. Cordova
npm i -g cordova
ionic cordova prepare android --prod
ionic cordova compile android
ionic cordova run android --prod --release
ionic cordova build android --prod --release
cordova run --emulator

Steps to run:

ionic cordova platform rm android
ionic cordova platform add android
ionic cordova run android --prod
ionic cordova platform rm ios
ionic cordova platform add ios
ionic cordova run ios

Production Build
ionic cordova build android --prod



ionic serve
ionic generate

Ref:
https://forum.ionicframework.com/t/what-does-prod-flag-do-exactly/120553/6
https://forum.ionicframework.com/t/prod-version-android-debug-apk-for-release/113721/5


