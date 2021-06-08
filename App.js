import React, { Component } from "react";
import {StyleSheet,View,TextInput,TouchableOpacity,Text, Alert, StatusBar,} from "react-native";
import QRCode from "react-native-qrcode-svg";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      valueForQRCode: "Hello",
    };
  }
  
  checkValue = () => {
    let text = this.inputValue;
    if(text === "") {
      this.setState({text: Alert.alert("Ошибка!")});
    }
  };

  getTextInputValue = () => {
    // Функция получения значение из инпута
    // и установка значения QR Code
    this.setState({ valueForQRCode: this.state.inputValue });
  };

  getAuthor = () => {
     Alert.alert("Автор", "Скорбеж А.Д.\nГруппа: 881073");
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <StatusBar>
        </StatusBar>
        <QRCode
          value={this.state.valueForQRCode}
          size={250}

        />
        <TextInput
          style={styles.TextInputStyle}
          onChangeText={(text) => this.setState({inputValue: text})}
          underlineColorAndroid="transparent"
          placeholder="Введите текст для генерации QR-кода"
        />

        <TouchableOpacity
          onPress={this.checkValue, this.getTextInputValue}
          activeOpacity={0.6}
          style={styles.button}
        >
          <Text style={styles.TextStyle}>Сгенерировать</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.getAuthor}
          activeOpacity={0.7}
          style={styles.button}
        >
          <Text style={styles.TextStyle}>Автор</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default App;
const styles = StyleSheet.create({
  MainContainer: {
    padding: 20,
    backgroundColor: "#4d6cb0",
    flex: 1,
    margin: 0,
    alignItems: "center",
    paddingTop: 50,
  },

  TextInputStyle: {
    fontWeight: "bold",
    backgroundColor: "#FFFFFF",
    fontSize: 20,
    width: "100%",
    height: 60,
    marginTop: 30,
    borderWidth: 0,
    textAlign: "center",
    borderRadius: 25,
  },

  button: {
    width: "90%",
    paddingTop: 15,
    marginTop: 25,
    paddingBottom: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
  },

  TextStyle: {
    color: "#000000",
    textAlign: "center",
    fontSize: 30,
  },
});
