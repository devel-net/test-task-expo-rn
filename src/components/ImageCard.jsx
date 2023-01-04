import React from 'react';
import {Text, Image, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";

const ImageCard = (props) => {
    const navigation = useNavigation();
    const {itemData} = props;

    const handleClick = () => {
       navigation.navigate('ViewPhoto', {itemData});
    }
    return (
        <TouchableOpacity className="p-2" onPress={()=>handleClick()}>
            <Image source={{uri: itemData?.urls?.regular}} style={{width: 100, height: 100}}/>
            <Text className="text-sm w-24 text-center">{itemData?.alt_description ? itemData?.alt_description.slice(0, -15) + '...' :'No description'}</Text>
            <Text className="text-sm text-center">{itemData?.user?.name}</Text>
        </TouchableOpacity>
    );
};

export default ImageCard;
