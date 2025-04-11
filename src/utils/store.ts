import Store from 'electron-store';

interface StoreData {
  settings: {
    theme: string;
    language: string;
    notifications: boolean;
    autoUpdate: boolean;
  };
  userData: {
    name: string;
    email: string;
    preferences: {
      fontSize: number;
      sidebarCollapsed: boolean;
    };
  };
  appState: {
    lastWindowSize: {
      width: number;
      height: number;
    };
    lastWindowPosition: {
      x: number;
      y: number;
    };
  };
  recentFiles: string[];
  // Add more data types as needed
}

const store = new Store<StoreData>({
  defaults: {
    settings: {
      theme: 'light',
      language: 'en',
      notifications: true,
      autoUpdate: true
    },
    userData: {
      name: '',
      email: '',
      preferences: {
        fontSize: 14,
        sidebarCollapsed: false
      }
    },
    appState: {
      lastWindowSize: {
        width: 1024,
        height: 768
      },
      lastWindowPosition: {
        x: 0,
        y: 0
      }
    },
    recentFiles: []
  },
  // Add encryption for sensitive data
  encryptionKey: 'your-encryption-key', // In production, use a secure key
  // Add schema validation
  schema: {
    settings: {
      type: 'object',
      properties: {
        theme: { type: 'string', enum: ['light', 'dark'] },
        language: { type: 'string', enum: ['en', 'es', 'fr'] },
        notifications: { type: 'boolean' },
        autoUpdate: { type: 'boolean' }
      }
    },
    userData: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        email: { type: 'string', format: 'email' },
        preferences: {
          type: 'object',
          properties: {
            fontSize: { type: 'number', minimum: 8, maximum: 32 },
            sidebarCollapsed: { type: 'boolean' }
          }
        }
      }
    },
    appState: {
      type: 'object',
      properties: {
        lastWindowSize: {
          type: 'object',
          properties: {
            width: { type: 'number', minimum: 100 },
            height: { type: 'number', minimum: 100 }
          }
        },
        lastWindowPosition: {
          type: 'object',
          properties: {
            x: { type: 'number' },
            y: { type: 'number' }
          }
        }
      }
    },
    recentFiles: {
      type: 'array',
      items: { type: 'string' },
      maxItems: 10
    }
  }
});

// Watch for changes
store.onDidChange('settings', (newValue, oldValue) => {
  console.log('Settings changed:', { newValue, oldValue });
});

// Main store instance
export const getStore = () => store;

// Settings operations
export const getSettings = () => store.get('settings');
export const setSettings = (settings: StoreData['settings']) => store.set('settings', settings);
export const updateSetting = (key: keyof StoreData['settings'], value: any) => {
  const settings = getSettings();
  store.set('settings', { ...settings, [key]: value });
};

// User data operations
export const getUserData = () => store.get('userData');
export const setUserData = (userData: StoreData['userData']) => store.set('userData', userData);
export const updateUserPreference = (key: keyof StoreData['userData']['preferences'], value: any) => {
  const userData = getUserData();
  store.set('userData', {
    ...userData,
    preferences: { ...userData.preferences, [key]: value }
  });
};

// App state operations
export const getAppState = () => store.get('appState');
export const setAppState = (appState: StoreData['appState']) => store.set('appState', appState);
export const saveWindowState = (size: { width: number; height: number }, position: { x: number; y: number }) => {
  store.set('appState', {
    lastWindowSize: size,
    lastWindowPosition: position
  });
};

// Recent files operations
export const getRecentFiles = () => store.get('recentFiles');
export const addRecentFile = (filePath: string) => {
  const recentFiles = getRecentFiles();
  const updatedFiles = [filePath, ...recentFiles.filter(f => f !== filePath)].slice(0, 10);
  store.set('recentFiles', updatedFiles);
};
export const clearRecentFiles = () => store.set('recentFiles', []);

// Clear all data
export const clearStore = () => store.clear();

// Backup and restore
export const backupStore = () => {
  return store.store;
};

export const restoreStore = (backup: any) => {
  store.store = backup;
}; 