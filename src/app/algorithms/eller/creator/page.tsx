'use client'

import {EllerAlgorithm} from "@/app/algorithms/eller/creator/_services/eller-algorithm";
import {MazeCreatorComponent} from "@/app/algorithms/_common/components/creator/maze-creator";


export default function EllerAlgorithmCreatorPage() {
    return <MazeCreatorComponent mazeAlgorithm={new EllerAlgorithm()}/>
}
