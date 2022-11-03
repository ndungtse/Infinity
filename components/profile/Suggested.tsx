/* eslint-disable react-hooks/exhaustive-deps */

import { BiUserPlus } from 'react-icons/bi'
import AuthElement from '../utils/AuthElement'

type Props = {
  user: any
}

const Suggested = ({ user }: Props) => {
  return (
    <div className="mt-4 flex w-full items-center justify-between px-3">
      <div className="flex items-center w-9/12">
        <img
          className="h-[40px] w-[40px] rounded-full object-cover"
          src={user.picture}
          alt=""
        />
        <div className="ml-2 flex flex-col w-4/5">
          <p className="truncate">{user.name}</p>
          <p className="truncate">{user.email}</p>
        </div>
      </div>
      <AuthElement
        el={'p'}
        content={<BiUserPlus size={24} />}
        props={{ className: 'text-violet-700 ml-5 cursor-pointer flex' }}
      >
        <BiUserPlus size={24} />
      </AuthElement>
    </div>
  )
}

export default Suggested
