export class MassariService {
  private static instance: MassariService

  private baseUrl = 'https://data.messari.io/api/v1'

  static getInstance() {
    return this.instance ??= new MassariService()
  }

  private constructor() {}

  async getMetrics(asset: string) {
    const response = await fetch(this.getMetricsUrl(asset))
    return await response.json()
  }

  private getMetricsUrl(asset: string) {
    return `${this.baseUrl}/assets/${asset}/metrics`
  }
}

export const massariService = MassariService.getInstance()
