import React from 'react'
import Layout from './Layout'
import BackToTop from './BackToTop'

const Footer = () => {
  return (
    <footer className='text-dark w-full border-t-2 border-solid border-dark font-medium text-lg '>
        <Layout className='py-8 flex items-center justify-center'>
            <span>
               {new Date().getFullYear()}&nbsp;&copy; All Rights Reserved. &nbsp;
            </span>
            <BackToTop />
        </Layout>
    </footer>
  )
}

export default Footer