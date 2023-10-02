import { apiFetch } from '..'
import { ApiFetchProps, ApiFetchResponse } from '../../model'
import { UpdateUser } from '../../model/user/update-user'

export const updateUser = async (updateUser : UpdateUser, acccessToken: string): Promise<ApiFetchResponse<any>> => {
  try {
    const apiFetchProps: ApiFetchProps = {
      url: 'http://localhost:8080/api/user/updateUser',
      method: 'POST',
      Authorization: acccessToken,
      body: updateUser
    }
    const res = await apiFetch(apiFetchProps)
    return {
      data: null
    }
  } catch (error: any) {
    return {
      error: "Cannot update account"
    }
  }
}