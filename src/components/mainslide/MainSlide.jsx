import React, { Component } from 'react';
import './MainSlide.css';
import { Jumbotron, Button } from 'react-bootstrap';




class MainSlide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teezer : "העבודה הכי שווה לתחילת שנת הלימודים",
            salery : "שכר 35 שקלים לשעה בבית הספר ליד הבית",
            requirements : "דרישות: זמינות לעבוד בימי ראשון - חמישי מ-8:00-13:00",
            actionButton: "לפרטים נוספים והרשמה" 
        };
      }
    render() {
        return (
            <div className="aboutTheJob">

                <Jumbotron className="aboutTheJob">
                    <h3>{this.state.teezer}</h3>
                    <h3> {this.state.salery}</h3>
                    <p>
                        לקראת שנת הלימודים הקרבה חברת "לוקר אמבין" מגייסת סוכני שטח לעבודה בבתי ספר. אם אתם מעל גיל 18, לפני גיוס, חיילים משוחררים, סטודנטים, זו המשרה המושלמת בשבילכם!
                         בגדול התפקיד הוא 
                         לתת מענה לתלמידים שרכשו או מעוניינים בלוקר, השירות מתבצע בדר"כ בזמן ההפסקות, כך שמדובר בעבודה קלילה ונעימה.
    
                    </p>
                    <p>
                        <Button variant="warning"> {this.state.actionButton}</Button>
                    </p>

                    <h3> {this.state.requirements}</h3>

                </Jumbotron>

            </div>
        );
    }
}

export default MainSlide