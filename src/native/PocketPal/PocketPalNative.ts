import {NativeModules, Platform} from 'react-native';

const {PocketPalModule} = NativeModules;

export interface PocketPalInstallStatus {
  installed: boolean;
  prodInstalled: boolean;
  e2eInstalled: boolean;
}

export interface PocketPalModelFile {
  name: string;
  uri: string;
  path: string;
  size: number;
}

class PocketPalNative {
  async isPocketPalInstalled(): Promise<PocketPalInstallStatus> {
    if (Platform.OS !== 'android') {
      return {installed: false, prodInstalled: false, e2eInstalled: false};
    }
    if (!PocketPalModule) {
      console.warn('PocketPalModule not available');
      return {installed: false, prodInstalled: false, e2eInstalled: false};
    }
    try {
      return await PocketPalModule.isPocketPalInstalled();
    } catch (e) {
      console.error('Failed to check PocketPal installation:', e);
      return {installed: false, prodInstalled: false, e2eInstalled: false};
    }
  }

  async pickPocketPalModelsDirectory(): Promise<PocketPalModelFile[]> {
    if (Platform.OS !== 'android') {
      throw new Error('PocketPal integration is only available on Android');
    }
    if (!PocketPalModule) {
      throw new Error('PocketPalModule not available');
    }
    try {
      return await PocketPalModule.pickPocketPalModelsDirectory();
    } catch (e) {
      console.error('Failed to pick PocketPal models directory:', e);
      throw e;
    }
  }

  async scanPocketPalModelsDirectory(
    treeUri: string,
  ): Promise<PocketPalModelFile[]> {
    if (Platform.OS !== 'android') {
      throw new Error('PocketPal integration is only available on Android');
    }
    if (!PocketPalModule) {
      throw new Error('PocketPalModule not available');
    }
    try {
      return await PocketPalModule.scanPocketPalModelsDirectory(treeUri);
    } catch (e) {
      console.error('Failed to scan PocketPal models directory:', e);
      throw e;
    }
  }
}

export const pocketPalNative = new PocketPalNative();
