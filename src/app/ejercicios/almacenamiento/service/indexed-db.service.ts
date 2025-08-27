import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndexedDBService {
  private async abrirDB(dbName: string, storeName: string): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(dbName);

      request.onupgradeneeded = (event: any) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains(storeName)) {
          db.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true });
        }
      };

      request.onsuccess = () => {
        const db = request.result;

        // Si el store no existe, necesitamos actualizar la versión
        if (!db.objectStoreNames.contains(storeName)) {
          db.close();
          const nuevaVersion = db.version + 1;
          const requestUpgrade = indexedDB.open(dbName, nuevaVersion);

          requestUpgrade.onupgradeneeded = (e: any) => {
            const dbUpgrade = e.target.result;
            if (!dbUpgrade.objectStoreNames.contains(storeName)) {
              dbUpgrade.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true });
            }
          };

          requestUpgrade.onsuccess = () => resolve(requestUpgrade.result);
          requestUpgrade.onerror = () => reject(requestUpgrade.error);
        } else {
          resolve(db);
        }
      };

      request.onerror = () => reject(request.error);
    });
  }


   async setIndexedDB(dbName: string, storeName: string, value: any, key?: number) {
  return new Promise<void>((resolve, reject) => {
    const request = indexedDB.open(dbName);

    request.onupgradeneeded = (event: any) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(storeName)) {
        db.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true });
      }
    };

    request.onsuccess = (event: any) => {
      const db = event.target.result;
      const tx = db.transaction(storeName, 'readwrite');
      const store = tx.objectStore(storeName);

      if (key !== undefined) {
        // Editar: usar id existente
        store.put({ id: key, ...value });
      } else {
        // Nuevo: no pasar id, IndexedDB lo generará
        store.put(value);
      }

      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    };

    request.onerror = () => reject(request.error);
  });
}


  async getAllIndexedDB(dbName: string, storeName: string) {
    return new Promise<{ id: number, nombre: string, valor: string }[]>((resolve, reject) => {
      const request = indexedDB.open(dbName);

      request.onsuccess = (event: any) => {
        const db = event.target.result;

        if (!db.objectStoreNames.contains(storeName)) {
          resolve([]);
          return;
        }

        const tx = db.transaction(storeName, 'readonly');
        const store = tx.objectStore(storeName);
        const getAll = store.getAll();

        getAll.onsuccess = () => {
          resolve(getAll.result as { id: number, nombre: string, valor: string }[]);
        };
        getAll.onerror = () => reject(getAll.error);
      };

      request.onerror = () => reject(request.error);
    });
  }

   async deleteIndexedDB(dbName: string, storeName: string, id: number): Promise<void> {
    const db = await this.abrirDB(dbName, storeName);
    return new Promise((resolve, reject) => {
      const tx = db.transaction(storeName, 'readwrite');
      const store = tx.objectStore(storeName);
      const request = store.delete(id);

      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }
}
