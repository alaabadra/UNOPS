import React , { Fragment} from 'react';
import Navbar from '../Navbar';
import './style.css';
import MainSidebar from '../MainSidebar';
const HomeDraft = () =>{
   <Fragment>
       <MainSidebar selected="tickets"/>
        <Navbar className="nav-homeDraft">
            <h1 className="draft-header">Trash Email</h1>
        </Navbar>
     
   </Fragment> 
}
export default HomeDraft;