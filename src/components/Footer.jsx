import React, { Component } from 'react';

class Footer extends Component {
    year = () => {
        const date = new Date();
        return date.getFullYear();
      };
    
    render() {
        return (
            <div>
                <div className='orange_footer'>
                    <div className="orange_text">
                        <h1>САМЫЕ УМНЫЕ ПРОЕКТЫ</h1>
                        <h2>РЕАЛИЗУЕМ САМЫЕ СМЕЛЫЕ РЕШЕНИЯ В МИРЕ!</h2>
                    </div>
                    <button>ВАШ ЗАПРОС</button>
                </div>
                <div className='grey_footer'>
                    <p>© {this.year()} IT-компания</p>
                    <p>Разработано лучшей студей</p>
                </div>
            </div>
        );
    }
}

export default Footer