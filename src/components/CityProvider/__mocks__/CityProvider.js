import React from 'react';
import fakeCity from 'tests/fakeCity';

export const CityContext = React.createContext();

const CityProvider = ({ city = fakeCity, children }) => {
  const currentUser = { uid: 'fakeUid' };
  const fakeFirebase = {
    firestore: jest.fn(() => ({
      collection: jest.fn(() => ({
        doc: jest.fn(() => ({
          set: jest.fn(() => Promise.resolve('data')),
        })),
      })),
    })),
    options: jest.fn({
      projectId: jest.fn(12345),
    }),
    auth: jest.fn().mockReturnThis(),
    signInWithCustomToken: jest.fn().mockResolvedValue(),
  };

  return (
    <CityContext.Provider
      value={{ ...city, firebase: fakeFirebase, currentUser }}
    >
      {children}
    </CityContext.Provider>
  );
};

export default CityProvider;
