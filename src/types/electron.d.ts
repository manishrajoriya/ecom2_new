/// <reference types="vite/client" />

export interface DataRow {
    id?: number;
    [key: string]: any;
}

export interface ElectronAPI {
    invoke(channel: 'getData', dataType: string): Promise<DataRow[]>;
    invoke(channel: 'importExcelData', args: { filePath: string; dataType: string }): Promise<number[]>;
    invoke(channel: 'deleteData', dataType: string): Promise<void>;
}

declare global {
    interface Window {
        electron: ElectronAPI;
    }
} 