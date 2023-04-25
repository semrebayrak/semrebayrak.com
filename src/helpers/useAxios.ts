import instance from '../axios'
import { useState } from 'react'
interface Data {
  name: string | undefined
  email: string | undefined
  message: string | undefined
  subject: string | undefined
}
export const useAxios = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)
  const fetch = ({ name, subject, message, email }: Data) => {
    instance
      .post('', { name, subject, message, email })
      .then((res: any) => {
        setSuccess(true)
        setLoading(false)
        setError(false)
      })
      .catch(err => {
        setError(true)
        setLoading(false)
        setSuccess(false)
      })
  }

  return { loading, error, success, fetch }
}
