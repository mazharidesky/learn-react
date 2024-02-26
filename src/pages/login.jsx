import AuthLayout from "../component/Layouts/AuthLayouts";
import FormLogin from "../component/Fragments/FormLogin";
import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
        <AuthLayout title="Login">
            <FormLogin/>
            <p className="font-medium my-4 text-slate-500 text-center">
                Don't have an account ? 
                <Link to="/register" className="text-sky-400 font-bold"> Register</Link>
            </p>
        </AuthLayout>
    )
}

export default LoginPage;