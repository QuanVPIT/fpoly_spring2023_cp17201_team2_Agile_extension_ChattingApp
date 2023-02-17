import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Yourday = () => {
    return (
        <View>
            <ScrollView>
                {/* Container */}
                <View style={styles.container}>
                    {/* Header */}
                    <View style={styles.header}>
                        <View style={styles.notification}>
                            <View>
                                <Text>Welcome back</Text>
                            </View>
                            <View>
                                <Image style={styles.icon}
                                    source={require('../assets/images/notifiicon.png')}></Image>
                            </View>

                        </View>
                        <Text name='name' style={{ fontSize: 20, fontWeight: '700', color: 'black' }}>Huyen Suong</Text>
                    </View>
                    {/* Header */}
                    {/* body */}
                    <View style={styles.body}>
                        <View name='goal' style={styles.goalToday}>
                            <Text style={{ color: 'black', fontWeight: 'bold', padding: 10, }}>Mục tiêu hôm nay</Text>
                            <TouchableOpacity style={{ padding: 10, borderRadius: 14, backgroundColor: "#9DCEFF" }}>
                                <Text style={{ color: 'white', fontWeight: "bold" }} >Check</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={{ fontSize: 16,  color: 'black', margin: 5 }}>Thống kê calories tiêu thụ</Text>
                            <TouchableOpacity style={styles.statistical}>
                                <Text style={{ fontSize: 12 }}>Calo Rate</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ color: "#9DDFFF", fontSize: 14,  marginRight: 100 }}>2000 calo</Text>
                                    <TouchableOpacity style={{ padding: 8, backgroundColor: '#EEA4CE', borderRadius: 30 }}>
                                        <Text> 1 day ago</Text>
                                    </TouchableOpacity>
                                </View>
                                <Image style={{ width: 200, height: 62 }}
                                    source={require('../assets/images/Vector.png')}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: "space-around", marginBottom: 20 }}>
                            <TouchableOpacity style={{ backgroundColor: 'white', padding: 10, borderRadius: 14 }}>
                                <Text style={{ color: 'black', fontWeight: 'bold' }}>Sleep</Text>
                                <Text style={{ color: "#9DDFFF", fontSize: 14,  marginRight: 100 }}>8h20m</Text>
                                <Image style={{ width: 145, height: 45 }}
                                    source={require('../assets/images/sleep.jpg')}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: 'white', padding: 10, borderRadius: 14 }}>
                                <Text style={{ color: 'black', fontWeight: 'bold' }}>Calories</Text>
                                <Text style={{ color: "#9DDFFF", fontSize: 14,  marginRight: 100 }}>750kCa</Text>
                                <Image style={{ width: 70, height: 70, marginLeft: 50 }}
                                    source={require('../assets/images/calo.jpg')}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                            <Text style={{ fontSize: 16,  color: 'black', margin: 5 }}>Chế độ tập luyện</Text>
                            <TouchableOpacity style={{ padding: 10, borderRadius: 14, backgroundColor: "#9DCEFF" }}>
                                <Text style={{ color: 'white', fontWeight: "bold" }} >week</Text>
                            </TouchableOpacity>

                        </View>
                        <Image style={{ width: 350, height: 190, marginBottom:20}}
                            source={require('../assets/images/tl.jpg')}></Image>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                            <Text style={{ fontSize: 16,  color: 'black', margin: 5 }}>Hoạt động gần đây</Text>
                            <TouchableOpacity style={{ padding: 10, borderRadius: 14}}>
                                <Text style={{ color: 'gray', fontWeight: "bold" }} >See more</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={{padding:5, backgroundColor:'white', borderRadius:14, marginBottom:10}}>
                        <Image style={{ width: 350, height: 60, marginBottom:20}}
                            source={require('../assets/images/2.jpg')}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={{padding:5, backgroundColor:'white', borderRadius:14}}>
                        <Image style={{ width: 350, height: 60, marginBottom:20}}
                            source={require('../assets/images/2.jpg')}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={{padding:5, backgroundColor:'white', borderRadius:14}}>
                        <Image style={{ width: 350, height: 60, marginBottom:20}}
                            source={require('../assets/images/22.jpg')}></Image>
                        </TouchableOpacity>
                    </View>

                    {/* body  */}
                </View>
                {/* Container */}


            </ScrollView>
            {/* ButtonNavigation */}
        </View>


    )
}
const styles = StyleSheet.create({
    container: {
        flex: 10,
        padding: 20,
        backgroundColor: '#FFF6'
    },
    header: {
        flex: 2,
        marginBottom: 20,
    },
    body: {
        flex: 8
    },
    goalToday: {
        backgroundColor: "lavender",
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderRadius: 14,
        marginBottom: 20,
    },
    statistical: {
        backgroundColor: "lavender",
        padding: 10,
        borderRadius: 14,
        marginBottom: 20,
    },

    notification: {
        flexDirection: "row",
        justifyContent: 'space-between'

    },
    Viewinput: {
        padding: 5,
        borderColor: "gray",
        width: 350,
        borderWidth: 1,
        borderRadius: 14,
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5
    },
    input: {
        borderColor: "gray",
        width: "80%",

    },
    icon: {
        width: 20,
        height: 20,
        marginLeft: 15,
        marginRight: 15,
    },
    ViewCheckbox: {
        padding: 5,
        width: 350,
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },
    ViewButton: {
        padding: 5,
        width: 350,
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#92A3FD",
        margin: 10,
        borderRadius: 99,
    },
});

export default Yourday