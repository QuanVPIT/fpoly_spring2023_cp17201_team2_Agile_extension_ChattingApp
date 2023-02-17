import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Onboarding1 = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Image style={{ width: "100%", height: "60%" }}
        source={require('../assets/images/Frame.png')}></Image>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', margin: 20 }}>Đặt ra nục tiêu</Text>
      <Text style={{ fontSize: 15, margin: 10, padding: 5 }}>Mục tiêu là tìm ra liệu trình cụ thể thích hợp để có lợi ích tối ưu với từng bệnh nhân, tình trạng sức khoẻ và khả năng tập luyện hiện tại.</Text>
      <View style={{ alignItems: "flex-end", margin: 20 }}>
        <TouchableOpacity style={{ width: 70, height: 70, justifyContent: 'center', alignItems: 'center' }}><Image style={{ width: "100%", height: "100%" }}
          source={require('../assets/images/next.png')}></Image></TouchableOpacity>
      </View>
    </View>
  )
}

export default Onboarding1