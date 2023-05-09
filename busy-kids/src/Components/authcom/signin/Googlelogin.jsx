import { Button } from "@chakra-ui/react";
import { FcGoogle } from "@chakra-ui/icons";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { userLogin } from "../../../redux/authreducer/action";
import { auth } from "../../../config/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
export default function Googlelogin() {
  const [user, setUser] = useState({});

  const dispatch = useDispatch();
  const { isAuth, userName } = useSelector((state) => state.authReducer);
  const login = () => {
    const provider = new GoogleAuthProvider();
    const res = signInWithPopup(auth, provider);
    // console.log(res.user.displayName, "teja");
    // res();
    dispatch(userLogin(user.displayName));
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("unsubscribe", userName, isAuth);
    });
    return () => {
      unsubscribe();
    };
  });

  const handlegoogleLogin = async () => {
    try {
      await login();
      //   dispatch(userLogin(res.user.displayName));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button w={"100%"} border={"1px solid gray"} onClick={handlegoogleLogin}>
      {" "}
      <img
        src="https://tse3.mm.bing.net/th?id=OIP.Kg2FF2wpIK_HLyo8Q56ycAHaFj&pid=Api&P=0"
        alt=""
        height={"35px"}
        width={"35px"}
      />
      Sign in with Google
    </Button>
  );
}
