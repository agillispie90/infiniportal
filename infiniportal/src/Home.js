import React from 'react'
import accessbg from './images/computertable.jpg'
import manageimg from './images/manage.jpg'
import scheduleimg from './images/schedule.jpg'
import logo from './logos/colorlogotp.png'


export default function Home(){

const [heading, setHeader] = React.useState("Heading is here!")
function toggle(){
   setHeader('You Clicked Here!')
}


return (
    <>
    <div className="main">
        <div className="contain">
            <div className="standalone">
                <img src={logo} alt="InfiniPortal logo"/>
            </div>
        </div>
        <div className="header" onClick={toggle}>
            <h1 className="mainHead">{heading} <strong>PLACEHOLDER</strong></h1>
        </div>
        <div className="mainP">
            <div className="pcard hover cardHeight">
                <img className="picHeight" src={accessbg} alt=""/>
                <h3>Access from anywhere</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sint laudantium recusandae aut
                    numquam dolore, totam, eaque possimus vero amet doloremque aliquid corporis nemo nisi.</p>
            </div>
            <div className='pcard hover'>
                <img src={manageimg} alt=""/>
                <h3>Manage Your Team</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sint laudantium recusandae aut
                    numquam dolore, totam, eaque possimus vero amet doloremque aliquid corporis nemo nisi.</p>
            </div>
            <div className="pcard hover cardHeight">
                <img className="picHeight" src={scheduleimg} alt=""/>
                <h3>Scheduling made EASY</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sint laudantium recusandae aut
                    numquam
                    dolore, totam, eaque possimus vero amet doloremque aliquid corporis nemo nisi.</p>
            </div>
        </div>
    </div>
    <div className="call">
        <button className="cta">See what InfiniPortal can do for your buisness</button>
    </div>
    <div className="schedule">
        <div className="leftSchedule">
            <h1>Schedule Your Team With Ease</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi debitis quibusdam numquam commodi quis quos
                reiciendis sint culpa, iusto voluptates explicabo tempora nulla blanditiis rem.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt inventore repellat velit, optio natus
                quibusdam laborum dolore libero possimus modi non similique beatae aliquam accusantium. Nesciunt, iste?
                Ducimus cupiditate ipsum, itaque voluptatem numquam, laboriosam qui dignissimos commodi totam sunt
                incidunt consequatur. Voluptatem molestias voluptate, fugiat autem vero mollitia ipsa! Fugit?</p>
        </div>
    </div>
    </>
)
}