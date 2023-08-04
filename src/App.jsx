import React ,{Component} from 'react';
import C1 from "./components/C1";
import C2 from "./components/C2";
import C3 from "./components/C3";

export default class App extends Component{
    render(){
        return (
            <>
            <section className='app-main'>
               <div className='div1-main'>
                <C1></C1>
                <C2></C2>
               </div>
               <div>
                <C3></C3>
               </div>
            </section>
            <footer className='footer'>
                <div >
                    <div className='preview'>PREVIEW OF SPOTIFY</div>
                    <div>Sign up to get unlimited songs and podcasts with occasional ads.No credit card needed.</div>
                </div>
                <button>Sign up free</button>
            </footer>
            <div className='unsupport'>
                <div className="l"><i class="fa-brands fa-spotify" style={{color: "#005a00"}}></i></div>
                <div className="u">Unsupported <br /> browser</div>
                <div className='p'>Spotify is unavailable on this browser. <br />For the best listening experience update <br /> your browser or download the <br />  app.</div>
                <button className='b'>Get the App</button>
                <a href="#">Learn more</a>
            </div>
            </>
        )
    }
}