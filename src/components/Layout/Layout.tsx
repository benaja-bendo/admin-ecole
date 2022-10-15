import * as React from 'react';
import Header from "./Header";
import SlideBar from "./SlideBar";


const Layout = ({children}: { children: any }) => {
    return (<div className="min-h-screen w-full flex flex-col">
        <Header/>
        <div className="h-full flex-1 grid grid-cols-12">
            <div className="col-span-12 md:col-span-3 xl:col-span-2 shadow">
                <SlideBar/>
            </div>
            <div className="col-span-12 md:col-span-9 xl:col-span-10 px-6 mt-8">
                {children}
            </div>
        </div>
    </div>);
}

export default Layout;