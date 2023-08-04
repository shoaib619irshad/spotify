import React ,{Component} from 'react';


export default class C1 extends Component{
    render(){
        return (
            <div className='c2-main'>
                <div className="library">
                <i className=" fa-solid fa-book"></i>Your Library 
                 <i className='fa-solid fa-plus'></i>
                </div>
                <div className="scroll">
                    <div className="one">
                        <div >Create your first playlist</div>
                        <div>It's easy,we'll help you</div>
                        <button className='oone'>Create playlist</button>
                    </div>
                    <div className="two" >
                        <div className='twoo'>Let's find some podcasts to follow</div>
                        <div>We'll keep you updated on new episodes</div>
                        <button className='twooo'>Browse podcasts</button>
                    </div>
                </div>
                <div className="lists">
                    <ul className='list' type="none">
                        <li><a href="#">Legal</a></li>
                        <li><a href="#">Privacy Center</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Cookies</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#"></a>Accessibility</li>
                        <li><a href="#">Cookies</a></li>
                    </ul>
                </div>
                < button className='english'>
                    <i className='fa-solid fa-globe'></i>English
                </button>
            </div>
        )
    }
}