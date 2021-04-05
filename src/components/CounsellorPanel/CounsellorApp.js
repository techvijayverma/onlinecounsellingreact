import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import FetchReport from './FetchReport';
import ListStudents from './ListStudents';
import MenuCounsellor from './MenuCounsellor';

const CounsellorApp=()=>{
    return(<div>

                <Router>
                    <div>
                            <MenuCounsellor/>
                    </div>
                        <Route path="/listallstudents" component={ListStudents} />
                        <Route path="/fetchreport" component={FetchReport} exact/>
                                                  
                </Router>

    </div>);
}

export default CounsellorApp;