import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.css';

const sidebarNavItems = [
    {
        display: 'Strona główna',
        icon: <i className='bx stgl'></i>,
        to: '/glowna',
        section: 'glowna'
    },
    {
        display: 'Wykładowcy',
        icon: <i className='bx w'></i>,
        to: '/wykladowcy',
        section: 'wykladowcy'
    },
    {
        display: 'Mapa PŁ',
        icon: <i className='bx mpl'></i>,
        to: '/mapapl',
        section: 'mapapl'
    },
    {
        display: 'Plan Zajęć',
        icon: <i className='bx pz'></i>,
        to: '/planzajec',
        section: 'planzajec'
    },
    {
        display: 'Przedmioty',
        icon: <i className='bx p'></i>,
        to: '/przedmioty',
        section: 'przedmioty'
    },
    {
        display: 'Terminarz',
        icon: <i className='bx t'></i>,
        to: '/terminarz',
        section: 'terminarz'
    },
    {
        display: 'Udogodnienia',
        icon: <i className='bx u'></i>,
        to: '/udogodnienia',
        section: 'udogodnienia'
    },
];

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return <div className='sidebar'>
        <div className="sidebar__logo">
            PŁ-ortal
        </div>
        <div ref={sidebarRef} className="sidebar__menu">
            <div
                ref={indicatorRef}
                className="sidebar__menu__indicator"
                style={{
                    transform: `translateX(-50%) translateY(${activeIndex * stepHeight*1.4}px)`
                }}
            ></div>
            {
                sidebarNavItems.map((item, index) => (
                    <Link to={item.to} key={index}>
                        <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                            <div className="sidebar__menu__item__icon">
                                {item.icon}
                            </div>
                            <div className="sidebar__menu__item__text">
                                {item.display}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>;
};

export default Sidebar;