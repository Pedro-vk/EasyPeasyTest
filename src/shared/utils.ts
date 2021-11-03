export const cleanMassariTimeSeries = (data: any) => {
  const {columns} = data.parameters
  return data.values
    .map((row: number[]) => {
      const clean: any = {}
      columns
        .forEach((col: string, i: number) => clean[col] = row[i])
      return clean
    })
}



export const toM = (n: number) => (n / (10 ** 6)).toFixed(1)

export const formatNumber = (n: number, decimals?: number) =>
  new Intl.NumberFormat('en-US', {minimumFractionDigits: decimals})
    .format(n)

export const toMF = (n: number, decimals?: number) => formatNumber(+toM(n), decimals)

const numeric = 'numeric' as const
const dateFormatOptions = {
  year: numeric, month: numeric, day: numeric,
  hour: numeric, minute: numeric,
  hour12: false,
}
export const toD = (date: number | string) => new Intl.DateTimeFormat('en-UK', dateFormatOptions).format(new Date(date))
