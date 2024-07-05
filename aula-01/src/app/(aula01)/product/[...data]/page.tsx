import { AddToCartButton } from '@/app/component/aula01/add-to-cart-button'
import { TestClientBoundaries } from '@/app/component/aula01/test-client-boundaries'
import React from 'react'

interface IProduct {
  params: {
    data: string[]
  }
}

export default function ProductPage({ params }: IProduct) {
  return (
    <div>
      <h2>Page</h2>
      <pre className="bg-black text-yellow-600 p-2">
        {params.data.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </pre>

      <AddToCartButton>
        <TestClientBoundaries></TestClientBoundaries>
      </AddToCartButton>
    </div>
  )
}
