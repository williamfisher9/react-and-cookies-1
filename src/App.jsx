import { CookiesProvider, useCookies } from "react-cookie"
import WelcomePage from "./WelcomePage"
import LoginPage from "./LoginPage"

function App() {
  const [cookies, setCookie] = useCookies(['user'])

  function handleLogin(user) {
    setCookie('user', user, {path: '/'})
  }

  return (
    <CookiesProvider>
      <div>
        {
          cookies.user ? <WelcomePage user={cookies.user} /> : <LoginPage onLogin={handleLogin} />
        }
      </div>
    </CookiesProvider>
  )
}

export default App
