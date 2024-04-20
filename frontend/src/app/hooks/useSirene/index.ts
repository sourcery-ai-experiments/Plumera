import api from '@/config/api'
import { useQuery } from '@tanstack/react-query'

const fetchSirene = async () => {
  const { data } = await api.get(`business-data/public-business-data`)

  return data
}

const useSirene = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['sirene'],
    queryFn: () => fetchSirene(),
  })

  return { data, isLoading, isError, error }
}

const fetchSireneById = async (id: string) => {
  const { data } = await api.get(`business-data/public-business-data/${id}`)

  return data
}

export { useSirene }
