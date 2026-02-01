import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import User = FirebaseAuthTypes.User;

export const signUp = async (email:string, password:string) => {
    try {
        // 1. Create the user in Firebase Authentication
        const userCredential = await auth().createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;
        console.log('User account created & signed in!', user.uid);

        return user;

    } catch (error: unknown) {
        if (error instanceof Error) {
            if (error.message === '(auth)/email-already-in-use') {
                console.error('That email address is already in use!');
            } else if (error.message === '(auth)/invalid-email') {
                console.error('That email address is invalid!');
            } else {
                console.error(error);
            }
            throw error;
        }
    }
};

export const createUserRecord = async (user:User, firstName:string, lastName:string, photoUrl:string) => {
    await firestore().collection('users').doc(user.uid).set({
        email: user.email,
        firstName: firstName,
        lastName: lastName,
        photoUrl: photoUrl,
        createdAt: firestore.FieldValue.serverTimestamp(),
    });
}