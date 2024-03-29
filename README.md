## GREEN NATIVE

### Intall

```
npm i green-native react-native-vector-icons
```

Require

```
npx react-native-link
```

### AnimationButton

#### Simple buttom

```javascript
import { AnimationButton } from "green-native";

<AnimationButton
  animation="zoom-out"
  text="Green Native"
  background="red"
  paddingHorizontal={15}
  paddingVertical={10}
  radius={6}
/>;
```

#### Using CustomComponents

```javascript
import { AnimationButton } from "green-native";

<AnimationButton
  animation="zoom-in"
  CustomComponents={() => (
    <View
      style={{
        padding: 10,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 18 }}>Green Native</Text>
    </View>
  )}
/>;
```

#### Available props

| Name              | Type                       | Default                   |
| ----------------- | -------------------------- | ------------------------- |
| text              | string: text center button | none                      |
| color             | color                      | #fff                      |
| width             | number                     | none                      |
| height            | number                     | none                      |
| fontSize          | number                     | 16                        |
| background        | color                      | #28C953                   |
| radius            | number                     | 0                         |
| isBold            | boolean                    | false                     |
| paddingHorizontal | number                     | 5                         |
| paddingVertical   | number                     | 5                         |
| fontFamily        | string: font name          | none                      |
| animation         | string: zoom-in, zoom-out  | zoom-in                   |
| onPress           | function                   | console.log(Green Native) |
| CustomComponents  | Element                    | none                      |

### Icon

```javascript
import { Icon } from "green-native";

<Icon type="Ionicons" name="camera" size={30} color={Colors.purpleDark} />;
```

#### Available props

Require react-native-vector-icons

Icons can be found at: https://oblador.github.io/react-native-vector-icons

| Name  | Type                              | Default     |
| ----- | --------------------------------- | ----------- |
| type  | string: AntDesign, FontAwesome... | Ionicons    |
| name  | string: camera, filter...         | flask-sharp |
| size  | number                            | 18          |
| color | color                             | #28C953     |

### CheckBox

```javascript
import { Colors, CheckBox } from "green-native";

const GreenMaster = () => {
  const [status, setStatus] = React.useState(false);

  return (
    <View>
      <CheckBox
        checked={status}
        text="This this Green Native CheckBox"
        textColor={Colors.messenger}
        iconColor={Colors.green}
        iconCheckedColor={Colors.orange}
        onPress={() => {
          setStatus(!status);
        }}
      />
    </View>
  );
};
```

#### Available props

| Name             | Type                              | Default                   |
| ---------------- | --------------------------------- | ------------------------- |
| text             | string: text right of icon        | none                      |
| checked          | boolean                           | false                     |
| iconType         | string: AntDesign, FontAwesome... | MaterialCommunityIcons    |
| iconName         | string: camera, rocket...         | checkbox-blank-outline    |
| iconCheckedName  | string: camera, rocket...         | checkbox-marked           |
| iconColor        | color                             | #607D8B                   |
| iconCheckedColor | color                             | #28C953                   |
| iconSize         | number                            | 30                        |
| textSize         | number                            | 16                        |
| textColor        | number                            | #28C953                   |
| onPress          | function                          | console.log(Green Native) |
| activeOpacity    | number                            | 0.5                       |

### Colors

```javascript
import { Colors } from "green-native";

<Text style={{ color: Colors.green, fontSize: 18 }}>Green Native</Text>;
```

#### Available props

| Name         | Color            |
| ------------ | ---------------- |
| transparent  | rgba(0,0,0,0)    |
| trans05      | rgba(0,0,0,0.05) |
| trans50      | rgba(0,0,0,0.5)  |
| primaryColor | #28C953          |
| red          | #F44336          |
| blue         | #2196F3          |
| pink         | #E91E63          |
| orange       | #FF5722          |
| blueGrey     | #607D8B          |
| purple       | #9C27B0          |
| blueGrey     | #607D8B          |
| borderColor  | #ECEFF1          |

Light or dark colors can be used

```javascript
<Text style={{ color: Colors.orangeDark, fontSize: 18 }}>Green Native</Text>
```

Social network color

```javascript
<Text style={{ color: Colors.youtube, fontSize: 18 }}>Green Native</Text>
```

### Button

```javascript
import { Colors, Button } from "green-native";

<Button
  isOutLine={true}
  background={Colors.orange}
  boder={1}
  boderColor={Colors.green}
  radius={4}
  onPress={() => {
    console.log("This is handle");
  }}
/>;
```

#### Available props

| Name       | Type                       | Default                   |
| ---------- | -------------------------- | ------------------------- |
| text       | string: text center button | none                      |
| width      | number                     | none                      |
| height     | number                     | none                      |
| background | color                      | #28C953                   |
| textColor  | color                      | #fff                      |
| textBold   | boolean                    | false                     |
| fontSize   | number                     | 14                        |
| radius     | number                     | 0                         |
| boder      | number                     | 0                         |
| boderColor | color                      | #28C953                   |
| isOutLine  | boolean                    | false                     |
| isDark     | boolean                    | false                     |
| isLight    | boolean                    | false                     |
| onPress    | function                   | console.log(Green Native) |

### Spinner

```javascript
import { Colors, Spinner } from "green-native";

<Spinner
  type="full"
  size="small"
  transparent={true}
  color={Colors.orangeDark}
/>;
```

#### Available props

| Name        | Type                                    | Default                          |
| ----------- | --------------------------------------- | -------------------------------- |
| type        | string: full, fullscreen -> full screen | 100%                             |
| transparent | boolean                                 | false -> backgroundColor: '#fff' |
| width       | number                                  | fullscreen                       |
| height      | number                                  | fullscreen                       |
| color       | color                                   | #28C953                          |
| size        | string: large, small                    | large                            |

### ButtonIcon

```javascript
import { Colors, ButtonIcon } from "green-native";

<ButtonIcon
  text="This is Green Native"
  textColor={Colors.black}
  textSize={20}
  onPress={() => {
    console.log("This is Green Native");
  }}
/>;
```

#### Available props

| Name              | Type                              | Default                          |
| ----------------- | --------------------------------- | -------------------------------- |
| text              | string: text on right of icon     | 100%                             |
| iconType          | string: AntDesign, FontAwesome... | false -> backgroundColor: '#fff' |
| iconName          | string: camera, roket..           | fullscreen                       |
| iconColor         | color                             | #28C953                          |
| iconSize          | number                            | 26                               |
| textColor         | color                             | #28C953                          |
| textSize          | number                            | 16                               |
| isBold            | boolean                           | false                            |
| onPress           | function                          | console.log(Green Native)        |
| paddingHorizontal | number                            | 0                                |
| paddingVertical   | number                            | 0                                |
| activeOpacity     | number                            | 0.5                              |

### ErrorNotification

```javascript
import { Colors, ErrorNotification } from "green-native";

<ErrorNotification
  text="Please enter password"
  color={Colors.redLight}
  fontSize={18}
/>;
```

#### Available props

| Name             | Type           | Default |
| ---------------- | -------------- | ------- |
| text             | String, number | none    |
| color            | color          | #28C953 |
| fontSize         | number         | 14      |
| isBold           | boolean        | false   |
| marginVertical   | number         | 0       |
| marginHorizontal | number         | 0       |

### Hook

#### useKeyboard

```javascript
import { useKeyboard } from "green-native";

const keyboard = useKeyboard(); // true, false
```

### Other

#### screenHeight, screenWidth

```javascript
import { screenHeight, screenWidth } from "green-native";

<View style={{ width: screenWidth, height: screenHeight }} />;
```

#### windowHeight, windowWidth

```javascript
import { windowHeight, windowWidth } from "green-native";

<View style={{ width: windowWidth, height: windowHeight }} />;
```

#### GreenStyles: Center, Row, ColumCenter, ShadowBox, Title

#### Function

| Name           | Type     | Input                 | Output          |
| -------------- | -------- | --------------------- | --------------- |
| isIOS          | function |                       | true - false    |
| is18x9         | function |                       | true - false    |
| isNull         | function |                       | true - false    |
| saveToStorage  | function | String: name, value   |                 |
| getFromStorage | function | String: name          | String          |
| PhoneCall      | function | String: phone number  | Open phone call |
| parseMoney     | function | String, number: 69000 | 69.000          |

## Contact

NGUYEN PHUC BAO CHAU

- Website: https://ischau.org
- Website 2: https://dovuihainao.com
- Telegram: https://t.me/baochau9xx
- Facebook: https://facebook.com/baochau9xx
- Mail: chau.02it@gmail.com

### Keyword

baochau9xx, green, green-native, green native, react-native, native, baochau, dovuihainao
