import ButtonSubmit from "../components/ButtonSubmit";
import Fill from "../components/Fill";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/api/signin";
function Inscription(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [lastName, setName] = useState('');
    const [firstName, setFirstname] = useState('');
    const [company, setCompany] = useState('');
    const [phoneNumber, setPhone] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
          const data = await registerUser(email,password, lastName, firstName, company, phoneNumber);
          navigate('/connexion');
        } catch (err) {
          console.error("Erreur lors de la connexion :", err);
        }
      };
    return(
    <>

        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit}  method="POST" className="space-y-6">
                    <Fill 
                        label="Email adress" 
                        id="email" 
                        name="email" 
                        type="email" 
                        required={true}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Fill
                        label="Nom"
                        id="lastName"
                        name="lastName"
                        type="text"
                        required={true}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Fill
                        label="Prenom"
                        id="firstName"
                        name="firstName"
                        type="text"
                        required={true}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        onChange={(e) => setFirstname(e.target.value)}
                    />
                    <Fill
                        label="Entreprise"
                        id="company"
                        name="company"
                        type="text"
                        required={true}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        onChange={(e) => setCompany(e.target.value)}
                    />
                    <Fill
                        label="Téléphone"
                        id="phoneNumber"
                        name="phoneNumber"
                        type="text"
                        required={true}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <Fill
                        label="Password"
                        id="password"
                        name="password"
                        type="password"
                        required={true}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <ButtonSubmit
                        text="Inscription"
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    />
                    
                    
                </form>
            </div>
        </div>
    </>
    )

}
export default Inscription