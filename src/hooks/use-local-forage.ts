import localforage from 'localforage';

export interface ILocalStoreOptions {
  storeName: string;
  type: 'get' | 'set' | 'delete';
  itemName: string;
  itemValue?: any;
}

export const useLocalForage = async (storeOptions: ILocalStoreOptions) => {
  // console.log('useLocalForage');
  let error: any = null;
  let returnValue: string | null = null;

  const store = localforage.createInstance({
    name: storeOptions.storeName,
  });

  // console.log('storeCreated');

  if (storeOptions?.type === 'delete') {
    store.removeItem('user', () => console.log('User Key Deleted'));
  } else if (storeOptions.type === 'set' && storeOptions?.itemValue) {
    // console.log('Set Value');
    if (typeof storeOptions?.itemValue === 'object') {
      const value = JSON.stringify(storeOptions?.itemValue);
      store.setItem(storeOptions.itemName, value, (err: any) => {
        if (err) {
          error = err;
        }
      });
    } else {
      store.setItem(
        storeOptions.itemName,
        storeOptions.itemValue,
        (err: any) => {
          if (err) {
            error = err;
          }
        }
      );
    }
  } else if (storeOptions.type === 'get' && storeOptions?.itemName) {
    // console.log('Get Value');
    returnValue = await store.getItem(storeOptions.itemName, (err: any) => {
      if (err) {
        error = err;
      }
    });
  }

  return { error: error as string, value: returnValue as string };
};
