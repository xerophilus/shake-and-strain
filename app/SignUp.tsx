import LoadingSpinner from "@/components/LoadingSpinner";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useAuth } from "@/firebase/authContext";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { Alert, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";

const SignUp = () => {
    const { register } = useAuth();
    
    const [loading, setLoading] = useState(false);

    const emailRef = useRef('')
    const nameRef = useRef('')
    const passwordRef = useRef('')
    const confirmPasswordRef = useRef('')

    const handleSignUp = async () => {
        setLoading(true);
        if(!emailRef.current){
            setLoading(false);
            Alert.alert('Sign Up', 'Please Enter Your Email Address')
            return;
        }
        if(!nameRef.current){
            setLoading(false);
            Alert.alert('Sign Up', 'Please Enter Your Name')
            return;
        }
        if(!passwordRef.current){
            setLoading(false);
            Alert.alert('Sign Up', 'Please Enter Your Password')
            return;
        }
        if(!confirmPasswordRef.current){
            setLoading(false);
            Alert.alert('Sign Up', 'Please Confirm Your Password')
            return;
        }
        if(passwordRef.current !== confirmPasswordRef.current){
            setLoading(false);
            Alert.alert('Sign Up', 'Passwords Don\'t Match')
        }
        
        const response = await register(emailRef.current, passwordRef.current, nameRef.current)
        setLoading(false)

        if(!response.success){
            Alert.alert("Sign Up", response.msg)
        }
    }

    return (
        <ThemedView style={{flex: 1, justifyContent: "center", alignItems: 'center'}}>
            <TextInput 
                label={"Email"}
                left={<TextInput.Icon icon="email"/>}
                onChangeText={value => emailRef.current=value}
                style={styles.textInput}
                dataDetectorTypes={'address'}
            />
            <TextInput 
                label={"Name"}
                left={<TextInput.Icon icon="account"/>}
                onChangeText={value => nameRef.current=value}
                style={styles.textInput}
            />
            <TextInput 
                label={"Password"}
                left={<TextInput.Icon icon="key"/>}
                secureTextEntry
                onChangeText={value => passwordRef.current=value}
                style={styles.textInput}
            />
            <TextInput 
                label={"Confirm Password"}
                left={<TextInput.Icon icon="key"/>}
                secureTextEntry
                onChangeText={value => confirmPasswordRef.current=value}
                style={styles.textInput}
            />
            <Button mode={'contained'} style={styles.buttons} onPress={handleSignUp} disabled={loading}>
                {
                    loading ? 
                    <LoadingSpinner size={28}/>
                    :
                    <ThemedText>Sign Up</ThemedText>
                }
            </Button>
            <Button mode={'outlined'} style={styles.buttons} onPress={() => router.push('/Login')}>
                <ThemedText>Login</ThemedText>
            </Button>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    textInput: {
        width: '80%', 
        margin: 5, 
        borderRadius: 5
    },
    buttons: {
        width: '80%',
        marginVertical: 5
    }
})
export default SignUp;