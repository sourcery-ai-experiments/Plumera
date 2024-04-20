import api from '@/config/api'
import { useQuery } from '@tanstack/react-query'
import { toast } from 'sonner'

const fetchSirene = async () => {
  const { data } = await api.get(`business-data/public-business-data`)

  return data
}

const useSirene = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['sirene'],
    queryFn: fetchSirene,
  })

  if (isError) {
    toast.error('An error occurred while fetching sirene data')
  }

  return { data, isLoading, isError, error }
}

export { useSirene }
