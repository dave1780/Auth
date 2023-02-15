import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <form className="form">
        <div>
        <li>
          <input required placeholder="Username " />
        </li>
        <li>
          <input placeholder="Email" required />
        </li>
        <li>
          <input placeholder="Password" required />
        </li>
        <li>
          <input placeholder="confirm_password" required />
        </li>
        <button>Sign up</button>
        </div>
      </form>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
