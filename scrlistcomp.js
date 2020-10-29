import React from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';

const ListScreen = () => {

    const friends = [
        {name: 'friend #1'}, 
        {name: 'friend #2'},
        {name: 'friend #3'},
        {name: 'friend #4'},
        {name: 'friend #5'},
        {name: 'friend #6'},
        {name: 'friend #7'},
        {name: 'friend #8'},
        {name: 'friend #9'},
        {name: 'friend #10'}
        
    ];
    
    // here we are talking about making a list which is a very good thing i suppose....a
    return <View>
        <FlatList 
            data= {friends} 
            //the element that we are using in the next line is an object that 
            // that contains item:{name:friend},index:0
            renderItem={({item}) => {        

                return<Text style={styles.listStyle}>{item.name}</Text>

            }}   
         />
    </View>
}
    const styles = StyleSheet.create({
        listStyle:{
            fontSize:30,
            color:"blue",
            backgroundColor: "grey"
        }
    })


export default ListScreen;
