import React ,{Component} from 'react';

export default class C1 extends Component{
    render(){
        return (
            <div className='c1-main'>
              <div className="home">
               <i  className="fa-solid fa-house" /><a href="#"> Home</a>
               </div>
               <div className="search">
                <i className='fa-solid fa-magnifying-glass' ></i> <a href="#">Search</a>
               </div>
            </div>
        )
    }
}