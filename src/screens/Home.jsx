import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl} from "react-native";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setApiCards} from "../store/actions";
import ImageCard from "../components/ImageCard";

const Home = () => {
    const payloadData = useSelector(state => state.apiCards);
    const [loading, setLoading] = React.useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            await axios.get('https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9').
            then((response) => {
                dispatch(setApiCards(response.data));
                setLoading(false);
            }).catch((error) => {
                setLoading(true);
            });
        })();
    }, []);

    const handleRefresh = () => {
        setLoading(true);
        (async () => {
            await axios.get('https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9').
            then((response) => {
                dispatch(setApiCards(response.data));
                setLoading(false);
                console.log('new items loaded');
            }).catch((error) => {
                setLoading(true);
            });
        })();
    }
    return (
        <SafeAreaView>
            <ScrollView className="h-full"
                        refreshControl={
                            <RefreshControl
                                refreshing={loading}
                                    onRefresh={handleRefresh}>
                            </RefreshControl>
                        }>
                <View className="flex flex-row flex-wrap justify-center">
                    {
                        !loading ?
                            payloadData.map((item, index) => {
                                return (
                                    <ImageCard key={index} itemData={item}/>
                                )
                            })
                            :
                            <ActivityIndicator
                                visible={true}
                                textContent={'Loading...'}

                                className="absolute top-1/2 left-1/2"
                            />
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
