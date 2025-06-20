import { createContext } from "react";

export const FileShareContext = createContext();

const FileShareProvider = ({ children }) => {
  return (
    <FileShareContext.Provider value={{}}>{children}</FileShareContext.Provider>
  );
};

export default FileShareProvider;
