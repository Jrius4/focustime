import { View, Text, StyleSheet, StatusBar, Vibration } from 'react-native'
import React, { useState } from 'react';
import { colors } from '../utils/colors';
import { ProgressBar,MD3Colors } from 'react-native-paper';
import {useKeepAwake} from 'expo-keep-awake'
import { Countdown } from '../components/countdown';
import { spacing } from '../utils/sizes';
import { RoundedButton } from '../components/RoundedButton';
import Timing from './Timing';

const ONE_SECOND_IN_MS = 1000;
const PATTERN = [
    1*ONE_SECOND_IN_MS,
    1*ONE_SECOND_IN_MS,
    1*ONE_SECOND_IN_MS,
    1*ONE_SECOND_IN_MS,
    1*ONE_SECOND_IN_MS,
]


const Timer = ({ focusSubject,
    onTimerEnd,
    clearSubject }) => {
        useKeepAwake()
    const [isStarted, setIsStarted] = useState(false)
    const [progress, setProgress] = useState(1)
    const [minutes, setMinutes] = useState(0.1)
    const onEnd = (reset)=> {
        Vibration.vibrate(PATTERN);
        setIsStarted(false);
        setProgress(1);
        reset();
        onTimerEnd(focusSubject);
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.countdown}>
                <Countdown
                    minutes={minutes}
                    isPaused={!isStarted}
                    onProgress={setProgress}
                    onEnd={onEnd}
                />
                <View style={{ paddingTop: spacing.xxl }}>
                    <Text style={styles.title}>Focus On: </Text>
                    <Text style={styles.task}>{focusSubject}</Text>
                </View>
            </View>
            <View style={{ paddingTop: spacing.sm }}>
                <ProgressBar  progress={progress}  color={colors.progressBar} style={{ height: spacing.sm }} />
            </View>
            <View style={styles.timerWrapper}>
                <Timing onChangeTime={setMinutes}/>
            </View>
            <View style={styles.buttonWrapper}>
                {!isStarted && <RoundedButton title="Start" onPress={() => setIsStarted(true)} />}
                {isStarted && <RoundedButton title="pause" onPress={() => setIsStarted(false)} />}

            </View>
            <View style={styles.clearSubjectWrapper}>
                <RoundedButton size={50} title="-" onPress={clearSubject}/>
            </View>
          

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: colors.darkBlue
    },
    title: {
        color: colors.white,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    task: {
        color: colors.white,
        textAlign: 'center',

    },
    countdown: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    clearSubjectWrapper: {
        flexDirection: 'row',
        justifyContent: 'center'

    },
    timerWrapper: {
        flex: 0.1,
        flexDirection: 'row',
        paddingTop: spacing.lg
    },
    buttonWrapper: {
        flex: 0.3,
        flexDirection: 'row',
        padding: spacing.md,
        alignItems: 'center',
        justifyContent: 'center',

    },
    text: {
        color: colors.white
    }
})

export default Timer