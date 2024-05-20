'use client'
import { Amplify } from 'aws-amplify'
import { get, post } from "aws-amplify/api"
import awsExport from '../aws-exports'
import { useState } from 'react'

Amplify.configure(awsExport)

const myAPI = 'apie5822cac'
const path = '/customer'
interface Response {
  name: string
  type: string
}
export default function Home() {

  const [id, setId] = useState('')
  const [res, setRes] = useState<any>(null)

  const getFunction = async () => {
    try {
      const getOption = get({ apiName: myAPI, path: path + '/' + id, })
      const result = await getOption.response
      const a = await result.body.json()
      setRes(a)

    } catch (error) {
      console.log(error)
    }

  }
  return (
    <>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} style={{ border: '1px solid black' }} />
      <button onClick={getFunction} style={{ marginLeft: '20px', border: '1px solid black', borderRadius: '10px', padding: '10px' }}>Click to get response</button>
      <div>{JSON.stringify(res)}</div>
    </>

  );
}
