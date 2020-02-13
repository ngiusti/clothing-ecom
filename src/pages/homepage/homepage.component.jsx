import React from 'react';

import Directory from '../../component/directory/directory.component';

import { HomePageContainer } from './homepage.styles';

const HomePage = () => (
     <HomePageContainer className="homepage">
         <Directory/>
     </HomePageContainer>
)

export default HomePage;