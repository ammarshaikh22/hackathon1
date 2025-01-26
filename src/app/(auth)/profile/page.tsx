import StyleComp from '@/components/StyleComp'
import UserProfile from '@/components/UserProfile'
import React from 'react'

const Profile = () => {
  return (
    <section className='relative'>
      <StyleComp heading='Profile' />
      <UserProfile />
    </section>
  )
}

export default Profile