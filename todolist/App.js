import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      
        {/* Today's Task*/}
        <View style={styles.tasksWrapper}>

          <Text style={styles.sectionTitle}>
            Today's Task 
          </Text>

          <View style={styles.items}>
            <Task text={'Task 1'} />
            <Task text={'Task 2'} />
            <Task text={'Task 3'} />
            <Task text={'Task 4'} />
            
          </View>
                   
          <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.writeTaskWrapper}
            >
             <TextInput style={styles.input} placeholder={"Write a Task"} />

            <TouchableOpacity>
              <View style={ styles.AddWrapper}> 
                <Text style={styles.addText}>+</Text>
              </View>
            </TouchableOpacity>

            </KeyboardAvoidingView>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',

  },
  items:{
    marginTop: 30, 
  },
  writeTaskWrapper:{
    position: 'absolute',
    bottom: -320,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input:{
    paddingVertical: 15,
    width: 250,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#c0c0c0',
    borderWidth: 1,

  },
  AddWrapper:{
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#c0c0c0',
    borderWidth: 1,
  },
  addText:{

  },

});
