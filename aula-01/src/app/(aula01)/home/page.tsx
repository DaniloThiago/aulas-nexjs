import { GithubProfile } from '@/app/component/aula01/github-profile'
import { LongWaitComponent } from '@/app/component/aula01/long-wait-component'
import Spinner from '@/app/component/aula01/spinner'
import { Suspense } from 'react'

export default function Home() {
  return (
    <div>
      <h1>Home!</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus neque
        aliquid eos cum quasi quod nam maxime assumenda eligendi quam cumque
        quae, saepe odio. Repellendus voluptates placeat temporibus nihil
        assumenda!
      </p>

      <Suspense fallback={<Spinner text="LongWaitComponent"></Spinner>}>
        <LongWaitComponent></LongWaitComponent>
      </Suspense>
      <Suspense fallback={<Spinner text="GithubProfile"></Spinner>}>
        <GithubProfile></GithubProfile>
      </Suspense>
    </div>
  )
}
