import { initializeApp } from "firebase/app";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useContext } from "react";
import UserContext from "../context/UserProvider";
const Login = () => {
  const history = useNavigate()
  const { setLoggedIn, setLogin, setLogout } = useContext(UserContext);
  const firebaseConfig = {
    apiKey: "AIzaSyDeFZ5x_QRC7lOTms1PgCbaAQCtCD8grmU",
    authDomain: "urgoo-30a17.firebaseapp.com",
    projectId: "urgoo-30a17",
    storageBucket: "urgoo-30a17.appspot.com",
    messagingSenderId: "284433274365",
    appId: "1:284433274365:web:a17a79236c04c244d97594",
    measurementId: "G-LDYC67MC8P",
  };
  const app = initializeApp(firebaseConfig);
  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email.value, password.value).then(
      (res) => {
        setLoggedIn(res);
        setLogin(true);
        setLogout(true);
        history('/')
      }
    );
  };
  return (
    <div className="max-w-screen-xl mx-auto w-full h-[calc(100vh-120px)] flex items-center justify-center flex-col">
      <h1 className="mb-3 text-3xl">Нэвтрэх</h1>
      <form
        className="flex flex-col p-2 space-y-2 border-4 rounded-lg w-72"
        onSubmit={handleLogin}
      >
        <input
          id="email"
          type="email"
          placeholder="Имэйл хаягаа оруулна уу"
          className="p-2 bg-gray-200 outline-none"
          autoComplete="off"
        />
        <input
          id="password"
          type="password"
          placeholder="Нууц үгээ оруулна уу"
          className="p-2 bg-gray-200 outline-none"
          autoComplete="off"
        />
        <button className="p-1 font-semibold text-white bg-sky-500">
          Login
        </button>
        <Link to="/signup" className="text-center">
          Sign Up
        </Link>
      </form>
    </div>
  );
};

export default Login;
