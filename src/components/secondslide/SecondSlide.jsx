import React, { Component } from 'react';
import './SecondSlide.css';
import { Jumbotron } from 'react-bootstrap';




class SecondSlide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            more : "יש אופציה להמשך עבודה בפרוייקטים נוספים לאחר ספטמבר",
            disclaimer : "מדובר על משרה זמנית בערך 28.08 - 14.09 ימים א-ו  אפשר לעבוד גם 3-4 משמרות בוקר",
            requirements : "שיבוץ הבית ספר יהיה באיזור המגורים שלך בהתאם לאיפה שיש לנו לוקרים (כמעט בכל בית ספר) ",
            actionButton: "לפרטים נוספים והרשמה",
        };
      }
    render() {
        return (
            <div className="disclaimer">

                <Jumbotron className="disclaimer">
                    <h3>{this.state.more}</h3>
                    <h4> {this.state.disclaimer}</h4>
                    <h4> {this.state.requirements}</h4>
                 


                </Jumbotron>

            </div>
        );
    }
}

export default SecondSlide