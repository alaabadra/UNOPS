import React , { Fragment} from 'react';
import Navbar from '../Navbar';
import './style.css';
import MainSidebar from '../MainSidebar';
const HomeTrash = () =>{
   <Fragment>
       <MainSidebar selected="tickets"/>
        <Navbar className="nav-homeTrash">
            <h1 className="trash-header">Trash Email</h1>
        </Navbar>
     
   </Fragment> 
}
export default HomeTrash;