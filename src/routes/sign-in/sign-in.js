import {signInWithGoogelPopup, createUserDocumentFromAuth} from "../../componenets/utils/firebase.utils"

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGoogelPopup();
       const userDocRef =  await createUserDocumentFromAuth(user)
    }
    return ( 
        <div>
            <h1>
                this is sign in page
            </h1>
            <button onClick={logGoogleUser}>
            sign in with google popup
            </button>
        </div>
     );
}
 
export default SignIn;