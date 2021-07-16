import React from 'react';

function Layout({children}) {
    return (
        <>
        <div className="layout">
            {children}
        </div>

        <style jsx>{`
            .layout {
                display:flex;
                justify-content:center;
                align-items:center;
                flex-wrap:wrap;
            }
      `}</style>
      </>
    );
}

export default Layout;
