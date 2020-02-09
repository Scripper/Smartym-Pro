import React from 'react';
import './Menu.scss';
import Logo from '../Logo/Logo';

const Menu = () => {


    const data = [
        {
            name: 'users list',
            svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" x="0" y="0" viewBox="0 0 24 24"><path fill="none" d="M0 0H24V24H0z"></path><path d="M20 6V5h-2v1h-2V4a1 1 0 00-1-1H9a1 1 0 00-1 1v2H6V5H4v1c-1.103 0-2 .897-2 2v12c0 1.104.897 2 2 2h16c1.103 0 2-.896 2-2V8c0-1.103-.897-2-2-2zM10 5h4v1h-4V5zm5 7h-3.5a.5.5 0 000 1h1c1.378 0 2.5 1.122 2.5 2.5 0 1.208-.86 2.218-2 2.45V19h-2v-1H9v-2h3.5a.5.5 0 000-1h-1A2.503 2.503 0 019 12.5c0-1.207.86-2.217 2-2.449V9h2v1h2v2z"></path></svg>,
            active: true,
        },
        {
            name: 'daily',
            svg: <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enableBackground="new 0 0 24 24"> <g id="Frames-24px"> <rect fill="none" width="24" height="24"/> </g> <g id="Outline"> <g> <path d="M18.475,16.4c-0.189-0.251-0.484-0.399-0.798-0.399H6.328c-0.314,0-0.609,0.148-0.798,0.399 c-0.189,0.25-0.25,0.574-0.163,0.876l1.429,5c0.123,0.429,0.515,0.725,0.961,0.725h8.491c0.447,0,0.839-0.296,0.961-0.725l1.429-5 C18.724,16.975,18.664,16.65,18.475,16.4z"/> <path d="M9.18,8.984c0.02,0.057,0.031,0.117,0.054,0.172c-0.723,0.301-1.231,1.013-1.231,1.845 c0,1.105,0.896,2,2,2c0.366,0,0.705-0.105,1-0.277v2.277h2v-2.277c0.295,0.172,0.634,0.277,1,0.277c1.104,0,2-0.895,2-2 c0-0.832-0.509-1.544-1.231-1.845c0.022-0.055,0.033-0.115,0.054-0.172c1.266,0.104,2.178-0.882,2.178-1.983c0-1.104-0.896-2-2-2 c-0.378,0-0.728,0.112-1.029,0.293c0.184-1.28-0.805-2.293-1.971-2.293c-1.159,0-2.155,1.006-1.971,2.293 C9.73,5.113,9.38,5.002,9.002,5.002c-1.104,0-2,0.896-2,2C7.002,8.101,7.911,9.089,9.18,8.984z M12.002,6.002c1.104,0,2,0.896,2,2 c0,1.105-0.896,2-2,2s-2-0.895-2-2C10.002,6.898,10.897,6.002,12.002,6.002z"/> </g> </g> </svg>,
        },
        {
            name: 'course',
            svg: <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enableBackground="new 0 0 24 24" > <g id="Frames-24px"> <rect fill="none" width="24" height="24"/> </g> <g id="Solid"> <g> <path d="M11,5.32L9.625,4.219C9.447,4.077,9.227,4,9,4H3C2.448,4,2,4.448,2,5v13c0,0.552,0.448,1,1,1h5.649 L11,20.85V5.32z"/> <path d="M20,4h-6c-0.227,0-0.447,0.077-0.625,0.219L12,5.32V20.85L14.351,19H20c0.552,0,1-0.448,1-1V5 C21,4.448,20.552,4,20,4z"/> </g> </g> </svg>,
        },
        {
            name: 'leveling-system',
            svg: <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enableBackground="new 0 0 24 24" > <g id="Frames-24px"> <rect fill="none" width="24" height="24"/> </g> <g id="Solid"> <path d="M19,3H5C3.897,3,3,3.897,3,5v14c0,1.103,0.897,2,2,2h14c1.103,0,2-0.897,2-2V5C21,3.897,20.103,3,19,3z M15.293,12.707L13,10.414V17h-2v-6.586l-2.293,2.292l-1.414-1.414L12,6.586l4.707,4.707L15.293,12.707z"/> </g> </svg>,
        },
        {
            name: 'live-streams',
            svg: <svg xmlns="http://www.w3.org/2000/svg" version="1.1" baseProfile="full" width="24" height="24" viewBox="0 0 24.00 24.00" enableBackground="new 0 0 24.00 24.00"> <path fillOpacity="1" strokeWidth="0.2" strokeLinejoin="round" d="M 17.9994,8.99805L 15.9994,8.99805L 15.9994,6.99805L 17.9994,6.99805M 17.9994,12.998L 15.9994,12.998L 15.9994,10.998L 17.9994,10.998M 17.9994,16.998L 15.9994,16.998L 15.9994,14.998L 17.9994,14.998M 7.99939,8.99805L 5.99939,8.99805L 5.99939,6.99805L 7.99939,6.99805M 7.99939,12.998L 5.99939,12.998L 5.99939,10.998L 7.99939,10.998M 7.99939,16.998L 5.99939,16.998L 5.99939,14.998L 7.99939,14.998M 17.9994,2.99805L 17.9994,4.99805L 15.9994,4.99805L 15.9994,2.99805L 7.99939,2.99805L 7.99939,4.99805L 5.99939,4.99805L 5.99939,2.99805L 3.99939,2.99805L 3.99939,20.998L 5.99939,20.998L 5.99939,18.998L 7.99939,18.998L 7.99939,20.998L 15.9994,20.998L 15.9994,18.998L 17.9994,18.998L 17.9994,20.998L 19.9994,20.998L 19.9994,2.99805L 17.9994,2.99805 Z "/> </svg>,
        },
        {
            name: 'advanced',
            svg: <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enableBackground="new 0 0 24 24"> <g id="Frames-24px"> <rect fill="none" width="24" height="24"/> </g> <g id="Solid"> <path d="M20,6V5h-2v1h-2V4c0-0.552-0.448-1-1-1H9C8.448,3,8,3.448,8,4v2H6V5H4v1C2.897,6,2,6.897,2,8v12 c0,1.104,0.897,2,2,2h16c1.103,0,2-0.896,2-2V8C22,6.897,21.103,6,20,6z M10,5h4v1h-4V5z M15,12h-3.5c-0.276,0-0.5,0.225-0.5,0.5 c0,0.276,0.224,0.5,0.5,0.5h1c1.378,0,2.5,1.122,2.5,2.5c0,1.208-0.86,2.218-2,2.45V19h-2v-1H9v-2h3.5c0.276,0,0.5-0.224,0.5-0.5 c0-0.275-0.224-0.5-0.5-0.5h-1C10.121,15,9,13.878,9,12.5c0-1.207,0.86-2.217,2-2.449V9h2v1h2V12z"/> </g> </svg>,
        },
        {
            name: 'video analytics',
            svg: <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24.001px" viewBox="0 0 24 24.001" enableBackground="new 0 0 24 24.001"> <g id="Frames-24px"> <rect fill="none" width="24" height="24.001"/> </g> <g id="Outline"> <g> <path d="M18.001,11.417l-3.917-3.917l-4,5L7.001,9.417l-1.586,1.585H2.001v9c0,1.103,0.897,2,2,2h16 c1.103,0,2-0.897,2-2v-11h-1.586L18.001,11.417z M7.001,20.002h-2v-3h2V20.002z M11.001,20.002h-2v-5h2V20.002z M15.002,20.002h-2 v-3h2V20.002z M19.002,20.002h-2v-5h2V20.002z"/> <path d="M20.001,2.002h-16c-1.103,0-2,0.897-2,2v5h2.586l2.414-2.414l2.917,2.917l4-5l4.083,4.083l1.586-1.586 h2.414v-3C22.001,2.899,21.104,2.002,20.001,2.002z"/> </g> </g> </svg>,
        },

    ];

    const movieItems = data.map((item, index) => {
            if(item.active) {
                return (
                    <li key={index} className='active'>
                        <a href="#">
                            {item.svg}
                            <span>{item.name}</span>
                        </a>
                    </li>
                )
            } else {
                return (
                    <li key={index}>
                        <a href="#">
                            {item.svg}
                            <span>{item.name}</span>
                        </a>
                    </li>
                )
            }
    });

    return(
        <div className="left-menu">
            <div className="left-menu__logo">
                <Logo/>
            </div>
            <nav>
                <ul>
                    { movieItems }
                </ul>
            </nav>
            
        </div>
    )
}

export default Menu;