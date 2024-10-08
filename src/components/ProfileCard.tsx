import React from 'react'

const ProfileCard = () => {
    return (
        <div className='rounded-lg bg-card-background px-4 py-2 '>


            <div className="flex items-center gap-2">
                <img src='favicon.ico' width={90} height={90} />
                <h3 className='text-3xl font-mono font-extrabold text-card-text '>Ashil Poojary</h3>
            </div>
            <p className='text-card-text font-light text-ellipsis mt-1'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ipsa, dicta saepe veritatis autem porro ipsum assumenda, optio facere laboriosam minus distinctio eligendi perferendis omnis illum temporibus velit asperiores tempora.
            </p>
        </div>
    )
}

export default ProfileCard