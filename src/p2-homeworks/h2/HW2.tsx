import React, {useState} from 'react'
import Affairs from './Affairs'
import {v1} from "uuid";


export type AffairPriorityType = 'low' | 'middle' | 'high'
export type AffairType = {
    id: string
    name: string
    priority: string
}
export type FilterType = 'all' | AffairPriorityType


const defaultAffairs: AffairType[] = [
    {id: v1(), name: 'React', priority: 'high'},
    {id: v1(), name: 'anime', priority: 'low'},
    {id: v1(), name: 'games', priority: 'low'},
    {id: v1(), name: 'work', priority: 'high'},
    {id: v1(), name: 'html & css', priority: 'middle'},
]

export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => {
    if (filter === 'all') return affairs
    else if (filter === 'low') return affairs.filter(a => a.priority === 'low')
    else if (filter === 'middle') return affairs.filter(a => a.priority === 'middle')
    else if (filter === 'high') return affairs.filter(a => a.priority === 'high')
    else return affairs
}
export const deleteAffair = (affairs: AffairType[], id: string): AffairType[] => { // need to fix any
    return affairs.filter(a => a.id !== id)
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (id: string) => setAffairs(deleteAffair(affairs, id)) // need to fix any

    return (
        <div>
            <hr/>
            --- Homeworks 2 ---
            <hr/>
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />
            <hr/>
        </div>
    )
}

export default HW2
