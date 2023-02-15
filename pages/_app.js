import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return(
    <>
     <form className="form">
       <li>Username: <input required/></li>
       <li>Email: <input required /></li>
       <li>Password: <input required /> </li>
       <li>confirm_Password: <input required /></li>
       <button>Sign up</button>
     </form>
     <Component {...pageProps} />
     </>)
}

export default MyApp
