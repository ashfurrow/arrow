import { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'
import { Sans, space } from '@artsy/palette'
import entries from '../data/entriesList.json'
import { Entries } from '../components'

interface TimelineProps {}

const HomePage: NextPage<TimelineProps> = () => {
  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <style jsx global>{`
        // minimal css reset
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        p,
        ul {
          margin: 0.5em 0;
        }
        li {
          margin-left: 1.5em;
        }
      `}</style>
      <Main>
        <Entries entries={entries} />
      </Main>
    </>
  )
}

export default HomePage

const Main = styled.main`
  width: 80vw;
  margin: 0 auto;
`
