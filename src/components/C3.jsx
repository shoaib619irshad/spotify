import React ,{Component} from 'react';


export default class C1 extends Component{
    render(){
        return (
            <div className='c3-main'>
                <div className="start">
                    <div className='arrow'>
                        <i className='fa-solid fa-chevron-left'></i>
                        <i className='fa-solid fa-chevron-right'></i>
                    </div>
                    <div className='buttons'>
                        <button className='sign'>Sign up</button>
                        <button className='log'> Log in</button>
                    </div>
                </div>
                <div className='focus'>
                    <div className='focus1'><a href="#">Focus</a></div>
                    <div className='focus2'>Show all</div>
                </div>
                <div className='songs1'>
                    <div className='girl'>
                        <img src="https://i.pinimg.com/originals/38/24/01/382401718a9038ef4ece7d44be352a09.jpg" alt="girl" height="150px" width="180px" />
                        <div className='spotify'></div>
                         <span className='peaceful'>Peaceful Piano</span>
                        <span className='bio1'>Peaceful piano to help you slow down,breathe,and relax.</span>
                    </div>
                    <div className='sky'>
                        <img src="https://i.pinimg.com/originals/0b/86/0d/0b860d32fc7b0bff00ac320137305e8f.png" alt="sky" height="150px" width="180px" />
                        <span className='deep'>Deep Focus</span>
                        <div className='spotify'></div>
                        <span className='bio2'>Keep calm and focus with ambient and post-rock music.</span>
                    </div>
                    <div className='books'>
                        <img src="https://media.istockphoto.com/id/902176156/photo/teenager-doing-homework.jpg?s=612x612&w=0&k=20&c=wvDRcuBYN7t5M25KLUau2bxCF2x0Tzq82t6y4-UP2Wg=" alt="Studing Girl" height="150px" width="180px" />
                        <span className="study">Instrumental Study</span>
                        <div className='spotify'></div>
                        <span className='bio3'>Focus with soft study music in the background.</span>
                    </div>
                    <div className='man'>
                        <img src="https://images.unsplash.com/photo-1622151834677-70f982c9adef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwd2l0aCUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="man" height="150px" width="180px" />
                        <span className="computer">Focus Flow</span>
                        <div className='spotify'></div>
                        <span className="bio4">Uptempo Instrumental hip hop beats.</span>
                    </div>
                </div>
                <div className='playlist'>
                    <div className='playlist1'><a href="#">Spotify Playlists</a></div>
                    <div className='playlist2'>Show all</div>
                </div>
                <div className="songs2">
                    <div className="mumbai">
                        <img src="https://media.istockphoto.com/id/105813891/photo/the-gateway-to-india.jpg?s=612x612&w=0&k=20&c=yHwyLzDy2gO4XFeoPN50HdPuESxQIrsHTCP0T4UJQnw=" alt="mumbai" height="150px" width="180px" />
                        <span className="mum">The Sound of Mumbai IN</span>
                        <div className='spotify'></div>
                        <span className="bio5">The songs that defins,unite and distinguish Mumbai IN,..</span>
                    </div>
                    <div className="kolkata">
                        <img src="https://assets.telegraphindia.com/telegraph/05648444-7dc7-4c71-9a25-656e98a6a0a0.jpg" alt="lolkata" height="150px" width="180px" />
                        <span className="kol">The Sound of Kolkata IN</span>
                        <div className='spotify'></div>
                        <span className="bio6">The songs that defins,unite and distinguish Kolkata IN,..</span>
                    </div>
                    <div className="delhi">
                        <img src="https://media.istockphoto.com/id/530741074/photo/red-fort-lal-qila-with-indian-flag-delhi-india.jpg?s=612x612&w=0&k=20&c=7BTI-dgQNPPTq2yARrwIBf2yIqO4PUPX1EJY5ITIyoM=" alt="delhi" height="150px" width="180px" />
                        <span className="del">The Sound of Delhi IN</span>
                        <div className='spotify'></div>
                        <span className="bio7">The songs that defins,unite and distinguish Delhi IN,..</span>
                    </div>
                    <div className="bengaluru">
                        <img src="https://www.holidify.com/images/cmsuploads/compressed/40883092904_ce0af9bfee_b_20190521101002.jpg" alt="bengaluru" height="150px" width="180px" />
                        <span className="ben">The Sound of Bengaluru IN</span>
                        <div className='spotify'></div>
                        <span className="bio8">The songs that defins,unite and distinguish Bengaluru IN,..</span>
                    </div>
                </div>
                <div className="info">
                    <div className="lis">
                        <ul type="none" >
                            <li className='big'>Company</li>
                            <li>About</li>
                            <li>Jobs</li>
                            <li>For the Record</li>
                        </ul>
                        <ul type="none">
                            <li className='big'>Communities</li>
                            <li>For Artists</li>
                            <li>Developers</li>
                            <li>Advertising</li>
                            <li>Investors</li>
                            <li>Vendors</li>
                            <li>Spotify for Work</li>
                        </ul>
                        <ul type="none">
                            <li className='big'>Useful links</li>
                            <li>Support</li>
                            <li>Free Mobile App</li>
                        </ul>
                    </div>
                    <div className="logos">
                      <a href="#">  <i className='fa-brands fa-instagram'></i>  </a>
                      <a href="#">  <i className='fa-brands fa-twitter'></i>    </a>
                      <a href="#">  <i className='fa-brands fa-facebook'></i>   </a>
                    </div>
                </div>
                <hr />
                <div className="end">
                    <i className="fa-regular fa-copyright"></i>2023 Spotify AB
                </div>
            </div>
        )
    }
}