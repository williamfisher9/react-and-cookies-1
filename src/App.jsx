import Home from "./Home"
import Login from "./Login"
import {useCookies, CookiesProvider} from 'react-cookie' 

function App() {
  const [cookies, setCookie] = useCookies(['user'])

  function handleLogin(user) {
    setCookie('user', user, {path: '/'})
  }

  return (
    <CookiesProvider>
      <div>
        {
          cookies.user ? <Home user={cookies.user} /> : <Login onLogin={handleLogin} />
        }
      </div>
    </CookiesProvider>
  )
}

export default App
