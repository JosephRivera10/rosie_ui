import { useState, useCallback } from 'react';

const useCardExpanded = () => {
  const [expandedState, setExpandedState] = useState(null);

  const setExpandedId = useCallback((newId) => {
    setExpandedState(newId);
  }, []);

  return {
    expandedId: expandedState,
    setExpandedId,
  };
};

export default useCardExpanded;
