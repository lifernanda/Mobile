import {Alert, Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View} from "react-native";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

export default function App() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSignIn(){
        if(!email.trim() || !password.trim()){
            Alert.alert("Erro", "Por favor, preencha todos os campos.")
        } 
        else {
            Alert.alert("Bem-vindo", `Login realizado com Email: ${email}`)
        }
    }
    
    return (
        <SafeAreaView style={{flex:1}}>
            <KeyboardAvoidingView
                style={{flex:1}}
                behavior={Platform.select({ios: "padding", android:"height"})}
            >
                <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
                    <View style={styles.container}>
                       <Image
                            source={require('@/src/assets/img1.png')}
                            style={styles.img}
                       />
                       <Text style={styles.title}>Entrar</Text>
                        <Text style={styles.subtitulo}>Acesse sua conta com e-mail e senha.</Text>
                          <View style={styles.form}>
                              <Input 
                                    placeholder="Email"
                                    keyboardType="email-address"
                                    onChangeText={setEmail}
                              />
                              <Input 
                                  placeholder="Senha"
                                  secureTextEntry
                                  onChangeText={setPassword}
                              />
                              <Button label="Entrar"  onPress={handleSignIn}/>
                          </View>
                          <Text style={styles.footerText}>
                            Não tem conta? {" "}
                          <Link
                                href="/signin"
                                style={styles.footerLink}
                                >
                                Cadastre-se Aqui.</Link></Text>
                   </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        backgroundColor: "#edecaf"
    },
    img: {
        width: "100%",
        height: 320,
        marginTop: 64,
        resizeMode: "contain"
    },
    title: {
        fontSize: 32,
        fontWeight: 900,
        marginTop: 20
    },
    subtitulo: {
        fontSize: 16
    },
    form: {
        marginTop: 24,
        gap: 12
    },
    footerText:{
        textAlign: "center",
        marginTop: 24,
        color: "#000000"
    },

    footerLink:{
        color: "#b5a355",
        fontWeight: 700
    }

})