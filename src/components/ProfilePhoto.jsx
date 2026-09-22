import { useState } from 'react'
import { profile } from '../content'

function ProfilePhoto() {
  const [broken, setBroken] = useState(false)

  if (broken) {
    return (
      <div className="hero-avatar hero-avatar-placeholder" aria-hidden="true">
        {profile.initials}
      </div>
    )
  }

  return (
    <img
      className="hero-avatar"
      src="/profile.jpg"
      alt={profile.name}
      style={{ objectPosition: profile.avatarPosition }}
      onError={() => setBroken(true)}
    />
  )
}

export default ProfilePhoto
