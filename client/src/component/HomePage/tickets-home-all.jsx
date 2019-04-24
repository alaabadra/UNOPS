

const HomeAll = ({status}) =>{
    <Fragment>
        <MainSidebar selected="tickets"/>
        <Navbar className="nav-homeall" >
            <div className="nav-homeall__status-div">
                <div className={`nav-homeall__status-div__pending-div ${status === 'pending' ? 'selcted':''}`}>
                <h4 className='status'>Pending</h4>
                <div className="circle">10</div>
                </div>
                <div className={`nav-homeall__status-div__closed-div ${status === 'closed' ? 'selcted':''}`}>
                <h4 className='status'>closed</h4>
                <div className="circle">10</div>
                </div>
            </div>
        </Navbar>
    </Fragment>   
}
export default HomeAll;