import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState } from 'react';
export const LoadingContext = createContext(undefined);
export const LoadingProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    return (
    // TODO
    _jsx(LoadingContext.Provider, { value: { isLoading, setIsLoading }, children: children }));
};
//# sourceMappingURL=loadingContext.js.map