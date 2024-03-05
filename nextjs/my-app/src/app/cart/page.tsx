import Link from 'next/link'
import ProdTable from '@/app/cart/components/ProdTable'

async function getData() {
  const res = await fetch(
    'https://e6llfr6ejrxqnfnabes4bxij2a.apigateway.ap-tokyo-1.oci.customer-oci.com/v1/drinks',
    {
      cache: 'no-store'
    },
  )
  
  if (!res.ok) {
      throw new Error('Failed to fetch data')
  }
  return res.json()
}

async function order() {
  
  const res = await fetch(
    'https://e6llfr6ejrxqnfnabes4bxij2a.apigateway.ap-tokyo-1.oci.customer-oci.com/v1/drinks',
    {
      cache: 'no-store'
    },
  )
  
  if (!res.ok) {
      throw new Error('Failed to fetch data')
  }
  return res.json()
}

export interface Drink {
  name: string,
  imgPath: string,
}

export default async function Page() {

  const data = await getData()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <ProdTable drinks={data}/>
      </div>
      <div>
        <Link href="/order">
          注文
        </Link>
      </div>
    </main>
  );
}

