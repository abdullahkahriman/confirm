import React, { useState } from 'react';

const MainContext = React.createContext();

const MainProvider = (props) => {
    const [isDialog, setDialog] = useState(false)

    return (
        <MainContext.Provider
            value={{
                isDialog,
                setDialog
            }}
        >
            {props.children}
        </MainContext.Provider>
    )
}

export { MainProvider, MainContext };