import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppText from "../src/components/common/AppText";
import BoldText from "../src/components/common/BoldText";
import { GestureHandlerRootView, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParam = {
    Home: undefined;
    Test: undefined;
  };


function Typecheck1() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
    
    return (
    <GestureHandlerRootView style={{ flex: 1}}>
    <View style={styles.container}>
        <View style={{height:4,backgroundColor:"#C1C1C1",marginTop:26,borderRadius:40}}>
            <View style={{backgroundColor:maincol,width:"75%",height:4,borderRadius:40}}/>
        </View>
        <View style={{paddingTop:70}}>
            <BoldText>여행 취향을 알려주세요</BoldText>
            <Text style={{fontSize:14,fontFamily:"Pretendard-Regular"}}>플래닝이 여러분의 여행을 도울게요</Text>
        </View>

        <View style={styles.layout}>
            <AppText>어떤 여행지를 선호하시나요?</AppText>
            <View style={{flexDirection:"row"}}>
            <TouchableOpacity style={styles.clickbox} />
            <TouchableOpacity style={styles.clickbox} />
            <TouchableOpacity style={styles.clickbox} />
            <TouchableOpacity style={styles.clickbox} />
            <TouchableOpacity style={styles.clickbox} />
            </View>
            <View style={{flexDirection:"row", margin:5}}>
                <AppText style={{fontSize:10, flex:7}}>핫플레이스</AppText>
                <AppText style={{fontSize:10, flex:1}}>로컬 장소</AppText>
            </View>
        </View>

        {/* 여행태그 */}
        <View style={styles.layout}>
            <AppText>관심있는 여행 태그를 선택해주세요</AppText>
            {/* 여행 태그 첫줄 */}
            <View style={{flexDirection:"row"}}>
            <TouchableOpacity style={styles.clickbox1}>
                <Text style={{fontSize:10}}>관광</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.clickbox1}>
                <Text style={{fontSize:10}}>추억여행</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.clickbox1}>
                <Text style={{fontSize:10}}>식도락</Text>
            </TouchableOpacity>
            </View>

            {/* 여행 태그 두번쨰줄 */}
            <View style={{flexDirection:"row"}}>
            <TouchableOpacity style={styles.clickbox1}>
                <Text style={{fontSize:10}}>사진 업로드</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.clickbox1}>
                <Text style={{fontSize:10}}>숨겨진 관광 명소</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.clickbox1}>
                <Text style={{fontSize:10}}>맛집 기행</Text>
            </TouchableOpacity>
            </View>

            {/* 여행 태그 세번쨰줄 */}
            <View style={{flexDirection:"row"}}>
            <TouchableOpacity style={styles.clickbox1}>
                <Text style={{fontSize:10}}>유적지</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.clickbox1}>
                <Text style={{fontSize:10}}>전시회 투어</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.clickbox1}>
                <Text style={{fontSize:10}}>박물관·미술관 투어</Text>
            </TouchableOpacity>
            </View>
            
        </View>
        {/* 다음 버튼 */}
        <View style={{flex:1,justifyContent: 'flex-end',marginBottom:20}}>
            <TouchableOpacity style={styles.nextbutton} 
                onPress={() => navigation.navigate('typecheck2')}>
                    <Text style={{color:'white',fontFamily:"Pretendard-Regular"}}>거의 다 왔어요</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:"center",marginTop:10}}
            onPress={() => navigation.navigate('appinfo')}>
            <Text style={{fontFamily:"Pretendard-Regular"}}>다음에 할게요</Text>
            </TouchableOpacity>
         </View>
        
    </View>
    

    </GestureHandlerRootView>
  );
}

const maincol="#005bea"

const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:25,
        backgroundColor: "#FFFFF",
    },
    layout:{
        marginTop:30
    },
    clickbox:{
        alignItems:'center',
        justifyContent:'center',
        width:62,
        height:32,
        borderWidth:1,
        borderRadius:10,
        marginTop:10,
        marginRight:7,
        borderColor:"#C1C1C1",
       
    },
    clickbox1:{
        alignItems:'center',
        justifyContent:'center',
        height:32,
        borderWidth:1,
        borderRadius:10,
        marginTop:10,
        marginRight:7,
        paddingLeft:20,
        paddingRight:20,
        borderColor:"#C1C1C1",
    },
    nextbutton:{
        
        backgroundColor:maincol,
        height:61,
        borderRadius:10,
        justifyContent: 'center',
        alignItems:"center",
    }
})

export default Typecheck1;