import * as React from 'react';
import Header from "./Header";
import SlideBar from "./SlideBar";


const Layout = ({children}: { children: any }) => {
    return (<div className="min-h-screen w-full flex flex-col">
        <Header/>
        <div className="h-full flex-1 flex gap-1">
            <SlideBar/>
            <div className="w-full h-full flex-1 px-6 mt-8">
                {children}
            </div>
        </div>
    </div>);
}

export default Layout;