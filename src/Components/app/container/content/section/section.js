import React from 'react';
import './section.css';

const Section = () => {
  return (
    <section>
        <h2>Новости</h2>
        <article>
            <img src={require("./news.png")} alt="news"/>
            <p>Строительство и ремонт, выбор подрядчика</p>
        </article>
        <article>
            <img src={require("./news.png")} alt="news"/>
            <p>Строительство и ремонт, выбор подрядчика</p>
        </article>
        <article>
            <img src={require("./news.png")} alt="news"/>
            <p>Строительство и ремонт, выбор подрядчика</p>
        </article>
        <aside>
            <p>Здесь Ваша реклама</p>
        </aside>
    </section>
  );
}

export default Section;
