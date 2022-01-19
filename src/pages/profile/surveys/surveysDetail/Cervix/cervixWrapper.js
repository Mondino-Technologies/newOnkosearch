import React, { useEffect, useState } from 'react'
import Cervix from './cervixSurvey'

const CervixWrapper = () => {
    const [id, setId] = useState(1)
    const [date, setDate] = useState(1)

    let arr =
        [
            "Эр киһилиин аан бастаан сылдьыспыт сааскын ый дуу",
            "Хас эр киһилиин сылдьыспыккын суруй дуу",
            "Хаста төрөөбүккүн суруй дуу",
            "Төрүүргэр киэли хапчаҕайа (шейка матки) хайда сылдьыбыттаах дуо?",
            "Папиллома (ВПЧ) утары быһыы ылбытыҥ дуо?",
            "Эр киһилиин сылдьыспытыҥ кэннэ искиттэн убаҕас кэлэр дуо?",
            "Эр киһилиин сылдьыһаргар ыалдьааччы дуо?",
            "Киэли хапчаҕайын (шейка матки) ыарыыларыттан эмтэнэ сылдьыбытыҥ дуо?",
            "Анаалыстаан папиллома вируһа (ВПЧ-инфекция) баар эбит дии сылдьыбыттара дуо?",
            "Гинеколог бырааска бүтэһигин хаһан сылдьыбыккыный?",
            "Бүтэһик 10 хонук иһигэр температуураҥ 37,5 кыраадыстан үрдүктүк тахса сылдьыбыттаах дуо?"
        ];
    // useEffect(() => {
    //     const newId = query.id
    //     const newDate = query.date
    //     setId(newId)
    //     setDate(new Date(newDate).getFullYear())
    // }, [query])
    return (
        <>
            <Cervix arr={arr} />
        </>
    )
}

export default CervixWrapper