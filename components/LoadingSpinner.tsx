// import LottieView from "lottie-react-native";
import { ActivityIndicator, View } from "react-native";

export default function LoadingSpinner ({size}) {
    return (
        <View style={{height: size, aspectRatio: 1}}>
            <ActivityIndicator />
            {/* <LottieView style={{flex: 1}} source={require('../assets/images/SpinnerAnimation.json')} autoPlay loop/> */}
        </View>
    )
}