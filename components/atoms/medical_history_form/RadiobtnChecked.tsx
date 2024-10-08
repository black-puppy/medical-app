'use client'

import React from 'react'

interface RadiobtnCheckedProps {
    content: string,
    className: string,
    name: string
    onChange: () => void;
  }

const RadiobtnChecked: React.FC<RadiobtnCheckedProps> = ({content, className, name, onChange}) => {
    return (
        <label className={`inline-flex -webkit-flex items-center ${className}`} onChange={onChange}>
            <input
                type="radio"
                name={name}
                value=""
                className="custom-radio text-custom-purple text-[16px] !w-[15px] !h-[15px] bg-custom-purple"
                defaultChecked
            />
            <span className="ml-2 text-gray-700">{content}</span>
        </label>
    )
}

export default RadiobtnChecked 