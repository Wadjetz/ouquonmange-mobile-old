# Ou qu'on mange React Native application

## Dependencies
- [React Native](https://facebook.github.io/react-native/)
- [Eslint](http://eslint.org/)
- [Eslint Plugin React](https://github.com/yannickcr/eslint-plugin-react)

```sh
npm install
npm install -g react-native-cli
```

## Run

### IOS
```sh
react-native run-ios
```

### Android
```sh
react-native run-android
```

#### Generating the release APK
```sh
cd android && ./gradlew assembleRelease
```

#### Testing the release build of your app
```sh
cd android && ./gradlew installRelease
```
