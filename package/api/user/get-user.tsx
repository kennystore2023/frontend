import { apiFetch } from '..'
import { ApiFetchProps, ApiFetchResponse } from '../../model'
import { User } from '../../model/user'

export const getUser = async (acccessToken: string): Promise<ApiFetchResponse<User>> => {
  try {
    const apiFetchProps: ApiFetchProps = {
      url: 'http://localhost:8080/api/user/getUser',
      method: 'GET',
      Authorization: acccessToken
    }
    const user = await apiFetch(apiFetchProps)
    return {
      data: user
    }
  } catch (error: any) {
    return {
      error: "Cannot get account"
    }
  }
}
