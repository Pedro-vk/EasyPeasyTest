const formatter = new Intl.DateTimeFormat('en-UK')

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

  async getTimeseries(asset: string, period: 'week' | 'month') {
    const response = await fetch(this.getTimeseriesUrl(asset, period))
    return await response.json()
  }

  private getMetricsUrl(asset: string) {
    return `${this.baseUrl}/assets/${asset}/metrics`
  }

  private getTimeseriesUrl(asset: string, period: 'week' | 'month') {
    const format = (d: any) => formatter.format(d).split('/').reverse().join('-')
    let start, end, interval
    if (period === 'month') {
      start = format(Date.now() - (1000 * 60 * 60 * 24 * 30))
      end = format(Date.now())
      interval = '1d'
    } else {
      start = format(Date.now() - (1000 * 60 * 60 * 24 * 7))
      end = format(Date.now())
      interval = '1h'
    }
    return `${this.baseUrl}/assets/${asset}/metrics/price/time-series?start=${start}&end=${end}&interval=${interval}`
  }
}

export const massariService = MassariService.getInstance()
