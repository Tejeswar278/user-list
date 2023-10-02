import React from 'react'

export default function TableRow({type,value}) {
  return (
    <tr>
        <td className="flex justify-end text-slate-400 pe-3 text-xl">
            {type}
        </td>
        <td className="text-slate-400 text-xl">:</td>
        <td className="text-xl ps-3 font-medium text-slate-600">
            {value}
        </td>
    </tr>
  )
}
