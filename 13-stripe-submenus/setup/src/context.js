import React, { useState, useContext } from "react";

import sublinks from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [location, setLocation] = useState({})
  const [page, setPage] = useState({ page: "", links: [] });

	const openSidebar = () => {
		setIsSidebarOpen(true);
	};
	const closeSidebar = () => {
		setIsSidebarOpen(false);
    };
    
    // console.log(sublinks)

    const openSubmenu = (text, coordinates) => {

        const page = sublinks.find((link) => {
            return link.page === text; 
            // return console.log(link.page === text); 
        });
		setPage(page);
        //  console.log(page)
       
        setLocation(coordinates);
		setIsSubmenuOpen(true);
	};
	const closeSubmenu = () => {
		setIsSubmenuOpen(false);
	};

	return (
		<AppContext.Provider
			value={{
				isSidebarOpen,
				openSidebar,
				closeSidebar,
				isSubmenuOpen,
				openSubmenu,
                closeSubmenu,
                location,
                page
			}}>
			{children}
		</AppContext.Provider>
	);
};


export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
