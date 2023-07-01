import React, { FC } from 'react'

interface EmptyStateProps {
    title?: string;
    subtitle?: string;
}

const EmptyState: FC<EmptyStateProps> = ({ title, subtitle }) => {

    return (
        <div className='flex flex-col items-center my-4 px-2 text-center md:gap-y-6 gap-y-2 font-medium'>
            <h3 className='xl:text-3xl lg:text-2xl text-xl  font-semibold'>{title}</h3>
            <p className='text-primaryColor md:text-base text-sm'>{subtitle}</p>
        </div>
    )
}

export default EmptyState