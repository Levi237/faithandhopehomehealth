import React    from 'react';
import Nav      from './Nav';

const Header = () => {
    return(
        <header>
            <section className="header-left">
                Logo
            </section>
            <section className="header-mid">
                <Nav />
            </section>
            <section className="header-right">
                818.290.3768
            </section>
        </header>
    );
};

export default Header;