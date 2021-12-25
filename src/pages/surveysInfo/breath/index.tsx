import React from 'react'

import { InfoScreen, TextInfoScreen, ThreeScreen, FourScreen, LinkToSurveysScreen, MyContainer } from '../../../components'

import { CaruselSurvey, TitleScreen } from '../../../constructor'

const Breath = () => {
    const data1 = [
        {
            type: 'text',
            elem: [
                'Развитие рака легких зависит от многих факторов. Основной причиной развития рака легких по данным ВОЗ считается воспалительные заболевания (часто рецидивирующие хронические бронхиты, ХОБЛ, бронхоэктатическая болезнь и др.). 	Роль курения, безусловно, является самым распространенным фактором риска развития рака легких. По данным международного агентства по изучению рака, 70-90% рака связано с курением и курение повышает риск развития рака в 10 раз.',
                'В Республике Саха (Якутия) в 2019 году было выявлено 401 случаев рака легких. При этом на I-II стадии процесса было диагностировано 24,4% заболеваний, на III стадии  - 35,8% и на IV стадии  - 39,4%. В течение первого года с момента установления диагноза умерло 55,9% пациентов.'
            ],
        },
        {
            title: 'Симптомы ',
            type: 'text',
            elem: [
                'В большинстве случаев рак легкого развивается бессимптомно, поэтому на ранних стадиях диагностируется благодаря ежегодному медицинскому осмотру или при обследовании пациента по другому поводу.',
                'В некоторых случаях все же болезнь проявляет свои симптомы, но эти симптомы характерны и для многих заболеваний.'
            ],
        },
        {
            title: 'Основные симптомы:',
            type: 'column',
            elem: [
                'Одышка и затруднение вдоха;',
                'Хронический постоянный сухой кашель;',
                'Осиплость голоса;',
                'Постоянная слабость;',
                'Неконтролируемая масса тела;'
            ],
        },
        {
            title: 'При больших стадиях рака легких симптомы уже более специфичные:',
            type: 'column',
            elem: [
                'Исчезновение голоса или осиплый голос длительное время;',
                'Изнуряющий кашель с трудноотходимой мокротой (иногда с примесью крови и гноя);',
                'Боль в грудной клетке;',
                'Постоянная слабость;',
                'Появление плотных надключичных лимфатических узлов;'
            ],
        },
    ]

    const data2 = [
        {
            align: 'center',
            text: [
                'В рамках реализации Национального проекта «Здравоохранение» разработан универсальный анкетный скрининг для выявления групп риска с учетом региональной специфики.',
            ],
        },
    ]

    const data3 = [
        {
            title: 'ПОКАЗАНИЯ ДЛЯ ПРОВЕДЕНИЯ НДКТ',
            text: [
                'Проведение процедуры необходимо тем пациентам, у которых ожидаемая польза от исследования должна быть больше, чем потенциальный вред. Люди не имеющие симптомы заболевания , имеющие малые симптомы заболевания бронхолегочной системы старше 50 лет, а также курильщики чей стаж курения больше 20 лет (выкуривающие 1 пачку в течение 20 лет или по 2 пачки в течение 10 лет).',
            ],
        },
        {
            title: 'ПРОТИВОПОКАЗАНИЯ ДЛЯ ПРОВЕДЕНИЯ НДКТ:',
            text: [
                'Перенесенное заболевание (пневмония, ОРВИ, COVID-19) менее 1 месяца Пациенты, имеющие в анамнезе злокачественные новообразования Пациентам у кого прошло меньше 1 года с момента проведения КТ Пациентам с повышенной температурой 37,5*С Пожилые (ослабленные пациенты)',
            ],
        },
    ]

    return (
        <div>
            <InfoScreen
                title="Рак легких"
                description='Рак легкого – один из самых распространенных и агрессивных видов рака. Более 65% выявляется на поздних стадиях (III,IV), когда опухолевый процесс распространяется на соседние органы или появляются метастазы. Отмечается и высокий уровень летальности.'
                img="Group"
                infoImg="Frame7"
            />
            <TextInfoScreen data={data1} />
            <ThreeScreen data={data2} showInfoText={false} />
            <FourScreen data={data3} />
            <LinkToSurveysScreen link="" />
            <MyContainer
                wrapper={false}
                minHeight={600}
            >
                <TitleScreen variant="h4" width={900} description='“Регистрация - Тестирование - Осмотр”'>Берегите здоровье!</TitleScreen>
                <CaruselSurvey />
            </MyContainer>
        </div>
    )
}

export default Breath