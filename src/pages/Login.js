import React, {useState,useContext,useEffect} from 'react'
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import { magic } from "../lib/magic"
import { UserContext } from "../lib/UserContext"
import ImageLight from '../assets/img/login-office.jpeg'
import ImageDark from '../assets/img/login-office-dark.jpeg'
import { Label, Input, Button } from '@windmill/react-ui'





function Login() {
  const history = useHistory();
  const [disabled, setDisabled] = useState(false);
  const [email, setEmail] = useState("");
  const [user, setUser] = useContext(UserContext);

  // If user is already logged in, redirect to app page
  useEffect(() => {
    user && user.issuer && history.push("/app");
  }, [user, history]);


  async function handleLoginWithEmail(email) {
    try {
      setDisabled(true); // Disable login button to prevent multiple emails from being triggered

      // Trigger Magic link to be sent to user
      let didToken = await magic.auth.loginWithMagicLink({
        email,
      });

      // Validate didToken with server
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + didToken,
        },
      });

      if (res.status === 200) {
        // Get info for the logged in user
        let userMetadata = await magic.user.getMetadata();
        // Set the UserContext to the now logged in user
        await setUser(userMetadata);
        history.push("/app");
      }
    } catch (error) {
      setDisabled(false); // Re-enable login button - user may have requested to edit their email
      console.log(error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleLoginWithEmail(email);
  };
  return (
    
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full dark:hidden"
              src={ImageLight}
              alt="Office"
            />
            <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full dark:block"
              src={ImageDark}
              alt="Office"
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
            <form onSubmit={handleSubmit}>
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">Login</h1>
              <Label>
                <span>Email</span>
                <Input className="mt-1" type="email" onChange={(e) => setEmail(e.target.value)} placeholder="john@doe.com" />
              </Label>

              <Button className="mt-4 text-blue-400" block tag={Link} disabled={disabled} to='/#'>
                Log in
              </Button>
            </form>
              <hr className="my-8" />

              

            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Login
