import React from "react";
import Button from "../../../shared/Button";
import discordLink from "../../../utils/constants/discordLink";
import FormWrapper from "../../../widgets/FormWrapper";
import styles from './HomePage.module.scss'

const HomePage = () => {
    return (
        <FormWrapper formTitleText={'Terraforge'}>

            <article className={styles.HomePage__news}>

                <div className={styles.HomePage__newsTitleWrapper}>

                    <h2 className={styles.HomePage__newsTitle}>
                        Начало чего-то большего
                    </h2>

                    <p className={styles.HomePage__P}>
                        Наконец настал долгожданный момент запуска открытой беты нашего проекта!
                    </p>

                </div>

                <div>
                    <ul className={styles.HomePage__ul}>
                        <li className={styles.HomePage__li}>
                            <h3 className={styles.HomePage__newsSubTitle}>О проекте:</h3>
                            <p className={styles.HomePage__P}>
                                Наш проект создан для тех, кто ищет не просто сервер, а по-настоящему атмосферное место для игры.
                                Мы стремимся сделать игровой процесс увлекательным и ненавязчивым — без превращения его в очередную рутину.
                                Здесь можно расслабиться, наслаждаясь исследованиями, выживанием и живым общением.
                                Мы уделяем особое внимание развитию кооперации и социализации, чтобы каждый игрок смог найти здесь свою роль.
                                В будущем мы планируем добавлять новые модификации и тщательно продумывать обновления для обогащения геймплея.
                            </p>
                        </li>
                        <li className={styles.HomePage__li}>
                            <h3 className={styles.HomePage__newsSubTitle}>Геймплей:</h3>
                            <p className={styles.HomePage__P}>
                                Основой нашего проекта является модификация TerraFirmaCraft — она превращает привычный Minecraft в настоящий вызов, добавляя реализм и множество новых механик.
                                Это глубоко проработанный мир, где добыча ресурсов, строительство и выживание требуют продуманного подхода и умения адаптироваться.
                                Каждый игровой элемент заставит вас переосмыслить привычные стратегии и выйти за рамки классического игрового опыта.
                            </p>
                            <p className={styles.HomePage__P}>
                                Но TerraFirmaCraft — это лишь начало!
                                В будущем мы планируем добавить моды, которые придадут индустриальный оттенок и позволят игрокам строить сложные системы и активно взаимодействовать друг с другом.
                                Мы рассматриваем такие модификации, как Immersive Engineering и Factions, которые добавят ещё больше глубины и возможностей для совместного развития.
                                Если у вас есть идеи по улучшению нашего проекта, мы всегда открыты к предложениям — заходите в наш <a className={styles.HomePage__link} href={discordLink} target="_blank" rel="noopener noreferrer">Discord</a> и оставляйте свои мысли в специальной теме!
                            </p>

                        </li>
                    </ul>

                </div>

            </article>

            <Button ButtonText={"Скачать"} />

        </FormWrapper>
    )
}

export default HomePage;