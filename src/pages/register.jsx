import AuthLayout from "../component/Layouts/AuthLayouts";
import FormRegister from "../component/Fragments/FormRegister";
import { Link } from "react-router-dom";

const RegisterPage = () => {
    return(
        <AuthLayout title="Register">
            <FormRegister />
            <p className="font-medium my-4 text-slate-500 text-center">
                Have an account ? 
                <Link to="/login" className="text-sky-400 font-bold"> Login</Link>
            </p>
        </AuthLayout>
    );
};


export default RegisterPage;