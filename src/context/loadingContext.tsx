import React, { createContext, useState } from 'react';
import { ILoadingContext, LoadingProviderProps } from '../context/config';

export const LoadingContext = createContext<ILoadingContext | undefined>(undefined);

export const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        // TODO
        <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </LoadingContext.Provider>
    );
};
