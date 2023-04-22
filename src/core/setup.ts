export class LotrSDK {
  constructor(private apiKey: string, private version: string) {
    this.apiKey = apiKey;
    this.version = version;
  }
  getApiKey(): string {
    return this.apiKey;
  }
  getApiVersion(): string {
    return this.version;
  }
}
