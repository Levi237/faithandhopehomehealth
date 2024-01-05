import React, { Component } from 'react';
import { Routes, Route }    from 'react-router-dom';
import * as routes          from './constants/routes';

import Header               from './Header';
import Footer               from './Footer';

import HomePage             from './pages/home';
import ContactPage          from './pages/contact';
import EmailConfirmPage     from './pages/contact/EmailConfirmPage';
import ServicesPage             from './pages/services';

export default class App extends Component {

  scrollToTop = () => {
    //=> add to onClick / NavLink to scroll to top of window while changing components viewed
    const top = document.getElementById('scroll-to-bar');
    top.scrollIntoView({behavior: 'smooth'});
  };

  render (){
    return (
      <>
      <section id="scroll-to-bar" style={{  width: '100vw',
  height: '0'}}></section>
        <Header />

        <Routes>
          <Route path={routes.HOME} exact element={<>
            <HomePage scrollToTop={this.scrollToTop} />
          </>}></Route>
          <Route path={routes.MAIL} exact element={<>
            <ContactPage />
          </>}></Route>
          <Route path={routes.SERV} exact element={<>
            <ServicesPage />
          </>}></Route>
          <Route path={routes.DONE} exact element={<>
            <EmailConfirmPage />
          </>}></Route>
        </Routes>
        
        <Footer />
      </>
    );
  };
};