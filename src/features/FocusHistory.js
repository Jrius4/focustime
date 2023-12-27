import { View, Text,StyleSheet,FlatList } from 'react-native';
import React from 'react';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

const styles = StyleSheet.create({
    container:{
        padding:spacing.md,
        flex: 1
    },
    item:{
        color:colors.white,
        fontSize:fontSizes.md,
        fontWeight:'400',
        paddingTop:spacing.sm
    },
    title:{
        color:colors.white,
        fontSize:fontSizes.md,
        fontWeight:'bold',
        paddingTop:spacing.sm
    }
})

const renderItem = ({item})=><Text style={styles.item}> - {item}</Text>

const FocusHistory = ({history}) => {
  
    if(!history || !history.length) return <Text style={styles.title}>Things we haven't focused on anything yet!</Text>;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we've focused on:</Text>
      <FlatList data={history} renderItem={renderItem}/>
    </View>
  )
}

export default FocusHistory