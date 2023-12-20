import { ReactNode } from 'react';

export interface ILoadingContext {
    isLoading: boolean;
    setIsLoading: (loading: boolean) => void;
}

export interface LoadingProviderProps {
    children: ReactNode;
}
