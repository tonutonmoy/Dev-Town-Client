import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
const [sortPrice,setSortPrice]= useState({});
const [range, setRange] = useState(0)
    const authInfo={
        setSortPrice,
        sortPrice,
        range,
        setRange
    }
    return (
        <AuthContext.Provider value={authInfo}>

        {children}

    </AuthContext.Provider>
    );
};

export default AuthProvider;