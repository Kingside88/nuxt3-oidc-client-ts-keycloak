// /services/application-service.ts
import { environment } from './environment'

export default class ApplicationService {
  constructor(private readonly acessToken: string) {}

  getDefaultHeader() {
    return { Authorization: `Bearer ${this.acessToken}` }
  }

  async getPosts() {
    const headers = this.getDefaultHeader()

    const result = await $fetch(`${environment.applicationUrl}/v1/Posts/List`, {
      method: 'get',
      headers,
      query: { page: 1, size: 10 },
    })

    return result
  }
}