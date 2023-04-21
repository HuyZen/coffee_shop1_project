import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signin } from '../../../firebaseConfig';

// SignIn.propTypes = {};

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = useState(false);
  const handleSignIn = async () => {
    setLoading(true);
    try {
      await signin(email, password);
      toast.success('Đăng nhập thành công');
      setTimeout(() => {
        navigate('/products');
      }, 1000);
      const user = firebase.auth().currentUser;
      if (user) {
        user
          .getIdToken()
          .then((token) => {
            // const encodedToken = btoa(token); // Mã hóa bằng Base64
            localStorage.setItem('token', token);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false);
  };

  const uiConfig = {
    signInFlow: 'redirect',
    signInSuccessUrl: '/products',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    tosUrl: '<your-tos-url>',
    privacyPolicyUrl: '<your-url>',
  };
  return (
    <div className="col l-4 l-o-4 mt-[60px] mb-10">
      <section class="bg-gray-50">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Sign in to your account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                    placeholder="name@company.com"
                    required=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label for="password" class="block mb-2 text-sm font-medium text-gray-900">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                    required=""
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary"
                        required=""
                      />
                    </div>
                    <div class="ml-3 text-sm">
                      <label for="remember" class="text-gray-500">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a href="#forget" class="text-sm font-medium text-primary hover:underline">
                    Forgot password?
                  </a>
                </div>
                <button
                  disabled={loading}
                  onClick={handleSignIn}
                  type="submit"
                  class="w-full text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Sign in
                </button>
                <p class=" font-light text-gray-500">
                  <div className="text-sm mr-2 inline-block">Don’t have an account yet?</div>
                  <Link to="/sign-up" class="font-medium text-primary hover:underline text-lg">
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
          </div>
        </div>
        <ToastContainer />
      </section>
    </div>
  );
};

export default SignIn;
