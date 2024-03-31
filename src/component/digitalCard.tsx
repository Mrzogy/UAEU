import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Barcode from '@kichiyaki/react-native-barcode-generator';
const DegitalCard = () => {

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('../../assets/image/image8.png')} style={{ width: 86, height: 48, marginTop: 11 }} />
                <Image source={require('../../assets/image/image9.png')} style={{ width: 187, height: 48, marginTop: 11 }} />
            </View>

            <View style={styles.profileContainer}>
                <Image source={require('../../assets/image/Ellipse679.png')} style={{ width: 74, height: 74, borderRadius: 37, overflow: 'hidden', borderWidth: 2, borderColor: '#D9D9D9' }} />
                <View style={styles.box}></View>
                <Text style={styles.text}>Mohammad Al-Malik</Text>
                <View style={styles.box}></View>
                <Text style={styles.textRed}>Science</Text>
            </View>

            <View style={styles.rowContainer}>
                <Text style={styles.text700}>Graduation Year</Text>
                <View style={styles.boxHorizintal}></View>
                <Text style={styles.text500}>1999</Text>
            </View>

            <TouchableOpacity style={styles.button}>
                <View>
                    <Text style={styles.textButton}>Alumni</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.barcode}>
                <Barcode
                    value="38710710710"
                    format='CODE39'
                    width={200}
                    maxWidth={280}
                    height={50}
                    text='38710710710'
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        width: 301.69,
        height: 402.45,
        borderRadius: 12.24,
        marginTop: 182,
        marginLeft: 52,
        padding: 11,
        gap: 11
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    profileContainer: {
        marginTop: 20,
        alignItems: 'center'
    },
    rowContainer: {
        flexDirection: 'row'
    },
    button: {
        backgroundColor: '#D53E4F',
        alignItems: 'center',
        width: 279, height: 24.24,
        gap: 6.12,
        justifyContent: 'center'
    },
    barcode: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    box :{
        marginTop: 30
    },
    boxHorizintal:{
        marginHorizontal: 31
    },
    text: {
        fontSize: 12,
        fontWeight: '500'
    },
    textRed : {
        color: '#D53E4F',
         fontSize: 12,
          fontWeight: '500'
    },
    text700 : {
        fontSize: 9,
         fontWeight: '700' 
    },
    text500: {
        fontSize: 9,
         fontWeight: '700' 
    },
    textButton: {
        fontSize: 9, 
        fontWeight: '500',
         color: '#FFFFFF'
    } 
});

export default DegitalCard;