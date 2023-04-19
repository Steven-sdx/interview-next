import React, { createContext, useState, ReactNode } from 'react';
import { Case } from './interfaces';

interface CaseContextType {
  cases: Case[];
  addCase: (newCase: Case) => void;
  updateCase: (updatedCase: Case) => void;
}

export const CaseContext = createContext<CaseContextType>({
  cases: [],
  addCase: () => {},
  updateCase: () => {},
});

export function CaseProvider({ children }: { children: ReactNode }) {
  const [cases, setCases] = useState<Case[]>([]);

  const addCase = (newCase: Case) => {
    setCases((prevCases) => [...prevCases, newCase]);
  };

  const updateCase = (updatedCase: Case) => {
    setCases((prevCases) =>
      prevCases.map((caseItem) =>
        caseItem.id === updatedCase.id ? updatedCase : caseItem
      )
    );
  };

  return (
    <CaseContext.Provider value={{ cases, addCase, updateCase }}>
      {children}
    </CaseContext.Provider>
  );
}
