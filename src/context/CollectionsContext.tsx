import { createContext, useState } from "react";
import { Materials } from "../components/molecules/new-entrie/NewEntries";

export interface Collections {
  client: string;
  id: number;
  date: string;
  status: string;
  materials: Materials[];
  total: number;
}

interface Context {
  savedCollections: Collections[];
  setSavedCollections: React.Dispatch<React.SetStateAction<Collections[]>>;
}
interface Props {
  children: React.ReactElement;
}

export const CollectionsContext = createContext<Context>({
  savedCollections: [],
  setSavedCollections: () => {},
});

export const CollectionsProvider = ({ children }: Props) => {
  const [savedCollections, setSavedCollections] = useState<Collections[]>([]);

  return (
    <CollectionsContext.Provider
      value={{ savedCollections, setSavedCollections }}
    >
      {children}
    </CollectionsContext.Provider>
  );
};
