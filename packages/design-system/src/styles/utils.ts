export const createTokenScheme = <
  T extends { [key: string]: { [key: string]: string } },
>(
  tokens: T,
) => {
  const result = structuredClone(tokens)

  Object.keys(tokens).forEach((key) => {
    Object.keys(tokens[key] as { [key: string]: string }).forEach((prop) => {
      const field = result[key] as { [key: string]: string }
      field[prop] = `${key}-${prop}`
    })
  })

  return result
}
