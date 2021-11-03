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
