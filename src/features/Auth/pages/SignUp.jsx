import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { signup } from '../../../firebaseConfig';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const [loading, setLoading] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [errorToast, setError] = React.useState(null);
  const navigate = useNavigate();

  const handleSignUp = async () => {
    setLoading(true);
    try {
      await signup(email, password);
      toast.success('Đăng ký thành công');
      setTimeout(() => {
        navigate('/sign-in');
      }, 2000);
    } catch (error) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          setError('Email đã được sử dụng bởi người dùng khác.');
          break;
        case 'auth/invalid-email':
          setError('Email không hợp lệ.');
          break;
        case 'auth/weak-password':
          setError('Mật khẩu phải có ít nhất 6 ký tự.');
          break;
        default:
          setError('Đăng ký thất bại, vui lòng thử lại sau.');
          break;
      }
      toast.error(errorToast);
    }
    setLoading(false);
  };
  return (
    <div className="col l-4 l-o-4 mt-[60px]">
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
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#2563eb] focus:border-[#2563eb] block w-full p-2.5"
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
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#2563eb] focus:border-[#2563eb] block w-full p-2.5"
                    required=""
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  disabled={loading}
                  onClick={handleSignUp}
                  type="submit"
                  class="w-full text-white bg-[#2563eb] hover:bg-[#2563eb] focus:ring-4 focus:outline-none focus:ring-[#93c5fd] font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Sign up
                </button>
                <p class="text-sm font-light text-gray-500">
                  I have an account already{' '}
                  <Link to="/sign-in" class="font-medium text-[#2563eb] hover:underline">
                    Sign in
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    </div>
  );
};

export default SignUp;
