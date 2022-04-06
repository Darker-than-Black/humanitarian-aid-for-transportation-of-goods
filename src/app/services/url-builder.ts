import { isDevMode } from '@angular/core';

export class UrlBuilder {
  private readonly host: string = '';
  private query: string = '';

  constructor(host: string = '') {
    this.host = host;

    this.option()
      .format()
      .task()
      .devMode();
  }

  get url(): string {
    if (!this.host) return this.host;

    return `${this.host}${this.query}`;
  }

  private task(): UrlBuilder {
    this.addQueryParam('task', 'plugin.userAjax');
    return this;
  }

  private option(): UrlBuilder {
    this.addQueryParam('option', 'com_fabrik');
    return this;
  }

  private format(): UrlBuilder {
    this.addQueryParam('format', 'raw');
    return this;
  }

  private devMode(): UrlBuilder {
    if (isDevMode()) {
      this.addQueryParam('dev', 1);
    }
    return this;
  }

  private addQueryParam(key: string, value: string | number): void {
    this.query = `${this.query}&${key}=${value}`;
  }
}
