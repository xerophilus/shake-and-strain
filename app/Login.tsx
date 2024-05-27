import LoadingSpinner from "@/components/LoadingSpinner";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useAuth } from "@/firebase/authContext";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { Alert, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";

const Login = () => {
    const { login } = useAuth();
    
    const [loading, setLoading] = useState(false);

    const emailRef = useRef('')
    const passwordRef = useRef('')

    const handleLogin = async () => {
        setLoading(true);
        if(!emailRef.current ){
            setLoading(false);
            Alert.alert('Sign In', 'Please Enter Your Email Address')
            return;
        }
        if(!passwordRef.current){
            setLoading(false);
            Alert.alert('Sign In', 'Please Enter Your Password')
            return;
        }

        const response = await login(emailRef.current, passwordRef.current)
        setLoading(false)
        console.log(response)
    }

    return (
        <ThemedView style={{flex: 1, justifyContent: "center", alignItems: 'center'}}>
            <TextInput 
                label={"Email"}
                left={<TextInput.Icon icon="email"/>}
                onChangeText={value => emailRef.current=value}
                style={styles.textInput}
            />
            <TextInput 
                label={"Password"}
                left={<TextInput.Icon icon="key"/>}
                secureTextEntry
                onChangeText={value => passwordRef.current=value}
                style={styles.textInput}
            />
            <Button mode={'contained'} style={styles.buttons} onPress={handleLogin} disabled={loading}>
                {
                    loading ? 
                    <LoadingSpinner size={28}/>
                    :
                    <ThemedText>Login</ThemedText>
                }
            </Button>
            <Button mode={'outlined'} style={styles.buttons} onPress={() => router.push('/SignUp')}>
                <ThemedText>Sign Up</ThemedText>
            </Button>
            <Button mode={'text'} style={styles.buttons} onPress={() => router.push('/ForgotPassword')}>
                <ThemedText>Forgot Password</ThemedText>
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
export default Login;