import {
  AccountEndpoint,
  BuildEndpoint,
  CharactersEndpoint,
  ItemsEndpoint,
  TokenEndpoint,
} from './endpoints';

export class Client {
  private apiKey = '';
  private schema = 'latest';

  public isAuthenticated(): boolean {
    return this.apiKey !== '';
  }

  public async Authenticate(apiKey: string): Promise<boolean> {
    const _oldKey = this.apiKey;
    this.apiKey = apiKey;
    try {
      await this.Token.Get();
      return true;
    } catch {
      this.apiKey = _oldKey;
      return false;
    }
  }

  //TODO: Добавить проверку на "корректность" схемы из апи
  public setSchema(schema: string): boolean {
    this.schema = schema;
    return true;
  }

  public getCurrentSchema(): string {
    return this.schema;
  }

  public getToken(): string {
    if (this.isAuthenticated()) {
      return this.apiKey;
    } else {
      throw new Error('No token supplied');
    }
  }

  constructor(schema = 'latest') {
    this.Account = new AccountEndpoint(this);
    this.Build = new BuildEndpoint(this);
    this.Characters = new CharactersEndpoint(this);
    this.Items = new ItemsEndpoint(this);
    this.Token = new TokenEndpoint(this);

    if (schema != 'latest') {
      this.setSchema(schema);
    }
  }

  public Account: AccountEndpoint;
  public Build: BuildEndpoint;
  public Characters: CharactersEndpoint;
  public Items: ItemsEndpoint;
  public Token: TokenEndpoint;
}
