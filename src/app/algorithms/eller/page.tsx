'use client'

import {useRouter} from "next/navigation";
import {useEffect} from "react";

export default function DepthFirstSearchAlgorithmPage() {
    const {push} = useRouter();

    useEffect(() => {
        push('/algorithms/eller/details');
    });

    return <></>;
}