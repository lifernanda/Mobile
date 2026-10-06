import { ActionButton } from '@/components/ActionButton';
import { FokusButton } from '@/components/Fokus.Button';
import { Timer } from '@/components/Timer';
import { useRef, useState } from 'react';
import {View, Text, Image, StyleSheet, Pressable, ImageSourcePropType} from 'react-native';

interface PomodoroTimer{
    id: string;
    initialValue: number;
    imagem: ImageSourcePropType;
    display: string;
}

const pomodoro = [
    {
        id: 'foco', 
        initialValue: 25*60,
        imagem: require('@/assets/foco.png'),
        display: 'Foco',
    },
    {
        id: 'curto', 
        initialValue: 5*60,
        imagem: require('@/assets/curto.png'),
        display: 'Pausa Curta',
    },
    {
        id: 'longo', 
        initialValue: 15*60,
        imagem: require('@/assets/longo.png'),
        display: 'Pausa Longa'
    },
]

export default function Index(){

    const [typeTimer, setTypeTimer] = useState <PomodoroTimer>(pomodoro[0])
    const [timerRunning, setTimerRunning] = useState(false)
    const timerRef = useRef<ReturnType<typeof setInterval> | null> (null);
    const [seconds, setSeconds] = useState(pomodoro[0].initialValue)

    const clear = () =>{
        if (timerRef.current != null){
            clearInterval(timerRef.current)
            timerRef.current = null
            setTimerRunning(false)
        }
    }

    const toogleTypeTimer = (newTipeTimer: PomodoroTimer) => {
        setTypeTimer(newTipeTimer)
        setSeconds(newTipeTimer.initialValue)
        clear()
   
    }

            const toogleTimer = () =>{
                if (timerRef.current){
                    //pausar
                    clearInterval(timerRef.current)
                    timerRef.current = null
                    setTimerRunning(false)
                    return
                }
                setTimerRunning(true)
                const id = setInterval(() =>{
                    setSeconds(oldState =>{
                        if (oldState === 0){
                            clear();
                            return typeTimer.initialValue
                        }
                        return oldState - 1
                    })
                }, 1000)
                timerRef.current = id
            }

    return(
        <View style={styles.container}>
            <Image source={typeTimer.imagem}/>
            <View style={styles.action}>
                <View style={styles.context}>
                    {pomodoro.map(p =>(
                        <ActionButton
                            key={p.id}
                            active={typeTimer.id === p.id}
                            onPress={() => toogleTypeTimer(p)}
                            display={p.display}
                        />
                    )
                )}
                </View>
                <Timer
                totalSeconds={seconds}
                />
                <FokusButton
                    title = {timerRunning ? 'Pausar' : 'Começar'}
                    onPress={toogleTimer}
                />
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>
                     Projeto Fictício Desenvovido para fins de aprendizagem.
                     </Text>
                <Text style={styles.footerText}>
                    Desenvolvido pelos alunos do curso de Dev- Sesi/Senai Pederneiras
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignItems:"center",
        backgroundColor: "#021123",
        gap: 32
    },
    action:{
        padding: 24,
        backgroundColor: "#14448080",
        width:"80%",
        borderRadius: 32,
        borderWidth: 2,
        borderColor: "#144480",
        gap: 16
    },
    context:{
        flexDirection: "row",
        justifyContent: "space-between",
       
    },
    footer:{
        width: "80%",
    },
    footerText:{
        textAlign: "center",
        color: "#98a0a8",
        fontSize: 12.5,
    }
})