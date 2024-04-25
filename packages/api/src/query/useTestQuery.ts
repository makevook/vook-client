import { useQuery } from '@tanstack/react-query'

const useTestQuery = () => {
  return useQuery({
    queryKey: ['test'],
    queryFn: async () => {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
      const data = (await res.json()) as object
      return data
    },
  })
}

export default useTestQuery
