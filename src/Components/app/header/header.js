import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header>
        <div className="top_wrap">
            <div>
                <div className="logo"><img src={require("./logo.png")} alt="logo"/></div>
                <div className="description">
                    Строительство - отрасль материального производства, в которой создаются основные фонды производственного и непроизводственного назначения: готовые к эксплуатации здания.
                </div>
            </div>
        </div>
    </header>
  );
}

export default Header;
