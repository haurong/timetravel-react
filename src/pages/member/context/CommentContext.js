import React, { useState, useContext, createContext } from 'react';

const CommentContext = createContext(null);

export const CommentContextProvider = ({ children }) => {
  const [commentData, setCommentData] = useState([]);
  return (
    <CommentContext.Provider
      value={{
        commentData,
        setCommentData,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};

export const useCommentContext = () => useContext(CommentContext);
