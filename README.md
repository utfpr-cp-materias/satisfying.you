# Satisfying.you

Este é um projeto de aplicativo móvel desenvolvido com React Native para a disciplina Programação Para Dispositivos Móveis (AS65D - N15).

### Instalar Dependências

```bash
npm install
```

###  Configurações Manuais Obrigatórias

Como as pastas `android` e `ios` foram removidas, algumas configurações feitas diretamente nelas precisam ser reaplicadas manualmente após o `npm install` gerar a pasta `android` novamente.

#### a) Travar a Orientação da Tela (Portrait)

Para garantir que o aplicativo rode apenas no modo retrato (vertical), é preciso editar o manifesto do Android.

1.  Abra o arquivo: `android/app/src/main/AndroidManifest.xml`
2.  Encontre a tag `<activity>` principal (a que contém `android:name=".MainActivity"`).
3.  Adicione a seguinte propriedade a essa tag: `android:screenOrientation="portrait"`.

**Exemplo:**
```xml
      <activity
        android:name=".MainActivity"
        android:label="@string/app_name"
        android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|screenSize|smallestScreenSize|uiMode"
        android:launchMode="singleTask"
        android:windowSoftInputMode="adjustResize"
        android:exported="true"
        android:screenOrientation="portrait"> // <-- ADICIONE ESTA LINHA
        <intent-filter>
            <action android:name="android.intent.action.MAIN" />
            <category android:name="android.intent.category.LAUNCHER" />
        </intent-filter>
      </activity>
```

#### b) Vincular Fontes de Ícones (React Native Vector Icons)

Para que os ícones da biblioteca `react-native-vector-icons` funcionem corretamente, é preciso aplicar a configuração de fontes no Gradle.

1.  Abra o arquivo: `android/app/build.gradle`
2.  Adicione a seguinte linha no **final** do arquivo:

```groovy
apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")
```

### 3. Executar o Aplicativo

Após instalar as dependências e aplicar as configurações manuais, você pode rodar o projeto.

```bash
npx react-native run-android
```

O aplicativo deve compilar e iniciar no seu dispositivo/emulador.