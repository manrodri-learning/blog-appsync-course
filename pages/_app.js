import '../styles/globals.css'
import '../configureAmplify'
import Navbar from './components/navbar'

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Navbar />
            <div className={'px-16 py-8 bg-slate-100'}>
                <Component {...pageProps} />
            </div>
        </div>

    )
}

export default MyApp
