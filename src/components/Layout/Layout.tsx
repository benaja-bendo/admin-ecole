import * as React from 'react';
import Header from "./Header";
import SlideBar from "./SlideBar";
import useAuth from "../../hooks/useAuth";

const Layout = ({children}: { children: any }) => {
    const {user} = useAuth();
    console.log('user', user);
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