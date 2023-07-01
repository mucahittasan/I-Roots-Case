import React, { FC } from 'react'

interface EmptyStateProps {
    title?: string;
    subtitle?: string;
}

const EmptyState: FC<EmptyStateProps> = ({ title, subtitle }) => {

    return (
        <div className='flex flex-col items-center my-4 px-2'>
            <h3 className='text-3xl font-semibold'>{title}</h3>
            <p className='text-primaryColor'>{subtitle}</p>
        </div>
    )
}

export default EmptyState