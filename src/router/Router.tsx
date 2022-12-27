import React, { memo } from 'react';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';

import { Login } from '../components/pages/Login';
import { UserManagement } from '../components/pages/UserManagement';
import { PagePathUserManagement } from '../router/PagePaths';
import { PagePathSetting } from '../router/PagePaths';
import { Setting } from '../components/pages/Setting';
import { HeaderLayout } from '../components/templates/HeaderLayout';
import { LoginUserProvider } from '../providers/LoginUserProvider';


export const MainRouter = memo(() => {
    return (
        <BrowserRouter basename='/user/'>
          <LoginUserProvider>
          <Routes>
              <Route path='/' element={<Login/>} />
              <Route path={PagePathUserManagement} element={<><HeaderLayout><UserManagement/></HeaderLayout></>} />
              <Route path={PagePathSetting} element={<><HeaderLayout><Setting/></HeaderLayout></>} />
          </Routes>
          </LoginUserProvider>
        </BrowserRouter>
    )
});