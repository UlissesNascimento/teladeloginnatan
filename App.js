import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  Image,
  ImageBackground,
  SafeAreaProvider,
} from "react-native";


export default function App() {
  // Estados para armazenar os valores dos inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const image = { uri: "https://stock.adobe.com/br/search?k=degrade" };
  // Função para lidar com o login
  const handleLogin = () => {
    // Validação: Verifica se os campos estão vazios
    if (email.trim() === "" || password.trim() === "") {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }
    

    Alert.alert("Sucesso", `Bem-vindo ao aplicativo, ${email}!`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
      >
        <View style={styles.innerContainer}>
          <Image style={styles.fotos} source={require("./assets/foto2.jpg")} />

          {/* Campo de E-mail */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>E-mail ou Usuário</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu e-mail"
              placeholderTextColor="#aaa"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Campo de Senha */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Senha</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite sua senha"
              placeholderTextColor="#aaa"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />
          </View>

          {/* Botão de Login */}
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          {/* Link "Esqueci minha senha" */}
          <TouchableOpacity>
            <Text style={styles.link}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#333",
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#fff", // Texto branco para contraste
    marginBottom: 8,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Input semi-transparente
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    color: "#333",
  },
  button: {
    backgroundColor: "#fff",
    width: "100%",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#FF4500",
    fontSize: 18,
    fontWeight: "bold",
  },
  link: {
    marginTop: 20,
    color: "#fff",
    fontSize: 14,
    textDecorationLine: "underline",
  },
  fotos: {
    width: 100,
    height: 100,
    marginBottom: 30,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: "#fff",
  },
  image: {
    width: 100,
    height: 100,
  }
});
