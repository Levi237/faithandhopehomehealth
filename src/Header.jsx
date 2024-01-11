import React        from 'react';
import { Link }     from 'react-router-dom';
import Nav          from './Nav';
import NavMenu      from './components/nav/NavMenu';
import * as routes  from './constants/routes';

const Header = () => {
    return(
        <header>
            <section className="header-left">
            <Link style={{display: 'flex'}} to={routes.HOME}>
                <img width="40" height="40" src="faithandhope_logo_outline.png" alt="Faith and Hope Home Health Logo Icon"/>
                <div>
                    <h3>Faith & Hope</h3>
                    <h5>Home Health, Inc.</h5>
                </div>
                </Link>
            </section>
            <section className="header-mid">
                <Nav />
            </section>
            <section className="header-right">
                <h3 className="phone-number">818.290.3768</h3>
                <NavMenu />
            </section>
        </header>
    );
};

export default Header;