import { BotaoCustomizado } from '@/components/BotaoCustomizado';
import { ModalBottomSheet } from '@/modals/ModalBottomSheet';
import { ModalNativo } from '@/modals/ModalNativo';
import { ModalNativoInline } from '@/modals/ModalNativoinline';
import BottomSheet from '@gorhom/bottom-sheet';
import { router, useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function HomeScreen(){
    const router = useRouter();

    const [modalNativoVisivel, setModalNativoVisivel] = 
    useState<boolean>(false)

    const [modalNativoInline, setModalNativoInline] = useState<boolean>(false)

    const bottomSheetRef = useRef<BottomSheet>(null)

    return(
        <View style={styles.container}>
            <Text style={styles.title} >Projeto Modular</Text>
            <Text style={styles.subTitle}>Expo Router + Fontes + Modais</Text>
            <BotaoCustomizado
                title="Abrir Rota Modal - Expo Router"
                corFundo="#03b1dc"
                onPress={() => router.push('/modal-cadastro')}
            />

            <BotaoCustomizado
                title="Abrir Modal Nativo"
                corFundo='#17b9b9'
                onPress={() => setModalNativoVisivel(true)}
            />

            <ModalNativo
                visivel={modalNativoVisivel}
                aoFechar={() => setModalNativoVisivel(false)}
            />

            <BotaoCustomizado
            title="Abrir Modal Nativo Inline"
            corFundo="#cfbc5d"
            onPress={() => setModalNativoInline(true)}
            />

            <ModalNativoInline
                visivel={modalNativoInline}
                aoFechar={() => setModalNativoInline(false)}
            />

            <BotaoCustomizado 
                title="Abrir Bottom Sheet"
                corFundo='#e9e276'
                onPress={() => bottomSheetRef.current?.expand()}
            />

            <ModalBottomSheet 
                ref={bottomSheetRef}
                aoFechar={() => bottomSheetRef.current?.close()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#050e2b",
        padding: 24
    },
    title:{
        fontSize: 26,
        color: "#FFF2B2",
        marginBottom: 4,
        textAlign: "center"
    },
    subTitle:{
        fontSize: 15,
        color: "#f8fafd",
        marginBottom: 32,
        textAlign: "center"
    }
})