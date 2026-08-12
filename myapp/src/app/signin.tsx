import { Alert, Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from "react-native"
import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { Link } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import { useState } from "react"

export default function SignIn(){
    const  [name, setName] = useState("");
    const  [email, setEmail] = useState("");
    const  [password, setPassword] = useState("");
    const  [confirmPassword, setConfirmPassword] = useState("");

    function handleSignIn(){
        if(password != confirmPassword){
            Alert.alert("As senhas não coincidem")
            return
        }
        if(email.trim() ==="" || name.trim() ==="" || password.trim() ==="" || 
        confirmPassword.trim() ===""){
            Alert.alert("Preencha todos os campos")
            return
        }
        alert(`Login realizado com sucesso, seja bem-vindo(a), ${name}!`)
    }

    return(
        <SafeAreaView style={{flex:1}}>
            <KeyboardAvoidingView
                        style={{flex:1}}
                        behavior={Platform.select({ios: "padding", android:"height"})}
                    >
                        <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
                            <View style={styles.container}>
                               <Image
                                    source={require('@/src/assets/img2.png')}
                                    style={styles.img}
                               />
                               <Text style={styles.title}>Cadastrar</Text>
                                <Text style={styles.subtitulo}>Crie sua conta para acessar.</Text>
                                  <View style={styles.form}>
                                      <Input placeholder="Nome"
                                      onChangeText={setName}/>
                                      <Input placeholder="Email"
                                      keyboardType="email-address"
                                      onChangeText={setEmail}
                                      />
                                      <Input placeholder="Senha"
                                      secureTextEntry
                                      onChangeText={setPassword}
                                      />
                                      <Input placeholder="Confirmar Senha"
                                      secureTextEntry
                                      onChangeText={setConfirmPassword}
                                      />
                                      <Button label="Entrar" onPress={handleSignIn}/>
                                  </View>
                                  <Text style={styles.footerText}>
                                    Já tem conta? {" "}
                                  <Link
                                        href="/"
                                        style={styles.footerLink}
                                        >
                                        Entre aqui.</Link></Text>
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
        height: 280,
        marginTop: 32,
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