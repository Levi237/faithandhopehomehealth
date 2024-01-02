import React, { Component } from 'react';
import { Routes, Route }    from 'react-router-dom';
import * as routes          from './constants/routes';

import Header               from './Header';
import Footer               from './Footer';

import HomePage             from './pages/home';
import ContactPage          from './pages/contact';
import EmailConfirmPage     from './pages/contact/EmailConfirmPage';

export default class App extends Component {
  render (){
    return (
      <>
        <Header />

        <Routes>
          <Route path={routes.HOME} exact element={<>
            <HomePage />
          </>}></Route>
          <Route path={routes.MAIL} exact element={<>
            <ContactPage />
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