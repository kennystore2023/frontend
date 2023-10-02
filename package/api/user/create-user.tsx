import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { apiFetch } from '..'
import { ApiFetchProps, ApiFetchResponse } from '../../model'
import { CreateUserRequest } from '../../model/user/create-user'
import { auth } from '@/config/firebase'

export const createUser = async (createUser: CreateUserRequest): Promise<ApiFetchResponse<any>> => {
  let user = null
  try {
    user = await createUserWithEmailAndPassword(auth, createUser.email, createUser.password)
  } catch (error) {
    user = await signInWithEmailAndPassword(auth, createUser.email, createUser.password)
  }
  createUser.userUid = user.user.uid
  console.log(createUser)
  try {
    const apiFetchProps: ApiFetchProps = {
      url: 'http://localhost:8080/api/user/createUser',
      method: 'POST',
      body: createUser
    }
    const res = await apiFetch(apiFetchProps)
    return {
      data: null
    }
  } catch (error: any) {
    console.log(error)
    return {
      error: 'Cannot register account'
    }
  }
}
