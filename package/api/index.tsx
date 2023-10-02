import { ApiFetchProps } from '../model'

export const apiFetch = async (props: ApiFetchProps) => {
  const res = await fetch(props.url, {
    method: props.method,
    headers: {
      'Content-Type': 'Application/json',
      ...props.headers
    },
    body: JSON.stringify(props.body),
    cache: 'no-store',
    ...props.options
  })
  if (!res.ok) {
    throw new Error("Api fail")
  }
  return await res.json()
}
