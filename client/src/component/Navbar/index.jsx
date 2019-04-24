import React from 'react';
import './style.css';
export default ({children, className,logoutClass,secNavDisplay,markDisplay,status,statusDisplay}) => (
    <nav className="nav">
    <div className="nav__wrapped-bars">
        <div className={className}>
            <div className="nav__wrapped-bars__logout-and-status">
                <p className="p-nav">Logout</p>
                <h4 className={`nav__opened-ticket ${statusDisplay}`}>{status}</h4>
            </div>

        </div>
        <div className="sec-nav">
            <p className={`second-nav__select-all ${secNavDisplay}`}>select all</p>
            <div className={`second-nav__mark-as ${secondNavDisplay} ${markDisplay}`}>
          <p>Mark as &#9662;</p>
          <div className="second-nav__mark-as-options">
            <p className="mark-pending">Pending</p>
            <p className="mark-resolved">Resolved</p>
          </div>
        </div>
        </div>
    </div>
      
    </nav>
)