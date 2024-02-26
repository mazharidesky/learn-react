import AuthLayout from "../component/Layouts/AuthLayouts";
import FormLogin from "../component/Fragments/FormLogin";

const LoginPage = () => {
  return (
    <AuthLayout title="Login" type="login">
      <FormLogin />
    </AuthLayout>
  );
};

export default LoginPage;
